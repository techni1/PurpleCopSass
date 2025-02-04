import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ functionalgroup }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    id: functionalgroup.id,
    name: functionalgroup.name || "",
    status: functionalgroup.status || "",
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("functionalgroup.update", functionalgroup.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Functional Group" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Functional Group" pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label
                          htmlFor="functionalgroup_name"
                          className="form-label"
                        >
                          Functional Group Name{" "}
                          <span className="text-danger ms-1">*</span>
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
                        <Form.Label htmlFor="status" className="form-label">
                          Status <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          value={data.status}
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="Active">Active</option>
                          <option value="Deactive">Deactive</option>
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("organization.index")}
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

Create.layout = (page: any) => <Layout children={page} />;
