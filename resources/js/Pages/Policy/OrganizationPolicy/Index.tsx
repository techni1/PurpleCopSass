import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Section from "./Section";

import Widgets from "../Widgets";
import axios from "axios";

import PolicyList from "./PolicyList";

export default function Show({
  success,
  policies,
  assigneeList,
  frameworks,
}: any) {
  const [selectedFramework, setSelectedFramework] = useState("");
  const [filteredData, setFilteredData] = useState(policies.data);
  const [statusCounts, setStatusCounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [policyPercentage, setPolicyPercentage] = useState(0);

  useEffect(() => {
    const fetchFrameworkPolicy = async () => {
      let filtered = policies.data;
      if (searchTerm) {
        filtered = filtered.filter((item: any) =>
          item.policy.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (selectedFramework) {
        try {
          const response = await axios.get(
            `/policy-by-framework/${selectedFramework}`
          );
          let frameworkPolicies = response.data;
          filtered = filtered.filter((policy: any) =>
            frameworkPolicies.some(
              (frameworkPolicy: any) => frameworkPolicy.id === policy.policy.id
            )
          );
        } catch (error) {
          console.error("Error Fetching Policies by Framework");
        }
      }
      setFilteredData(filtered);
    };

    fetchFrameworkPolicy();
  }, [selectedFramework, searchTerm, policies.data]);

  useEffect(() => {
    //@ts-ignore
    setStatusCounts(countStatuses(filteredData));
  }, [filteredData]);
  useEffect(() => {
    //@ts-ignore
    const percentage =
      //@ts-ignore
      (statusCounts["published"] / filteredData.length) * 100;
    setPolicyPercentage(percentage);
  }, [statusCounts, filteredData]);

  return (
    <React.Fragment>
      <Head title="Policy" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Policy" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(policies.data.length, undefined, 2)}</pre> */}
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

          <Row>
            <Col>
              <Card className="bg-light overflow-hidden shadow-none">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h6 className="mb-0">
                        <b className="text-primary">
                          {policyPercentage.toFixed(2)}%
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
                    now={policyPercentage}
                    variant="primary"
                    className="bg-primary-subtle rounded-0"
                  />
                </div>
              </Card>
            </Col>
          </Row>
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

          <Row className="py-4">
            <Widgets
              title={"all"}
              type={"Policy"}
              value={filteredData.length}
            />
            {statusCounts &&
              Object.entries(statusCounts).map(([status, count], key) => (
                <Widgets key={key} title={status} value={count} />
              ))}
          </Row>
          <Row>{/* <WidgetSample /> */}</Row>
          <PolicyList listData={filteredData} assigneeList={assigneeList} />
        </Container>
      </div>
    </React.Fragment>
  );
}

function countStatuses(allPolicies: any) {
  const statusCounts = {
    submitted: 0,
    approved: 0,
    published: 0,
    audited: 0,
  };

  allPolicies.forEach((policy: any) => {
    switch (policy.status) {
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
