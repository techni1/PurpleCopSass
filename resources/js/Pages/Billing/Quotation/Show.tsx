import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Show({ auth, billing, mastersetting, organization, entity, packagedata, offers, framwork, bank, success }: any) {
  return (
    <React.Fragment>
      <Head title="Billing Quotation" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
          {/* <BreadCrumb title="Employee" pageTitle="Dashboard" /> */}
          <Row>
            <Col>
              <div className="h-100">
                Billing Quotation
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
                <CardBody>
                       {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}

                       <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Organization</h6>
                                <p>{billing.organization_id.name}</p>
                            </div>

                            <div className="col-md-6">
                                <h6>Enitiy</h6>
                                <p>{billing.entity_id.name}</p>
                            </div>


                            <div className="col-md-6">
                                <h6>Package</h6>
                                <p>{billing.package_id.name}</p>
                            </div>

                            <div className="col-md-6">
                                <h6>Package Description</h6>
                                <p>{billing.package_id.short_desc}</p>
                            </div>


                            <div className="col-md-6">
                                <h6>Offers</h6>
                                <p>{billing.offer_id.name}</p>
                            </div>

                            <div className="col-md-6">
                                <h6>Offer Start Date</h6>
                                <p>{billing.offer_id.offer_startdate}</p>
                            </div>

                            <div className="col-md-6">
                                <h6>Offer End Date</h6>
                                <p>{billing.offer_id.offer_enddate}</p>
                            </div>


                            <div className="col-md-4">
                                <h6>Invoice No</h6>
                                <p>{billing.invoce_no}</p>
                            </div>


                            <div className="col-md-4">
                                <h6>Invoice Date</h6>
                                <p>{billing.invoice_date}</p>
                            </div>
                            

                            <div className="col-md-4">
                                <h6>Invoice Due Date</h6>
                                <p>{billing.invoice_due_date}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>PO Number</h6>
                                <p>{billing.ponumber}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Payment Term</h6>
                                <p>{billing.payment_term}</p>
                            </div>
                            


                            <div className="col-md-12">
                                <Card>
                                    <CardBody>
                                    <div className="row">
                                    <div className="col-md-1" align="center">S.No</div>
                                    <div className="col-md-4"  align="center">Framework</div>
                                    <div className="col-md-2"  align="center">Unit Price</div>
                                    <div className="col-md-1"  align="center">Qty</div>
                                    <div className="col-md-2"  align="center">HSN</div>
                                    <div className="col-md-2"  align="center"> Amount</div>
                                    
                                </div>
                                {billing.item_desc.map((item:any, index:any)=>(
                                    <div className="row" key={index}>
                                    <div className="col-md-1" align="center">{index+1}</div>
                                    <div className="col-md-4"  align="center">{item.framwork}</div>
                                    <div className="col-md-2"  align="center">{item.unitPrice}</div>
                                    <div className="col-md-1"  align="center">{item.qty}</div>
                                    <div className="col-md-2"  align="center">{item.hsn}</div>
                                    <div className="col-md-2"  align="center">{item.singleAmt}</div>
                                    </div>
                                ))}
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <h6>Payment Term</h6>
                                <p>{billing.subtotal}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Payment Term</h6>
                                <p>{billing.tax}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Payment Term</h6>
                                <p>{billing.taxable_total}</p>
                            </div>
                           
                            <div className="col-md-4">
                                <h6>Payment Term</h6>
                                <p>{billing.billingAmount}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Billing Status</h6>
                                <p>{billing.billing_status}</p>
                            </div>
                            
                            <div className="col-md-4">
                                <h6>Added By</h6>
                                <p>{billing?.created_by?.username}</p>
                                <small>Added Date Time : { billing.created_at}</small>
                            </div>
                            <div className="col-md-4">
                                <h6>Last Modified By</h6>
                                <p>{billing?.updated_by?.username}</p>
                                <small>Added Date Time : { billing.updated_at}</small>
                            </div>
                     
                        </div>
                       </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
