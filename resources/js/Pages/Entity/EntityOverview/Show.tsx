import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

const EntityOverview = ({ entity, securityOfficers }: any) => {
  return (
    <React.Fragment>
      <Head title="Project Overview" />
      <div className="page-content">
        <Container fluid>
          <Section entity={entity} securityOfficers={securityOfficers} />
          {/* <pre>{JSON.stringify(entity, undefined, 2)}</pre> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
EntityOverview.layout = (page: any) => <Layout children={page} />;
export default EntityOverview;
