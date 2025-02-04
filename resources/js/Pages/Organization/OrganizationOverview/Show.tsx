import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

const ClientOverview = ({ organization }: any) => {
  return (
    <React.Fragment>
      <Head title="Project Overview" />
      <div className="page-content">
        <Container fluid>
          <Section organization={organization} />
        </Container>
      </div>
    </React.Fragment>
  );
};
ClientOverview.layout = (page: any) => <Layout children={page} />;
export default ClientOverview;
