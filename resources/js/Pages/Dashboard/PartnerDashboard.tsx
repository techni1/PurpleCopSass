import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import UpgradeAccountNotise from "./UpgradeAccountNotise";
import UsersByDevice from "./UsersByDevice";
import Widget from "./Widget";
import AudiencesMetrics from "./AudiencesMetrics";
import AudiencesSessions from "./AudiencesSessions";
import LiveUsers from "./LiveUsers";
import TopReferrals from "./TopReferrals";
import TopPages from "./TopPages";

export default function PartnerDashboard({ auth }: any) {
  const [rightColumn, setRightColumn] = useState<boolean>(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <Head title="Partner Dashboard" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Partner" pageTitle="Dashboards" />
          <Row>
            <Col xxl={12}>
              Partner Dashboard

            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
}
PartnerDashboard.layout = (page: any) => <Layout children={page} />;
