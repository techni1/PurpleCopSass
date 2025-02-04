import React, { useEffect, useState } from "react";
import { Card, Col, Row, Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFrameworkProvision } from "../../../../slices/framework/frameworkReducer";
import type { AppDispatch } from "../../../../app";

const Section = ({ framework }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const { thisFrameworkProvision, status, error } = useSelector(
    (state: any) => state.framework
  );
  const [activeTab, setActiveTab] = useState("1");
  const [tabData, setTabData] = useState({ tab1: null, tab2: null }); // Store fetched data per tab

  const handleTabChange = async (eventKey: string | null) => {
    if (!eventKey) return;
    setActiveTab(eventKey);

    // Check if data for the current tab is already loaded
    if (eventKey === "1" && !tabData.tab1) {
      setIsLoading(true);
      // Fetch data for Tab 1
      await dispatch(fetchFrameworkProvision(framework.id));
      setTabData((prevData) => ({
        ...prevData,
        tab1: thisFrameworkProvision,
      }));
      setIsLoading(false);
    }

    if (eventKey === "2" && !tabData.tab2) {
      setIsLoading(true);
      // Simulate an API call for Tab 2 (replace with your own logic)
      const response = await Inertia.get(`/api/framework/${framework.id}/provisions`);
      setTabData((prevData) => ({
        ...prevData,
        tab2: response.data,
      }));
      setIsLoading(false);
    }
  };

  // Load Tab 1 data on initial render
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
                                Created at:{" "}
                                <span className="fw-medium">
                                  {framework.created_at}
                                </span>
                              </div>
                              <div>
                                Updated at:{" "}
                                <span className="fw-medium">
                                  {framework.updated_at}
                                </span>
                              </div>
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
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>{/* Render Tab 1 content here */}
                    <pre>{JSON.stringify(thisFrameworkProvision, undefined, 2)}</pre>



                  </div>
                )}
              </Tab.Pane>

              <Tab.Pane eventKey="2">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <div>{/* Render Tab 2 content here */}This is second tab</div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </React.Fragment>
  );
};

export default Section;
