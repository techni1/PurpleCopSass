import React, { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SinglePolicy from "./SinglePolicy";

export default function Show({
  policy,
  assigneeList,
  documents,
  editorFiles,
  auditId,
  findings,
  departments,
}: any) {
  return (
    <React.Fragment>
      <Head title="Policy" />
      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(findings, undefined, 2)}</pre> */}
          <SinglePolicy
            policy={policy}
            documents={documents.data}
            files={editorFiles.data}
            assignees={assigneeList}
            auditId={auditId}
            findings={findings}
            departments={departments}
          />
        </Container>
      </div>
    </React.Fragment>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
