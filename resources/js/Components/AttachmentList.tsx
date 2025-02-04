import { router, usePage } from "@inertiajs/react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function AttachmentList({
  documents,
  setProgressBar,
  setAssigneeStatus,
}: any) {
  const userRoles = usePage().props.auth.roles;
  const user = usePage().props.auth.user;
  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }
  const handleDeleteDocument = (document: any) => {
    router.delete(route("document.destroy", document));
    setProgressBar(0);
    setAssigneeStatus("pending");
  };
  return (
    <>
      {documents.map((document: any) => (
        <div key={document.id} className="bg-light p-2 border">
          <div className="d-flex justify-content-between">
            <Button
              key={document.id}
              variant="link"
              className="p-0"
              onClick={() => handleFileOpen(document.document_path)}
            >
              {document.name ? document.name : document.document_path}
            </Button>
            {(user.id == document.created_by || userRoles[0] == "Admin") && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Delete</Tooltip>}
              >
                <Button
                  onClick={() => handleDeleteDocument(document)}
                  className="p-0"
                  variant="link"
                >
                  <i className=" ri-delete-bin-line fs-5" />
                </Button>
              </OverlayTrigger>
            )}
          </div>

          {/* <pre>{JSON.stringify(document, undefined, 2)}</pre> */}
        </div>
      ))}
    </>
  );
}
