import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditCompliance from "./Edit";
import DeleteCompliance from "./Delete";

export default function ActionBtnGuest({ compliance }: any) {
  const [showEditModal, setShowEditModal] = useState(false);
  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
          <Button
            variant="link"
            className="p-0 m-0"
            onClick={() => setShowEditModal(true)}
          >
            <i className=" ri-settings-2-fill fs-5 text-secondary" />
          </Button>
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
      </div>

      <EditCompliance
        show={showEditModal}
        setShow={setShowEditModal}
        framework={[]}
        compliance={compliance}
      />
    </>
  );
}
