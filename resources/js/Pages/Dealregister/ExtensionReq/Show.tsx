import React, { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Show({ auth, dealextension, success }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    extension_date: dealextension.approved_expirydate || "",
    status: dealextension.status || "pending",
    dealregister_id: dealextension.id,
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    // Debug: log data before submit
    console.log("Submitting:", data);
    post(route("dealregister.extensionstore"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <React.Fragment>
      <Head title="Deal Register" />

      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}

          {/* <pre>{JSON.stringify(dealregister, undefined, 2)}</pre> */}
          <Row>
            <Col>
              <div className="h-100">{/* <Section /> */}</div>
            </Col>
          </Row>
          {success && (
            <Row>
              <Col>
                <Alert
                  variant="secondary"
                  className="text-white bg-secondary alert-label-icon"
                  role="alert"
                  closeVariant="white"
                  dismissible
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Row>
                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <h4 className="fs-16 mb-1">Deal Register Detail</h4>
                    </Card.Header>
                    <Card.Body>
                      {/* <pre>{JSON.stringify(dealextension, undefined, 2)}</pre> */}
                      <Col md={12}>
                        <Row>
                          <Col md={6}>
                            <label className="form-label">Deal Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.deal_name}
                              readOnly
                            />
                          </Col>
                          <Col md={6}>
                            <label className="form-label">
                              Deal Expiry Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.expiry_date}
                              readOnly
                            />
                          </Col>
                          <Col md={6} className="mt-2">
                            <label className="form-label">Contact Person</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.contact_person}
                              readOnly
                            />
                          </Col>
                          <Col md={6} className="mt-2">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.contact_number}
                              readOnly
                            />
                          </Col>
                          <Col md={6} className="mt-2">
                            <label className="form-label">Deal Value</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.deal_value}
                              readOnly
                            />
                          </Col>
                          <Col md={6} className="mt-2">
                            <label className="form-label">Deal Status</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.dealregister.deal_status}
                              readOnly
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card>
                    <Card.Header>
                      <h4 className="fs-16 mb-1">Partner Detail</h4>
                    </Card.Header>
                    <Card.Body>
                      <Col md={12}>
                        <Row>
                          <Col md={6}>
                            <label className="form-label">Partner Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.partner.name}
                              readOnly
                            />
                          </Col>
                          <Col md={6}>
                            <label className="form-label">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.partner.email}
                              readOnly
                            />
                          </Col>
                          <Col md={6} className="mt-2">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              value={dealextension.partner.user_contact_no}
                              readOnly
                            />
                          </Col>
                          <Col md={6}></Col>
                        </Row>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* <SearchTable
                    routeTo="mastersetting.show"
                    tableData={dealextension}
                  /> */}

              <Card>
                <Card.Header>
                  <h4 className="fs-16 mb-1">Request Detail</h4>
                </Card.Header>
                <form onSubmit={onSubmit}>
                  <Card.Body>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <label className="form-label">
                            Request Expiry Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={dealextension.extension_date}
                          />
                        </Col>
                        <Col md={6}>
                          <label className="form-label">Status</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setData("status", e.target.value)}
                            value={data.status}
                            required
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </Col>
                        <Col md={6} className="mt-2">
                          <label className="form-label">
                            Reason for expiry date extend
                          </label>
                          <textarea className="form-control" rows={3} readOnly>
                            {dealextension.extension_reason}
                          </textarea>
                        </Col>
                        <Col md={6} className="mt-2">
                          <label className="form-label">
                            Approved Expiry Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={data.extension_date}
                            onChange={(e) =>
                              setData("extension_date", e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Card.Body>
                  <Card.Footer>
                    <Col md={12}>
                      <Row>
                        <Col></Col>
                        <Col>
                          <div className="d-flex justify-content-end">
                            <Button
                              type="button"
                              className="btn btn-secondary me-2 w-100"
                              onClick={() => {
                                // Handle the button click
                              }}
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processing}
                            >
                              Submit
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Card.Footer>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
