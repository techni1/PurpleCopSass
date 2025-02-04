import { useForm } from "@inertiajs/react";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function FindingRemark({ show, setShow, finding }: any) {
  const { data, setData, patch, reset, errors, processing } = useForm({
    status: "closed",
    remark: "",
  });

  const onRemarkSubmit = async (e: any) => {
    e.preventDefault();
    patch(route("finding.update", finding), {
      preserveScroll: true,
      onSuccess: () => {
        setShow(false);
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
                id="remark"
                name="remark"
                as="textarea"
                rows={3}
                placeholder="Your Remark..."
                autoFocus
                value={data.remark}
                className={
                  "form-control border border-0 bg-light text-secondary " +
                  (errors.remark ? " is-invalid" : "")
                }
                onChange={(e: any) => setData("remark", e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                {errors.remark}
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
