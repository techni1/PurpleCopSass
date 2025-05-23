import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import { options } from "@fullcalendar/core/preact";

export default function Create({
  auth,
  policies,
  entities,
  assignees,
  departments,
  userpolicies,
}: any) {
  const user = usePage().props.auth.user.id;
  const [date, setDate] = useState(new Date());
  const { data, setData, post, processing, errors, reset } = useForm({
    policy_id: "",
    user_id: user,
    entity_id: "",
    audit_logs: "",
    status: "not_uploaded",
    assignee_id: "",
    recurrence: "",
    review_date: "",
    approver_id: "",
    departmentId: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("userpolicy.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  const showEntity = (list: any) => {
    return (
      <option key={list.id} value={list.id}>
        {list.name}
      </option>
    );
  };

  const handleDateChange = (selectedDates: any) => {
    if (selectedDates && selectedDates.length > 0) {
      setData((prevData) => ({
        ...prevData,
        review_date: selectedDates[0],
      }));
    }
  };

  return (
    <React.Fragment>
      <Head title="Organizations" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Organizations" pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
              {/* <pre>{JSON.stringify(policies.data.length, undefined, 2)}</pre> */}
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      {/* securityOfficers select form */}
                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-policy"
                            className="form-label"
                          >
                            Policy <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            name="policy_id"
                            id="choices-policy"
                            onChange={(e) =>
                              setData("policy_id", e.target.value)
                            }
                            required
                          >
                            <option>Select...</option>
                            {policies.data.map((policy: any) =>
                              showEntity(policy)
                            )}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.policy_id}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-entity"
                            className="form-label"
                          >
                            Entity <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-entity"
                            onChange={(e) =>
                              setData("entity_id", e.target.value)
                            }
                            required
                          >
                            <option>Select...</option>
                            {entities.data.map((entity: any) => (
                              <option key={entity.id} value={entity.id}>
                                {entity.name}
                              </option>
                            ))}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.entity_id}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-assignee_id"
                            className="form-label"
                          >
                            Assignee
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-assignee_id"
                            onChange={(e) =>
                              setData("assignee_id", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {assignees.data.map((assign: any) => (
                              <option key={assign.id} value={assign.id}>
                                {assign.name}
                              </option>
                            ))}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.assignee_id}
                          </Form.Control.Feedback>
                        </div>
                      </Col>
                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-departmentId"
                            className="form-label"
                          >
                            Department{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-departmentId"
                            required
                            onChange={(e) =>
                              setData("departmentId", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {departments.data.map((assign: any) => (
                              <option key={assign.id} value={assign.id}>
                                {assign.name}
                              </option>
                            ))}
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.departmentId}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-recurrence"
                            className="form-label"
                          >
                            Recurrence
                          </Form.Label>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-recurrence"
                            onChange={(e) =>
                              setData("recurrence", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Annually">Annually</option>
                            <option value="Bi-Annually">Bi-Annually</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Never">Never</option>
                          </select>
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.recurrence}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-approver_id"
                            className="form-label"
                          >
                            Approver
                          </Form.Label>
                          <Form.Control
                            id="approver_id"
                            name="approver_id"
                            placeholder="Enter approver"
                            autoFocus
                            className={
                              "form-control" +
                              (errors.assignee_id ? " is-invalid" : "")
                            }
                            onChange={(e: any) =>
                              setData("approver_id", e.target.value)
                            }
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.approver_id}
                          </Form.Control.Feedback>
                        </div>
                      </Col>

                      <Col xl={6}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-review_date"
                            className="form-label"
                          >
                            Review Date
                          </Form.Label>
                          <Flatpickr
                            className="form-control"
                            value={date}
                            onChange={handleDateChange}
                            options={{
                              dateFormat: "Y-m-d",
                              defaultDate: ["2022-01-20"],
                              minDate: "today",
                            }}
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.review_date}
                          </Form.Control.Feedback>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center gap-3">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("policy.index")}
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
