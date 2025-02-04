import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import AssetCategoryEdit from "./Edit";
import { toast, ToastContainer } from "react-toastify";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {
  const [queryfunction, setQueryFunction] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (queryfunction: any) => {
    setQueryFunction(queryfunction);
    setShowEditModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [functionToDelete, setFunctionToDelete] = useState("");

  const handleDeleteClick = (queryfunction: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Query " Function ${queryfunction.name}" will be deleted !!`);
    setFunctionToDelete(queryfunction);
    setShowModal(true);
  };
  const deleteClient = () => {
    router.delete(route("qfunctional.destroy", functionToDelete));
    setShowModal(false);
    // toprightnotify();
  };
  // const toprightnotify = () =>
  //   toast("Asset category is deleted", {
  //     position: "top-right",
  //     hideProgressBar: true,
  //     className: "bg-danger text-white",
  //   });
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
        header: "Query Function",
        cell: (info: any) => (
          <Link
            href={route("qfunctional.show", info.row.original.id)}
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
              <Dropdown.Item
                className="dropdown-item edit-item-btn"
                onClick={() => handleEdit(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                EDIT
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original.id)}
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
    <>
      {/* <ToastContainer /> */}

      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
        isGlobalFilter={false}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        // theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      {queryfunction && (
        <AssetCategoryEdit
          show={showEditModal}
          setShow={setShowEditModal}
          queryfunction={queryfunction}
          setQueryFunction={setQueryFunction}
        />
      )}
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
    </>
  );
};

export { SearchTable };
