import { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link, router, usePage } from "@inertiajs/react";
import Reassign from "./Reassign";
import InlineAssign from "../../../Components/InlineAssign";
import { Button, Dropdown, Modal } from "react-bootstrap";
import {
  POLICY_STATUS_CLASS_MAP,
  POLICY_STATUS_TEXT_MAP,
} from "../../../Components/constants/statusConstant";
import ScopeChange from "./ScopeChange";

export default function EvidenceList({
  listData,
  assigneeList,
  auditDetails,
}: any) {
  const userRoles = usePage().props.auth.roles;
  const user = usePage().props.auth.user;
  const [currentUserEvidence, setCurrentUserEvidence] = useState([]);
  const [showReassignModal, setShowReassignModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [evidenceToDelete, setEvidenceToDelete] = useState("");
  const [reassign, setReassign] = useState([]);
  const [reqName, setReqName] = useState("");

  const [assigneeModalShow, setAssigneeModalShow] = useState(false);

  const handleDeleteClick = (evidence: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(evidence.evidence.name);
    setEvidenceToDelete(evidence);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(route("organizationevidence.destroy", evidenceToDelete));
    setShowModal(false);
  };

  useEffect(() => {
    const evidence = listData.filter(
      (data: any) =>
        data.assignee?.id === user.id || data.approver?.id === user.id
    );
    setCurrentUserEvidence(evidence);
  }, [listData, user.id]);

  const handleReassign = (evidence: any) => {
    setReassign(evidence);
    setShowReassignModal(true);
  };

  const handleAssigneeModal = (evidence: any, type: any) => {
    setReqName(type);
    setReassign(evidence);
    setAssigneeModalShow(true);
  };
  const handleReassignClose = () => {
    setShowReassignModal(false);
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
        header: "Evidence",
        cell: (info: any) => (
          <div>
            {info.row.original.scope == "in" ? (
              <Link
                href={route("organizationevidence.show", info.row.original.id)}
                data={{ audit: auditDetails?.id }}
              >
                {info.getValue()}
              </Link>
            ) : (
              <span
                className={info.row.original.scope == "out" ? "text-muted" : ""}
              >
                {info.getValue()}
              </span>
            )}
          </div>
        ),
        footer: (props: any) => props.column.id,
        accessorKey: "evidence.name",
        enableColumnFilter: false,
      },
      {
        header: "Recurrence",
        accessorKey: "recurrence",
        enableColumnFilter: false,
      },

      {
        header: "Status",
        cell: (info: any) =>
          info.row.original.scope === "in" && (
            <span
              className={
                "text-nowrap" + POLICY_STATUS_CLASS_MAP[info.getValue()]
              }
            >
              {POLICY_STATUS_TEXT_MAP[info.getValue()]}
            </span>
          ),
        accessorKey: "status",
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        accessorKey: "assignee.name",
        cell: (info: any) =>
          info.row.original.assignee ? (
            <span>{info.row.original.assignee.name} </span>
          ) : (
            info.row.original.scope === "in" &&
            userRoles[0] == "Admin" && (
              <button
                className=" bg-transparent border rounded border-primary text-primary"
                onClick={() =>
                  handleAssigneeModal(info.row.original, "assignee_id")
                }
              >
                <i className="ri-user-add-fill" />
              </button>
            )
          ),
        enableColumnFilter: false,
      },
      {
        header: "Approver",
        accessorKey: "approver.name",
        cell: (info: any) =>
          info.row.original.approver ? (
            <span>{info.row.original.approver.name} </span>
          ) : (
            info.row.original.scope === "in" &&
            userRoles[0] == "Admin" && (
              <button
                className=" bg-transparent border rounded border-primary text-primary"
                onClick={() =>
                  handleAssigneeModal(info.row.original, "approver_id")
                }
              >
                <i className="ri-user-add-fill" />
              </button>
            )
          ),
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
              {info.row.original.scope === "in" &&
                (info.row.original.approver || info.row.original.assignee) && (
                  <Dropdown.Item
                    className="dropdown-item edit-item-btn text-info"
                    onClick={() => handleReassign(info.row.original)}
                  >
                    <i className="ri-user-add-fill align-bottom me-2 text-info"></i>{" "}
                    Re-Assign
                  </Dropdown.Item>
                )}
              {info.row.original.evidence.source != "InstaGRC" && (
                <Dropdown.Item className="dropdown-item edit-item-btn">
                  <Link
                    href={route("evidence.edit", info.row.original.evidence.id)}
                  >
                    <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                    EDIT
                  </Link>
                </Dropdown.Item>
              )}
              {info.row.original.evidence.source != "InstaGRC" && (
                <Dropdown.Item
                  className="dropdown-item remove-item-btn text-danger"
                  onClick={() => handleDeleteClick(info.row.original)}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                  DELETE
                </Dropdown.Item>
              )}
              {info.row.original.approver_status != "approved" && (
                <ScopeChange orgEvidence={info.row.original} />
              )}
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    [listData]
  );
  const columnsAssignee = useMemo(
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
        header: "Evidence",
        cell: (info: any) => (
          <div>
            {info.row.original.assignee &&
            info.row.original.approver &&
            info.row.original.scope == "in" ? (
              <Link
                href={route("organizationevidence.show", info.row.original.id)}
              >
                {info.getValue()}
              </Link>
            ) : (
              <span
                className={info.row.original.scope == "out" ? "text-muted" : ""}
              >
                {info.getValue()}
              </span>
            )}
          </div>
        ),
        accessorKey: "evidence.name",
        enableColumnFilter: false,
      },
      {
        header: "Recurrence",
        accessorKey: "recurrence",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) =>
          info.row.original.scope === "in" && (
            <span
              className={
                "text-nowrap" + POLICY_STATUS_CLASS_MAP[info.getValue()]
              }
            >
              {POLICY_STATUS_TEXT_MAP[info.getValue()]}
            </span>
          ),

        accessorKey: "status",
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        accessorKey: "assignee.name",
        cell: (info: any) =>
          info.row.original.assignee ? (
            <span>{info.row.original.assignee.name} </span>
          ) : (
            info.row.original.scope === "in" && <span>Not Assigned</span>
          ),
        enableColumnFilter: false,
      },
      {
        header: "Approver",
        accessorKey: "approver.name",
        cell: (info: any) =>
          info.row.original.approver ? (
            <span>{info.row.original.approver.name} </span>
          ) : (
            info.row.original.scope === "in" && <span>Not Assigned</span>
          ),
        enableColumnFilter: false,
      },
    ],
    [listData]
  );

  const getRowProps = (row: any) => {
    // Example: Change background color based on some condition
    return {
      style: {
        backgroundColor:
          row.original.scope === "out"
            ? "#cecece"
            : row.index % 2 == 0
            ? "#f9f9f9"
            : "#e9e9e9",
      },
      className: row.original.assignee ? "highlight-row" : "",
    };
  };

  return (
    <>
      <TableContainer
        columns={
          userRoles[0] != "Assignee" ? columns || [] : columnsAssignee || []
        }
        data={
          (userRoles[0] === "Admin" ||
          userRoles[0] === "Auditor" ||
          userRoles[0] === "Super-Admin"
            ? listData
            : currentUserEvidence) || []
        }
        // isGlobalFilter={true}
        customPageSize={10}
        getRowProps={getRowProps}
        // divClass="table-responsive table-card mb-3"
        // tableClass=" align-middle table-wrap"
        // theadClass="table-light"
        SearchPlaceholder="Search..."
      />

      <Reassign
        orgEvidence={reassign}
        show={showReassignModal}
        setShow={setShowReassignModal}
        handleClose={handleReassignClose}
        assignees={assigneeList}
      />
      <InlineAssign
        assignees={assigneeList}
        requirement={reassign}
        reqName={reqName}
        show={assigneeModalShow}
        setShow={setAssigneeModalShow}
      />

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <h5> {modalMessage}</h5>
            <p className="text-danger mb-4">Delete Evidence</p>
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
    </>
  );
}
