import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";


import UpgradeAccountNotise from "./UpgradeAccountNotise";
import UsersByDevice from "./UsersByDevice";
import Widget from "./Widget";
import AudiencesMetrics from "./AudiencesMetrics";
import AudiencesSessions from "./AudiencesSessions";
import LiveUsers from "./LiveUsers";
import TopReferrals from "./TopReferrals";
import TopPages from "./TopPages";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { SimpleDonut, SimplePie } from '../Charts/ApexCharts/PieCharts/PieCharts';
import { LineChart } from '../Charts/ECharts/ECharts';
import { SearchTable } from '../Tables/ReactTables/ReactTable';
import { Stacked } from '../Charts/ApexCharts/BarCharts/BarCharts';
import { StackedAreaChart } from '../Charts/ApexCharts/AreaCharts/AreaCharts';

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
          <BreadCrumb title="Analytics" pageTitle="Dashboards" />
          <Row>
            <Col xxl={5}>
              <UpgradeAccountNotise />
              <Widget />
            </Col>
            <LiveUsers />
          </Row>
          
          <Row>
            <AudiencesMetrics />
            <AudiencesSessions />
          </Row>
          <Row>
            <UsersByDevice />
            <TopReferrals />
            <TopPages />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
AdminDashboard.layout = (page: any) => <Layout children={page} />;
