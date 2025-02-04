import React, { useEffect, useState } from "react";
import { Card, Col, Offcanvas, Row, Tab, Nav, Button } from "react-bootstrap";

import PolicyList from "../Policy/OrganizationPolicy/PolicyList";
import axios from "axios";
import EvidenceList from "../Evidence/OrganizationEvidence/EvidenceList";
import FindingsList from "../Finding/Component/FindingsList";

const AuditDetail = ({
  policies,
  evidences,
  auditDetails,
  assigneeList,
  findings,
}: any) => {
  // const [selectedFramework, setSelectedFramework] = useState("");
  const selectedFramework = auditDetails.organizationFramework?.framework.id;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPolicy, setFilteredPolicy] = useState(policies.data);
  const [filteredEvidence, setFilteredEvidence] = useState(evidences.data);
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (eventKey: any) => {
    if (!eventKey) return;
    setActiveTab(eventKey);
  };
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
      setFilteredEvidence(filtered);
    };

    fetchFrameworkEvidence();
  }, [selectedFramework, searchTerm, evidences.data]);

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
      setFilteredPolicy(filtered);
    };

    fetchFrameworkPolicy();
  }, [selectedFramework, searchTerm, policies.data]);

  return (
    <React.Fragment>
      <div>
        {auditDetails.organizationFramework ? (
          <>
            <Row>
              <Col lg={5}>
                <Card>
                  <Card.Body>
                    {/* <pre>{JSON.stringify(auditDetails, undefined, 2)}</pre> */}

                    <div className="text-muted fs-6 pb-1">
                      <span>Owner: </span>
                      <span className="text-primary">
                        {auditDetails.organizationFramework.user.name}
                      </span>
                      <div className="text-muted fs-6 pb-1"></div>
                      <span>Audit Date: </span>
                      <span className="text-primary">
                        {auditDetails.audit_date}
                      </span>
                    </div>
                    <div className="fs-6 text-muted bg-light rounded px-1">
                      <div>Observation Period: </div>
                      <div>
                        {auditDetails.start_date} - {auditDetails.end_date}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={7}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col className="text-muted" lg={5} md={5} sm={5}>
                        <div className="" style={{ fontSize: "15px" }}>
                          Audit Team
                        </div>
                        {auditDetails.audit_team ? (
                          <div>{auditDetails.audit_team}</div>
                        ) : (
                          <div className="pt-1 " style={{ fontSize: "13px" }}>
                            <Button variant="link" className="p-0 text-dark">
                              {" "}
                              <i className="ri-user-add-line text-primary " />{" "}
                              No Assignee
                            </Button>
                          </div>
                        )}
                      </Col>
                      <Col
                        lg={7}
                        md={7}
                        sm={7}
                        className="border-start text-muted"
                      >
                        <div>
                          <span>Result: </span>
                          <span>{auditDetails.status}</span>
                        </div>
                        <div className="pt-1">
                          <span>Framework: </span>
                          <span
                            className="bg-primary-subtle text-primary text-nowrap rounded px-2 y-1 border border-primary"
                            style={{ fontSize: "12px" }}
                          >
                            {auditDetails.organizationFramework.framework.name}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-2 text-muted">
                      <Col>
                        <div>Entity</div>
                        <div>
                          <span
                            className="bg-light rounded"
                            style={{ fontSize: "11px" }}
                          >
                            Organization Wide
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
              <Row className="mt-4">
                <Col lg={12}>
                  <Card className="mt-n4 mx-n4">
                    <div className="bg-primary-subtle">
                      <Card.Body className="pb-0 pt-0 px-4">
                        <Nav
                          className="nav-tabs-custom border-bottom-0"
                          role="tablist"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="1">POLICY</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">EVIDENCE</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="3">FINDINGS</Nav.Link>
                          </Nav.Item>
                          {/* <Nav.Item>
                                <Nav.Link eventKey="5">REQUEST</Nav.Link>
                              </Nav.Item> */}
                        </Nav>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="p-0" lg={12}>
                  <Tab.Content className="text-muted">
                    <Tab.Pane eventKey="1">
                      <PolicyList
                        listData={filteredPolicy}
                        assigneeList={assigneeList}
                        auditDetails={auditDetails}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <EvidenceList
                        listData={filteredEvidence}
                        assigneeList={assigneeList}
                        auditDetails={auditDetails}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <FindingsList
                        activeTab={activeTab}
                        auditId={auditDetails.id}
                        listData={findings.data}
                      />
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="5"> REQUEST </Tab.Pane> */}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </>
        ) : (
          <div className="text-danger">
            Organization Framework is not available.
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AuditDetail;
