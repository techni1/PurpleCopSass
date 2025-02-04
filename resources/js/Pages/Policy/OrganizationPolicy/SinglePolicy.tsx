import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import CreateFinding from "../../Finding/Component/CreateFinding";
import PolicyStatus from "./PolicyStatus";
import ApproverRemark from "./ApproverRemark";
import AssigneeRemark from "./AssigneeRemark";
import DocumentSection from "./Upload/DocumentSection";
import { usePage } from "@inertiajs/react";
import InlineAssign from "../../../Components/InlineAssign";
import RecurrenceModal from "./RecurrenceModal";
import DepartmentEdit from "../../../Components/DepartmentEdit";
import FindingsList from "../../Finding/Component/FindingsList";

export default function SinglePolicy({
  policy,
  auditId,
  show,
  setShow,
  documents,
  files,
  assignees,
  findings,
  departments,
}: any) {
  const [showApprovedBtn, setShowApprovedBtn] = useState(true);
  const [showRecurrenceModal, setShowRecurrenceModal] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [approverStatus, setApproverStatus] = useState(policy.approver_status);
  const [assigneeStatus, setAssigneeStatus] = useState(policy.assignee_status);
  const userRoles = usePage().props.auth.roles;
  const [approverRemark, setApproverRemark] = useState(
    policy.approver_remark ? policy.approver_remark : ""
  );
  const [reqName, setReqName] = useState("");
  const [assigneeModalShow, setAssigneeModalShow] = useState(false);
  const [assigneeRemark, setAssigneeRemark] = useState(
    policy.assignee_remark ? policy.assignee_remark : ""
  );
  useEffect(() => {
    const progress = {
      not_uploaded: 0,
      draft: 50,
      need_review: 50,
      external_need_review: 50,
      approved: 100,
      published: 100,
    };
    //@ts-ignore
    setProgressBar(progress[policy.status] || 0);
  }, [policy]);

  const handleAssigneeModal = (policy: any, type: any) => {
    setReqName(type);
    setAssigneeModalShow(true);
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(findings, undefined, 2)}</pre> */}
      <PolicyStatus
        id={policy.id}
        policy={policy.policy}
        orgPolicy={policy}
        approver={policy.approver}
        approverStatus={approverStatus}
        assigneeStatus={assigneeStatus}
        showApprovedBtn={showApprovedBtn}
        setShowApprovedBtn={setShowApprovedBtn}
        setApproverStatus={setApproverStatus}
        duedate={policy.approver_completion_data}
        setProgressBar={setProgressBar}
      />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center">
                <div className="live-preview w-75 ">
                  <div className="position-relative m-4">
                    <ProgressBar
                      variant="primary"
                      now={progressBar}
                      style={{ height: "5px" }}
                    />
                    <div className="position-absolute top-0 start-0 translate-middle bg-white p-2">
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          size="sm"
                          variant="success"
                          className="rounded-pill"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          1
                        </Button>
                        <span>Upload Policy</span>
                      </div>
                    </div>
                    <div className="position-absolute top-0 start-50 translate-middle bg-white p-2">
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          size="sm"
                          variant="primary"
                          className="rounded-pill"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          2
                        </Button>
                        <span>Approve Policy</span>
                      </div>
                    </div>
                    <div className="position-absolute top-0 start-100 translate-middle bg-white p-2">
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-pill"
                          style={{ width: "2rem", height: "2rem" }}
                        >
                          3
                        </Button>
                        <span className=" text-nowrap">
                          {progressBar == 100 ? "Published" : "Publish Policy"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="d-flex gap-3 align-items-start p-2">
                <h5>Policy Requirements</h5>
              </div>
              <Row className="p-2" lg={12}>
                <Col lg={3}>
                  <h6>Assigned To</h6>
                  <div className="fs-6">
                    {/* <i className="ri-account-circle-line text-info" /> */}
                    <span className=" text-primary  py-1 rounded ">
                      {policy.assignee ? (
                        <>
                          <i className="ri-account-circle-line text-secondary " />{" "}
                          {policy.assignee.name}
                        </>
                      ) : (
                        userRoles[0] == "Admin" && (
                          <button
                            className=" bg-transparent border rounded border-primary text-primary"
                            onClick={() =>
                              handleAssigneeModal(policy, "assignee_id")
                            }
                          >
                            <i className="ri-user-add-fill" />
                          </button>
                        )
                      )}
                    </span>
                    <div className="pt-3" style={{ fontSize: "13px" }}>
                      <span>Due Date:</span>
                      <span> {policy.assignee_due_date}</span>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <h6>Approver</h6>
                  <div className="fs-6">
                    <span className=" text-primary py-1 rounded ">
                      {policy.approver ? (
                        <>
                          <i className="ri-account-circle-line text-secondary " />{" "}
                          {policy.approver.name}
                        </>
                      ) : (
                        userRoles[0] == "Admin" && (
                          <button
                            className=" bg-transparent border rounded border-primary text-primary"
                            onClick={() =>
                              handleAssigneeModal(policy, "approver_id")
                            }
                          >
                            <i className="ri-user-add-fill" />
                          </button>
                        )
                      )}
                    </span>
                    <div className="pt-3" style={{ fontSize: "13px" }}>
                      <span>Due Date:</span>
                      <span> {policy.approver_completion_data}</span>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <h6>Entity</h6>
                  <div className="fs-6">
                    <span className="bg-primary-subtle text-primary px-2 py-1 rounded">
                      Organization Wide
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="p-2" lg={12}>
                <Col lg={3}>
                  <h6>Recurrence</h6>
                  <div className="fs-6">
                    <span className=" text-primary me-2 py-1 rounded ">
                      {policy.recurrence}
                    </span>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}
                    >
                      <Button
                        onClick={() => setShowRecurrenceModal(true)}
                        className="p-0"
                        variant="link"
                      >
                        <i className="ri-edit-line text-secondary " />
                      </Button>
                    </OverlayTrigger>
                  </div>
                </Col>
                <DepartmentEdit
                  departments={departments}
                  requirement={policy}
                  userRoles={userRoles[0]}
                />
                {/* <Col lg={3}>
                  <h6>Department</h6>
                  <div className="fs-6">
                    <span className=" text-primary  py-1 rounded ">
                      {policy.policy.department
                        ? policy.policy.department
                        : "NAN"}
                    </span>
                  </div>
                </Col> */}
                <Col lg={3}>
                  <h6>Review Date</h6>
                  <div className="fs-6">
                    <span className=" text-primary  py-1 rounded ">
                      {policy.review_date ? policy.review_date : "NAN"}
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {findings.data.length > 0 && <FindingsList listData={findings.data} />}

      <DocumentSection
        policy={policy}
        setProgressBar={setProgressBar}
        assigneeStatus={assigneeStatus}
        setAssigneeStatus={setAssigneeStatus}
        documents={documents}
        files={files}
      />
      {policy.approver && (
        <ApproverRemark
          id={policy.id}
          approverRemark={approverRemark}
          setApproverRemark={setApproverRemark}
          approver={policy.approver.id}
          approverStatus={approverStatus}
          // setAssigneeStatus={setAssigneeStatus}
        />
      )}
      {policy.assignee && (
        <AssigneeRemark
          id={policy.id}
          assigneeRemark={assigneeRemark}
          setAssigneeRemark={setAssigneeRemark}
          assignee={policy.assignee.id}
          assigneeStatus={assigneeStatus}
          // setAssigneeStatus={setAssigneeStatus}
        />
      )}

      {auditId && approverStatus == "approved" && (
        <CreateFinding
          requirement={policy}
          auditId={auditId}
          type="policy"
          show={show}
          setShow={setShow}
          findings={findings}
        />
      )}
      <InlineAssign
        assignees={assignees}
        requirement={policy}
        reqName={reqName}
        show={assigneeModalShow}
        setShow={setAssigneeModalShow}
      />

      <RecurrenceModal
        show={showRecurrenceModal}
        setShow={setShowRecurrenceModal}
        requirement={policy}
        routeTo={"organizationpolicy.update"}
      />
    </React.Fragment>
  );
}
