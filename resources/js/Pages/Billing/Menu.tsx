import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Menu({ auth, success }: any) {
  return (
    <React.Fragment>
      <Head title="Billing" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}
          <Row>
            <Col>
              <div className="h-100">
              <Row className="mb-3 pb-1">


<Col xs={12}>
  <div className="d-flex align-items-lg-center flex-lg-row flex-column">
    <div className="flex-grow-1">
      <h4 className="fs-16 mb-1">Billing Management</h4>
    </div>
    <div className="md-12 mt-lg-0">

      <Row>
        <Col>



        

        </Col>

      </Row>

      <Row className="align-items-center">




      </Row>

    </div>
  </div>
</Col>
</Row>
                
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
                  dismissible
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
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h5 className="card-title">Quotation</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link href={route('quotation.index')}  className="btn btn-primary">Create Quotation </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                    <h5 className="card-title">Billing</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      
                                        <Link href={route('billing.index')}  className="btn btn-primary">Create Billing </Link>
                                    </Card.Body>
                                </Card>
                            
                            </Col>
                        </Row>
                    
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Menu.layout = (page: any) => <Layout children={page} />;
