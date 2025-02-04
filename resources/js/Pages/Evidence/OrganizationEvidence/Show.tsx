import React, { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import SingleEvidence from "./SingleEvidence";

export default function Show({
  evidence,
  assigneeList,
  documents,
  editorFiles,
  auditId,
  findings,
  departments,
}: any) {
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(evidence, undefined, 2)}</pre> */}
      <Head title="Evidence" />
      <div className="page-content">
        <Container fluid>
          <SingleEvidence
            evidence={evidence}
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
