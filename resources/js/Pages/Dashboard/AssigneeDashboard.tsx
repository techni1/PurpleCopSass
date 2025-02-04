import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import UpgradeAccountNotise from "./UpgradeAccountNotise";

export default function AdminDashboard({ auth }: any) {
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
            <UpgradeAccountNotise auth={auth} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
AdminDashboard.layout = (page: any) => <Layout children={page} />;
