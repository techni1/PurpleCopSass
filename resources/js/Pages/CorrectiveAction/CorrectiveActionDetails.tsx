import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";
import {
  CORRECTIVE_ACTION_SOURCE_TEXT_MAP,
  CORRECTIVE_ACTION_STATUS_CLASS_MAP,
  CORRECTIVE_ACTION_STATUS_TEXT_MAP,
  CORRECTIVE_STATUS_CLASS_MAP,
  CORRECTIVE_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";
import { useState } from "react";
import Attachment from "../../Components/AttachmentList";
import { useForm, usePage } from "@inertiajs/react";
import SingleAttachment from "../../Components/SingleAttachment";

export default function CorrectiveActionDetails({
  correctiveAction,
  show,
  setShow,
}: any) {
  const { data, setData, reset, post, errors, processing } = useForm({
    status: "close",
    attachment: "",
    audit_note: "",
    _method: "PUT",
  });
  const user = usePage().props.auth.user;
  const [openCollapse, setOpenCollapse] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const onRemarkSubmit = async (e: any) => {
    e.preventDefault();
    post(route("correctiveaction.update", correctiveAction), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        handleClose();
      },
    });
  };

  // Function to display source object data in rows
  const renderSourceData = (source: any) => {
    if (!source) return null;
    return Object.entries(source).map(([key, value]) => (
      <Row className="p-2" key={key}>
        <Col md={5} sm={6}>
          <h6 className="text-capitalize">{key.replace(/_/g, " ")}</h6>
        </Col>
        <Col md={7} sm={6}>
          <span className="text-muted">{String(value)}</span>
        </Col>
      </Row>
    ));
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title>
          <span className="text-uppercase">
            {correctiveAction.non_conformity_name}
          </span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <>
          {/* <pre>{JSON.stringify(correctiveAction, undefined, 4)}</pre> */}
          <Row>
            <div>
              <Card>
                <Card.Body>
                  <Row className="p-2">
                    <Col>
                      <h6>Status</h6>
                      <span
                        className={
                          "px-2 py-1 rounded " +
                          CORRECTIVE_STATUS_CLASS_MAP[correctiveAction.status]
                        }
                      >
                        {CORRECTIVE_STATUS_TEXT_MAP[correctiveAction.status]}
                      </span>
                    </Col>
                  </Row>
                  {correctiveAction.audit_note && (
                    <Row className="p-2 bg-success-subtle my-3 rounded">
                      <Col md={5} sm={6}>
                        <h6>Closing Remark</h6>
                        <span className="text">
                          {correctiveAction.audit_note}
                        </span>
                      </Col>
                      {correctiveAction.attachment_path && (
                        <Col md={5} sm={6}>
                          <h6>Attachment</h6>
                          <SingleAttachment
                            document={correctiveAction.attachment_path}
                          />
                        </Col>
                      )}
                    </Row>
                  )}
                  <Row className="p-2">
                    <Col md={5} sm={6}>
                      <h6>Non Conformity Name</h6>
                      <span className="text-muted">
                        {correctiveAction.non_conformity_name}
                      </span>
                    </Col>
                    <Col md={5} sm={6}>
                      <h6>Weakness Identification</h6>
                      <span className="text-muted">
                        {correctiveAction.weakness_identification}
                      </span>
                    </Col>
                  </Row>
                  {correctiveAction.non_conformity_description && (
                    <Row className="p-2">
                      <Col>
                        <h6>Non Conformity Description</h6>
                        <span className="text-muted">
                          {correctiveAction.non_conformity_description}
                        </span>
                      </Col>
                    </Row>
                  )}
                  <Row className="p-2">
                    <Col md={5} sm={6}>
                      <h6>Criticality Rating</h6>
                      <span
                        className={
                          "px-2 py-1 rounded " +
                          CORRECTIVE_ACTION_STATUS_CLASS_MAP[
                            correctiveAction.criticality_rating
                          ]
                        }
                      >
                        {
                          CORRECTIVE_ACTION_STATUS_TEXT_MAP[
                            correctiveAction.criticality_rating
                          ]
                        }
                      </span>
                    </Col>
                    <Col md={5} sm={6}>
                      <h6>Assigned To</h6>
                      <div>
                        <i className="ri-account-circle-line text-info" />
                        <span className=" text-primary px-2 py-1 rounded ">
                          {correctiveAction.assignee?.name}
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-2">
                    <Col md={5} sm={6}>
                      <h6>Detection Date</h6>
                      <span className="text-muted">
                        {correctiveAction.detection_date}
                      </span>
                    </Col>
                    <Col md={5} sm={6}>
                      <h6>Due Date</h6>
                      <span className="text-muted">
                        {correctiveAction.due_date}
                      </span>
                    </Col>
                  </Row>
                  {/* Display Source Data Dynamically */}
                  {correctiveAction.source && (
                    <>
                      <Row className="p-2">
                        <Col md={5} sm={6}>
                          <h6>Source Type</h6>
                          <span className="text-muted">
                            {
                              CORRECTIVE_ACTION_SOURCE_TEXT_MAP[
                                correctiveAction.source_type.split("\\").pop()
                              ]
                            }
                          </span>
                        </Col>
                        <Col md={5} sm={6}>
                          <h6>Source</h6>
                          <span className="text-muted">
                            {(() => {
                              const {
                                policy,
                                evidence,
                                risk,
                                comment: finding,
                              } = correctiveAction.source || {};

                              return (
                                <>
                                  {policy?.name} {evidence?.name} {finding}{" "}
                                  {risk?.name}
                                </>
                              );
                            })()}
                          </span>
                        </Col>

                        {/* <Col>
                          <div className="d-flex align-items-center gap-2">
                            <h6>Source Details</h6>
                            <Button
                              className="rounded py-0 px-1"
                              onClick={() => setOpenCollapse(!openCollapse)}
                            >
                              <i
                                className={
                                  openCollapse
                                    ? "ri-arrow-up-s-line"
                                    : "ri-arrow-down-s-line"
                                }
                              ></i>
                            </Button>
                          </div>
                        </Col> */}
                      </Row>
                      {/* <Row className="p-2">
                        <Collapse in={openCollapse}>
                          <Card className=" bg-dark-subtle p-3">
                            {renderSourceData(correctiveAction.source)}
                          </Card>
                        </Collapse>
                      </Row> */}
                    </>
                  )}
                </Card.Body>
              </Card>
              {!correctiveAction.audit_note &&
                user.id == correctiveAction.assignee?.id && (
                  <Card>
                    {/* <Card.Header>
                      <h5>Close</h5>
                    </Card.Header> */}
                    <Card.Body>
                      <form onSubmit={onRemarkSubmit}>
                        <Row>
                          <div>
                            <Form.Label
                              htmlFor="attachment"
                              className="form-label"
                            >
                              Add Attachments
                            </Form.Label>
                            <Form.Control
                              id="attachment"
                              name="attachment"
                              type="file"
                              required
                              className={
                                "mt-1 form-control" +
                                (errors.attachment ? " is-invalid" : "")
                              }
                              onChange={(e: any) =>
                                setData("attachment", e.target.files[0])
                              }
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.attachment}
                            </Form.Control.Feedback>
                          </div>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Control
                              id="audit_note"
                              name="audit_note"
                              as="textarea"
                              rows={3}
                              placeholder="Your Remark..."
                              value={data.audit_note}
                              className={
                                "form-control border border-0 bg-light text-secondary " +
                                (errors.audit_note ? " is-invalid" : "")
                              }
                              onChange={(e: any) =>
                                setData("audit_note", e.target.value)
                              }
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.audit_note}
                            </Form.Control.Feedback>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={3}>
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processing}
                            >
                              Close
                            </Button>
                          </Col>
                        </Row>
                      </form>
                    </Card.Body>
                  </Card>
                )}
            </div>
          </Row>
        </>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
