import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Col, Container, Row, Card } from "react-bootstrap";

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

export default function PartnerDashboard({
  auth,
  duebillingData,
  totalCommission,
}: any) {
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

          {/* <pre>{JSON.stringify(totalCommission, undefined, 2)}</pre> */}
          <Row>
            <Col md={4}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Total Commission</h5>
                </Card.Header>
                <Card.Body>{totalCommission}</Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Upcomming Billing Due</h5>

                  <Row className="mt-5 mb-2">
                    <Col md={1}>SNo. </Col>
                    <Col md={4}>Organization Name </Col>
                    <Col md={3}>Due Date </Col>
                    <Col md={4}>Amount </Col>
                  </Row>
                  {duebillingData.map((item: any, index: number) => (
                    <Row key={index}>
                      <Col md={1}>{index + 1}</Col>
                      <Col md={4}>{item.organization.name}</Col>
                      <Col md={3}>{item.next_billingdate}</Col>
                      <Col md={4}>{item.billingAmount}</Col>
                    </Row>
                  ))}
                </Card.Header>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
PartnerDashboard.layout = (page: any) => <Layout children={page} />;
