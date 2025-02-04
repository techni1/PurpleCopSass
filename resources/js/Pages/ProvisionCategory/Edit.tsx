import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Create({ auth, provision_category }: any) {
  const userId = auth.user.id;
  const { data, setData, post, processing, errors, reset } = useForm({
    id: provision_category.id,
    name: provision_category.name || "",
    category_number: provision_category.category_number || "",
    updated_by: userId,
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    post(route("provisioncategory.update", provision_category), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Provision Categorys" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Provision Categorys" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(provision_category, undefined, 2)}</pre> */}
          <Row className="justify-content-center">
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
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
                    </Row>
                    <Row className="p-4 pt-0">
                      <Form.Label
                        htmlFor="category_number"
                        className="form-label"
                      >
                        Category Number{" "}
                        <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="category_number"
                        name="category_number"
                        // as="textarea"
                        // rows={3}
                        placeholder="Enter Description"
                        value={data.category_number}
                        required
                        className={
                          "mt-1 form-control" +
                          (errors.category_number ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("category_number", e.target.value)
                        }
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.category_number}
                      </Form.Control.Feedback>
                    </Row>

                    <Row className="justify-content-md-center gap-3">
                      <Col xl={3} md={6}>
                        <Link
                          href={route("provisioncategory.index")}
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
