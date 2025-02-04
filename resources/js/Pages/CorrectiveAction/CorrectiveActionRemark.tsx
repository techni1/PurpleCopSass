import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCorrectiveActionData } from "../../slices/correctiveAction/reducer";

export default function CorrectiveActionRemark({
  show,
  setShow,
  correctiveAction,
}: any) {
  const dispatch = useDispatch();

  const { data, setData, reset, post, errors, processing } = useForm({
    id: "",
    status: "close",
    audit_note: "",
    _method: "PUT",
  });

  useEffect(() => setData("id", correctiveAction.id), [correctiveAction]);

  const onRemarkSubmit = async (e: any) => {
    e.preventDefault();
    post(route("correctiveaction.update", correctiveAction), {
      preserveScroll: true,
      onSuccess: () => {
        setShow(false);
        //@ts-ignore
        dispatch(fetchCorrectiveActionData());
        reset();
      },
    });
  };
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header>Leave Remark Before Closing</Modal.Header>
      <Modal.Body>
        <form onSubmit={onRemarkSubmit}>
          <Row>
            <Col>
              <Form.Control
                id="audit_note"
                name="audit_note"
                as="textarea"
                rows={3}
                placeholder="Your Remark..."
                autoFocus
                value={data.audit_note}
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="submit"
                className="btn btn-primary w-100"
                disabled={processing}
              >
                Submit Remark & Close
              </Button>
            </Col>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
}
