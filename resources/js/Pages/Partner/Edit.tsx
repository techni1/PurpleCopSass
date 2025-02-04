import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ auth, client }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: client.name || "",
    legalName: client.legal_name || "",
    url: client.url || "",
    securityOfficer: client.security_officer || "",
    address: client.address || "",
    logo: null, // Initialize as null for file input
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("partner.update", client.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Partner Edit" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title={`Edit ${client.name}`} pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
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
                        <Form.Label
                          htmlFor="securityOfficer"
                          className="form-label"
                        >
                          Security Officer{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="securityOfficer"
                          name="securityOfficer"
                          placeholder="Enter Security Officer"
                          value={data.securityOfficer}
                          className={
                            "mt-1 form-control" +
                            (errors.securityOfficer ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("securityOfficer", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.securityOfficer}
                        </Form.Control.Feedback>
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
                        {/*  Replace Project Image */}
                        {client.logo_path && (
                          <div className="w-25">
                            <img
                              src={client.logo_path}
                              alt=""
                              className="w-50"
                            />
                          </div>
                        )}
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

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("organization.index")}
                          className="btn btn-secondary w-100"
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
