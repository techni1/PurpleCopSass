import React from "react";
import { Head, useForm } from "@inertiajs/react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Form,
  CardFooter,
} from "react-bootstrap";
import Layout from "../../../Layouts";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import axios from "axios";

export default function Show({ auth, framwork }) {
  // Using Inertia's useForm for form state and submission
  const { data, setData, post, processing, errors } = useForm({
    framworkid: "",
    reporttype: "",
  });

  // Handle the form submission
  const downloadPDF = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Make a POST request to send the data and download the PDF
      const response = await axios.post("/compliancesubmit", data, {
        responseType: "blob", // Important for handling binary data
      });

      // Create a URL for the received PDF blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary <a> element to initiate download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "compliance_report.pdf"); // Set the file name for download
      document.body.appendChild(link);
      link.click(); // Trigger the click event to start the download
      link.remove(); // Clean up the element
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <React.Fragment>
      <Head title="Reports" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Compliance Reports" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Row>
                <Col xl={12}>
                  <Card>
                    <CardHeader> Framework Report </CardHeader>
                    <form onSubmit={downloadPDF} id="framworkreport">
                      <CardBody>
                        <Row>
                          <Col xl={6}>
                            <Form.Label
                              htmlFor="framworkid"
                              className="form-label"
                            >
                              Framework{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>

                            <select
                              className="form-select"
                              name="framworkid"
                              id="framworkid"
                              onChange={(e) =>
                                setData("framworkid", e.target.value)
                              }
                              required
                            >
                              <option value="">Select Framework</option>
                              {framwork.map((fram) => (
                                <option key={fram.id} value={fram.id}>
                                  {fram.name}
                                </option>
                              ))}
                            </select>

                            {errors.framworkid && (
                              <span className="text-danger">
                                {errors.framworkid}
                              </span>
                            )}
                          </Col>

                          <Col xl={6}>
                            <Form.Label
                              htmlFor="reporttype"
                              className="form-label"
                            >
                              Report Type{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <select
                              className="form-select"
                              name="reporttype"
                              id="reporttype"
                              onChange={(e) =>
                                setData("reporttype", e.target.value)
                              }
                              required
                            >
                              <option value="">Select type</option>
                              <option value="Compliance Report">
                                Compliance Report
                              </option>
                              <option value="Statement of Applicability (SOA)">
                                Statement of Applicability (SOA)
                              </option>
                            </select>
                          </Col>
                        </Row>
                      </CardBody>
                    </form>
                    <CardFooter>
                      <Col xl={3} className="pt-4 content-center">
                        <Button
                          type="submit"
                          className="btn btn-primary w-100"
                          disabled={processing}
                          onClick={downloadPDF}
                        >
                          Download Report
                        </Button>
                      </Col>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

Show.layout = (page) => <Layout children={page} />;
