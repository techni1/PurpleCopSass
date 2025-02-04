import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import ProgressPlaceholder from "../../../../Components/ProgressPlaceholder";
import AttachmentList from "../../../../Components/AttachmentList";
import AttachmentModal from "../../../../Components/AttachmentModal";
import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileList from "../../../../Components/FileList";

export default function DocumentSection({
  policy,
  setProgressBar,
  assigneeStatus,
  setAssigneeStatus,
  documents,
  files,
}: any) {
  const user = usePage().props.auth.user;
  const userRole = usePage().props.auth.roles;
  const [isDocumentLoading, setIsDocumentLoading] = useState(false);

  const [showAttachmentModal, setShowAttachmentModal] = useState(false);

  const [showEditor, setShowEditor] = useState(false);
  const [type, setType] = useState("");

  const { data, setData, post, processing, errors, reset } = useForm({
    type_id: "",
    version: 1,
    data: "",
    user: userRole[0],
  });

  const handleAttachmentModal = () => {
    setShowAttachmentModal(true);
  };

  const handleEditor = () => {
    setData("type_id", policy.id);
    setType("policy");
    setShowEditor(true);
  };

  const onEditorSubmit = (e: any) => {
    e.preventDefault();
    post(route("editor.store", { type }), {
      preserveScroll: true,
      onSuccess: () => {
        setAssigneeStatus("complete");
        setShowEditor(false);
        reset();
      },
    });
  };

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setData("data", data);
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            {/* <pre>{JSON.stringify(documents, undefined, 2)}</pre> */}

            <Card.Body className="p-4">
              {isDocumentLoading ? (
                <ProgressPlaceholder />
              ) : (
                <>
                  <Row>
                    <Col>
                      <h5 className="pb-2">Attachments</h5>
                      {(documents.length > 0 && (
                        <AttachmentList
                          documents={documents}
                          setProgressBar={setProgressBar}
                          setAssigneeStatus={setAssigneeStatus}
                        />
                      )) ||
                        (files.length > 0 && (
                          <>
                            <FileList
                              files={files}
                              requirement={policy}
                              setProgressBar={setProgressBar}
                              setAssigneeStatus={setAssigneeStatus}
                              type={"policy"}
                            />
                            {/* <pre>{JSON.stringify(files, undefined, 2)}</pre> */}
                          </>
                        ))}
                    </Col>
                  </Row>
                  {((policy.assignee == null && userRole == "Admin") ||
                    (policy.assignee && policy.assignee.id == user.id)) &&
                    documents.length == 0 &&
                    files.length == 0 && (
                      <Row>
                        <Col>
                          <Button
                            className="me-2 col-3"
                            onClick={handleAttachmentModal}
                          >
                            <i className="ri-upload-2-line" /> Upload File
                          </Button>
                          {/* </Col>
                      <Col> */}
                          <Button
                            className="me-2 col-3"
                            onClick={handleEditor}
                            variant="outline-info"
                          >
                            <i className="ri-edit-box-line" /> Open Editor
                          </Button>
                          {/* <Link
                          className="btn btn-outline-info me-2 col-3"
                          href={route("editor.editor", policy.id)}
                        >
                          <i className="ri-edit-box-line" /> Open Editor
                        </Link> */}
                        </Col>
                      </Row>
                    )}

                  {/* <pre>{JSON.stringify(documents, undefined, 2)}</pre> */}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <AttachmentModal
        showAttachmentModal={showAttachmentModal}
        setShowAttachmentModal={setShowAttachmentModal}
        model={policy}
        setProgressBar={setProgressBar}
        setAssigneeStatus={setAssigneeStatus}
        modelType={"App\\Models\\OrganizationPolicy"}
        category={"Policy"}
      />

      <Modal
        size="xl"
        // fullscreen
        className="modal-fullscreen"
        id="fullscreeexampleModal"
        show={showEditor}
        onHide={() => setShowEditor(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="card-title mb-0 ">{policy.policy.name}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12} className="">
              <Form onSubmit={onEditorSubmit}>
                <CKEditor
                  editor={ClassicEditor}
                  // data={"<p>Hello from CKEditor 5!</p>"}
                  onChange={handleEditorChange}
                  // onReady={(editor) => {
                  //   console.log(editor);
                  // }}
                />

                <Button type="submit" disabled={processing} className="mt-2">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
