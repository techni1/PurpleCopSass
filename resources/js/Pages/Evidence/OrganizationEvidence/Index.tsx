import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Section from "./Section";

import Widgets from "../Widgets";
import axios from "axios";

import EvidenceList from "./EvidenceList";

export default function Show({
  success,
  evidences,
  assigneeList,
  frameworks,
}: any) {
  const [selectedFramework, setSelectedFramework] = useState("");
  const [filteredData, setFilteredData] = useState(evidences.data);
  const [statusCounts, setStatusCounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [evidencePercentage, setEvidencePercentage] = useState(0);
  useEffect(() => {
    const fetchFrameworkEvidence = async () => {
      let filtered = evidences.data;
      if (searchTerm) {
        filtered = filtered.filter((item: any) =>
          item.evidence.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (selectedFramework) {
        try {
          const response = await axios.get(
            `/evidence-by-framework/${selectedFramework}`
          );
          let frameworkEvidences = response.data;
          filtered = filtered.filter((evidence: any) =>
            frameworkEvidences.some(
              (frameworkEvidence: any) =>
                frameworkEvidence.id === evidence.evidence.id
            )
          );
        } catch (error) {
          console.error("Error Fetching Evidences by Framework");
        }
      }
      setFilteredData(filtered);
    };

    fetchFrameworkEvidence();
  }, [selectedFramework, searchTerm, evidences.data]);

  useEffect(() => {
    //@ts-ignore
    setStatusCounts(countStatuses(filteredData));
  }, [filteredData]);
  useEffect(() => {
    //@ts-ignore
    const percentage = Math.floor(
      //@ts-ignore
      (statusCounts["published"] / filteredData.length) * 100
    );
    setEvidencePercentage(percentage);
  }, [statusCounts, filteredData]);

  return (
    <React.Fragment>
      <Head title="Evidence" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Evidence" pageTitle="Dashboard" />
          <Row>
            <Col>
              <div className="h-100">
                <Section
                  selectedFramework={selectedFramework}
                  setSelectedFramework={setSelectedFramework}
                  frameworks={frameworks}
                />
              </div>
            </Col>
          </Row>
          {/* <pre>{JSON.stringify(assigneeList, undefined, 2)}</pre> */}
          {success && (
            <Row>
              <Col>
                <Alert
                  variant="secondary"
                  className="text-white bg-secondary alert-label-icon"
                  role="alert"
                  closeVariant="white"
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}

          <Row>
            <Col>
              <Card className="bg-light overflow-hidden shadow-none">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h6 className="mb-0">
                        <b className="text-primary">
                          {evidencePercentage.toFixed(2)}%
                        </b>{" "}
                        Compliant
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-0 ">
                        <span className="text-danger">
                          {
                            //@ts-ignore
                            filteredData.length - statusCounts["published"]
                          }{" "}
                        </span>
                        Non-Compliant
                      </h6>
                    </div>
                  </div>
                </Card.Body>
                <div>
                  <ProgressBar
                    now={evidencePercentage}
                    variant="primary"
                    className="bg-primary-subtle rounded-0"
                  />
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="py-4">
            <Widgets
              title={"all"}
              type={"Evidence"}
              value={filteredData.length}
            />
            {statusCounts &&
              Object.entries(statusCounts).map(([status, count], key) => (
                <Widgets key={key} title={status} value={count} />
              ))}
          </Row>
          <Row>{/* <WidgetSample /> */}</Row>
          <EvidenceList listData={filteredData} assigneeList={assigneeList} />
        </Container>
      </div>
    </React.Fragment>
  );
}

function countStatuses(allEvidences: any) {
  const statusCounts = {
    submitted: 0,
    approved: 0,
    published: 0,
    audited: 0,
  };

  allEvidences.forEach((evidence: any) => {
    switch (evidence.status) {
      case "submitted":
        statusCounts.submitted++;
        break;
      case "published":
        statusCounts.published++;
        break;
      case "approved":
        statusCounts.approved++;
        break;
      case "audited":
        statusCounts.audited++;
        break;
      default:
        break;
    }
  });

  return statusCounts;
}

Show.layout = (page: any) => <Layout children={page} />;
