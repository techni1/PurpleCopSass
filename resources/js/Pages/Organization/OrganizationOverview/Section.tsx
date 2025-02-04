import React, { useEffect, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
//import images

import OverviewTab from "./OverviewTab";
import EntityTab from "./EntityTab";
// import ActivitiesTab from "./ActivitiesTab";
// import TeamTab from "./TeamTab";
import axios from "axios";
import OrganizationTeam from "./OrganizationTeam";

const Section = ({ organization }: any) => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    const fetchEntity = async () => {
      try {
        const response = await axios.get(
          `/entity-organization/${organization.id}`
        );
        setEntities(response.data);
      } catch (error) {
        console.error("Error Fetching Entity", error);
      }
    };
    fetchEntity();
  }, [organization]);
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(organization, undefined, 2)}</pre> */}

      {organization && (
        <Tab.Container defaultActiveKey="1">
          <Row>
            <Col lg={12}>
              <Card className="mt-n4 mx-n4">
                <div className="bg-primary-subtle">
                  <Card.Body className="pb-0 px-4">
                    <Row className="mb-3">
                      <div className="col-md">
                        <Row className="align-items-center g-3">
                          <div className="col-md-auto">
                            <div className="avatar-md">
                              <div className="avatar-title bg-white rounded-circle">
                                <img
                                  src={organization.logo_path}
                                  alt=""
                                  className="avatar-xs"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div>
                              <h4 className="fw-bold">{organization.name}</h4>
                              <div className="hstack gap-3 flex-wrap">
                                <div>
                                  <i className="ri-building-line align-bottom me-1"></i>{" "}
                                  {organization.legal_name}
                                </div>
                                <div className="vr"></div>
                                <div>
                                  Created at :{" "}
                                  <span className="fw-medium">
                                    {organization.created_at}
                                  </span>
                                </div>
                                <div className="vr"></div>
                                {/* <div>
                                Due Date :{" "}
                                <span className="fw-medium">29 Dec, 2021</span>
                              </div> */}
                                <div className="vr"></div>
                                <div className="badge rounded-pill bg-info fs-12">
                                  New
                                </div>
                                {/* <div className="badge rounded-pill bg-danger fs-12">
                                High
                              </div> */}
                              </div>
                            </div>
                          </div>
                        </Row>
                      </div>
                      <div className="col-md-auto">
                        <div className="hstack gap-1 flex-wrap">
                          <button
                            type="button"
                            className="btn py-0 fs-16 favourite-btn active"
                          >
                            <i className="ri-star-fill"></i>
                          </button>
                          <button
                            type="button"
                            className="btn py-0 fs-16 text-body"
                          >
                            <i className="ri-share-line"></i>
                          </button>
                          <button
                            type="button"
                            className="btn py-0 fs-16 text-body"
                          >
                            <i className="ri-flag-line"></i>
                          </button>
                        </div>
                      </div>
                    </Row>

                    <Nav
                      className="nav-tabs-custom border-bottom-0"
                      role="tablist"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="1">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Entities</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Team</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Tab.Content className="text-muted">
                <Tab.Pane eventKey="1">
                  <OverviewTab
                    organization={organization}
                    entities={entities}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <EntityTab entities={entities} organization={organization} />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <OrganizationTeam organization={organization} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </React.Fragment>
  );
};

export default Section;
