import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import EditPartner from "./EditPartner";

const SearchTable = ({ tableData, pcategory, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [show, setShow] = useState<boolean>(false);

  const [selectedPartner, setSelectedPartner] = useState(null);

  const handleDeleteClick = (employee: any) => {
    if (!employee) return; // Safety check
    setModalTitle("Are You Sure");
    setModalMessage(`Partner ${employee.name} will be deleted !!`);
    setEmployeeToDelete(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteEmployee = () => {
    if (employeeToDelete) {
      router.delete(route("partner.destroy", employeeToDelete));
      setShowModal(false);
    }
  };


  const handlePartner = (partner: any) => {
    if (partner) {
      setShow(true);
      setSelectedPartner(partner);
    }
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
        header: "Legal Name",
        cell: (info: any) => (
          <Link
            href={route("partner.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "legalname",
        enableColumnFilter: false,
      },
      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Contact No",
        accessorKey: "phone",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => (
          <div
            className={`d-grid gap-2 text-white text-capitalize btn btn-sm btn-  ${
              info.getValue() === "active"
                ? "bg-success"
                : "bg-danger"
            }`}
          >
            {info.getValue()}
          </div>
        ),

        accessorKey: "partners_status",
        enableColumnFilter: false,
      },
      {
        header: "Commission",
        accessorKey: "commission_rate",
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
              <Dropdown.Item className="dropdown-item edit-item-btn"
                onClick={() => handlePartner(info.row.original)}
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
        isGlobalFilter={false}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />


      {selectedPartner && (
        <EditPartner
          show={show}
          setShow={setShow}
          partner={selectedPartner}
          pcategory={pcategory}
        />
      )}

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
    </React.Fragment>
  );
};

export { SearchTable };
