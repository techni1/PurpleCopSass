import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

export default function Create({ auth, framework }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    id: framework.id,
    name: framework.name || "",
    status: framework.status || "",
    description: framework.description || "",
    logo: null, // Initialize as null for file input
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("framework.update", framework.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Frameworks" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Framework" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <pre>{JSON.stringify(framework, undefined, 2)}</pre> */}

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
                        <Form.Label htmlFor="status" className="form-label">
                          Status <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          defaultValue={data.status}
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="0">BLOCK</option>
                          <option value="1">ON</option>
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={6}>
                        {/*  Replace Project Image */}
                        {framework.logo_path && (
                          <div className="w-25">
                            <img
                              src={framework.logo_path}
                              alt=""
                              className="w-50"
                            />
                          </div>
                        )}
                        <Form.Label htmlFor="logo" className="form-label">
                          Logo
                        </Form.Label>
                        <Form.Control
                          id="logo"
                          name="logo"
                          type="file"
                          className={
                            "mt-1 form-control" +
                            (errors.logo ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("logo", e.target.files[0])
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.logo}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={6}>
                        <Form.Label htmlFor="url" className="form-label">
                          Short Description{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={data.description}
                          onChange={(e: any) =>
                            setData("description", e.target.value)
                          }
                        ></textarea>

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
