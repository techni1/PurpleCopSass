import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import axios from 'axios';
import { Select } from "@headlessui/react";

export default function Show({ auth, framwork, assets, assetscriticality, assetscategory, sacategory, topic }: any) {

  const { data: formOneData, setData: setFormOneData, post: postFormOne, processing: processingFormOne, errors: errorsFormOne, reset: resetFormOne } = useForm({

    framworkid: '',
    ftype: '',
    fstatus: ''
  });






  const handleFormOneSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString().slice(0, 19).replace(/:/g, "-");

    const reportname = formOneData.ftype || 'report';

    // Send the form data to the backend for exporting the Excel file
    axios.post(route("reports.framworkreport"), formOneData, {
      responseType: 'blob', // Important for downloading files
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const filename = `${reportname}_report_${currentDateTime}.xlsx`;
        link.setAttribute('download', filename); // Set the file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("There was an error exporting the Excel file:", error);
      });
  };





  const { data: formTwooneData, setData: setFormTwooneData, post: postFormTwoone, processing: processingFormTwoone, errors: errorsFormTwoone, reset: resetFormTwoone } = useForm({

  });
  // Handle form two submit
  const handleFormTwooneSubmit = (e) => {

    e.preventDefault();
    const currentDateTime = new Date().toISOString().slice(0, 19).replace(/:/g, "-");

    const reportname = 'assets';

    // Send the form data to the backend for exporting the Excel file
    axios.post(route("reports.assetscomplete"), formTwooneData, {
      responseType: 'blob', // Important for downloading files
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const filename = `${reportname}_report_${currentDateTime}.xlsx`;
        link.setAttribute('download', filename); // Set the file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("There was an error exporting the Excel file:", error);
      });


  };


  const { data: formTwoData, setData: setFormTwoData, post: postFormTwo, processing: processingFormTwo, errors: errorsFormTwo, reset: resetFormTwo } = useForm({

    criticality: ''
  });
  // Handle form two submit
  const handleFormTwoSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString().slice(0, 19).replace(/:/g, "-");

    const reportname = 'AssetsCriticality';

    // Send the form data to the backend for exporting the Excel file
    axios.post(route("reports.assetcriticality"), formTwoData, {
      responseType: 'blob', // Important for downloading files
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const filename = `${reportname}_report_${currentDateTime}.xlsx`;
        link.setAttribute('download', filename); // Set the file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("There was an error exporting the Excel file:", error);
      });
  };




  const { data: formThreeData, setData: setFormThreeData, post: postFormThree, processing: processingFormThree, errors: errorsFormThree, reset: resetFormThree } = useForm({
    satopic: '',

  });
  // Handle form two submit
  const handleFormThreeSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString().slice(0, 19).replace(/:/g, "-");

    const reportname = 'SecurityAwareness';

    // Send the form data to the backend for exporting the Excel file
    axios.post(route("reports.satopic"), formThreeData, {
      responseType: 'blob', // Important for downloading files
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const filename = `${reportname}_report_${currentDateTime}.xlsx`;
        link.setAttribute('download', filename); // Set the file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("There was an error exporting the Excel file:", error);
      });
  };

  const { data: formFiveData, setData: setFormFiveData, post: postFormFive, processing: processingFormFive, errors: errorsFormFive, reset: resetFormFive } = useForm({
    satopic: '',

  });
  // Handle form two submit


  const downloadPDF = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Make a POST request to send the data and download the PDF
      const response = await axios.post('/reportsinherentrisk', formFiveData, {
        responseType: 'blob', // Important for handling binary data
      });

      // Create a URL for the received PDF blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary <a> element to initiate download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'inherentrisk_report.pdf'); // Set the file name for download
      document.body.appendChild(link);
      link.click(); // Trigger the click event to start the download
      link.remove(); // Clean up the element
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };


  const { data: formSixData, setData: setFormSixData, post: postFormSix, processing: processingFormSix, errors: errorsFormSix, reset: resetFormSix } = useForm({
    satopic: '',

  });


  const downloadsecondPDF = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Make a POST request to send the data and download the PDF
      const response = await axios.post('/reportsresidualrisk', formSixData, {
        responseType: 'blob', // Important for handling binary data
      });

      // Create a URL for the received PDF blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary <a> element to initiate download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'residualrisk_report.pdf'); // Set the file name for download
      document.body.appendChild(link);
      link.click(); // Trigger the click event to start the download
      link.remove(); // Clean up the element
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
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
                    <CardHeader> Framework Report </CardHeader>
                    <form onSubmit={handleFormOneSubmit} id="framworkreport">
                      <CardBody>
                        <Row>


                          <Col xl={12}>
                            <Form.Label htmlFor="framworkid" className="form-label">
                              Framework <span className="text-danger ms-1">*</span>
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

                          <Col xl={6} className="pt-2">
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

                          <Col xl={6} >
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processingFormOne}
                            >
                              Download
                            </Button>
                          </Col>
                        </Row>


                      </CardFooter>
                    </form>

                  </Card>
                </Col>
                <Col xl={6}>
                  <Card>
                    <CardHeader> Assets Report </CardHeader>

                    <CardBody>
                      <Row>

                        <Col xl={6}>
                          <Card>

                            <form onSubmit={handleFormTwooneSubmit} id="framworkreportsecond">
                              <CardBody>Fetch Complete Assets Report


                                <div style={{ paddingTop: '52px' }}></div>

                              </CardBody>

                              <CardFooter>
                                <Row className="justify-content-md-center">

                                  <Col xl={6} >
                                    <Button
                                      type="submit"
                                      className="btn btn-primary w-100"
                                      disabled={processingFormTwoone}
                                    >
                                      Download
                                    </Button>
                                  </Col>
                                </Row>


                              </CardFooter>
                            </form>
                          </Card>

                        </Col>
                        <Col xl={6}>
                          <Card>
                            <form onSubmit={handleFormTwoSubmit} id="framworkreportsecond">
                              <CardBody><Col xl={12} className="pt-2">
                                <Form.Label htmlFor="criticality" className="form-label">
                                  Filter BY Criticality <span className="text-danger ms-1">*</span>
                                </Form.Label>

                                <select className="form-select"
                                  name="criticality"
                                  id="criticality"
                                  onChange={(e) => setFormTwoData('criticality', e.target.value)}
                                  required
                                >

                                  <option></option>
                                  {assetscriticality.map((criticality: any) => (
                                    <option key={criticality.id} value={criticality.id}>
                                      {criticality.name}

                                    </option>
                                  ))}
                                </select>
                                {errorsFormTwo.criticality && <span>{errorsFormTwo.criticality}</span>}
                              </Col>
                              </CardBody>
                              <CardFooter>
                                <Row className="justify-content-md-center">

                                  <Col xl={6} >
                                    <Button
                                      type="submit"
                                      className="btn btn-primary w-100"
                                      disabled={processingFormTwo}
                                    >
                                      Download
                                    </Button>
                                  </Col>
                                </Row>
                              </CardFooter>
                            </form>
                          </Card>

                        </Col>

                      </Row>
                    </CardBody>



                  </Card>
                </Col>


                {/*    BOF SA Report */}
                <Col xl={6}>
                  <Card>
                    <CardHeader> Security Awareness </CardHeader>
                    <form onSubmit={handleFormThreeSubmit} id="framworkreportsecond">
                      <CardBody>
                        <Row>


                          {/* <Col xl={12}>
                            <Form.Label htmlFor="framworkid" className="form-label">
                              Category <span className="text-danger ms-1">*</span>
                            </Form.Label>

                            <select className="form-select"
                              name="sacid"
                              id="sacid"
                              onChange={(e) => setFormThreeData('sacid', e.target.value)}
                              required
                            >

                              <option></option>
                              {sacategory.map((sac: any) => (
                                <option key={sac.id} value={sac.id}>
                                  {sac.name}
                                </option>
                              ))}
                            </select>

                            {errorsFormThree.sacid && <span>{errorsFormThree.sacid}</span>}
                          </Col> */}



                          <Col xl={12} className="pt-2">
                            <Form.Label htmlFor="satopic" className="form-label">
                              Topic <span className="text-danger ms-1">*</span>
                            </Form.Label>



                            <select className="form-select"
                              name="satopic"
                              id="satopic"
                              onChange={(e) => setFormThreeData('satopic', e.target.value)}
                              required
                            >

                              <option></option>
                              {topic.map((top: any) => (
                                <option key={top.id} value={top.id}>
                                  {top.name}
                                </option>
                              ))}
                            </select>




                            {errorsFormThree.satopic && <span>{errorsFormThree.satopic}</span>}
                          </Col>



                        </Row>
                      </CardBody>
                      <CardFooter>
                        <Row className="justify-content-md-center">

                          <Col xl={6} >
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processingFormThree}
                            >
                              Download
                            </Button>
                          </Col>
                        </Row>


                      </CardFooter>
                    </form>

                  </Card>
                </Col>
                {/*    EOF SA Report */}



                {/*    BOF Risk Register Report */}
                <Col xl={6}>
                  <Card>
                    <CardHeader> Risk Register </CardHeader>

                    <CardBody>
                      <Row>

                        <Col xl={6}>
                          <Card>
                            <form onSubmit={downloadPDF} id="reidkmdkmdk">
                              <CardBody>Fetch Complete Inherent Risk Report


                                <div style={{ paddingTop: '52px' }}></div>

                              </CardBody>

                              <CardFooter>
                                <Row className="justify-content-md-center">

                                  <Col xl={6} >
                                    <Button
                                      type="submit"
                                      className="btn btn-primary w-100"
                                      disabled={processingFormFive}
                                    >
                                      Download
                                    </Button>
                                  </Col>
                                </Row>


                              </CardFooter>
                            </form>
                          </Card>


                        </Col>
                        <Col xl={6}>

                          <Card>
                            <form onSubmit={downloadsecondPDF} id="residualrisk">
                              <CardBody>Fetch Complete Residual Risk Report


                                <div style={{ paddingTop: '52px' }}></div>

                              </CardBody>
                              <CardFooter>
                                <Row className="justify-content-md-center">

                                  <Col xl={6} >
                                    <Button
                                      type="submit"
                                      className="btn btn-primary w-100"
                                      disabled={processingFormSix}
                                    >
                                      Download
                                    </Button>
                                  </Col>
                                </Row>
                              </CardFooter>

                            </form>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>

                  </Card>
                </Col>
                {/*    EOF Risk Register Report */}




              </Row>





            </Col>
          </Row>
        </Container>
      </div >
    </React.Fragment >
  );
}

Show.layout = (page: any) => <Layout children={page} />;
