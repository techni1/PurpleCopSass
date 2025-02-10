import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ auth, securityOfficers }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    legalName: "",
    url: "",
    overview: "",
    contact_us: "",
    founded_in: "",
    terms_condition: "",
    privacy_policy: "",
    securityOfficer: "",
    address: "",
    logo: null, // Initialize as null for file input
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("organization.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Organizations" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Organizations" pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
              {/* <pre>{JSON.stringify(securityOfficers, undefined, 2)}</pre> */}
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Name <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          value={data.name}
                          autoFocus
                          className={
                            "form-control" + (errors.name ? " is-invalid" : "")
                          }
                          onChange={(e: any) => setData("name", e.target.value)}
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="legalName" className="form-label">
                          Legal Name <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="legalName"
                          name="legalName"
                          placeholder="Enter Legal Name"
                          value={data.legalName}
                          className={
                            "form-control" +
                            (errors.legalName ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("legalName", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.legalName}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="url" className="form-label">
                          URL <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="url"
                          name="url"
                          placeholder="Enter URL"
                          value={data.url}
                          className={
                            "mt-1 form-control" +
                            (errors.url ? " is-invalid" : "")
                          }
                          onChange={(e: any) => setData("url", e.target.value)}
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.url}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="contact_us" className="form-label">
                          Contact Us
                        </Form.Label>
                        <Form.Control
                          id="contact_us"
                          name="contact_us"
                          placeholder="Enter Contact Us"
                          value={data.contact_us}
                          className={
                            "mt-1 form-control" +
                            (errors.contact_us ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("contact_us", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.contact_us}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="terms_condition"
                          className="form-label"
                        >
                          Terms Condition
                        </Form.Label>
                        <Form.Control
                          id="terms_condition"
                          name="terms_condition"
                          placeholder="Enter Terms Condition"
                          value={data.terms_condition}
                          className={
                            "mt-1 form-control" +
                            (errors.terms_condition ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("terms_condition", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.terms_condition}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="privacy_policy"
                          className="form-label"
                        >
                          Privacy Policy
                        </Form.Label>
                        <Form.Control
                          id="privacy_policy"
                          name="privacy_policy"
                          placeholder="Enter Privacy Policy"
                          value={data.privacy_policy}
                          className={
                            "mt-1 form-control" +
                            (errors.privacy_policy ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("privacy_policy", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.privacy_policy}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="founded_in" className="form-label">
                          Founded In
                        </Form.Label>
                        <Form.Control
                          id="founded_in"
                          name="founded_in"
                          placeholder="Founded In"
                          value={data.founded_in}
                          className={
                            "mt-1 form-control" +
                            (errors.founded_in ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("founded_in", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.founded_in}
                        </Form.Control.Feedback>
                      </Col>

                      {/* securityOfficers select form */}
                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-security-Officersinput"
                            className="form-label"
                          >
                            Security Officer{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-security-Officersinput"
                            onChange={(e) =>
                              setData("securityOfficer", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {securityOfficers.data.map(
                              (securityOfficer: any) => (
                                <option
                                  key={securityOfficer.id}
                                  value={securityOfficer.id}
                                >
                                  {securityOfficer.name}
                                </option>
                              )
                            )}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.securityOfficer}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="address" className="form-label">
                          Address <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="address"
                          name="address"
                          as="textarea"
                          rows={3}
                          placeholder="Enter Address"
                          value={data.address}
                          className={
                            "mt-1 form-control" +
                            (errors.address ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("address", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.address}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="overview" className="form-label">
                          Short Description{" "}
                        </Form.Label>
                        <Form.Control
                          id="overview"
                          name="overview"
                          as="textarea"
                          rows={3}
                          placeholder="Enter short description"
                          value={data.overview}
                          className={
                            "mt-1 form-control" +
                            (errors.overview ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("overview", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.overview}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="logo" className="form-label">
                          Upload Logo
                        </Form.Label>
                        <Form.Control
                          id="logo"
                          name="logo"
                          type="file"
                          className={
                            "mt-1 form-control" +
                            (errors.logo ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("logo", e.target.files[0])
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.logo}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center gap-3">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("organization.index")}
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
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

Create.layout = (page: any) => <Layout children={page} />;
