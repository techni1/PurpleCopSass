import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

const ClientOverview = ({ framework, allProvisions, controls }: any) => {
  return (
    <React.Fragment>
      <Head title="Project Overview" />
      <div className="page-content">
        <Container fluid>
          <Section
            framework={framework}
            allProvisions={allProvisions}
            controls={controls}
          />
          {/* <pre>{JSON.stringify(controls, undefined, 2)}</pre> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
ClientOverview.layout = (page: any) => <Layout children={page} />;
export default ClientOverview;
