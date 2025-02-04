import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Edit({
  provision,
  frameworks,
  provision_categories,
}: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    id: provision.id,
    code: provision.code || "",
    category_id: provision.category.id || "",
    status: provision.status || "",
    provisions: provision.provisions || "",
    framework_name: provision.framework_name || "",
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("provisions.update", provision.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Provisions" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Provisons" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4 g-3">
                      <Col xl={8}>
                        <Form.Label htmlFor="provisions" className="form-label">
                          Provision <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <textarea
                          className="form-control"
                          name="provisions"
                          value={data.provisions}
                          onChange={(e: any) =>
                            setData("provisions", e.target.value)
                          }
                          required
                        ></textarea>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.provisions}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={4}>
                        <Form.Label
                          htmlFor="category_id"
                          className="form-label"
                        >
                          Category <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          value={data.category_id}
                          onChange={(e: any) =>
                            setData("category_id", e.target.value)
                          }
                          name="category_id"
                          required
                        >
                          <option>Select...</option>

                          {provision_categories.data.map((category: any) => (
                            <option key={category.id} value={category.id}>
                              {category.category_number}
                              {" - "}
                              {category.name}
                            </option>
                          ))}
                        </select>
                        {/* <textarea
                          className="form-control"
                          name="category_id"
                          value={data.category_id}
                          onChange={(e: any) =>
                            setData("category_id", e.target.value)
                          }
                          required
                        ></textarea> */}

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.category_id}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={4}>
                        <Form.Label htmlFor="code" className="form-label">
                          Article Code{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="code"
                          name="code"
                          placeholder="Enter Article No."
                          value={data.code}
                          className={
                            "form-control " + (errors.code && " is-invalid")
                          }
                          onChange={(e: any) => setData("code", e.target.value)}
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.code}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={4}>
                        <Form.Label htmlFor="status" className="form-label">
                          Status <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select"
                          value={data.status}
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          name="status"
                          required
                        >
                          <option>Select...</option>

                          <option value="1">ON</option>
                          <option value="0">OFF</option>
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={4}>
                        <Form.Label htmlFor="name" className="form-label">
                          Framework <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          value={data.framework_name}
                          onChange={(e: any) =>
                            setData("framework_name", e.target.value)
                          }
                          name="framework_name"
                          required
                        >
                          <option>Select...</option>

                          {frameworks.map((framework: any) => (
                            <option value={framework.name}>
                              {framework.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.framework_name}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("provisions.index")}
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
