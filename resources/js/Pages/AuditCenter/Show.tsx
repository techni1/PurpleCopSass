import { Head } from "@inertiajs/react";
import { Card, Container } from "react-bootstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Layout from "../../Layouts";
import AuditDetail from "./AuditDetail";

export default function Show({
  audits,
  assignees,
  policies,
  evidences,
  findings,
}: any) {
  return (
    <>
      <Head title="Audit Center" />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Audit Center" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(policies.data, undefined, 2)}</pre> */}
          <AuditDetail
            auditDetails={audits}
            policies={policies}
            evidences={evidences}
            assigneeList={assignees}
            findings={findings}
          />
        </Container>
      </div>
    </>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
