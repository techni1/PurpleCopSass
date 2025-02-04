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

export default function CreateCorrectiveAction({
  sourceId,
  sourceType,
  show,
  setShow,
  causer,
}: any) {
  const dispatch = useDispatch();
  const assignees = useSelector(getAssigneeList);
  const assigneeStatus = useSelector(getAssigneeListStatus);
  const [detectionDate, setDetectionDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const userOrganization = usePage().props.auth.userOrganization;

  const { data, setData, post, processing, errors, reset, setError } = useForm({
    non_conformity_name: "",
    non_conformity_description: "",
    weakness_identification: "",
    detection_date: "",
    assignee_id: "",
    due_date: "",
    criticality_rating: "",
    source_type: sourceType,
    source_id: sourceId,
    causer: causer,
    attachment: null,
  });

  useEffect(() => {
    if (assigneeStatus == "idle") {
      //@ts-ignore
      dispatch(fetchAssigneeListData());
    }
  });

  useEffect(() => {
    const updateDate = {
      ...data,
      source_type: sourceType,
      source_id: sourceId,
      causer: causer,
    };
    setData(updateDate);
  }, [sourceId, sourceType, causer]);

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
    post(route("correctiveaction.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        handleClose();
      },
    });

    // const formData = new FormData();

    // formData.append("non_conformity_name", data.non_conformity_name);
    // formData.append(
    //   "non_conformity_description",
    //   data.non_conformity_description
    // );
    // formData.append("weakness_identification", data.weakness_identification);
    // formData.append("detection_date", data.detection_date);
    // formData.append("assignee_id", data.assignee_id);
    // formData.append("due_date", data.due_date);
    // formData.append("criticality_rating", data.criticality_rating);
    // // formData.append("audit_note", data.audit_ote);
    // if (sourceType != null) {
    //   formData.append("source_type", data.source_type);
    //   formData.append("source_id", data.source_id);
    // }

    // if (data.attachment) {
    //   formData.append("attachment", data.attachment);
    // }

    // try {
    //   const response = await axios.post("/store-corrective-action", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   if (response.data.success) {
    //     handleClose();
    //     //@ts-ignore
    //     dispatch(fetchCorrectiveActionData());
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
                Due Date<span className="text-danger">{"*"}</span>
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
            {/* <div>
              <Form.Label htmlFor="audit_note" className="form-label">
                Audit Note<span className="text-danger ms-1">*</span>
              </Form.Label>
              <Form.Control
                id="audit_note"
                name="audit_note"
                as="textarea"
                rows={3}
                placeholder="Enter Finding..."
                className={
                  "form-control border border-0 bg-light text-secondary " +
                  (errors.audit_note ? " is-invalid" : "")
                }
                onChange={(e: any) => setData("audit_note", e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.audit_note}
              </Form.Control.Feedback>
            </div> */}
            {/* <div>
              <Form.Label htmlFor="attachment" className="form-label">
                Add Attachments
              </Form.Label>
              <Form.Control
                id="attachment"
                name="attachment"
                type="file"
                className={
                  "mt-1 form-control" + (errors.attachment ? " is-invalid" : "")
                }
                onChange={(e: any) => setData("attachment", e.target.files[0])}
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.attachment}
              </Form.Control.Feedback>
            </div> */}
          </Row>
          <Row className="justify-content-md-center gap-3 py-3">
            {/* <Col xl={2} md={6}>
            <Button onClick={handleClose}>Cancle</Button>
          </Col> */}
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
