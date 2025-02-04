import React, { useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const SearchTable = ({ tableData }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [provisionCategoryToDelete, setProvisionCategoryToDelete] =
    useState("");

  const handleDeleteClick = (category: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Provision Category ${category.name} will be deleted !!`);
    setProvisionCategoryToDelete(category);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(
      route("provisioncategory.destroy", provisionCategoryToDelete)
    );
    setShowModal(false);
  };

  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Category Number",
        accessorKey: "category_number",
        enableColumnFilter: false,
      },
      {
        header: "Created at",
        accessorKey: "created_at",
        enableColumnFilter: false,
      },
      {
        header: "Updated By",
        accessorKey: "updatedBy.name",
        enableColumnFilter: false,
      },
      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">EDIT</Tooltip>}
          >
            <Link href={route("provisioncategory.edit", info.row.original.id)}>
              <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
            </Link>
          </OverlayTrigger>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      {/* Vertically Centered */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4"> {modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={(e) => deleteClient()}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export { SearchTable };
