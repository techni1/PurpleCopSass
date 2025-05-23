import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../../Layouts";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";

export default function Create({ auth, topics }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    topicid: "",

  });


  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("saquestions.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Security Awareness Question" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Security Awareness Question" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">

                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Topic{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("topicid", e.target.value)
                          }
                          name="topicid"
                          required
                        >
                          <option></option>

                          {topics.map((topic: any) => (
                            <option value={topic.id}>{topic.name}</option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.topicid}
                        </Form.Control.Feedback>


                      </Col>
                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Question <span className="text-danger ms-1">*</span>
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
