import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Edit({ auth, department }: any) {
  const userId = auth.user.id;
  const { data, setData, post, processing, errors, reset } = useForm({
    id: department.id,
    name: department.name || "",
    description: department.description || "",
    updated_by: userId,
    created_by: department.createdBy.id,
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("department.update", department.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Department" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title={`Edit ${department.name}`} pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={12}>
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

                      <Col xl={12}>
                        <Form.Label
                          htmlFor="description"
                          className="form-label"
                        >
                          Description{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="description"
                          name="description"
                          as="textarea"
                          rows={3}
                          placeholder="Enter Description"
                          value={data.description}
                          className={
                            "mt-1 form-control" +
                            (errors.description ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("description", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.description}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("department.index")}
                          className="btn btn-secondary w-100"
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
