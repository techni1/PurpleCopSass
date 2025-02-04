import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import EditMaster from "./EditMaster";

const SearchTable = ({ tableData, pcategory, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [show, setShow] = useState<boolean>(false);

  const [selectedMaster, setSelectedMaster] = useState(null);

  const handleDeleteClick = (employee: any) => {
    if (!employee) return; // Safety check
    setModalTitle("Are You Sure");
    setModalMessage(`Master Setting ${employee.name} will be deleted !!`);
    setEmployeeToDelete(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteEmployee = () => {
    if (employeeToDelete) {
      router.delete(route("mastersetting.destroy", employeeToDelete));
      setShowModal(false);
    }
  };


  const handleMaster = (mastersetting: any) => {
    if (mastersetting) {
      setShow(true);
      setSelectedMaster(mastersetting);
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
        header: "Key",
        cell: (info: any) => (
          <Link
            href={route("mastersetting.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "master_key",
        enableColumnFilter: false,
      },
      {
        header: "Value",
        accessorKey: "master_value",
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
                onClick={() => handleMaster(info.row.original)}
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


      {selectedMaster && (
        <EditMaster
          show={show}
          setShow={setShow}
          master={selectedMaster}
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
