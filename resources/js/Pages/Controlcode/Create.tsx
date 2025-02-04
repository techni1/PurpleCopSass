import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({
  auth,
  functionalgroups,
  controldomains,
  users,
}: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    code: "",
    // control_weight: 0,
    description: "",
    control_domain_id: "",
    functional_group_id: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("controlcode.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  // const [sliderValue, setSliderValue] = useState(1);

  // const handleSliderChange = (e: any) => {
  //   setSliderValue(e.target.value);
  //   setData("control_weight", sliderValue);
  // };

  return (
    <React.Fragment>
      <Head title="ControlCode" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add ControlCode" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(functionalgroups, undefined, 2)}</pre> */}
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
                        <Form.Label htmlFor="code" className="form-label">
                          Code <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <Form.Control
                          id="code"
                          name="code"
                          placeholder="Enter ControlCode"
                          value={data.code}
                          autoFocus
                          className={
                            "form-control" + (errors.code ? " is-invalid" : "")
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

                      {/* <Col xl={3}>
                        <Form.Label htmlFor="code" className="form-label">
                          Add Assignee{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select"
                          name="assign"
                          onChange={(e: any) =>
                            setData("assign", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          {users.map((user: any) => (
                            <option value={user.id}>{user.name}</option>
                          ))}
                        </select>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.code}
                        </Form.Control.Feedback>
                      </Col> */}
                      {/* <Col xl={3}>
                        <Form.Label htmlFor="code" className="form-label">
                          Control Scope{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select className="form-control form-select">
                          <option></option>
                          <option>Out Of Scope</option>
                          <option>In Scope</option>
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.code}
                        </Form.Control.Feedback>
                      </Col> */}

                      <Col xl={6}>
                        <Form.Label htmlFor="code" className="form-label">
                          Control Domain{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select "
                          onChange={(e) =>
                            setData("control_domain_id", e.target.value)
                          }
                        >
                          <option>Select...</option>
                          {controldomains.map((controldomain: any) => (
                            <option
                              key={controldomain.id}
                              value={controldomain.id}
                            >
                              {controldomain.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.code}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="code" className="form-label">
                          Function Grouping{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select"
                          onChange={(e) =>
                            setData("functional_group_id", e.target.value)
                          }
                        >
                          <option>Select...</option>
                          {functionalgroups.map((functionalgroup: any) => (
                            <option
                              key={functionalgroup.id}
                              value={functionalgroup.id}
                            >
                              {functionalgroup.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.code}
                        </Form.Control.Feedback>
                      </Col>

                      {/* <Col xl={8}>
                        <h5 className="fs-14">Control Weightage</h5>
                        <Form.Range
                          value={sliderValue}
                          name="hello"
                          onChange={handleSliderChange}
                          className="custom-slider"
                          min={0}
                          max={10}
                        />
                        <p>Selected Value: {sliderValue}</p>
                      </Col> */}

                      <Col xl={12}>
                        <Form.Label htmlFor="url" className="form-label">
                          Short Description{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <textarea
                          className="form-control"
                          name="description"
                          onChange={(e: any) =>
                            setData("description", e.target.value)
                          }
                          required
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
