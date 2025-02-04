import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Index({
  auth,
  entities,
  success,
  securityOfficers,
}: any) {
  return (
    <React.Fragment>
      <Head title="Entities" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Entities" pageTitle="Dashboard" />
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
                  {/* <pre>{JSON.stringify(entities, undefined, 2)}</pre> */}
                  <SearchTable
                    routeTo="entity.show"
                    tableData={entities}
                    securityOfficers={securityOfficers}
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
