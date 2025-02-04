import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditCompliance from "./Edit";
import DeleteCompliance from "./Delete";

export default function Action({ visibility, compliance, framework }: any) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }
  const {
    data,
    setData,
    patch,
    processing,
    errors,
    reset,
    recentlySuccessful,
  } = useForm({
    visibility: compliance.visibility,
    validText: "",
  });

  const handleVisibilityToggle = (e: any) => {
    setData({
      ...data,
      visibility: e.target.checked,
      validText: "validText",
    });
  };

  useEffect(() => {
    if (data.visibility == true || data.visibility == false) {
      onSubmit();
    }
  }, [data]);

  const onSubmit = () => {
    if (data.validText != "") {
      patch(route("compliance.update", compliance.id), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
        },
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Toggle Visibility</Tooltip>}
        >
          <div className="form-check form-switch form-switch-right form-switch-md">
            <Form.Check.Input
              // onChange={(e) => setData("visibility", e.target.checked)}
              onChange={(e) => handleVisibilityToggle(e)}
              checked={visibility}
              className="form-check-input code-switcher "
              style={{ width: "30px", height: "15px" }}
              // id={provision.id}
              type="checkbox"
            />
          </div>
        </OverlayTrigger>

        {compliance.documents[0]?.document_path && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Attachment</Tooltip>}
          >
            <Button
              variant="link"
              className="p-0"
              onClick={() =>
                handleFileOpen(compliance.documents[0]?.document_path)
              }
            >
              <i className="ri-attachment-line fs-5 text-secondary" />
            </Button>
          </OverlayTrigger>
        )}

        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button
            variant="link"
            className="p-0 m-0"
            onClick={() => setShowEditModal(true)}
          >
            <i className=" ri-settings-2-fill fs-5 text-secondary" />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Button
            variant="link"
            className="p-0 m-0"
            onClick={() => setShowDeleteModal(true)}
          >
            <i className="ri-delete-bin-fill fs-5 text-danger" />
          </Button>
        </OverlayTrigger>
      </div>

      <EditCompliance
        show={showEditModal}
        setShow={setShowEditModal}
        framework={framework}
        compliance={compliance}
      />
      <DeleteCompliance
        show={showDeleteModal}
        setShow={setShowDeleteModal}
        compliance={compliance}
      />
    </>
  );
}
