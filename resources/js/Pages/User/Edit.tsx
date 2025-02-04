import React, { useState } from "react";
import Layout from "../../Layouts";
import Select from "react-select";

import { Head, useForm, Link } from "@inertiajs/react";
import BreadCrumb from "../../Components/Common/BreadCrumb";

import {
  Col,
  Container,
  Row,
  Card,
  Form,
  Button,
  CardBody,
} from "react-bootstrap";

export default function Create({
  auth,
  organizations,
  designations,
  departments,
  roles,
  user,
  success,
}: any) {
  const userId = auth.user.id;
  const [selectMulti, setselectMulti] = useState<any>(
    user.role.map((role: any) => ({ value: role, label: role }))
  );

  const { data, setData, errors, post, processing, reset } = useForm({
    id: user.id,
    name: user.name || "",
    email: user.email || "",
    user_contact_no: user.contact || "",
    organization_id: user.organization_id || "",
    designation_id: user.designation_id || "",
    department_id: user.department_id || "",
    user_role: user.role || [],
    profile_pic: null, // Initialize as null for file input
    user_remark: user.user_remark || "",
    added_by: user.added_by,
    updated_by: userId,
    _method: "PUT",
  });
  // const customStyles = {
  //   multiValue: (styles: any, { data }: any) => {
  //     return {
  //       ...styles,
  //       color: "#212529",
  //       backgroundColor: "#3762ea",
  //     };
  //   },
  //   multiValueLabel: (styles: any, { data }: any) => ({
  //     ...styles,
  //     backgroundColor: "#405189",
  //     color: "white",
  //   }),
  //   multiValueRemove: (styles: any, { data }: any) => ({
  //     ...styles,
  //     color: "white",
  //     backgroundColor: "#405189",
  //     ":hover": {
  //       backgroundColor: "#405189",
  //       color: "white",
  //     },
  //   }),
  //   control: (styles: any, { data }: any) => {
  //     return {
  //       ...styles,

  //       border: "solid 1px #ced4da",
  //     };
  //   },
  // };
  const onSubmit = (e: any) => {
    // console.log(data);
    e.preventDefault();
    post(route("user.update", user.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
    // console.log(data);
  };
  const handleRoleChange = (e: any) => {
    const selectedRoles = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value
    );
    setData("user_role", selectedRoles);
  };
  return (
    <React.Fragment>
      <Layout>
        <Head title="User" />
        <Container fluid>
          <div className="page-content">
            <BreadCrumb title="Edit User" pageTitle="User Mangement" />
            <div className="col-md-12">
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col lg={8}>
                    <Card id="leadsList">
                      <Card.Header className="border-0">
                        <Row className="g-4 align-items-center">
                          <h5>Edit {user.name}</h5>
                        </Row>
                      </Card.Header>

                      <CardBody>
                        <div className="row">
                          {/* name input field */}
                          <div className="col-md-6  pb-3">
                            <Form.Label htmlFor="name">
                              Name <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter Name"
                              value={data.name}
                              autoFocus
                              className={
                                "form-control" +
                                (errors.name ? " is-invalid" : "")
                              }
                              onChange={(e) => setData("name", e.target.value)}
                              required
                            />

                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.name}
                            </Form.Control.Feedback>
                          </div>

                          {/* email input field */}
                          <div className="col-md-6 pb-3">
                            <Form.Label htmlFor="email">
                              Email <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              id="email"
                              name="email"
                              value={data.email}
                              placeholder="Enter Email"
                              className={
                                "form-control" +
                                (errors.email ? " is-invalid" : "")
                              }
                              onChange={(e) => setData("email", e.target.value)}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.email}
                            </Form.Control.Feedback>
                          </div>

                          {/* contact no input field */}
                          <div className="col-md-6 pb-3">
                            <Form.Label htmlFor="inputconatctno">
                              Contact No
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="inputconatctno"
                              name="user_contact_no"
                              value={data.user_contact_no}
                              placeholder="Enter Contact No"
                              className={
                                "form-control" +
                                (errors.user_contact_no ? " is-invalid" : "")
                              }
                              onChange={(e) =>
                                setData("user_contact_no", e.target.value)
                              }
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.user_contact_no}
                            </Form.Control.Feedback>
                          </div>

                          {/* for profile pics */}
                          <div className="col-md-6 pb-3">
                            <Form.Label htmlFor="inputprofilepic">
                              Upload Profile Image
                            </Form.Label>
                            <Form.Control
                              type="file"
                              id="inputprofilepic"
                              name="profile_pic"
                              className={
                                "form-control" +
                                (errors.profile_pic ? " is-invalid" : "")
                              }
                              onChange={(e: any) =>
                                setData("profile_pic", e.target.files[0])
                              }
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.profile_pic}
                            </Form.Control.Feedback>
                          </div>

                          {/* USER REMARKS */}
                          <div className="col-md-12 pb-3">
                            <Form.Label htmlFor="inputuser_remark">
                              Any Remark (optional)
                            </Form.Label>
                            <textarea
                              className="form-control"
                              id="inputuser_remark"
                              name="user_remark"
                              onChange={(e) =>
                                setData("user_remark", e.target.value)
                              }
                            ></textarea>
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.profile_pic}
                            </Form.Control.Feedback>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Status</h5>
                      </div>
                      <Card.Body>
                        {/* organization select form */}
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-organization-status-input"
                            className="form-label"
                          >
                            Organization
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            value={data.organization_id}
                            id="choices-organization-status-input"
                            onChange={(e) =>
                              setData("organization_id", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {organizations.map((organization: any) => (
                              <option
                                key={organization.id}
                                value={organization.id}
                              >
                                {organization.name}
                              </option>
                            ))}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.organization_id}
                          </Form.Control.Feedback>
                        </div>

                        {/* designation select form */}
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-designation-status-input"
                            className="form-label"
                          >
                            Designation
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-designation-status-input"
                            value={data.designation_id}
                            onChange={(e) =>
                              setData("designation_id", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {designations.map((designation: any) => (
                              <option
                                key={designation.id}
                                value={designation.id}
                              >
                                {designation.name}
                              </option>
                            ))}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.designation_id}
                          </Form.Control.Feedback>
                        </div>

                        {/* departments select form */}
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-departments-status-input"
                            className="form-label"
                          >
                            Departments
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-departments-status-input"
                            value={data.department_id}
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
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.department_id}
                          </Form.Control.Feedback>
                        </div>

                        {/* roles select form */}
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-roles-status-input"
                            className="form-label"
                          >
                            roles
                          </Form.Label>
                          <select
                            className={`form-select ${
                              errors.user_role ? "is-invalid" : ""
                            }`}
                            defaultValue={data.user_role}
                            name="user_role"
                            id="choices-user_role"
                            onChange={(e) =>
                              setData("user_role", e.target.value)
                            }
                            required
                          >
                            <option>Select...</option>
                            {roles.map((role: any) => (
                              <option key={role.id} value={role.name}>
                                {role.name}
                              </option>
                            ))}
                          </select>
                          {/* <Select
                            closeMenuOnSelect={false}
                            defaultValue={selectMulti}
                            isMulti={true}
                            onChange={(selectedOptions: any) => {
                              setselectMulti(selectedOptions);
                              setData(
                                "user_role",
                                selectedOptions.map(
                                  (option: any) => option.value
                                )
                              );
                            }}
                            options={roles.map((role: any) => ({
                              value: role.name,
                              label: role.name,
                            }))}
                            classNamePrefix="react-select"
                            styles={customStyles}
                          /> */}

                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.user_role}
                          </Form.Control.Feedback>
                        </div>
                      </Card.Body>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-md-center gap-3">
                  <Col xl={2} md={6}>
                    <Link
                      href={route("user.index")}
                      className="btn btn-light w-100"
                    >
                      Cancel
                    </Link>
                  </Col>
                  {/* <Col xl={2} md={6}>
                    <Link
                      href={route("profile.edit")}
                      className="btn btn-light w-100"
                    >
                      Edit Profile
                    </Link>
                  </Col> */}
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
              </Form>
            </div>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
