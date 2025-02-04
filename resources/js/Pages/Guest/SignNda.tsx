import React, { useEffect, useMemo, useState } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import NdaAgreement from "./NdaAggreement";

export default function SignNda({ auth, userNda }: any) {
  return (
    <React.Fragment>
      <Head title="NDA" />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <NdaAgreement auth={auth} userNda={userNda} />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
