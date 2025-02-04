import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import {
  FRAMEWORK_STATUS_CLASS_MAP,
  FRAMEWORK_STATUS_TEXT_MAP,
} from "../../../Components/constants/statusConstant";

const SearchTable = ({ tableData }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [frameworkToDelete, setFrameworkToDelete] = useState("");

  const handleDeleteClick = (framework: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Framework ${framework.name} will be deleted !!`);
    setFrameworkToDelete(framework);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(route("framework.destroy", frameworkToDelete));
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
        header: "Framework Name",
        cell: (info: any) => (
          <Link
            href={route("framework.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " + FRAMEWORK_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {FRAMEWORK_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        enableColumnFilter: false,
      },

      {
        header: "Description",
        accessorKey: "description",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <Dropdown>
            <Dropdown.Toggle
              href="#"
              className="btn btn-soft-primary btn-sm dropdown arrow-none"
              as="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item
                className="dropdown-item edit-item-btn"
                onClick={() =>
                  (window.location.href = route(
                    "framework.edit",
                    info.row.original.id
                  ))
                }
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                EDIT
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original)}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
