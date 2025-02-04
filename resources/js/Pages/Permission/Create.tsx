import React from "react";
import Layout from "../../Layouts";

import { Head, useForm, Link, usePage } from "@inertiajs/react";
import BreadCrumb from "../../Components/Common/BreadCrumb";

import {
  Col,
  Container,
  Row,
  Card,
  Modal,
  Form,
  Dropdown,
  Button,
  CardBody,
  CardHeader,
} from "react-bootstrap";

export default function Create({ auth }: any) {
  const { data, setData, errors, post } = useForm({
    names: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route("permission.store"));
  }
  return (
    <React.Fragment>
      <Layout>
        <Head title="Permission" />
        <Container fluid>
          <div className="page-content">
            <BreadCrumb
              title="Create Permission"
              pageTitle="Permission Mangement"
            />
            <Row className=" justify-content-center">
              <Col lg={8}>
                <Card id="leadsList">
                  <Card.Header className="border-0">
                    <Row className="g-4 align-items-center">
                      <Col sm={3}>Add New Permission</Col>
                    </Row>
                  </Card.Header>

                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col">
                          <Form.Label htmlFor="inputnames">
                            Permissions (comma-separated)
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="inputnames"
                            name="names"
                            value={data.names}
                            onChange={(e) => setData("names", e.target.value)}
                            placeholder="Enter permissions, separated by commas"
                          />
                          <span className="text-red-600">{errors.names}</span>
                        </div>
                      </div>

                      <div className="col pt-5">
                        <div className="row">
                          <div className="col-md-4"></div>
                          <div className="col-md-4">
                            <div className="row gap-3">
                              <div className="col">
                                <Link
                                  href={route("role.index")}
                                  className="d-grid gap-2"
                                >
                                  <Button className="mt-2 pr-3 " size="sm">
                                    Cancel
                                  </Button>
                                </Link>
                              </div>
                              <div className="col d-grid gap-2">
                                <Button
                                  variant="primary"
                                  className="mt-2 pl-3 btn btn-success"
                                  size="sm"
                                  type="submit"
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
