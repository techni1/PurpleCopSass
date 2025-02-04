import { Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Flatpickr from "react-flatpickr";
import {
  fetchAssigneeListData,
  getAssigneeList,
  getAssigneeListStatus,
} from "../../slices/assigneeList/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchCorrectiveActionData } from "../../slices/correctiveAction/reducer";
interface CorrectiveAction {
  id: any;
  non_conformity_name: any;
  non_conformity_description: any;
  weakness_identification: any;
  detection_date: any;
  assignee_id: any;
  due_date: any;
  status: any;
  criticality_rating: any;
  audit_note: any;
  attachment_path: any;
  source: any;
}
export default function EditCorrectiveAction({
  correctiveAction,
  show,
  setShow,
}: any) {
  const dispatch = useDispatch();
  const assignees = useSelector(getAssigneeList);
  const assigneeStatus = useSelector(getAssigneeListStatus);
  const [detectionDate, setDetectionDate] = useState<Date | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const userOrganization = usePage().props.auth.userOrganization;
  const [isLoading, setIsLoading] = useState(false);

  const { data, setData, patch, processing, errors, reset, setError } = useForm(
    {
      id: correctiveAction.id,
      non_conformity_name: correctiveAction.non_conformity_name || "",
      non_conformity_description:
        correctiveAction.non_conformity_description || "",
      weakness_identification: correctiveAction.weakness_identification || "",
      detection_date: correctiveAction.detection_date || "",
      assignee_id: correctiveAction.assignee?.id || "",
      due_date: correctiveAction.due_date || "",
      criticality_rating: correctiveAction.criticality_rating || "",

      // _method: "PUT",
    }
  );

  useEffect(() => {
    if (assigneeStatus == "idle") {
      //@ts-ignore
      dispatch(fetchAssigneeListData());
    }
  });

  useEffect(() => {
    if (correctiveAction) {
      // Set all data in one go
      setData({
        id: correctiveAction.id,
        non_conformity_name: correctiveAction.non_conformity_name || "",
        non_conformity_description:
          correctiveAction.non_conformity_description || "",
        weakness_identification: correctiveAction.weakness_identification || "",
        detection_date: correctiveAction.detection_date || "",
        assignee_id: correctiveAction.assignee?.id || "",
        due_date: correctiveAction.due_date || "",
        criticality_rating: correctiveAction.criticality_rating || "",

        // _method: "PUT",
      });

      // Set assignee and approver dates if they exist
      if (correctiveAction.detection_date) {
        setDetectionDate(new Date(correctiveAction.detection_date));
      }
      if (correctiveAction.due_date) {
        setDueDate(new Date(correctiveAction.due_date));
      }
    }
  }, [correctiveAction]);

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
  const handleClose = () => {
    setShow(false);
    reset();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    patch(route("correctiveaction.update", correctiveAction), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        handleClose();
      },
    });
    // try {
    //   const response = await axios.post("/update-corrective-action", {
    //     ...data,
    //   });
    //   if (response.data.success) {
    //     //@ts-ignore
    //     dispatch(fetchCorrectiveActionData());
    //     handleClose();
    //     reset();
    //   }
    // } catch (error: any) {
    //   if (error.response && error.response.status === 422) {
    //     setError(error.response.data.errors);
    //   }
    // }
  };
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header
        className="modal-title border border-bottom pb-3"
        closeButton
      >
        <h5 className="text-uppercase">Add Corrective Action</h5>
      </Modal.Header>
      <Modal.Body>
        {/* <pre>{JSON.stringify(assignees, undefined, 2)}</pre> */}

        <form onSubmit={handleSubmit}>
          <Row className="gap-2">
            <div>
              <Form.Label htmlFor="non_conformity_name" className="form-label">
                Non Conformity Name<span className="text-danger ms-1">*</span>
              </Form.Label>
              <Form.Control
                id="non_conformity_name"
                name="non_conformity_name"
                autoFocus
                value={data.non_conformity_name}
                type="text"
                className={
                  "form-control" +
                  (errors.non_conformity_name ? " is-invalid" : "")
                }
                onChange={(e: any) =>
                  setData("non_conformity_name", e.target.value)
                }
                required
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.non_conformity_name}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label
                htmlFor="non_conformity_description"
                className="form-label"
              >
                Non Conformity Description
              </Form.Label>
              <Form.Control
                id="non_conformity_description"
                name="non_conformity_description"
                as="textarea"
                value={data.non_conformity_description}
                rows={3}
                placeholder="Enter Finding..."
                className={
                  "form-control border border-0 bg-light text-secondary " +
                  (errors.non_conformity_description ? " is-invalid" : "")
                }
                onChange={(e: any) =>
                  setData("non_conformity_description", e.target.value)
                }
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.non_conformity_description}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label
                htmlFor="weakness_identification"
                className="form-label"
              >
                Weakness Identification
                <span className="text-danger ms-1">*</span>
              </Form.Label>
              <Form.Control
                id="weakness_identification"
                name="weakness_identification"
                type="text"
                value={data.weakness_identification}
                className={
                  "form-control" +
                  (errors.weakness_identification ? " is-invalid" : "")
                }
                onChange={(e: any) =>
                  setData("weakness_identification", e.target.value)
                }
                required
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.weakness_identification}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label htmlFor="detection_date" className="form-label">
                Detection Date<span className="text-danger">{"*"}</span>
              </Form.Label>
              <Flatpickr
                id="detection_date"
                className={`form-control ${
                  errors.detection_date ? "is-invalid" : ""
                }`}
                value={detectionDate}
                onChange={handleDateChange(setDetectionDate, "detection_date")}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                }}
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.detection_date}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label htmlFor="assignee_id" className="form-label">
                Assignee<span className="text-danger">{"*"}</span>
              </Form.Label>
              <select
                className={`form-select ${
                  errors.assignee_id ? "is-invalid" : ""
                }`}
                name="assignee_id"
                id="assignee_id"
                value={data.assignee_id}
                onChange={(e) => setData("assignee_id", e.target.value)}
                required
              >
                <option>Select...</option>
                {assignees.map((assign: any) => (
                  <option
                    key={assign.id}
                    value={assign.id}
                    hidden={assign.organization_id != userOrganization.id}
                  >
                    {assign.name}
                  </option>
                ))}
              </select>

              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.assignee_id}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label htmlFor="due_date" className="form-label">
                Due Sate<span className="text-danger">{"*"}</span>
              </Form.Label>
              <Flatpickr
                id="due_date"
                className={`form-control ${
                  errors.due_date ? "is-invalid" : ""
                }`}
                value={dueDate}
                onChange={handleDateChange(setDueDate, "due_date")}
                options={{
                  dateFormat: "Y-m-d",
                  minDate: "today",
                }}
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.due_date}
              </Form.Control.Feedback>
            </div>
            <div>
              <Form.Label htmlFor="criticality_rating" className="form-label">
                Criticality Rating<span className="text-danger">{"*"}</span>
              </Form.Label>
              <select
                className={`form-select ${
                  errors.criticality_rating ? "is-invalid" : ""
                }`}
                name="criticality_rating"
                id="criticality_rating"
                value={data.criticality_rating}
                onChange={(e) => setData("criticality_rating", e.target.value)}
                required
              >
                <option>Select...</option>
                <option value="low" className=" text-uppercase">
                  low
                </option>
                <option value="medium" className=" text-uppercase">
                  medium
                </option>
                <option value="high" className=" text-uppercase">
                  high
                </option>
              </select>

              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.criticality_rating}
              </Form.Control.Feedback>
            </div>
          </Row>
          <Row className="justify-content-md-center gap-3 py-3">
            <Col xl={2} md={6}>
              <Button
                type="submit"
                className="btn btn-primary w-100 text-uppercase"
                disabled={processing}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
}
