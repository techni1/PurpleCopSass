import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ auth }: any) {
  const userId = auth.user.id;
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    description: "",
    created_by: userId,
    updated_by: userId,
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    post(route("designation.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Designations" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Designations" pageTitle="Dashboard" />

          <Row className="justify-content-center">
            <Col lg={8}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
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
                    </Row>
                    <Row className="p-4 pt-0">
                      <Form.Label htmlFor="description" className="form-label">
                        Description <span className="text-danger ms-1">*</span>
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
                    </Row>

                    <Row className="justify-content-md-center gap-3">
                      <Col xl={3} md={6}>
                        <Link
                          href={route("designation.index")}
                          className="btn btn-light w-100"
                        >
                          Cancel
                        </Link>
                      </Col>
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
