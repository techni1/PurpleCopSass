import React, { useEffect, useState } from "react";
import Layout from "../../Layouts";

import { Head, useForm, Link, usePage } from "@inertiajs/react";
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

interface FormData {
  id: number;
  name: string;
  gurdname: string;
  permission: number[];
  _method: string;
}

export default function Edit({
  auth,
  role,
  permissions,
  rolePermissions,
}: any) {
  const { data, setData, post, processing, errors, reset } = useForm<FormData>({
    id: role.id,
    name: role.name || "",
    gurdname: role.gurdname || "",
    permission: [],
    _method: "PUT",
  });
  useEffect(() => {
    const updatePermissionList = () => {
      setData("permission", rolePermissions);
    };

    updatePermissionList();
  }, []);

  const [filter, setFilter] = useState("");

  const getp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const permissionValue = parseInt(value, 10);

    if (checked) {
      setData("permission", [...data.permission, permissionValue]);
    } else {
      setData(
        "permission",
        data.permission.filter((p) => p !== permissionValue)
      );
    }
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route("role.update", role.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  }

  const handleIsChecked = (permissionId: number) => {
    // console.log(data["permission"]);
    return data["permission"].includes(permissionId);
  };

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const filteredPermissions = permissions.filter((permit: any) =>
    permit.name.toLowerCase().includes(filter.toLowerCase())
  );

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <React.Fragment>
      <Layout>
        <Container fluid>
          <div className="page-content">
            <BreadCrumb title="Edit Role" pageTitle="Role Mangement" />
            <Row className="justify-content-center">
              <div className="col-md-12">
                <Card id="leadsList">
                  <Card.Header className="border-0">
                    <Row className="g-4 align-items-center">
                      <Col sm={3}>Edit Role</Col>
                    </Row>
                  </Card.Header>

                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Label
                            htmlFor="inputname"
                            className="form-label"
                          >
                            Name <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="inputname"
                            name="name"
                            value={data.name}
                            className={
                              "form-control" +
                              (errors.name ? " is-invalid" : "")
                            }
                            onChange={(e) => setData("name", e.target.value)}
                          />

                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.name}
                          </Form.Control.Feedback>
                        </div>
                        <div className="col-md-6">
                          <Form.Label
                            htmlFor="inputgurdname"
                            className="form-label"
                          >
                            Gurd Name{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="inputgurdname"
                            name="gurdname"
                            value={data.gurdname}
                            className={
                              "form-control" +
                              (errors.name ? " is-invalid" : "")
                            }
                            onChange={(e) =>
                              setData("gurdname", e.target.value)
                            }
                          />

                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.gurdname}
                          </Form.Control.Feedback>
                        </div>
                      </div>

                      <div className="col-md-12 pt-5">
                        <Card>
                          <Card.Header>Assign Permission</Card.Header>
                          <Card.Body>
                            {/* <Row>
                              <Col>
                                <div className="py-3">
                                  <Form.Control
                                    type="text"
                                    className="form-control"
                                    id="placeholderInput"
                                    placeholder="Filter Permisions..."
                                    value={filter}
                                    onChange={handleFilterChange}
                                  />
                                </div>
                              </Col>
                            </Row> */}

                            <div className="col-md-12">
                              <div className="row">
                                {filteredPermissions.map(
                                  (permit: any) => (
                                    // rolePermissions.includes(permit.id) && (
                                    <div key={permit.id} className="col-md-4">
                                      <div className="form-check mb-3">
                                        <Form.Check
                                          id={permit.id}
                                          name="permission[]"
                                          checked={handleIsChecked(permit.id)}
                                          value={permit.id}
                                          onChange={(e) => getp(e)}
                                        />
                                        <Form.Check.Label
                                          className="form-check-label"
                                          htmlFor="formCheck6"
                                        >
                                          {permit.name}
                                        </Form.Check.Label>
                                      </div>
                                    </div>
                                  )
                                  // )
                                )}
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                      <Row className="justify-content-md-center gap-3">
                        <Col xl={2} md={6}>
                          <Link
                            href={route("role.index")}
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
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Row>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
