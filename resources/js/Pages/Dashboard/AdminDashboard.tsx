import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import UpgradeAccountNotise from "./UpgradeAccountNotise";
import UsersByDevice from "./UsersByDevice";
import Widget from "./Widget";
import AudiencesMetrics from "./AudiencesMetrics";
import AudiencesSessions from "./AudiencesSessions";
import LiveUsers from "./LiveUsers";
import TopReferrals from "./TopReferrals";
import TopPages from "./TopPages";
import UserLogs from "./UserLogs";
import SalesForecast from "./SalesForecast";
import Notification from "../Widgets/Notification";
import {
  SimpleDonut,
  SimplePie,
} from "../Charts/ApexCharts/PieCharts/PieCharts";
import { LineChart } from "../Charts/ECharts/ECharts";
import { Stacked } from "../Charts/ApexCharts/BarCharts/BarCharts";
import { StackedAreaChart } from "../Charts/ApexCharts/AreaCharts/AreaCharts";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import axios from "axios";
import CustomPlaceholder from "../../Components/CustomPlaceholder";
import FrameworkCard from "../Framework/Admin/FrameworkCard";
import AuditChart from "./Chart/AuditChart";

export default function AdminDashboard({
  auth,
  fdata,
  correctiveAction,
  userLogs,
  frameworks,
  policies,
  evidences,
  getduePolicy,
  getdueEvidence,
  people,
}: any) {
  const [rightColumn, setRightColumn] = useState<boolean>(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };
  const [isloading, setIsLoading] = useState(false);
  const [evidenceData, setEvidenceData] = useState<any[]>([]);
  const [policyData, setPolicyData] = useState<any[]>([]);
  const [frameworkDataList, setFrameworkDataList] = useState<any[]>([]);
  const Policies = getduePolicy;
  const Evidence = getdueEvidence;
  // General fetch function for both policies and evidence
  const fetchFrameworkData = async (framework: any) => {
    // let policyFiltered = policies.data;
    // let evidenceFiltered = evidences.data;
    setIsLoading(true);
    if (framework && framework.status == 1) {
      try {
        const [policyResponse, evidenceResponse] = await Promise.all([
          axios.get(`/policy-by-framework/${framework.id}`),
          axios.get(`/evidence-by-framework/${framework.id}`),
        ]);
        const policyData = policyResponse.data;
        const evidenceData = evidenceResponse.data;

        // Filter policies and evidences for this framework
        const frameworkPolicyData = policies.data.filter((item: any) =>
          policyData.some((policyItem: any) => policyItem.id === item.policy.id)
        );
        const policyCounts = countStatuses(frameworkPolicyData);
        const frameworkEvidenceData = evidences.data.filter((item: any) =>
          evidenceData.some(
            (evidenceItem: any) => evidenceItem.id === item.evidence.id
          )
        );
        const evidenceCounts = countStatuses(frameworkEvidenceData);

        // Calculate total policies and evidences for the current framework
        const Policy = policyData.length;
        const Evidence = evidenceData.length;

        // Aggregate all status counts (submitted, approved, need_review, audited)
        const Submitted = policyCounts.submitted + evidenceCounts.submitted;
        const Approved = policyCounts.approved + evidenceCounts.approved;
        const needReview =
          policyCounts.need_review + evidenceCounts.need_review;
        const Audited = policyCounts.audited + evidenceCounts.audited;

        // Store the aggregated data for the current framework
        setFrameworkDataList((prev) => [
          ...prev,
          {
            Framework: framework.name,
            Policy,
            Evidence,
            Submitted,
            needReview,
            Audited,
          },
        ]);
        setIsLoading(false);
        // Set the state with the accumulated framework data
        // setFrameworkDataList(updatedFrameworkDataList);
      } catch (error) {
        console.error(`Error Fetching  by Framework`, error);
      }
    }
  };

  useEffect(() => {
    frameworks.forEach((framework: any) => {
      fetchFrameworkData(framework.framework);
    });
  }, [frameworks]);

  useEffect(() => {
    console.log("Policy", policyData);
    console.log("Evidence", evidenceData);
  }, [policyData, evidenceData]);
  0;
  0;

  return (
    <React.Fragment>
      <Head title="Admin Dashboard" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Analytics" pageTitle="Dashboards" />
          {/* <Row>
            <UpgradeAccountNotise auth={auth} />
            </Row>
            */}
          {/* <pre>{JSON.stringify(frameworkDataList, undefined, 2)}</pre> */}
          <Row>
            <Col xxl={12}>
              <Widget facts={fdata} />
            </Col>
          </Row>
          <Row>

            <Col xl={6}>
              <Card
                style={{ border: "1px solid #E6EAEF", borderRadius: "14px" }}
              >
                <Card.Header style={{ borderRadius: "14px 14px 0 0" }}>
                  <h4 className="card-title mb-0">Risk Matrix</h4>
                </Card.Header>
                <Card.Body>
                  <SimpleDonut dataColors='["#800080", "#4169E1", "#ff0000", "--vz-danger", "--vz-info"]' />
                </Card.Body>
              </Card>
            </Col>

            <Col xl={6}>
              <Card
                style={{
                  border: "1px solid #E6EAEF",
                  borderRadius: "14px",
                }}
              >
                <Card.Header style={{ borderRadius: "14px" }}>
                  <h4 className="card-title mb-0">Employee Data</h4>
                </Card.Header>

                <Card.Body>
                  <SimplePie
                    data={people}
                    dataColors='["#4169E1", "#32CD32", "#FF4500", "--vz-danger", "--vz-dark"]'
                  />
                </Card.Body>
              </Card>
            </Col>

          </Row>


          <Col xl={12}>
            <Row>
              <Col xl={6}>
                <Card
                  style={{
                    border: "1px solid #E6EAEF",
                    borderRadius: "14px",

                  }}
                >
                  <Card.Header style={{ borderRadius: "14px 14px 0 0" }}>
                    <h4 className="card-title mb-0">Audit Details</h4>
                  </Card.Header>
                  <Card.Body>
                    {isloading ? (
                      <CustomPlaceholder />
                    ) : (
                      frameworkDataList.length > 0 && (
                        <AuditChart
                          data={frameworkDataList}
                          dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
                        />
                      )
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={6}>
                <Notification />
              </Col>
            </Row>
          </Col>


          <Col xl={12}>

            <Row>

              <Col xl={6}>
                <Card className="card-animate">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="fw-medium text-muted mb-0">
                          This Month Due Policy
                        </p>
                        <h2 className="mt-4 ff-secondary fw-semibold">
                          <span className="counter-value">
                            {getduePolicy.length}
                          </span>
                        </h2>
                      </div>
                      <div>
                        <div className="avatar-sm flex-shrink-0">
                          <i className="ri-book-open-line"></i>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={6}>
                <Card className="card-animate">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="fw-medium text-muted mb-0">
                          This Month Due Evidence
                        </p>
                        <h2 className="mt-4 ff-secondary fw-semibold">
                          <span className="counter-value">
                            {getdueEvidence.length}
                          </span>
                        </h2>
                        <p className="mb-0 text-muted text-truncate "></p>
                      </div>
                      <div>
                        <div className="avatar-sm flex-shrink-0">
                          <i className="ri-file-zip-line"></i>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

              </Col>
            </Row>

          </Col>

          <Row>

            <Col xl={12}>
              <Row>
                <Col xl={6}>
                  <Card>
                    <CardHeader>
                      Policy{" "}
                      <small style={{ color: "#ff0000" }}>Need Attention</small>
                    </CardHeader>
                    <CardBody>
                      {getduePolicy.length > 1 ? (
                        <div
                          style={{
                            height: "250px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <div style={{ overflowY: "scroll", height: "250px" }}>
                            <Table bordered hover>
                              <thead
                                style={{
                                  position: "sticky",
                                  top: 0,
                                  zIndex: 1,
                                  backgroundColor: "#f8f9fa",
                                }}
                              >
                                <tr>
                                  <th>SNo</th>
                                  <th>Name</th>
                                  <th>Due Date</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getduePolicy.map((policy: any, index: any) => (
                                  <tr key={policy.id}>
                                    <td>{index + 1}</td>
                                    <td>{policy.name}</td>
                                    <td>{policy.dueDate}</td>
                                    <td>
                                      <Link href="#" className="link-success">
                                        <Button className="btn-sm btn-success">
                                          {" "}
                                          <i className="ri-arrow-right-line align-middle"></i>
                                        </Button>
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      ) : (
                        <div>No policies found</div>
                      )}
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={6}>
                  <Card>
                    <CardHeader>
                      Evidence{" "}
                      <small style={{ color: "#ff0000" }}>Need Attention</small>
                    </CardHeader>
                    <CardBody>
                      {getdueEvidence.length > 1 ? (
                        <div
                          style={{
                            height: "250px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <div style={{ overflowY: "scroll", height: "250px" }}>
                            <Table bordered hover>
                              <thead
                                style={{
                                  position: "sticky",
                                  top: 0,
                                  zIndex: 1,
                                  backgroundColor: "#f8f9fa",
                                }}
                              >
                                <tr>
                                  <th>SNo</th>
                                  <th>Name</th>
                                  <th>Due Date</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getdueEvidence.map(
                                  (evidence: any, index: any) => (
                                    <tr key={evidence.id}>
                                      <td>{index + 1}</td>
                                      <td>{evidence.name}</td>
                                      <td>{evidence.dueDate}</td>
                                      <td>
                                        <Link href="#" className="link-success">
                                          <Button className="btn-sm btn-success">
                                            {" "}
                                            <i className="ri-arrow-right-line align-middle"></i>
                                          </Button>
                                        </Link>
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      ) : (
                        <div>No Evidence found</div>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>


            {/* <AudiencesMetrics /> */}
            {/* <SalesForecast />
            <AudiencesSessions /> */}
          </Row>
          {/* <AudiencesMetrics /> */}
          {/* <SalesForecast />
            <AudiencesSessions /> */}

          {/* <Row>
            <UsersByDevice framworks={framworks} />
            <TopReferrals correctiveAction={correctiveAction} />
            <TopPages />
          </Row> */}
          <Row>
            <UserLogs userLogs={userLogs} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
// Helper function for counting statuses
function countStatuses(datalist: any[]) {
  const statusCounts = {
    submitted: 0,
    approved: 0,
    need_review: 0,
    audited: 0,
  };

  datalist.forEach((data) => {
    switch (data.status) {
      case "submitted":
        statusCounts.submitted++;
        break;
      case "need_review":
        statusCounts.need_review++;
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

AdminDashboard.layout = (page: any) => <Layout children={page} />;
