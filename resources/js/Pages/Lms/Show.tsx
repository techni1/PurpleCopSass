import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row, Modal, Form, Button } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PdfReader from "../Pdfreader/PdfReader";
import ReactPlayer from "react-player/youtube";

export default function Show({ auth, topics, success, examgiven, pdfFile }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  interface Topic {
    pdf_path: string;
  }

  const fileUrl = pdfFile;
  console.log(fileUrl);

  return (
    <React.Fragment>
      <Head title="Security Awerness - LMS" />

      <div className="page-content">
        <Container fluid>

          <BreadCrumb title="Security Awerness" pageTitle="Dashboard" />
          <Row>
            <Col>
              <div className="h-100">
                <Col xs={12}>
                  <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                    <div className="flex-grow-1">
                      <h4 className="fs-16 mb-1"> Topics </h4>
                    </div>

                    {examgiven.status ? (<div className="md-12 mt-lg-0">
                      <Row className="pb-3">
                        <Col>
                          <Button className="btn btn-soft-primary">Your Score:  {examgiven.score}</Button>
                        </Col>
                      </Row>
                    </div>
                    ) : (
                      <div className="md-12 mt-lg-0">
                        <Row className="pb-3">
                          <Col>
                            <Link
                              href={route("quiz.show", topics.id)} // Use 'quiz.show' as the route name
                              className="btn btn-soft-primary"
                            >
                              <i className="ri-check-circle-line align-middle"></i>{" "}
                              Start Quiz
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    )}





                  </div>
                </Col>
              </div>
            </Col>
          </Row >
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
          )
          }
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <pre>{JSON.stringify(examgiven, undefined, 2)}</pre> */}

                  {/* // Tolpic name */}
                  <Row>
                    <Col xl={6}>
                      <Form.Label htmlFor="name" className="form-label">
                        Topic Name <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value={topics.name}
                        readOnly
                        required
                      />
                    </Col>

                    <Col xl={6}>
                      <Form.Label htmlFor="name" className="form-label">
                        Topic Name <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value={topics.category.name}
                        readOnly
                        required
                      />
                    </Col>

                    {topics.pdf_path && (
                      <Col md={12}>
                        <div className="form-group">
                          <label>Study Material:</label>
                          <p className="form-control">
                            <iframe
                              src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                              width="100%"
                              height="600px"
                            ></iframe>
                            {/* <embed src={fileUrl} width="100%" height="600px" type="application/pdf" /> */}
                            {/* Provide a download link */}
                            {/* <a href={fileUrl} download>
                                                            Download PDF
                                                        </a> */}
                          </p>
                        </div>
                      </Col>
                    )}

                    {topics.videopath && (
                      <Col md={12}>
                        <div className="form-group">
                          <label>Video Material:</label>
                          <p className="form-control" align="center">
                            <ReactPlayer url={topics.video_embedcode} />
                          </p>
                        </div>
                      </Col>
                    )}

                    <Col xl={6}></Col>
                  </Row>

                  {/* // category className

                                   // PDF show 
                                 // viedeo show 
                                // Embed code video show */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </React.Fragment >
  );
}
Show.layout = (page: any) => <Layout children={page} />;
