import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import ShowOrganization from "./OrganizationOverview/Section";
import { SearchTable } from "./SearchTable";

export default function Index({ organizations, success }: any) {
  const user = usePage().props.auth.user;
  const userRole = usePage().props.auth.roles;

  const [userOrg, setUserOrg] = useState<any>(null);

  // useEffect(() => {
  //   if ((userRole[0] !== "Super-Admin" || userRole[0] !== "Partner" ) && user) {
  //     const foundOrg = organizations.data.find(
  //       (item: any) => item.id === user.organization_id
  //     );
  //     setUserOrg(foundOrg);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Head title="Organizations" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Organizations" pageTitle="Dashboard" />
          {/* {userRole[0] == "Super-Admin" && (
            <Row>
              <Col>
                <div className="h-100">
                  <Section />
                </div>
              </Col>
            </Row>
          )} */}
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
            {/* <pre>{JSON.stringify(organizations, undefined, 2)}</pre> */}
            <Col lg={12}>
             
                <Card>
                  <Card.Body>
                    <SearchTable
                      routeTo="organization.show"
                      tableData={organizations.data}
                    />
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
