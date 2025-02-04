import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import EditTicket from "./EditTicket";



const SearchTable = ({ tableData, index = 0 }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [show, setShow] = useState<boolean>(false);
  const [showreply, setShowReply] = useState<boolean>(false);

  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

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


const handleReply=(setSelectedTicket:any)=>{

  if (!selectedTicket) return; // Safety check
  setShowReply(true);
  setSelectedTicket(setSelectedTicket);


}
const handleAssign=(setSelectedTicket:any)=>{}






  const handleBank = (bank: any) => {
    if (bank) {
      setShow(true);
      setSelectedBank(bank);
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
        header: "Employee",
        cell: (info: any) => (

          <Button onClick={() => handleBank(info.row.original)} variant="link">{info.getValue()}</Button>

        ),
        accessorKey: "support_user",
        enableColumnFilter: false,
      },

      
      {
        header: "Title",
        accessorKey: "support_title",
        enableColumnFilter: false,
      },

      {
        header: "Department",
        accessorKey: "department_name",
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
                onClick={() => handleReply(info.row.original)}
              >

                <i className="ri-printer-fill align-bottom me-2 text-primary"></i>{" "}
                Reply
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item edit-item-btn"
                onClick={() => handleAssign(info.row.original)}
              >

                <i className="ri-printer-fill align-bottom me-2 text-primary"></i>{" "}
                Assign
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


      {selectedBank && (
        <EditTicket
          show={show}
          setShow={setShow}
          bank={selectedBank}
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
