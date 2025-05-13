import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";
import Section from "././Section";
import { SearchTable } from "././SearchTable";

export default function Index({ auth, duebilling, success }: any) {
  return (
    <React.Fragment>
      <Head title="Payment Due" />

      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}

          {/* <pre>{JSON.stringify(duebilling, undefined, 2)}</pre> */}
          <Row>
            <Col>
              <div className="h-100">
                <Section />
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
              <Card>
                <Card.Body>
                  <SearchTable
                    routeTo="mastersetting.show"
                    tableData={duebilling}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
