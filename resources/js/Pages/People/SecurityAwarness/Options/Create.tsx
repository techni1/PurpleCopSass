import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../../Layouts";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";

export default function Create({ auth, questions }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    questionId: "",
    options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
    correctOption: null,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("saoptions.store"), {
      onSuccess: () => reset(),
      preserveScroll: true,
    });
  };

  return (
    <React.Fragment>
      <Head title="Security Awareness Question Options" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Security Awareness Question Options" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="questionId" className="form-label">
                          Select Question <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className={`form-control form-select ${errors.questionId ? 'is-invalid' : ''}`}
                          onChange={(e) => setData('questionId', e.target.value)}
                          name="questionId"
                          id="questionId"
                          value={data.questionId}
                          required
                        >
                          <option value=""></option>
                          {questions.map((question: any) => (
                            <option key={question.id} value={question.id}>
                              {question.question_text}
                            </option>
                          ))}
                        </select>
                        {errors.questionId && <div className="invalid-feedback">{errors.questionId}</div>}
                      </Col>

                      {data.options.map((option, index) => (
                        <Row key={index} className="p-2">
                          <Col xl={2}>
                            <label>Option {index + 1}</label>
                          </Col>
                          <Col xl={4}>
                            <input
                              type="text"
                              value={option.option}
                              className={`form-control ${errors[`options.${index}.option`] ? 'is-invalid' : ''}`}
                              onChange={(e) => {
                                const newOptions = [...data.options];
                                newOptions[index].option = e.target.value;
                                setData('options', newOptions);
                              }}
                            />
                            {errors[`options.${index}.option`] && (
                              <div className="invalid-feedback">{errors[`options.${index}.option`]}</div>
                            )}
                          </Col>
                          <Col xl={4} className="form-check">
                            <input
                              type="radio"
                              name="correctOption"
                              checked={data.correctOption === index}
                              className="form-check-input px-2"
                              onChange={() => setData('correctOption', index)}
                            />
                            <label className="form-check-label">
                              Correct
                            </label>
                          </Col>
                        </Row>
                      ))}
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("assetcategory.index")}
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
