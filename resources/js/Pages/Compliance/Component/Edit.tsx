import { Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { usePage } from "@inertiajs/react";
export default function Edit({ show, setShow, framework, compliance }: any) {
  const [editable, setEditable] = useState(true);
  const userRole = usePage().props.auth.roles;
  const {
    data,
    setData,
    patch,
    processing,
    errors,
    reset,
    recentlySuccessful,
  } = useForm({
    id: "",
    framework_id: "",
    state: "",
    framework_description: "",
    visibility: true,
  });

  useEffect(() => {
    setData({
      id: compliance.id,
      framework_id: compliance.framework.id,
      state: compliance.state,
      framework_description: compliance.framework_description,
      visibility: compliance.visibility,
    });
  }, [compliance]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    patch(route("compliance.update", compliance.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setEditable(true);
      },
    });
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <h5 className="me-2">Add Compliance</h5>
          {userRole[0] != "Guest" && (
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <Button
                variant="link"
                className="p-0 m-0"
                onClick={() => setEditable(false)}
              >
                <i className="ri-edit-2-fill fs-5 text-primary" />
              </Button>
            </OverlayTrigger>
          )}
        </Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(compliance, undefined, 2)}</pre> */}
          <form onSubmit={onSubmit}>
            <Row>
              <div className="mb-3">
                <Form.Label
                  htmlFor="choices-framework_id"
                  className="form-label"
                >
                  Select Framework <span className="text-danger">{"*"}</span>
                </Form.Label>
                <select
                  className={`form-select ${
                    errors.framework_id ? "is-invalid" : ""
                  }`}
                  name="framework_id"
                  id="choices-framework_id"
                  onChange={(e) => setData("framework_id", e.target.value)}
                  value={data.framework_id}
                  required
                  disabled={editable}
                >
                  <option>Select...</option>
                  {framework.map((item: any) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.framework_id && (
                  <Form.Control.Feedback
                    type="invalid"
                    className="mt-2 d-block"
                  >
                    {errors.framework_id}
                  </Form.Control.Feedback>
                )}
              </div>
            </Row>
            <Row>
              <div className="mb-3">
                <Form.Label htmlFor="choices-state" className="form-label">
                  State of Framework <span className="text-danger">{"*"}</span>
                </Form.Label>
                <select
                  className={`form-select ${errors.state ? "is-invalid" : ""}`}
                  name="state"
                  id="choices-state"
                  onChange={(e) => setData("state", e.target.value)}
                  value={data.state}
                  required
                  disabled={editable}
                >
                  <option>Select...</option>
                  <option value="compliant">Compliant</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="comingsoon">Coming soon</option>
                </select>
                {errors.state && (
                  <Form.Control.Feedback
                    type="invalid"
                    className="mt-2 d-block"
                  >
                    {errors.state}
                  </Form.Control.Feedback>
                )}
              </div>
            </Row>
            <Row>
              <div className="mb-3">
                <Form.Label
                  htmlFor="framework_description"
                  className="form-label"
                >
                  Short Description{" "}
                </Form.Label>
                <Form.Control
                  id="framework_description"
                  name="framework_description"
                  as="textarea"
                  rows={3}
                  placeholder="Enter short description"
                  value={data.framework_description}
                  className={
                    "mt-1 form-control" +
                    (errors.framework_description ? " is-invalid" : "")
                  }
                  onChange={(e: any) =>
                    setData("framework_description", e.target.value)
                  }
                  disabled={editable}
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.framework_description}
                </Form.Control.Feedback>
              </div>
            </Row>
            {/* <Row>
              <div className="mb-3">
                <div className="form-check form-switch form-switch-right form-switch-md">
                  <Form.Label
                    htmlFor="framework_description"
                    className="form-label"
                  >
                    Visibility{" "}
                  </Form.Label>

                  <Form.Check.Input
                    onChange={(e) => setData("visibility", e.target.checked)}
                    checked={data.visibility}
                    className="form-check-input code-switcher"
                    // id={provision.id}
                    type="checkbox"
                  />
                </div>
              </div>
            </Row> */}
            {!editable && (
              <Row className="justify-content-md-center gap-3">
                <Col xl={3} md={6}>
                  <Button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={processing || editable}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
