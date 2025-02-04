import React, { useEffect, useMemo, useState } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import NdaUserForm from "./NdaUserFrom";

export default function Create({ auth, success }: any) {
  return (
    <React.Fragment>
      <Head title="Document" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Document" pageTitle="Dashboard" />

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
            <Col xl={6}>
              <NdaUserForm />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Create.layout = (page: any) => <Layout children={page} />;
