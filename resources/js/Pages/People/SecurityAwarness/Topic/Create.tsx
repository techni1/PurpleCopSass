import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../../../Layouts";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";

export default function Create({ auth, sacategory, topics }: any) {
  const { data: formOneData, setData: setFormOneData, post: postFormOne, processing: processingFormOne, errors: errorsFormOne, reset: resetFormOne } = useForm({
    name: "",
    categoryid: "",
    pdfFile: null,
    videofile: null,
    embedvideo: "",
  });


  const { data: formTwoData, setData: setFormTwoData, post: postFormTwo, processing: processingFormTwo, errors: errorsFormTwo, reset: resetFormTwo } = useForm({
    name: "",

  });

  const { data: formThreeData, setData: setFormThreeData, post: postFormThree, processing: processingFormThree, errors: errorsFormThree, reset: resetFormThree } = useForm({
    topicid: "",
    name: ""

  });

  const handleFormOneSubmit = (e: any) => {
    e.preventDefault();
    postFormOne(route("satopic.store"), {
      preserveScroll: true,
      onSuccess: () => resetFormOne(),
    });
  };


  const handleFormTwoSubmit = (e: any) => {
    e.preventDefault();
    postFormTwo(route("sacategory.store"), {
      preserveScroll: true,
      onSuccess: () => resetFormTwo() // Reset form after successful submit
    });
  };
  const handleFormThreeSubmit = (e: any) => {
    e.preventDefault();
    postFormThree(route("saquestions.store"), {
      preserveScroll: true,
      onSuccess: () => resetFormThree() // Reset form after successful submit
    });
  };

  return (
    <React.Fragment>
      <Head title="Employee" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Add Security Awareness Topic"
            pageTitle="Dashboard"
          />
          <Row>
            <Col lg={12}>
              <Row>
                <Col xl={8}>
                  <Card>
                    <Card.Header> Add Topic</Card.Header>
                    <Card.Body>
                      <form onSubmit={handleFormOneSubmit}>
                        <Row className="p-4">
                          <Col xl={6}>
                            <Form.Label htmlFor="name" className="form-label">
                              Select Category{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <select
                              className="form-control form-select"
                              onChange={(e: any) => setFormOneData('categoryid', e.target.value)}
                              name="category_id"
                              required
                            >
                              <option>Select...</option>

                              {sacategory.map((category: any, key: number) => (
                                <option key={key} value={category.id}>
                                  {category.name}
                                </option>
                              ))}
                            </select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormOne.categoryid && <span>{errorsFormOne.categoryid}</span>}
                            </Form.Control.Feedback>
                          </Col>
                          <Col xl={6}>
                            <Form.Label htmlFor="name" className="form-label">
                              Topic <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                              id="name"
                              name="name"
                              placeholder="Enter Topic"
                              value={formOneData.name}
                              autoFocus
                              className={
                                "form-control" + (errorsFormOne.name ? " is-invalid" : "")
                              }

                              onChange={(e: any) => setFormOneData('name', e.target.value)}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormOne.name}
                            </Form.Control.Feedback>
                          </Col>

                          <Col md={6}>
                            <Form.Label htmlFor="name" className="form-label">
                              PDF File
                            </Form.Label>

                            <Form.Control
                              id="name"
                              type="file"
                              onChange={(e: any) => setFormOneData('pdfFile', e.target.files[0])}
                              className={
                                "form-control" +
                                (errorsFormOne.pdfFile ? " is-invalid" : "")
                              }

                            />

                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormOne.pdfFile}
                            </Form.Control.Feedback>
                          </Col>

                          {/* <Col md={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Video File
                        </Form.Label>

                        <Form.Control
                          id="name"
                          type="file"
                          onChange={(e: any) =>
                            setData("videofile", e.target.files[0])
                          }
                          className={
                            "form-control" +
                            (errors.videofile ? " is-invalid" : "")
                          }
                        />

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.videofile}
                        </Form.Control.Feedback>
                      </Col> */}

                          <Col md={6} className="pt-2">
                            <Form.Label htmlFor="name" className="form-label">
                              Video URL
                            </Form.Label>

                            <Form.Control
                              className="form-control"
                              onChange={(e: any) => setFormOneData('embedvideo', e.target.value)}
                              placeholder="Enter Video URL"
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormOne.embedvideo}
                            </Form.Control.Feedback>
                          </Col>
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
                              disabled={processingFormOne}
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </form>
                    </Card.Body>
                  </Card></Col>
                <Col xl={4}>
                  <Card>
                    <Card.Header> Add Category</Card.Header>
                    <Card.Body>
                      <form onSubmit={handleFormTwoSubmit}>
                        <Row className="p-4">
                          <Col xl={12}>
                            <Form.Label htmlFor="name" className="form-label">
                              Category <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                              id="name"
                              name="name"
                              placeholder="Enter Category"
                              value={formTwoData.name}
                              autoFocus
                              className={
                                "form-control" + (errorsFormTwo.name ? " is-invalid" : "")
                              }
                              onChange={(e) => setFormTwoData('name', e.target.value)}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormTwo.name}
                            </Form.Control.Feedback>
                          </Col>





                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xl={3} md={6}>
                            <Link
                              href={route("assetcategory.index")}
                              className="btn btn-light w-100"
                            >
                              Cancel
                            </Link>
                          </Col>
                          <Col xl={3} md={6}>
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processingFormTwo}
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



            </Col>

            <Col xl={12}>
              <Row>
                <Col xl={4}>
                  <Card>
                    <Card.Header> Add Question</Card.Header>
                    <Card.Body>
                      <form onSubmit={handleFormThreeSubmit}>
                        <Row className="p-4">
                          <Col xl={12}>
                            <Form.Label htmlFor="name" className="form-label">
                              Select Topic{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <select
                              className="form-control form-select"
                              onChange={(e: any) => setFormThreeData('topicid', e.target.value)}
                              name="formThreeData.topicid"
                              required
                            >
                              <option></option>

                              {topics.map((topic: any) => (
                                <option value={topic.id}>{topic.name}</option>
                              ))}
                            </select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormThree.topicid}
                            </Form.Control.Feedback>


                          </Col>
                          <Col xl={12}>
                            <Form.Label htmlFor="name" className="form-label">
                              Question <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <Form.Control
                              id="name"
                              name="name"
                              placeholder="Enter Name"
                              value={formThreeData.name}
                              autoFocus
                              className={
                                "form-control" + (errorsFormThree.name ? " is-invalid" : "")
                              }

                              onChange={(e: any) => setFormThreeData('name', e.target.value)}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errorsFormThree.name}
                            </Form.Control.Feedback>
                          </Col>





                        </Row>

                        <Row className="justify-content-md-center">
                          <Col xl={3} md={6}>
                            <Link
                              href={route("assetcategory.index")}
                              className="btn btn-light w-100"
                            >
                              Cancel
                            </Link>
                          </Col>
                          <Col xl={3} md={6}>
                            <Button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={processingFormThree}
                            >
                              Submit
                            </Button>
                          </Col>



                        </Row>
                      </form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={8}></Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

Create.layout = (page: any) => <Layout children={page} />;
