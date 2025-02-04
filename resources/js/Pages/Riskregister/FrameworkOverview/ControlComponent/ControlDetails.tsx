import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Nav,
  Offcanvas,
  Row,
  Tab,
  TabContainer,
} from "react-bootstrap";
import { debounce } from "lodash";
import axios from "axios";
import CustomPlaceholder from "../../../../Components/CustomPlaceholder";
import PolicyList from "../PolicyComponent/PolicyList";
import EvidenceList from "../EvidenceComponent/EvidenceList";

interface ControlDetails {
  id: any;
  name: any;
  code: any;
  control_weight: any;
  description: any;
  control_domain: any;
  functional_group: any;
  frameworks: any;
  createdBy: any;
  updatedBy: any;
  policy: any[];
  evidence: any[];
  created_at: any;
  updated_at: any;
}

export default function ControlDetails({
  show,
  setShow,
  controlId,
  provision_id,
  organization_framework_id,
}: any) {
  const [controlDetails, setControlDetails] = useState<ControlDetails>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const debouncedHandleControlDetailShow = debounce(async (id: any) => {
      setTimeout(async () => {
        try {
          const response = await axios.get(`/get-control/${id}`);
          setControlDetails(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching control details:", error);
        }
      }, 300);
    }, 300);
    debouncedHandleControlDetailShow(controlId);
  }, [controlId]);

  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="offcanvasRight"
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            Control Details
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {isLoading ? (
            <CustomPlaceholder />
          ) : (
            <Card>
              <Card.Body>
                <Row className=" pb-2">
                  <h6>Control Name:</h6>
                  <p className="text-muted">{controlDetails?.name}</p>
                </Row>
                <Row className=" pb-2">
                  <h6>Control Code:</h6>
                  <p className="text-muted">{controlDetails?.code}</p>
                </Row>
                <Row className=" pb-2">
                  <h6>Description:</h6>
                  <p className="text-muted">{controlDetails?.description}</p>
                </Row>
                <Row>
                  <Col>
                    <h6>Function Group:</h6>
                    <p className="text-muted">
                      {controlDetails?.functional_group}
                    </p>
                  </Col>
                  <Col>
                    <h6>Control Domain:</h6>
                    <p className="text-muted">
                      {controlDetails?.control_domain}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}

          {!isLoading &&
            controlDetails &&
            (controlDetails.policy.length > 0 ||
              controlDetails.evidence.length > 0) && (
              <Card>
                <Card.Body>
                  <TabContainer defaultActiveKey="1">
                    <Row className="mb-3">
                      <Col lg={12}>
                        <Nav
                          className="nav-tabs-custom border-bottom-0"
                          role="tablist"
                        >
                          {controlDetails.policy.length > 0 && (
                            <Nav.Item>
                              <Nav.Link eventKey={1}>POLICIES</Nav.Link>
                            </Nav.Item>
                          )}
                          {controlDetails.evidence.length > 0 && (
                            <Nav.Item>
                              <Nav.Link eventKey={2}>EVIDENCE</Nav.Link>
                            </Nav.Item>
                          )}
                        </Nav>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Tab.Content className="text-muted">
                          <Tab.Pane eventKey="1">
                            <PolicyList
                              control_id={controlId}
                              provision_id={provision_id}
                              organization_framework_id={
                                organization_framework_id
                              }
                              listData={controlDetails?.policy || []}
                            />
                          </Tab.Pane>
                          <Tab.Pane eventKey="2">
                            <EvidenceList
                              control_id={controlId}
                              provision_id={provision_id}
                              organization_framework_id={
                                organization_framework_id
                              }
                              listData={controlDetails?.evidence || []}
                            />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </TabContainer>
                </Card.Body>
              </Card>
            )}
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
