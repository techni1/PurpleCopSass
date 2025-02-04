import React, { useRef } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function EditDetails({
  user,
  mustVerifyEmail,
  status,
  className = "",
}: any) {
  const {
    data,
    setData,
    errors,
    patch,
    processing,
    reset,
    recentlySuccessful,
  } = useForm({
    id: user.id,
    name: user.name || "",
    email: user.email || "",
    user_contact_no: user.contact || "",
    profile_pic: null, // Initialize as null for file input
    user_remark: user.user_remark || "",
  });
  const onSubmit = (e: any) => {
    // console.log(data);
    e.preventDefault();
    patch(route("profile.update", user.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
    // console.log(data);
  };

  return (
    <React.Fragment>
      <Col>
        <div className="px-2">
          <h3>Profile Information</h3>
        </div>

        <Card>
          <Card.Header className="pb-0 text-muted">
            <p>Update your account's profile information and email address.</p>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={onSubmit} className="mt-6 space-y-6">
              <Row>
                <Col>
                  {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                      <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                        Your email address is unverified.
                        <Link
                          href={route("verification.send")}
                          method="post"
                          as="button"
                          className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                          Click here to re-send the verification email.
                        </Link>
                      </p>

                      {status === "verification-link-sent" && (
                        <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                          A new verification link has been sent to your email
                          address.
                        </div>
                      )}
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
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
                          "form-control" + (errors.name ? " is-invalid" : "")
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
                          "form-control" + (errors.email ? " is-invalid" : "")
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
                    <div className="col-md-12">
                      <Form.Label htmlFor="inputuser_remark">
                        Any Remark (optional)
                      </Form.Label>
                      <textarea
                        className="form-control"
                        id="inputuser_remark"
                        name="user_remark"
                        onChange={(e) => setData("user_remark", e.target.value)}
                      ></textarea>
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.profile_pic}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </Col>
              </Row>
              {mustVerifyEmail && user.email_verified_at !== null && (
                <div className="flex items-center gap-4 mt-3">
                  <Button
                    variant="success"
                    disabled={processing}
                    type="submit"
                    className="btn btn-success"
                  >
                    Save
                  </Button>

                  <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                  >
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p> */}
                  </Transition>
                </div>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
}
