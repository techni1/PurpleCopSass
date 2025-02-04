import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

export default function InlineAssign({
  assignees,
  requirement,
  reqName,
  show,
  setShow,
}: any) {
  const { data, setData, errors, post, processing, reset } = useForm({
    organization_id: "",
    policy_id: "",
    evidence_id: "",
    assignee_due_date: "",
    approver_completion_data: "",
    _method: "PUT",
  });

  const [routeTo, setRouteTo] = useState("");
  const [assigneeDate, setAssigneeDate] = useState<Date | null>(null);
  const [approverDate, setApproverDate] = useState<Date | null>(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleChange = async (e: any) => {
    const updatedData = {
      ...data,
      [e.name]: parseInt(e.value),
    };
    setData(updatedData);
  };

  useEffect(() => {
    if (requirement.policy) {
      setRouteTo("organizationpolicy.update");
      //@ts-ignore
      setData({
        organization_id: requirement.organization.id || "",
        policy_id: requirement.policy.id || "",
        evidence_id: requirement.evidence_id || "",
        _method: "PUT",
      });
    }
    if (requirement.evidence) {
      setRouteTo("organizationevidence.update");
      //@ts-ignore
      setData({
        organization_id: requirement.organization.id || "",
        policy_id: requirement.policy?.id || "",
        evidence_id: requirement.evidence?.id || "",
        _method: "PUT",
      });
    }
  }, [requirement]);

  // Enable submit button only if both dates are selected
  useEffect(() => {
    if (reqName === "approver_id") {
      setIsSubmitEnabled(approverDate !== null);
    } else {
      setIsSubmitEnabled(assigneeDate !== null);
    }
  }, [assigneeDate, approverDate, reqName]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route(routeTo, requirement.id), {
      preserveScroll: true,
      onSuccess: () => {
        handleModalHide();
        reset();
      },
    });
  };

  const handleModalHide = () => {
    setShow(false);
    reset();
  };

  const handleDateChange =
    (setter: any, field: any) => (selectedDates: any) => {
      if (selectedDates && selectedDates.length > 0) {
        const selectedDate = selectedDates[0];
        const utcDate = new Date(
          Date.UTC(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
          )
        );
        setData(field, utcDate.toISOString().split("T")[0]);
        setter(utcDate);
      }
    };

  return (
    <>
      <Modal show={show} onHide={handleModalHide} centered>
        <Modal.Header closeButton>
          Add {reqName == "approver_id" ? "Approver" : "Assignee"}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Label
              htmlFor="choices_approver_completion_data"
              className="form-label"
            >
              Select User
              <span className="text-danger">{"*"}</span>
            </Form.Label>
            <Row>
              <Select
                onChange={handleChange}
                options={assignees.map((assign: any) => ({
                  value: assign.id,
                  label: assign.name,
                  name: reqName,
                }))}
                className="text-primary"
                styles={{
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "black",
                  }),
                }}
                required
              />
            </Row>
            <div className="my-4">
              <Form.Label
                htmlFor="choices_approver_completion_data"
                className="form-label"
              >
                Due date <span className="text-danger">{"*"}</span>
              </Form.Label>
              {reqName == "approver_id" ? (
                <Flatpickr
                  className={`form-control ${
                    errors.approver_completion_data ? "is-invalid" : ""
                  }`}
                  value={approverDate}
                  onChange={handleDateChange(
                    setApproverDate,
                    "approver_completion_data"
                  )}
                  options={{
                    dateFormat: "Y-m-d",
                    minDate: "today",
                  }}
                />
              ) : (
                <Flatpickr
                  className={`form-control ${
                    errors.assignee_due_date ? "is-invalid" : ""
                  }`}
                  value={assigneeDate}
                  onChange={handleDateChange(
                    setAssigneeDate,
                    "assignee_due_date"
                  )}
                  options={{
                    dateFormat: "Y-m-d",
                    minDate: "today",
                  }}
                />
              )}
              {(errors.assignee_due_date ||
                errors.approver_completion_data) && (
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.assignee_due_date || errors.approver_completion_data}
                </Form.Control.Feedback>
              )}
            </div>

            <Row className="pt-3">
              <div>
                <Button
                  type="submit"
                  className="btn btn-primary w-25"
                  disabled={processing || !isSubmitEnabled}
                >
                  Save
                </Button>
              </div>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
