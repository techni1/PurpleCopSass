import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";
import { useEffect, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";

export default function ApproverRemark({
  id,
  approver,
  approverRemark,
  setApproverRemark,
  approverStatus,
}: any) {
  const user = usePage().props.auth.user;
  const [isSubmitBtnDisable, setIsSubmitBtnDisable] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    id: id,
    remark: approverRemark || "",
  });
  const onSubmit = async (e: any) => {
    setIsSubmitBtnDisable(true);
    e.preventDefault();
    try {
      //@ts-ignore
      const response = await axios.post("/add-policy-approver-remark", {
        ...data,
      });
      if (response.data.success) {
        setApproverRemark(data.remark);
        reset();
      }
    } catch (error) {
      console.error("error storing data", error);
    } finally {
      setIsSubmitBtnDisable(false);
    }
  };

  return (
    <Card className="p-4">
      <Row>
        <Row>
          <h5>Approver Remarks</h5>
        </Row>
        {approverRemark ? (
          <Row>
            <Col>
              <div className="p-2 d-flex justify-content-between align-items-end mb-2 border">
                <span>{approverRemark}</span>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <div className="p-2 d-flex justify-content-between align-items-end mb-2 border">
                <span className="text-muted">No Remarks</span>
              </div>
            </Col>
          </Row>
        )}

        {user.id == approver && approverStatus != "approved" && (
          <form onSubmit={onSubmit}>
            <Row>
              <Col>
                <Form.Control
                  id="remark"
                  name="remark"
                  as="textarea"
                  rows={3}
                  placeholder="Enter Remark..."
                  autoFocus
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
              <Col lg={3}>
                <Button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitBtnDisable}
                >
                  Submit Remark
                </Button>
              </Col>
            </Row>
          </form>
        )}
      </Row>
    </Card>
  );
}
