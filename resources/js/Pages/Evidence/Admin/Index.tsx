import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { SearchTable } from "./SearchTable";
// import { SearchTable } from "./SearchTable";

export default function Index({ policies, success }: any) {
  return (
    <>
      <Head title="Evidence" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Evidence" pageTitle="Dashboard" />

          <Row className="pb-4">
            <Col xs={12}>
              <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                <div className="flex-grow-1">
                  <h4 className="fs-16 mb-1">List of All Evidence</h4>
                </div>
                <div className="mt-3 mt-lg-0">
                  <form action="#">
                    <Row className="g-3 mb-0 align-items-center">
                      <div className="col-auto">
                        <Link
                          href={route("evidence.create")}
                          className="btn btn-soft-primary"
                        >
                          <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                          Add Evidence
                        </Link>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
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
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <pre>{JSON.stringify(policies, undefined, 2)}</pre> */}
                  <SearchTable tableData={policies} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
