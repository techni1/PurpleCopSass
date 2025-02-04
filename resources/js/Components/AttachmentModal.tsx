import React, { useEffect, useMemo, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import Layout from "../Layouts";
import Dropzone from "react-dropzone";

export default function AttachmentModal({
  model,
  showAttachmentModal,
  setShowAttachmentModal,
  setAssigneeStatus,
  setProgressBar,
  modelType,
  category,
}: any) {
  const handleAttachmentModalClose = () => {
    setShowAttachmentModal(false);
  };
  const userOrganization = usePage().props.auth.userOrganization;
  const userRoles = usePage().props.auth.roles;
  const [selectedFiles, setselectedFiles] = useState<any>([]);

  const { data, setData, post, processing, errors, reset } = useForm({
    model_id: model.id,
    type: modelType,
    attachment: null,
    document_category: category,
    organization_id: userOrganization.id,
    global_access: 1,
    user: userRoles[0],
  });
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function handleAcceptedFiles(files: any) {
    setData("attachment", files[0]);
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("document.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setProgressBar(50);
        setAssigneeStatus("complete");
        reset();
        setShowAttachmentModal(false);
      },
    });
  };

  return (
    <React.Fragment>
      <Modal show={showAttachmentModal} onHide={handleAttachmentModalClose}>
        <Modal.Header>Attachment</Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            {/* <Row>
                  <Col>
                    <Form.Label htmlFor="attachment" className="form-label">
                      Upload File
                    </Form.Label>
                    <p className="text-muted">
                      File of type: pdf, doc, docx, xlsx.
                    </p>
                    <Form.Control
                      id="attachment"
                      name="attachment"
                      type="file"
                      className={
                        "mt-1 form-control" +
                        (errors.attachment ? " is-invalid" : "")
                      }
                      onChange={(e: any) =>
                        setData("attachment", e.target.files[0])
                      }
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="mt-2 d-block"
                    >
                      {errors.attachment}
                    </Form.Control.Feedback>
                  </Col>
                </Row> */}
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
                          {/* <Col className="col-auto">
                            <img
                              data-dz-thumbnail=""
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={f.name}
                              src={f.preview}
                            />
                          </Col> */}
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
            <Row className="justify-content-md-center gap-3 pt-3">
              <Col>
                <button
                  onClick={handleAttachmentModalClose}
                  className="btn btn-light w-100"
                >
                  Cancel
                </button>
              </Col>
              <Col>
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
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
AttachmentModal.layout = (page: any) => <Layout children={page} />;
