import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Index({ auth, partner, success, partnerCategory }: any) {
  return (
    <React.Fragment>
      <Head title="Partner Management" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(partner, undefined, 2)}</pre> */}
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}
          <Row>
            <Col>
              <div className="h-100">
                <Section
                  pcategory={partnerCategory}
                />
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
                  <SearchTable routeTo="partner.show" tableData={partner} pcategory={partnerCategory} />
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
