import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import {
  fetchProvisionData,
  getProvisionDataById,
  getProvisionStatus,
} from "../../../slices/provision/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Reassign({
  orgEvidence,
  show,
  setShow,
  assignees,
  provision_id,
}: any) {
  const dispatch = useDispatch();
  const provisionDetails = useSelector((state) =>
    getProvisionDataById(state, provision_id)
  ); // Use provision ID to get specific data
  const provisionStatus = useSelector(getProvisionStatus);

  const userOrg = usePage().props.auth.userOrganization;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    setError,
    reset,
    clearErrors,
  } = useForm({
    assignee_id: "",
    assignee_due_date: "",
    approver_id: "",
    approver_completion_data: "",
    _method: "PUT",
  });

  const [assigneeDate, setAssigneeDate] = useState<Date | null>(null);
  const [approverDate, setApproverDate] = useState<Date | null>(null);

  useEffect(() => {
    if (orgEvidence) {
      // Set all data in one go
      setData({
        assignee_id: orgEvidence.assignee?.id || "",
        assignee_due_date: orgEvidence.assignee_due_date || "",
        approver_id: orgEvidence.approver?.id || "",
        approver_completion_data: orgEvidence.approver_completion_data || "",
        _method: "PUT",
      });

      // Set assignee and approver dates if they exist
      if (orgEvidence.assignee_due_date) {
        setAssigneeDate(new Date(orgEvidence.assignee_due_date));
      }
      if (orgEvidence.approver_completion_data) {
        setApproverDate(new Date(orgEvidence.approver_completion_data));
      }
    }
  }, [orgEvidence]);

  const onAssigneeSubmit = async (e: any) => {
    e.preventDefault();
    post(route("organizationevidence.update", orgEvidence), {
      preserveScroll: true,
      onSuccess: () => {
        setShow(false);
        reset();
        if (provisionStatus != "idle" && provision_id) {
          //@ts-ignore
          dispatch(fetchProvisionData(provision_id));
        }
      },
    });
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
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header className="Modal-title">
        <div className="w-100 text-center">
          <h4 className="">{orgEvidence.evidence?.name}</h4>
        </div>
      </Modal.Header>
      <Modal.Body className="text-start p-5 pt-4">
        <form onSubmit={onAssigneeSubmit}>
          <div className="mb-4">
            <Form.Label htmlFor="choices-assignee_id" className="form-label">
              Assignee <span className="text-danger">{"*"}</span>
            </Form.Label>
            <select
              className={`form-select ${
                errors.assignee_id ? "is-invalid" : ""
              }`}
              name="assignee_id"
              id="choices-assignee_id"
              onChange={(e) => setData("assignee_id", e.target.value)}
              value={data.assignee_id}
              required
            >
              <option>Select...</option>
              {assignees.map((assign: any) => (
                <option
                  key={assign.id}
                  value={assign.id}
                  disabled={assign.id == data["approver_id"] ? true : false}
                >
                  {assign.name}
                </option>
              ))}
            </select>
            {errors.assignee_id && (
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.assignee_id}
              </Form.Control.Feedback>
            )}
          </div>

          <div className="mb-4">
            <Form.Label
              htmlFor="choices-assignee_due_date"
              className="form-label"
            >
              Assignee due date <span className="text-danger">{"*"}</span>
            </Form.Label>
            <Flatpickr
              className={`form-control ${
                errors.assignee_due_date ? "is-invalid" : ""
              }`}
              value={assigneeDate}
              onChange={handleDateChange(setAssigneeDate, "assignee_due_date")}
              options={{
                dateFormat: "Y-m-d",
                minDate: "today",
              }}
            />
            {errors.assignee_due_date && (
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.assignee_due_date}
              </Form.Control.Feedback>
            )}
          </div>

          <div className="mb-4">
            <Form.Label htmlFor="choices-approver_id" className="form-label">
              Approver <span className="text-danger">{"*"}</span>
            </Form.Label>
            <select
              className={`form-select ${
                errors.approver_id ? "is-invalid" : ""
              }`}
              name="approver_id"
              id="choices-approver_id"
              onChange={(e) => setData("approver_id", e.target.value)}
              value={data.approver_id}
            >
              <option>Select...</option>
              {assignees.map((assign: any) => (
                <option
                  key={assign.id}
                  value={assign.id}
                  disabled={assign.id == data["assignee_id"] ? true : false}
                >
                  {assign.name}
                </option>
              ))}
            </select>
            {errors.approver_id && (
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.approver_id}
              </Form.Control.Feedback>
            )}
          </div>

          <div className="mb-4">
            <Form.Label
              htmlFor="choices_approver_completion_data"
              className="form-label"
            >
              Approver completion date{" "}
              <span className="text-danger">{"*"}</span>
            </Form.Label>
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
                // disable: [assigneeDate],
              }}
            />
            {errors.approver_completion_data && (
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.approver_completion_data}
              </Form.Control.Feedback>
            )}
          </div>
          <div className="mt-4">
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={() => setShow(false)}>
                CLOSE
              </Button>
              <Button
                type="submit"
                className="btn btn-primary "
                disabled={processing}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
