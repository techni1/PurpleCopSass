import React, { useEffect } from "react";
import GuestLayout from "../../Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import logoLight from "../../../images/logo-light.png";

export default function ResetPassword({ token, email }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e: any) => {
    e.preventDefault();

    post(route("password.store"));
  };

  return (
    <React.Fragment>
      <GuestLayout>
        <Head title="Reset Password" />
        <div className="auth-page-content mt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link href="/#" className="d-inline-block auth-logo">
                      <img src={logoLight} alt="" height="20" />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-semibold">
                    Premium Admin & Dashboard Template
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4 card-bg-fill">
                  <Card.Body className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Add New Password?</h5>
                    </div>

                    <div className="p-2">
                      <form onSubmit={submit}>
                        {/* for password */}
                        <div className=" pb-3">
                          <Form.Label htmlFor="inputpassword">
                            Password <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            id="inputpassword"
                            name="password"
                            value={data.password}
                            placeholder="Enter Password"
                            className={
                              "form-control" +
                              (errors.password ? " is-invalid" : "")
                            }
                            onChange={(e) =>
                              setData("password", e.target.value)
                            }
                            required
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.password}
                          </Form.Control.Feedback>
                        </div>

                        {/* for confirm password  */}
                        <div className=" pb-3">
                          <Form.Label htmlFor="inputpassword_confirmation">
                            Password Confirmation{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            id="inputpassword_confirmation"
                            name="password_comfirmation"
                            value={data.password_confirmation}
                            placeholder="Password Confirmation"
                            className={
                              "form-control" +
                              (errors.password_confirmation
                                ? " is-invalid"
                                : "")
                            }
                            onChange={(e) =>
                              setData("password_confirmation", e.target.value)
                            }
                            required
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.password_confirmation}
                          </Form.Control.Feedback>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                          <Button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={processing}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </GuestLayout>
    </React.Fragment>
  );
}
