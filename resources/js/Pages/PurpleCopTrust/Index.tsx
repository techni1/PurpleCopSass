import React, { useEffect, useState } from "react";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Head, usePage } from "@inertiajs/react";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import CompanyProfile from "./Component/CompanyProfile";
import Compliances from "../Compliance/Component/Compliances";
import { SearchTable } from "./Component/SearchTable";

const TrustIndex = ({
  organization,
  framework,
  compliances,
  documentAccessList,
}: any) => {
  return (
    <React.Fragment>
      <Head title="Purplecop Trust" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Purplecop Trust" pageTitle="Dashboard" />
          <Tab.Container defaultActiveKey="1">
            <Row>
              <Col lg={12}>
                <Card className="mt-n4 mx-n4">
                  <div className="bg-primary-subtle">
                    <Card.Body className="pb-0 px-4">
                      <Row className="mb-3">
                        <div className="col-md">
                          <Row className="align-items-center g-3">
                            <div className="col-md-auto">
                              <div className="avatar-md">
                                <div className="avatar-title bg-white rounded-circle">
                                  <img
                                    src={organization?.logo_path}
                                    alt=""
                                    className="avatar-xs"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md">
                              <div>
                                <h4 className="fw-bold">
                                  {organization?.name}
                                </h4>
                                <div className="hstack gap-3 flex-wrap">
                                  <div>
                                    Last updated at :{" "}
                                    <span className="fw-medium">
                                      {organization?.created_at}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>

            <CompanyProfile organization={organization} />
            <Compliances framework={framework} compliances={compliances} />
            {documentAccessList?.data.length > 0 && (
              <Card>
                <Card.Header>
                  <h5>Document</h5>
                </Card.Header>
                <Card.Body>
                  <SearchTable tableData={documentAccessList.data} />
                </Card.Body>
              </Card>
            )}
          </Tab.Container>
        </Container>
      </div>
    </React.Fragment>
  );
};
TrustIndex.layout = (page: any) => <Layout children={page} />;
export default TrustIndex;
