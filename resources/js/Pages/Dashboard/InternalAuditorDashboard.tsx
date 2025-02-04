import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function AdminDashboard() {
  const [rightColumn, setRightColumn] = useState<boolean>(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <Head title="Admin Dashboard" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Admin Dashboard" pageTitle="" />
          <Row>
            <Col>
              <div className="h-100">Internal Auditor Dashboard</div>
            </Col>
            {/* <RecentActivity rightColumn={rightColumn} hideRightColumn={toggleRightColumn} /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
AdminDashboard.layout = (page: any) => <Layout children={page} />;
