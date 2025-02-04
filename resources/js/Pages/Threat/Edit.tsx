import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Edit({ auth, threat }: any) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    id: threat.id,
    name: threat.name || "",
    threats_value: threat.threats_value || "",
    threats_status: threat.threats_status || "",
    vulerability: threat.vulerability || "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    patch(route("threats.update", threat.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Threats" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Threats" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Name <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          value={data.name}
                          autoFocus
                          className={
                            "form-control" + (errors.name ? " is-invalid" : "")
                          }
                          onChange={(e: any) => setData("name", e.target.value)}
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="tvalue" className="form-label">
                          Value <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="tvalue"
                          name="threatsvalue"
                          placeholder="Enter Value"
                          value={data.threats_value}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.threats_value ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("threats_value", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.threats_value}
                        </Form.Control.Feedback>
                      </Col>

                      <Col md={6}>
                        <Row>
                          <Col>
                            <Form.Label
                              htmlFor="valnerability"
                              className="form-label"
                            >
                              Vulnerability{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <textarea
                              className="form-control"
                              id="valnerability"
                              name="valnerability"
                              onChange={(e: any) =>
                                setData("vulerability", e.target.value)
                              }
                              required
                              value={data.vulerability}
                            ></textarea>

                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.vulerability}
                            </Form.Control.Feedback>
                          </Col>
                        </Row>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Status <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("threats_status", e.target.value)
                          }
                          value={data.threats_status}
                          required
                        >
                          <option></option>
                          <option value="on">On</option>
                          <option value="off">Off</option>
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.threats_status}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("assetcategory.index")}
                          className="btn btn-light w-100"
                        >
                          Cancel
                        </Link>
                      </Col>
                      <Col xl={2} md={6}>
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

Edit.layout = (page: any) => <Layout children={page} />;
