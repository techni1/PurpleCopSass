import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [categoryToDelete, setCategoryToDelete] = useState("");

  const handleDeleteClick = (category: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Asset "Category ${category.name}" will be deleted !!`);
    setCategoryToDelete(category);
    setShowModal(true);
  };
  const deleteClient = () => {
    router.delete(route("assetsubcategory.destroy", categoryToDelete));
    setShowModal(false);
    // toprightnotify();
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
        header: "Category",
        cell: (info: any) => (
          <Link
            href={route(
              "assetcategory.show",
              info.row.original.asset_categoryid
            )}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "category.name",

        enableColumnFilter: false,
      },

      {
        header: "Sub Category",
        cell: (info: any) => (
          <Link
            href={route(
              "assetsubcategory.show",
              info.row.original.asset_categoryid
            )}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",

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
              <Dropdown.Item className="dropdown-item edit-item-btn">
                <Link
                  href={route("assetsubcategory.edit", info.row.original.id)}
                >
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  EDIT
                </Link>
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
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header className="modal-title" closeButton />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4"> {modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
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
