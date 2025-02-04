import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { Head } from "@inertiajs/react";
import Layout from "../../../Layouts";

const Overview = ({
  allEvidence,
  allPolicies,
  controlcode,
  control_policies,
  control_evidence,
}: any) => {
  return (
    <React.Fragment>
      <Head title="Genral Provision" />
      <div className="page-content">
        <Container fluid>
          <Section
            controlcode={controlcode}
            allEvidence={allEvidence}
            allPolicies={allPolicies}
            control_policies={control_policies}
            control_evidence={control_evidence}
          />
          {/* <pre>{JSON.stringify(control_evidence, undefined, 2)}</pre> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
Overview.layout = (page: any) => <Layout children={page} />;
export default Overview;
