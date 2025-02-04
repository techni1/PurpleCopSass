import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PrimaryButton from "../../Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { FilePond } from "react-filepond";
import Dropzone from "react-dropzone";

export default function Create({ auth, categories }: any) {
  const [selectedFiles, setselectedFiles] = useState<any>([]);
  const {
    data: categoryData,
    setData: setCategoryData,
    post: postCategory,
    errors: errorsCategory,
    processing: processingCategory,
    recentlySuccessful: recentlySuccessfulCategory,
    reset: resetCategory,
  } = useForm({
    name: "",
  });
  const {
    data: DocumentData,
    setData: setDocumentData,
    post: postDocument,
    errors: errorsDocument,
    processing: processingDocument,
    recentlySuccessful: recentlySuccessfulDocument,
    reset: resetDocument,
  } = useForm({
    attachment: null,
    document_category: "",
    organization_id: auth.userOrganization.id,
    global_access: 0,
  });

  const onCategorySubmit = (e: any) => {
    e.preventDefault();
    postCategory(route("documentcategory.store"), {
      preserveScroll: true,
      onSuccess: () => {
        resetCategory();
      },
    });
  };
  const onDocumentSubmit = (e: any) => {
    e.preventDefault();
    postDocument(route("document.store"), {
      preserveScroll: true,
      onSuccess: () => {
        resetDocument();
      },
    });
  };
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function handleAcceptedFiles(files: any) {
    setDocumentData("attachment", files[0]);
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  return (
    <React.Fragment>
      <Head title="Organizations" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Organizations" pageTitle="Dashboard" />
          <Row>
            <Col lg={7} xl={7}>
              <Card>
                <Card.Header>Upload Document</Card.Header>
                <Card.Body>
                  <form onSubmit={onDocumentSubmit}>
                    <div>
                      <Dropzone
                        onDrop={(acceptedFiles: any) => {
                          handleAcceptedFiles(acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div
                            className="dz-message needsclick dropzone text-center py-4 "
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <h4>Drop files here or click to upload.</h4>
                            <p className="fs-6 text-muted">
                              {" "}
                              Accepted File Type: pdf, doc, docx, xlsx.
                            </p>
                          </div>
                        )}
                      </Dropzone>
                      <div className="list-unstyled mb-0" id="file-previews">
                        {selectedFiles.map((f: any, i: any) => {
                          return (
                            <div
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    {f.name}

                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Row className="py-3">
                      <Col xl={8} lg={8} md={8}>
                        <Form.Label
                          htmlFor="choices-departments-status-input"
                          className="form-label"
                        >
                          Select Category
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <div>
                          <select
                            className="form-select"
                            data-choices
                            data-choices-search-false
                            id="choices-document_category_id"
                            onChange={(e) =>
                              setDocumentData(
                                "document_category",
                                e.target.value
                              )
                            }
                          >
                            <option>Select...</option>
                            {categories.map((category: any) => (
                              <option key={category.id} value={category.name}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errorsDocument.document_category}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={4} lg={4} md={4}>
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
                            className="mb-0"
                            htmlFor="global_access_no"
                          >
                            No
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div>
                      <Button
                        type="submit"
                        className="btn btn-primary "
                        disabled={processingDocument}
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={5} xl={5}>
              <Card>
                <Card.Header>Create New Category</Card.Header>
                <Card.Body>
                  <form onSubmit={onCategorySubmit}>
                    <Transition
                      show={recentlySuccessfulCategory}
                      enter="transition ease-in-out"
                      enterFrom="opacity-0"
                      leave="transition ease-in-out"
                      leaveTo="opacity-0"
                    >
                      <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>

                    <Form.Control
                      id="category_name"
                      name="category_name"
                      placeholder="Enter Category Name"
                      value={categoryData.name}
                      className={
                        "form-control" +
                        (errorsCategory.name ? " is-invalid" : "")
                      }
                      onChange={(e: any) =>
                        setCategoryData("name", e.target.value)
                      }
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="mt-2 d-block"
                    >
                      {errorsCategory.name}
                    </Form.Control.Feedback>

                    <PrimaryButton
                      className="bg-primary border-0"
                      disabled={processingCategory}
                    >
                      Save
                    </PrimaryButton>
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
