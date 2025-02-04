import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import EditTicket from "./EditTicket";
import { CORRECTIVE_ACTION_STATUS_CLASS_MAP, CORRECTIVE_ACTION_STATUS_TEXT_MAP, CORRECTIVE_STATUS_CLASS_MAP, SUPPORT_STATUS_CLASS_MAP, SUPPORT_STATUS_TEXT_MAP } from "../../Components/constants/statusConstant";
import Reply from "./Reply";
import AssignTicket from "./AssignTicket";
import NameChar from "../../Components/Common/NameChar";

const SearchTable = ({ tableData, index = 0, userbyDept }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [showEditTicket, setShowEditTicket] = useState<boolean>(false);
  const [showreply, setShowReply] = useState<boolean>(false);
  const [showsupport, setShowSupport] = useState<boolean>(false);

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

  const handleReply = (ticket: any) => {
    if (!ticket) return; // Safety check
    setSelectedTicket(ticket);
    setShowReply(true);
  };

  const handleAssign = (ticket: any) => {
    if (!ticket) return; // Safety check
    setSelectedTicket(ticket);
    setShowSupport(true);
    router.get(route('supporttickets.index'), {
      departmentid: ticket.department_id
    }, {
      only: ['userbyDept'],
      preserveState: true,
      onSuccess: () => {
        setShowSupport(true);
      },
      onError: (error) => {
        console.error('Error reloading data:', error);
      }
    });
  };

  const handleBank = (bank: any) => {
    if (bank) {
      setShowEditTicket(true);
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
        header: "Title",
        cell: (info: any) => (
          <Button onClick={() => handleBank(info.row.original)} variant="link">{info.getValue()}</Button>
        ),
        accessorKey: "title",
        enableColumnFilter: false,
      },
      {
        header: "Organization",
        accessorKey: "organization_id",
        enableColumnFilter: false,
      },
      {
        header: "Department",
        accessorKey: "department_name",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => {
          const statusValue = info.getValue(); // Get the status value
          const statusText = SUPPORT_STATUS_TEXT_MAP[statusValue]; // Map the status value to the corresponding text
          return (
            <span className={SUPPORT_STATUS_CLASS_MAP[statusValue]}>
              {statusText}
            </span>
          );
        },
        accessorKey: "status",
        enableColumnFilter: false,
      },
      {
        header: "Perioty",
        cell: (info: any) => {
          const periotyValue = info.getValue(); // Get the status value
          const periotyText = CORRECTIVE_ACTION_STATUS_TEXT_MAP[periotyValue]; // Map the status value to the corresponding text
          return (
            <span className={CORRECTIVE_ACTION_STATUS_CLASS_MAP[periotyValue]}>
              {periotyText}
            </span>
          );
        },
        accessorKey: "priorty",
        enableColumnFilter: false,
      },

      {
          header: "Assigned",
         cell:(info:any)=>(
          info.getValue()&&
          <NameChar name={info.getValue()} />
         ),
        accessorKey: "assignto",
        enableColumnFilter: false,
      },
      {
        header: "Create Date",
        accessorKey: "create_date",
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
          show={showEditTicket}
          setShow={setShowEditTicket}
          bank={selectedBank}
        />
      )}

      {selectedTicket && (
        <AssignTicket
          showsupport={showsupport}
          setShowSupport={setShowSupport}
          ticket={selectedTicket}
          userbyDept={userbyDept}
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
