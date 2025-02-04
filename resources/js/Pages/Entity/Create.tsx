import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Select from "react-select";
import { color } from "echarts";

export default function Create({ auth, organizations, securityOfficers }: any) {
  const [selectOrganization, setSelectOrganization] = useState<any>(null);
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    legalName: "",
    url: "",
    securityOfficer: "",
    address: "",
    logo: null, // Initialize as null for file input
    organization_id:
      organizations.data.length == 1 ? organizations.data[0].id : "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    post(route("entity.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };
  const customStyles = {
    singleValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#212529",
      };
    },
    control: (styles: any, { data }: any) => {
      return {
        ...styles,

        border: "solid 1px #ced4da",
      };
    },
  };

  return (
    <React.Fragment>
      <Head title="Entity" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Entity" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <pre>
                    {/* {JSON.stringify(organizations.data[0].id, undefined, 2)} */}
                  </pre>

                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={12}>
                        <Form.Label htmlFor="name" className="form-label">
                          Organization Name{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        {organizations.data.length > 1 ? (
                          <Select
                            value={selectOrganization}
                            onChange={(selectOrganization: any) => {
                              setSelectOrganization(selectOrganization);
                              setData(
                                "organization_id",
                                selectOrganization.value
                              );
                            }}
                            options={organizations.data.map(
                              (organization: any) => ({
                                value: organization.id,
                                label: organization.name,
                              })
                            )}
                            styles={customStyles}
                            name="state"
                            required
                          />
                        ) : (
                          <Select
                            defaultValue={organizations.data.map(
                              (organization: any) => ({
                                value: organization.id,
                                label: organization.name,
                              })
                            )}
                            isDisabled
                            styles={customStyles}
                            name="state"
                          />
                        )}

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>
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
                          href={route("entity.index")}
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
