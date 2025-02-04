import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Assign({ auth, usersAssignee, risks }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    assetId: "",
    riskId: "",
    userid: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("riskregister.storeassignee"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Assignee  Risk Register" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Assignee Risk Register" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <pre>{JSON.stringify(usersAssignee, undefined, 2)}</pre> */}
                  {/* <pre>{JSON.stringify(risks, undefined, 2)}</pre> */}

                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Card className="bg-primary text-white">
                        <CardHeader className="text-white">
                          Assets Name :- {risks[0].assest.name}
                        </CardHeader>
                        <CardBody className="text-white">
                          <Col md={12}>
                            <Row>
                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  CIA Value
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].assetvalue}
                                  className="form-control"
                                  readOnly
                                />

                                <input
                                  type="hidden"
                                  name="assetId"
                                  value={risks[0].assest.id}
                                  onChange={(e: any) =>
                                    setData("assetId", e.target.value)
                                  }
                                />
                                <input
                                  type="hidden"
                                  name="riskId"
                                  value={risks[0].id}
                                  onChange={(e: any) =>
                                    setData("riskId", e.target.value)
                                  }
                                />
                              </Col>

                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  Risk Value
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].risk_value}
                                  className="form-control"
                                  readOnly
                                />
                              </Col>

                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  Risk Status
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].riskstrategy_option}
                                  className="form-control"
                                  readOnly
                                />
                              </Col>
                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  Risk Owner
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].risk_owner}
                                  className="form-control"
                                  readOnly
                                />
                              </Col>

                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  Due Date
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].closed_date}
                                  className="form-control"
                                  readOnly
                                />
                              </Col>

                              <Col md={2}>
                                <Form.Label
                                  htmlFor="assetId"
                                  className="form-label"
                                >
                                  ControlCode
                                </Form.Label>
                                <Form.Control
                                  id="assetowner"
                                  value={risks[0].controlcode.code}
                                  className="form-control"
                                  readOnly
                                />
                              </Col>

                              <Col md={6}>
                                <Row className="pt-3">
                                  <Col md={10}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      Threats
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].threats.name}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                  <Col md={2}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      Threats Value
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].threats_value}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={6}>
                                <Row className="pt-3">
                                  <Col md={8}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      Velerability
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].threats.vulerability}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                  <Col md={4}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      Velerability Value
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].vulerability_value}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                </Row>
                              </Col>

                              <Col md={12}>
                                <Row className="pt-3">
                                  <Col md={2}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      ISMS No
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].isms_control_no}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                  <Col md={10}>
                                    <Form.Label
                                      htmlFor="assetId"
                                      className="form-label"
                                    >
                                      Activity/ Control details (Reasons for
                                      Acceptance)
                                    </Form.Label>
                                    <Form.Control
                                      id="assetowner"
                                      value={risks[0].provision.provisions}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </CardBody>
                      </Card>

                      <Card>
                        <CardHeader>Assignee Details</CardHeader>
                        <CardBody>
                          <Col md={8}>
                            <Form.Label htmlFor="userid" className="form-label">
                              Activity/ Control details (Reasons for Acceptance)
                            </Form.Label>
                            <select
                              id="userid"
                              className="form-control form-select"
                              onChange={(e: any) =>
                                setData("userid", e.target.value)
                              }
                            >
                              <option></option>

                              {usersAssignee.map((user: any) => (
                                <option key={user.id} value={user.id}>
                                  {user.name}
                                </option>
                              ))}
                            </select>
                          </Col>
                        </CardBody>
                      </Card>
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
                          className="btn btn-info w-100"
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

Assign.layout = (page: any) => <Layout children={page} />;
