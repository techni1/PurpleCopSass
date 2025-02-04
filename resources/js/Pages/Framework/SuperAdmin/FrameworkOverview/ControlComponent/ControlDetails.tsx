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
import CustomPlaceholder from "../../../../../Components/CustomPlaceholder";
import EvidenceList from "../EvidenceComponent/EvidenceList";
import PolicyList from "../PolicyComponent/PolicyList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProvisionDataById } from "../../../../../slices/provision/reducer";

export default function ControlDetails({
  show,
  setShow,
  control_id,
  provision_id,
  organization_framework_id,
  assignees,
}: any) {
  const dispatch = useDispatch();
  const provisionDetails = useSelector((state) =>
    getProvisionDataById(state, provision_id)
  ); //

  const [controlDetails, setControlDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   async function fetchControlData(id: any) {
  //     try {
  //       const response = await axios.get(`/get-control/${id}`);
  //       setControlDetails(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching control details:", error);
  //     }
  //   }
  //   fetchControlData(controlDetails);
  // }, [controlDetails]);

  useEffect(() => {
    const findControl = provisionDetails.controls.find(
      (control: any) => control.id == control_id
    );
    setControlDetails(findControl);
  }, [provisionDetails, control_id]);

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
        {controlDetails && (
          <Offcanvas.Body>
            {/* <pre>{JSON.stringify(controlDetails, undefined, 2)}</pre> */}

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
                      {controlDetails?.functional_group?.name}
                    </p>
                  </Col>
                  <Col>
                    <h6>Control Domain:</h6>
                    <p className="text-muted">
                      {controlDetails?.control_domain?.name}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {controlDetails &&
              (controlDetails?.policies?.length > 0 ||
                controlDetails?.evidence?.length > 0) && (
                <Card>
                  <Card.Body>
                    <TabContainer defaultActiveKey="1">
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Nav
                            className="nav-tabs-custom border-bottom-0"
                            role="tablist"
                          >
                            {controlDetails?.policies?.length > 0 && (
                              <Nav.Item>
                                <Nav.Link eventKey={1}>POLICIES</Nav.Link>
                              </Nav.Item>
                            )}
                            {controlDetails?.evidence?.length > 0 && (
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
                                control_id={control_id}
                                provision_id={provision_id}
                                organization_framework_id={
                                  organization_framework_id
                                }
                                // listData={controlDetails?.policies || []}
                                assignees={assignees}
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                              <EvidenceList
                                control_id={control_id}
                                provision_id={provision_id}
                                organization_framework_id={
                                  organization_framework_id
                                }
                                // listData={controlDetails?.evidence || []}
                                assignees={assignees}
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
        )}
      </Offcanvas>
    </React.Fragment>
  );
}
