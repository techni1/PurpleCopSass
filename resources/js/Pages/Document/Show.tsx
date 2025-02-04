import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../../Layouts";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from "react-bootstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import { useState } from "react";
import { SearchTable } from "./SearchTable";

export default function Show({ document, documentAccessList }: any) {
  const {
    data: DocumentData,
    setData: setDocumentData,
    patch: pacthDocument,
    errors: errorsDocument,
    processing: processingDocument,
    recentlySuccessful: recentlySuccessfulDocument,
    reset: resetDocument,
  } = useForm({
    global_access: document.global_access || 0,
  });

  const onDocumentSubmit = (e: any) => {
    e.preventDefault();
    pacthDocument(route("document.update", document), {
      preserveScroll: true,
      onSuccess: () => {},
    });
  };

  return (
    <>
      <Head title="Project Overview" />
      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(documentAccessList, undefined, 2)}</pre> */}
          <Row>
            <Col lg={12}>
              <Card className="mt-n4 mx-n4">
                <div className="bg-secondary-subtle">
                  <Card.Body className="pb-0 px-4">
                    <Row className="align-items-center g-3 mb-3">
                      <div className="col-md">
                        <div>
                          <h4 className="fw-bold text-uppercase">
                            {document.name}
                          </h4>
                          <div className="hstack gap-3 flex-wrap">
                            <div>
                              <i className="ri-building-line align-bottom me-1"></i>{" "}
                              {document.createdBy}
                            </div>
                            <div className="vr"></div>
                            <div>
                              Create Date :{" "}
                              <span className="fw-medium">
                                {document.created_at}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6}>
              <div className="border rounded border-dashed p-2">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light text-primary rounded fs-24">
                        <i className=" ri-file-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="fs-13 mb-1">{document.name}</h5>
                    {/* <div>2.2MB</div> */}
                  </div>
                  <div className="flex-shrink-0 ms-2">
                    <div className="d-flex gap-1">
                      <button
                        type="button"
                        className="btn btn-icon text-muted btn-sm fs-18"
                      >
                        <i className="ri-download-2-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={6} lg={6}>
              <Card>
                <Card.Body>
                  <form onSubmit={onDocumentSubmit}>
                    <Form.Label
                      htmlFor="choices-departments-status-input"
                      className="form-label"
                    >
                      Global Access
                      <span className="text-danger ms-1">*</span>
                    </Form.Label>
                    <div>
                      <input
                        type="radio"
                        className="btn-check"
                        name="global_access"
                        id="global_access_yes"
                        value={1}
                        checked={DocumentData.global_access === 1}
                        onChange={(e: any) =>
                          setDocumentData(
                            "global_access",
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <Button
                        as="label"
                        variant="outline-secondary"
                        className="mb-0 me-2"
                        htmlFor="global_access_yes"
                      >
                        Yes
                      </Button>

                      <input
                        type="radio"
                        className="btn-check"
                        name="global_access"
                        id="global_access_no"
                        value={0}
                        checked={DocumentData.global_access === 0}
                        onChange={(e: any) =>
                          setDocumentData(
                            "global_access",
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <Button
                        as="label"
                        variant="outline-secondary"
                        className="mb-0 me-2"
                        htmlFor="global_access_no"
                      >
                        No
                      </Button>

                      <Button
                        type="submit"
                        className="btn btn-primary"
                        disabled={processingDocument}
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">
            <div className="col-auto">
              <Link
                href={route("documentaccess.create")}
                className="btn btn-secondary"
              >
                <i className="ri-file-shield-2-line align-middle me-1"></i>{" "}
                Grant Access
              </Link>
            </div>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <SearchTable tableData={documentAccessList} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

Show.layout = (page: any) => <Layout children={page} />;
