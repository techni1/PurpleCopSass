import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Select } from "@mui/material";
import { Field } from "formik";

export default function All({ auth, framwork }: any) {

  const { data: formOneData, setData: setFormOneData, post: postFormOne, processing: processingFormOne, errors: errorsFormOne, reset: resetFormOne } = useForm({

    framworkid: '',
    ftype: '',
    fstatus: ''

  });



  const handleFormOneSubmit = (e) => {
    e.preventDefault();
    postFormOne(route("reports.framworkreport"), {
      onSuccess: () => resetFormOne() // Reset form after successful submit
    });
  };


  const { data: formTwoData, setData: setFormTwoData, post: postFormTwo, processing: processingFormTwo, errors: errorsFormTwo, reset: resetFormTwo } = useForm({
    email: ''
  });
  // Handle form two submit
  const handleFormTwoSubmit = (e) => {
    e.preventDefault();
    postFormTwo(route("reports.framworkreport"), {
      onSuccess: () => resetFormTwo() // Reset form after successful submit
    });
  };

  return (
    <React.Fragment>
      <Head title="Reports" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Reports" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>


              <Row>
                <Col xl={6}>
                  <Card>
                    <CardHeader> Framwork Report </CardHeader>
                    <form onSubmit={handleFormOneSubmit} id="framworkreport">
                      <CardBody>
                        <Row>


                          <Col xl={6}>
                            <Form.Label htmlFor="framworkid" className="form-label">
                              Framwork <span className="text-danger ms-1">*</span>
                            </Form.Label>

                            <select className="form-select"
                              name="framworkid"
                              id="framworkid"
                              onChange={(e) => setFormOneData('framworkid', e.target.value)}
                              required
                            >

                              <option></option>
                              {framwork.map((fram: any) => (
                                <option key={fram.id} value={fram.id}>
                                  {fram.name}

                                </option>
                              ))}
                            </select>


                            {errorsFormOne.framworkid && <span>{errorsFormOne.framworkid}</span>}
                          </Col>

                          <Col xl={6}>
                            <Form.Label htmlFor="ftype" className="form-label">
                              Type <span className="text-danger ms-1">*</span>
                            </Form.Label>

                            <select className="form-select"
                              name="ftype"
                              id="ftype"
                              onChange={(e) => setFormOneData('ftype', e.target.value)}
                              required
                            >
                              <option></option>
                              <option value="evidance">Evidance</option>
                              <option value="policy">Policy</option>


                            </select>
                            {errorsFormOne.ftype && <span>{errorsFormOne.ftype}</span>}
                          </Col>

                          <Col xl={6}></Col>
                          <Col xl={6} className="pt-2">
                            <Form.Label htmlFor="fstatus" className="form-label">
                              Status <span className="text-danger ms-1">*</span>
                            </Form.Label>

                            <select className="form-select"
                              name="fstatus"
                              id="fstatus"
                              onChange={(e) => setFormOneData('fstatus', e.target.value)}
                              required
                            >
                              <option></option>
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="published">Published</option>


                            </select>
                            {errorsFormOne.fstatus && <span>{errorsFormOne.fstatus}</span>}
                          </Col>



                        </Row>
                      </CardBody>
                      <CardFooter>
                        <Row className="justify-content-md-center">
                          <Col xl={2} md={6}>

                          </Col>
                          <Col xl={2} md={6}>
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processingFormOne}
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>


                      </CardFooter>
                    </form>

                  </Card>
                </Col>
                {/* <Col xl={6}>
                  <Card>
                    <CardHeader> Assets Report </CardHeader>

                    <CardBody>
                      <Row>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Name <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>1</option>
                            <option>2</option>


                          </select>

                        </Col>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Type <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>Evidance</option>
                            <option>Policy</option>


                          </select>

                        </Col>


                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            From Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />
                        </Col>
                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            End Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />

                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Row className="justify-content-md-center">
                        <Col xl={2} md={6}>
                          <Link
                            href={route("assetcategory.index")}
                            className="btn btn-light w-100"
                          >
                            Cancel
                          </Link>
                        </Col>
                        <Col xl={2} md={6}>
                          <Button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={processing}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>


                    </CardFooter>

                  </Card>
                </Col> */}




                {/* <Col xl={6}>
                  <Card>
                    <CardHeader> Risk Report </CardHeader>

                    <CardBody>
                      <Row>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Name <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>1</option>
                            <option>2</option>


                          </select>

                        </Col>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Type <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>Evidance</option>
                            <option>Policy</option>


                          </select>

                        </Col>


                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            From Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />
                        </Col>
                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            End Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />

                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Row className="justify-content-md-center">
                        <Col xl={2} md={6}>
                          <Link
                            href={route("assetcategory.index")}
                            className="btn btn-light w-100"
                          >
                            Cancel
                          </Link>
                        </Col>
                        <Col xl={2} md={6}>
                          <Button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={processing}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>


                    </CardFooter>

                  </Card>
                </Col> */}



                {/* <Col xl={6}>
                  <Card>
                    <CardHeader> Security Awareness  </CardHeader>

                    <CardBody>
                      <Row>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Name <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>1</option>
                            <option>2</option>


                          </select>

                        </Col>


                        <Col xl={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Type <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <select className="form-select">
                            <option></option>
                            <option>Evidance</option>
                            <option>Policy</option>


                          </select>

                        </Col>


                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            From Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />
                        </Col>
                        <Col xl={6} className="pt-2">
                          <Form.Label htmlFor="name" className="form-label">
                            End Date <span className="text-danger ms-1">*</span>
                          </Form.Label>

                          <input type="text" className="form-control" />

                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <Row className="justify-content-md-center">
                        <Col xl={2} md={6}>
                          <Link
                            href={route("assetcategory.index")}
                            className="btn btn-light w-100"
                          >
                            Cancel
                          </Link>
                        </Col>
                        <Col xl={2} md={6}>
                          <Button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={processing}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>


                    </CardFooter>

                  </Card>
                </Col> */}
              </Row>





            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

All.layout = (page: any) => <Layout children={page} />;
