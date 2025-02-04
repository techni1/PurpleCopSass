import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Select from "react-select";

export default function Create({ departments, controls }: any) {
  const userRole = usePage().props.auth.roles;
  const [selectMulti, setSelectMulti] = useState();
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    department_id: "",
    description: "",
    control_code_ids: [],
    draft: null,
    source: userRole[0] == "Super-Admin" ? "InstaGRC" : "Custom",
  });
  const customStyles = {
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: "#3762ea",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => ({
      ...styles,
      backgroundColor: "#405189",
      color: "white",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
      ...styles,
      color: "white",
      backgroundColor: "#405189",
      ":hover": {
        backgroundColor: "#405189",
        color: "white",
      },
    }),
  };

  const handleMultiChange = (selectedOptions: any) => {
    setSelectMulti(selectedOptions);
    setData(
      "control_code_ids",
      selectedOptions.map((option: any) => option.value)
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("evidence.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Evidences" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Evidences" pageTitle="Dashboard" />

          <Row className="justify-content-center">
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-2">
                      <Form.Label htmlFor="name" className="form-label">
                        Name <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <div>
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
                      </div>

                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.name}
                      </Form.Control.Feedback>
                    </Row>

                    <Row className="p-2">
                      <Form.Label
                        htmlFor="choices-departments-status-input"
                        className="form-label"
                      >
                        Departments
                      </Form.Label>
                      <div>
                        <select
                          className="form-select"
                          data-choices
                          data-choices-search-false
                          id="choices-departments-status-input"
                          onChange={(e) =>
                            setData("department_id", e.target.value)
                          }
                        >
                          <option>Select...</option>
                          {departments.map((department: any) => (
                            <option key={department.id} value={department.id}>
                              {department.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.department_id}
                      </Form.Control.Feedback>
                    </Row>
                    <Row className="px-2">
                      <Form.Label
                        htmlFor="choices-roles-status-input"
                        className="form-label"
                      >
                        Link Controls
                      </Form.Label>

                      <Select
                        closeMenuOnSelect={false}
                        defaultValue={selectMulti}
                        isMulti={true}
                        onChange={handleMultiChange}
                        required
                        options={controls.map((control: any) => ({
                          value: control.id,
                          label: control.code,
                        }))}
                        // classNamePrefix="react-select"
                        styles={customStyles}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.control_code_ids}
                      </Form.Control.Feedback>
                    </Row>
                    {userRole[0] == "Super-Admin" && (
                      <Row className="p-2">
                        <Form.Label
                          htmlFor="choices-roles-status-input"
                          className="form-label"
                        >
                          Upload Draft
                        </Form.Label>
                        <div>
                          <Form.Control
                            id="draft"
                            name="draft"
                            type="file"
                            className={
                              "mt-1 form-control" +
                              (errors.draft ? " is-invalid" : "")
                            }
                            onChange={(e: any) =>
                              setData("draft", e.target.files[0])
                            }
                          />
                        </div>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.draft}
                        </Form.Control.Feedback>
                      </Row>
                    )}

                    <Row className="p-2">
                      <Form.Label htmlFor="description" className="form-label">
                        Description
                      </Form.Label>
                      <div>
                        <Form.Control
                          id="description"
                          name="description"
                          as="textarea"
                          rows={3}
                          placeholder="Enter Description"
                          value={data.description}
                          className={
                            "form-control" +
                            (errors.description ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("description", e.target.value)
                          }
                        />
                      </div>

                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.description}
                      </Form.Control.Feedback>
                    </Row>

                    <Row className="justify-content-md-center gap-3">
                      <Col xl={3} md={6}>
                        <Link
                          href={route("evidence.index")}
                          className="btn btn-light w-100"
                        >
                          Cancel
                        </Link>
                      </Col>
                      <Col xl={3} md={6}>
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
