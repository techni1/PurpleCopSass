import { Link, useForm } from "@inertiajs/react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function Create({ show, setShow, framework }: any) {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } =
    useForm({
      framework_id: "",
      state: "",
      framework_description: "",
      visibility: true,
      attachment: null,
    });
  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("compliance.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setShow(false);
      },
    });
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <h5>Add Compliance</h5>
        </Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(framework, undefined, 2)}</pre> */}
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
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.framework_description}
                </Form.Control.Feedback>
              </div>
            </Row>
            <Row>
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
            </Row>
            <Row>
              <div className="mb-3">
                <Form.Label
                  htmlFor="choices-roles-status-input"
                  className="form-label"
                >
                  Upload Attachment
                </Form.Label>
                <div>
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
                </div>
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.attachment}
                </Form.Control.Feedback>
              </div>
            </Row>

            <Row className="justify-content-md-center gap-3">
              <Col xl={3} md={6}>
                <Button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={processing}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
