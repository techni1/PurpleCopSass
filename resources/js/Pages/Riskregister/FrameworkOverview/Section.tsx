import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFrameworkProvision } from "../../../slices/framework/frameworkReducer";
import type { AppDispatch } from "../../../app";
import OverviewTab from "../../Framework/SuperAdmin/FrameworkOverview/OverviewTab";
import ProvisionTab from "../../Framework/SuperAdmin/FrameworkOverview/ProvisionComponent/ProvisionTab";

const Section = ({ framework, allProvisions, controls }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const { thisFrameworkProvision, status, error } = useSelector(
    (state: any) => state.framework
  );
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (eventKey: string | null) => {
    if (!eventKey) return;
    setActiveTab(eventKey);
    if (eventKey === "1") {
      setIsLoading(true);
      dispatch(fetchFrameworkProvision(framework.id));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleTabChange("1");
  }, []);

  return (
    <React.Fragment>
      <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
        <Row>
          <Col lg={12}>
            <Card className="mt-n4 mx-n4">
              <div className="bg-primary-subtle">
                <Card.Body className="pb-0 px-4">
                  <Row className="mb-3">
                    <div className="col-md">
                      <Row className="align-items-center g-3">
                        <div className="col-md">
                          <div>
                            <h4 className="fw-bold">{framework.name}</h4>
                            <div className="hstack gap-3 flex-wrap">
                              <div>
                                <i className="ri-building-line align-bottom me-1"></i>{" "}
                                {framework.name}
                              </div>
                              <div className="vr"></div>
                              <div>
                                Created at :{" "}
                                <span className="fw-medium">
                                  {framework.created_at}
                                </span>
                              </div>
                              <div>
                                Updated at :{" "}
                                <span className="fw-medium">
                                  {framework.updated_at}
                                </span>
                              </div>
                              <div className="vr"></div>

                              <div className="vr"></div>
                              <div className="badge rounded-pill bg-info fs-12">
                                New
                              </div>
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
                      <Nav.Link eventKey="2">Add Provisions</Nav.Link>
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
                  thisFrameworkProvision={thisFrameworkProvision}
                  controls={controls}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <ProvisionTab
                  framework={framework}
                  allProvisions={allProvisions}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Modal fullscreen={true} show={isLoading} className="modal-fullscreen">
        <Modal.Header>
          <Modal.Title>Fullscreen Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Section;
