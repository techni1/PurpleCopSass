import { useForm, usePage } from "@inertiajs/react";

import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import AuditorApproveBtn from "./AuditorApproveBtn";
import { toast, ToastContainer } from "react-toastify";

export default function CreateFinding({
  requirement,
  type,
  auditId,
  show,
  setShow,
  findings,
}: any) {
  const user = usePage().props.auth.user;
  const userRole = usePage().props.auth.roles;
  // const [findings, setFindings] = useState([]);
  const { data, setData, post, processing, errors, reset } = useForm({
    audit_id: auditId,
    organization_policy_id: "",
    organization_evidence_id: "",
    auditor_id: user.id,
    comment: "",
    nature_of_finding: "",
    attachment: null,
    internal_auditor_status: "",
    external_auditor_status: "",
  });

  const defaultnotify = () =>
    toast("New Finding has been added", {
      position: "top-right",
      hideProgressBar: true,
      className: "bg-primary text-white",
    });

  useEffect(() => {
    //@ts-ignore
    setData(`organization_${type}_id`, requirement.id);
  }, [findings, requirement, type]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    post(route("finding.store"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        defaultnotify();
        reset();
      },
    });
  };

  return (
    <>
      <ToastContainer />
      {/* <pre>{JSON.stringify(findings, undefined, 2)}</pre> */}
      {findings.data.length == 0 && userRole[0] == "Assignee" ? (
        ""
      ) : (
        <Card>
          <Card.Body>
            <Row>
              <h6 className="pb-2">Create Findings</h6>
            </Row>

            {userRole[0] != "Assignee" &&
              auditId &&
              requirement.internal_auditor?.id != user.id && (
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col>
                      <Form.Control
                        id="finding"
                        name="finding"
                        as="textarea"
                        rows={2}
                        placeholder="Enter Finding..."
                        value={data.comment}
                        className={
                          "form-control border border-0 bg-light text-secondary " +
                          (errors.comment ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("comment", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.comment}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label
                        htmlFor="narute_of_finding"
                        className="form-label"
                      >
                        Nature of Finding
                        <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <select
                        className="form-control form-select"
                        onChange={(e: any) =>
                          setData("nature_of_finding", e.target.value)
                        }
                        required
                      >
                        <option></option>
                        <option value="minor">Minor</option>
                        <option value="major">Major</option>
                        <option value="observation">Observation</option>
                        <option value="opportunity_for_improvement">
                          Opportunity for Improvement
                        </option>
                      </select>
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.nature_of_finding}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label htmlFor="attachment" className="form-label">
                        attachment
                      </Form.Label>
                      <Form.Control
                        id="attachment"
                        name="attachment"
                        type="file"
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
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <Button
                        onClick={() => reset()}
                        className="btn btn-light me-2"
                      >
                        Reset
                      </Button>

                      <Button
                        disabled={processing}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </form>
              )}
          </Card.Body>
        </Card>
      )}
      {userRole[0] == "Auditor" &&
        auditId &&
        requirement.internal_auditor_status != "approved" && (
          <AuditorApproveBtn
            id={requirement.id}
            requirement={type}
            auditor="internal"
            orgID={requirement.organization.id}
            show={show}
            setShow={setShow}
          />
        )}
      {userRole[0] == "Auditor" &&
        auditId &&
        requirement.internal_auditor_status == "approved" &&
        requirement.internal_auditor?.id != user.id &&
        requirement.external_auditor_status != "approved" && (
          <AuditorApproveBtn
            id={requirement.id}
            requirement={type}
            auditor="external"
            orgID={requirement.organization.id}
            show={show}
            setShow={setShow}
          />
        )}
    </>
  );
}
