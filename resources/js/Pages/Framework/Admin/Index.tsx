import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import FrameworkCard from "./FrameworkCard";

export default function Index({
  frameworks,
  success,
  organization_frameworks,
  policyList,
  evidenceList,
}: any) {
  return (
    <React.Fragment>
      <Head title="Frameworks" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(frameworks, undefined, 2)}</pre> */}
          <BreadCrumb title="Frameworks" pageTitle="Dashboard" />
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
            {frameworks.data.map((framework: any) => (
              <Col key={framework.id} lg={4}>
                <FrameworkCard
                  framework={framework}
                  organization_frameworks={organization_frameworks}
                  policyList={policyList}
                  evidenceList={evidenceList}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
