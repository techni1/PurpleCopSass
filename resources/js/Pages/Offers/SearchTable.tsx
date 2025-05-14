import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Editoffers from "./Editoffers";

const SearchTable = ({ tableData, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [offer, setOffer] = useState(null);

  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleDeleteClick = (offer: any) => {
    if (!offer) return; // Safety check
    setModalTitle("Are You Sure");
    setModalMessage(`Offer will be deleted !!`);
    setOffer(offer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteEmployee = () => {
    if (offer) {
      router.delete(route("offers.destroy", offer), {
        onSuccess: () => {
          toast.success("Offer deleted successfully!");
          setShowModal(false);
        },
        onError: () => {
          toast.error("Failed to delete the offer.");
        },
      });
    }
  };

  const handleEditClick = (offer: any) => {
    if (!offer) return;
    setOffer(offer);
    setShowModalEdit(true);
  };

  // useEffect(() => {
  //   console.log(employeeToDelete);
  // }, [employeeToDelete]);
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
        header: "name",
        cell: (info: any) => (
          <Link
            href={route("offers.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Percentage(%)",
        accessorKey: "percentage",
        enableColumnFilter: false,
      },
      {
        header: "Start Date",
        accessorKey: "offer_startdate",
        enableColumnFilter: false,
      },
      {
        header: "End Date",
        accessorKey: "offer_enddate",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "offer_status",
        enableColumnFilter: false,
        cell: (info: any) => (
          <span
            className={`fw-semibold ${
              info.getValue() == 1 ? "text-success" : "text-danger"
            }`}
          >
            {info.getValue() == 1 ? "Active" : "Deactive"}
          </span>
        ),
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
                onClick={() => handleEditClick(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                EDIT
              </Dropdown.Item>
              {/* <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original.id)}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item> */}
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
        isGlobalFilter={false}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />

      <Editoffers
        show={showModalEdit}
        setShow={setShowModalEdit}
        offer={offer}
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

              <Button variant="danger" onClick={deleteEmployee}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
    </React.Fragment>
  );
};

export { SearchTable };
