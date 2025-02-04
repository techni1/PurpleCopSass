import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ auth, threats, riskcategory }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    status: "",
    perority: "",
    threatt: [],
    riskcat: "",
  });

  const [threatt, setThreatt] = useState([]);

  const handleThreattChange = (e: any) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setData("threatt", selectedOptions);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("risk.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Risk" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Risk" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Risk Name <span className="text-danger ms-1">*</span>
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
                        <Form.Label htmlFor="threatt" className="form-label">
                          Select Threats{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          id="threatt"
                          name="threatt"
                          onChange={handleThreattChange}
                          required
                          multiple
                        >
                          <option></option>
                          {threats.map((threat: any) => (
                            <option key={threat.id} value={threat.id}>
                              {threat.name}
                            </option>
                          ))}
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.threatt}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="riskcat" className="form-label">
                          Select Risk Category{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          id="riskcat"
                          name="riskcat"
                          onChange={handleChange}
                          required
                        >
                          <option></option>
                          {riskcategory.map((rcategory: any) => (
                            <option key={rcategory.id} value={rcategory.id}>
                              {rcategory.name}
                            </option>
                          ))}
                        </select>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="perority" className="form-label">
                          Risk Priority{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          id="perority"
                          name="perority"
                          onChange={(e: any) =>
                            setData("perority", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.perority}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Status <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          name="status"
                          required
                        >
                          <option></option>
                          <option value="1">On</option>
                          <option value="0">Off</option>
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

Create.layout = (page: any) => <Layout children={page} />;
