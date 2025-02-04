import React from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { Head } from "@inertiajs/react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Layout from "../../Layouts";
import TitleBar from "../../Components/Project/TitleBar";
import { SearchTable } from "./SearchTable";

const Designation = ({ auth, success, designations }: any) => {
  return (
    <React.Fragment>
      <Head title="Designation" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Designation" pageTitle="Pages" />
          <Row>
            <Col>
              <div className="h-100">
                <TitleBar
                  title="List of all Designations"
                  routeTo={route("designation.create")}
                  buttonName="Add Designation"
                />
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
                  {/* <pre>
                                        {JSON.stringify(
                                            designations.data,
                                            undefined,
                                            2
                                        )}
                                    </pre> */}
                  <SearchTable
                    routeTo="organization.show"
                    tableData={designations}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
Designation.layout = (page: any) => <Layout children={page} />;
export default Designation;
