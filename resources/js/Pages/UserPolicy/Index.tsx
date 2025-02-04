import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import { SearchTable } from "./SearchTable";
import Widgets from "./Widgets";
// import { SearchTable } from "./SearchTable";

export default function Index({ userpolicies, success, assignees }: any) {
  const [notUploaded, setNotUploaded] = useState(0);
  const [draft, setDraft] = useState(0);
  const [approved, setApproved] = useState(0);
  const [noReviewDateCount, setNoReviewDate] = useState(0);

  useEffect(() => {
    const countPolicies = () => {
      let notUploadedCount = 0;
      let draftCount = 0;
      let approvedCount = 0;
      let noReviewDateCount = 0;

      userpolicies.data.forEach((userpolicy: any) => {
        if (userpolicy.status === "not_uploaded") {
          notUploadedCount++;
        } else if (userpolicy.status === "draft") {
          draftCount++;
        } else if (userpolicy.status === "approved") {
          approvedCount++;
        }

        if (!userpolicy.review_date) {
          noReviewDateCount++;
        }
      });

      setNotUploaded(notUploadedCount);
      setDraft(draftCount);
      setApproved(approvedCount);
      setNoReviewDate(noReviewDateCount);
    };

    countPolicies();
  }, [userpolicies.data]);

  return (
    <React.Fragment>
      <Head title="User Policy" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="User Policy" pageTitle="Dashboard" />
          <pre>{JSON.stringify(userpolicies, undefined, 4)}</pre>

          <Row>
            <Widgets title="Not Uploaded" value={notUploaded} />
            <Widgets title="Draft" value={draft} />
            <Widgets title="Approved" value={approved} />
            <Widgets title="Need Review" value={noReviewDateCount} />
          </Row>
          <Row>
            <Col>
              <div className="h-100">
                <Section />
              </div>
            </Col>
          </Row>
          {success && (
            <Row>
              <Col>
                <Alert
                  variant="secondary"
                  className="text-white bg-secondary alert-label-icon"
                  role="alert"
                  closeVariant="white"
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <SearchTable
                    routeTo="userpolicy.show"
                    tableData={userpolicies}
                    assignees={assignees}
                  /> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
