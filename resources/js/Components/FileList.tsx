import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";

export default function FileList({
  files,
  setProgressBar,
  setAssigneeStatus,
  requirement,
  type,
}: any) {
  const userRoles = usePage().props.auth.roles;
  const user = usePage().props.auth.user;
  const [showEditor, setShowEditor] = useState(false);
  const [fileData, setFileData] = useState("");

  const { data, setData, post, processing, errors, reset } = useForm({
    type_id: "",
    version: 1,
    data: "",
    _method: "PUT",
  });

  const handleDeleteDocument = (file: any) => {
    router.delete(route("editor.destroy", { type, editor: file }));
    setProgressBar(0);
    setAssigneeStatus("pending");
  };

  const handleFileOpen = (file: any) => {
    const ver = parseInt(file.version);
    setFileData(file);
    setData({
      type_id: file.id,
      version: ver + 1,
      data: file.data,
      _method: "PUT",
    });
    setShowEditor(true);
  };

  const onEditorSubmit = (e: any) => {
    e.preventDefault();
    post(route("editor.update", { type, editor: fileData }), {
      preserveScroll: true,
      onSuccess: () => {
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
      {/* <pre>{JSON.stringify(files, undefined, 2)}</pre> */}

      {files.map((file: any) => (
        <div key={file.id} className="bg-light p-2 border">
          <div className="d-flex justify-content-between p-2">
            <Button
              key={file.id}
              variant="link"
              className="p-0 "
              onClick={() => handleFileOpen(file)}
            >
              {requirement.policy
                ? requirement.policy.name
                : requirement.evidence.name}
              <span className="m-2 bg-secondary-subtle text-secondary px-2 py-1 rounded">
                Version {file.version}
              </span>
            </Button>
            {(user.id == file.updated_by.id || userRoles[0] == "Admin") && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}
              >
                <Button
                  onClick={() => handleDeleteDocument(file)}
                  className="p-0"
                  variant="link"
                >
                  <i className=" ri-delete-bin-line fs-5" />
                </Button>
              </OverlayTrigger>
            )}
          </div>
          <div className="p-2" style={{ fontSize: "12px" }}>
            <span className="me-2">{file.updated_by.name}</span>
            <span className="text-secondary">{file.updated_at}</span>
          </div>
          {/* <pre>{JSON.stringify(file, undefined, 2)}</pre> */}
        </div>
      ))}
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
            <h4 className="card-title mb-0 ">
              {requirement.policy
                ? requirement.policy.name
                : requirement.evidence.name}
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12} className="">
              <Form onSubmit={onEditorSubmit}>
                <CKEditor
                  editor={ClassicEditor}
                  data={data.data}
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
