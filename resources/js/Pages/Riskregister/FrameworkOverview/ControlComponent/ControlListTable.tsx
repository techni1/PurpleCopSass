import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Button, Modal } from "react-bootstrap";
import { router } from "@inertiajs/react";
import ControlDetails from "./ControlDetails";

export default function ControlsListTable({
  tableData,
  provision_id,
  organization_framework_id,
}: any) {
  const [showControlList, setShowControlList] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [toDelete, setToDelete] = useState("");
  const [controlId, setControlId] = useState();

  const handleUnlinkControl = (controlId: any) => {
    setShowModal(true);
    setToDelete(controlId);
    setModalMessage("Are you sure you want to unlink this Control?");
    setModalTitle("Unlink");
  };
  const deleteControl = () => {
    const provisionControlId = provision_id;
    setShowModal(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowControlDetails = (id: any) => {
    setControlId(id);
    setShowControlList(true);
  };
  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
        enableColumnFilter: false,
      },
      {
        header: "Control Name",
        accessorKey: "name",
        cell: (info: any) => (
          <div>
            <button
              onClick={() => handleShowControlDetails(info.row.original.id)}
              className="p-0 border-0 bg-transparent text-primary"
            >
              {info.getValue()}
            </button>
          </div>
        ),
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <>
      <React.Fragment>
        <TableContainer
          columns={columns || []}
          data={tableData || []}
          customPageSize={10}
          divClass="table-responsive table-card mb-3"
          tableClass="align-middle table-head-nowrap"
          theadClass="table-light"
          SearchPlaceholder="Search..."
        />
      </React.Fragment>

      {controlId && (
        <ControlDetails
          show={showControlList}
          setShow={setShowControlList}
          controlId={controlId}
          provision_id={provision_id}
          organization_framework_id={organization_framework_id}
        />
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body className="text-center p-5">
          <i className="ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4">{modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={deleteControl}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
