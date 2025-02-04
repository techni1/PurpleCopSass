import React from "react";
import { Container } from "react-bootstrap";

import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";
import RiskDetails from "../RiskDetails";

const ClientOverview = ({ riskregister }: any) => {
  return (
    <React.Fragment>
      <Head title="Project Overview" />
      <div className="page-content">
        <Container fluid>
          <RiskDetails data={riskregister} />
          {/* <pre>{JSON.stringify(riskregister, undefined, 2)}</pre> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
ClientOverview.layout = (page: any) => <Layout children={page} />;
export default ClientOverview;
