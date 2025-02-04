import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import {
  PROVISION_STATUS_CLASS_MAP,
  PROVISION_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [provisionToDelete, setProvisionToDelete] = useState("");

  const handleDeleteClick = (provision: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Provisions ${provision.name} will be deleted !!`);
    setProvisionToDelete(provision);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(route("provisions.destroy", provisionToDelete));
    setShowModal(false);
  };
  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),
        enableColumnFilter: false,
      },
      {
        header: "Article",
        accessorKey: "code",
        enableColumnFilter: false,
      },
      {
        header: "Provisions",
        cell: (info: any) => (
          <Link href={route("provisions.show", info.row.original.id)}>
            <div className="m-0 p-0" style={{ width: "400px" }}>
              {info.getValue()}
            </div>
          </Link>
        ),
        accessorKey: "provisions",
        enableColumnFilter: false,
      },
      {
        header: "Category",
        cell: (info: any) => (
          <div className="m-0 p-0" style={{ width: "200px" }}>
            {info.getValue()}
          </div>
        ),
        accessorKey: "category.name",
        enableColumnFilter: false,
      },
      {
        header: "Framework",
        cell: (info: any) => (
          <span className="bg-primary-subtle py-1 px-2 m-1 rounded text-primary text-nowrap">
            {info.getValue()}
          </span>
        ),
        accessorKey: "framework_name",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " + PROVISION_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {PROVISION_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        accessorKey: "status",
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
                    "provisions.edit",
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
        customPageSize={100}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-head-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
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
