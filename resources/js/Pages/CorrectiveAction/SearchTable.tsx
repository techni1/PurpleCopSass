import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  CORRECTIVE_ACTION_SOURCE_TEXT_MAP,
  CORRECTIVE_STATUS_CLASS_MAP,
  CORRECTIVE_STATUS_TEXT_MAP,
  FINDING_STATUS_CLASS_MAP,
  FINDING_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";
import CorrectiveActionDetails from "./CorrectiveActionDetails";
import {
  fetchAssigneeListData,
  getAssigneeList,
  getAssigneeListStatus,
} from "../../slices/assigneeList/reducer";
import RiskRegisterDetails from "./RiskRegister/RiskRegisterDetails";
import { router, usePage } from "@inertiajs/react";
import { fetchCorrectiveActionData } from "../../slices/correctiveAction/reducer";
import axios from "axios";
import EditCorrectiveAction from "./EditCorrectiveAction";
interface CorrectiveAction {
  name: any;
  assignee: any;
  due_date: any;
  status: any;
  type: any;
  type_id: any;
}
const SearchTable = ({ tableData }: any) => {
  const userRole = usePage().props.auth.roles;
  const user = usePage().props.auth.user;

  // const dispatch = useDispatch();
  // const assigneeList = useSelector(getAssigneeList);
  // const assigneeListStatus = useSelector(getAssigneeListStatus);

  const [correctiveAction, setCorrectiveAction] = useState([]);
  const [showCorrectiveAction, setShowCorrectiveAction] = useState(false);
  const [showEditCorrectiveAction, setShowEditCorrectiveAction] =
    useState(false);

  // const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [correctiveActionToDelete, setCorrectiveActionToDelete] =
    useState<CorrectiveAction>();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const deleteCA = async () => {
  //   if (
  //     correctiveActionToDelete &&
  //     correctiveActionToDelete.type == "CorrectiveAction"
  //   ) {
  //     router.delete(
  //       route("correctiveaction.destroy", correctiveActionToDelete.type_id)
  //     );
  //   }
  //   if (
  //     correctiveActionToDelete &&
  //     correctiveActionToDelete.type == "RiskRegister"
  //   ) {
  //     try {
  //       const response = await axios.post("/delete-risk-register-assignee", {
  //         id: correctiveActionToDelete.type_id,
  //       });
  //       console.log("Delete successful:", response.data);
  //     } catch (error) {}
  //   }
  //   setShowModal(false);
  //   //@ts-ignore
  //   dispatch(fetchCorrectiveActionData());
  // };

  // useEffect(() => {
  //   if (assigneeListStatus == "idle") {
  //     //@ts-ignore
  //     dispatch(fetchAssigneeListData());
  //   }
  // }, [tableData]);

  // const assigneeName = (id: any) => {
  //   if (assigneeList.length > 0) {
  //     const assignee = assigneeList.find((item: any) => item.id == id);
  //     return assignee.name;
  //   }
  // };

  // useEffect(() => {
  //   async function fetchCorrectiveAction() {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(
  //         //@ts-ignore
  //         `/show-corrective-action/${correctiveAction.type_id}`
  //       );
  //       setCorrectiveAction(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log("Error Fetching Corrective action", error);
  //     }
  //   }
  //   fetchCorrectiveAction();
  // }, [correctiveAction]);

  const handleDelete = (ca: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(ca.name);
    setCorrectiveActionToDelete(ca);
    setShowModal(true);
  };

  const handleCAShow = (CA: any) => {
    setCorrectiveAction(CA);
    setShowCorrectiveAction(true);
  };

  const deleteClient = () => {
    router.delete(route("correctiveaction.destroy", correctiveActionToDelete));
    setShowModal(false);
  };

  const handleEdit = (CA: any) => {
    setCorrectiveAction(CA);
    setType(CA.type);
    setShowEditCorrectiveAction(true);
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
        header: "Name",
        cell: (info: any) => (
          <Button
            variant="link"
            onClick={() => handleCAShow(info.row.original)}
            className="p-0"
          >
            {info.getValue()}
          </Button>
        ),
        accessorKey: "non_conformity_name",
        enableColumnFilter: false,
      },
      {
        header: "Assigner",
        accessorKey: "assigner.name",
        enableColumnFilter: false,
      },

      {
        header: "Source",
        cell: (info: any) => (
          <>
            {info.getValue()
              ? CORRECTIVE_ACTION_SOURCE_TEXT_MAP[
                  info.getValue().split("\\").pop()
                ]
              : "Corrective Action"}
          </>
        ),
        accessorKey: "source_type",
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        accessorKey: "assignee.name",
        enableColumnFilter: false,
      },
      {
        header: "Due Date",
        accessorKey: "due_date",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " +
              CORRECTIVE_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {CORRECTIVE_STATUS_TEXT_MAP[info.getValue()]}
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
                className={
                  "dropdown-item edit-item-btn text-info" +
                  (user.id != info.row.original.assigner.id ? "text-dark " : "")
                }
                disabled={user.id != info.row.original.assigner.id}
                onClick={() => handleEdit(info.row.original)}
              >
                <i
                  className={
                    "ri-pencil-fill align-bottom me-2 text-info" +
                    (user.id != info.row.original.assigner.id
                      ? "text-dark "
                      : "")
                  }
                ></i>{" "}
                Edit
              </Dropdown.Item>

              <Dropdown.Item
                disabled={user.id != info.row.original.assigner.id}
                className={
                  "dropdown-item remove-item-btn text-danger" +
                  (user.id != info.row.original.assigner.id ? "text-dark " : "")
                }
                onClick={() => handleDelete(info.row.original)}
              >
                <i
                  className={
                    "ri-delete-bin-fill align-bottom me-2 text-danger" +
                    (user.id != info.row.original.assigner.id
                      ? "text-dark "
                      : "")
                  }
                ></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    []
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
        header: "Name",
        cell: (info: any) => (
          <Button
            variant="link"
            onClick={() => handleCAShow(info.row.original)}
            className="p-0"
          >
            {info.getValue()}
          </Button>
        ),
        accessorKey: "non_conformity_name",
        enableColumnFilter: false,
      },
      {
        header: "Assigner",
        accessorKey: "assigner.name",
        enableColumnFilter: false,
      },

      {
        header: "Source",
        cell: (info: any) => (
          <>
            {info.getValue()
              ? info.getValue().split("\\").pop()
              : "Corrective Action"}
          </>
        ),
        accessorKey: "source_type",
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        accessorKey: "assignee.name",
        enableColumnFilter: false,
      },
      {
        header: "Due Date",
        accessorKey: "due_date",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " +
              CORRECTIVE_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {CORRECTIVE_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        accessorKey: "status",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <>
      {/* <pre>{JSON.stringify(correctiveAction, undefined, 2)}</pre> */}
      <TableContainer
        // columns={
        //   userRole[0] != "Assignee" ? columns || [] : columnsAssignee || []
        // }
        columns={columns || []}
        data={tableData || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass=" align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      <CorrectiveActionDetails
        correctiveAction={correctiveAction}
        show={showCorrectiveAction}
        setShow={setShowCorrectiveAction}
      />
      {correctiveAction.length > 0 && (
        <EditCorrectiveAction
          correctiveAction={correctiveAction}
          show={showEditCorrectiveAction}
          setShow={setShowEditCorrectiveAction}
        />
      )}

      {/* {type &&
        (type == "CorrectiveAction" ? (
        ) : type == "RiskRegister" ? (
          <RiskRegisterDetails
            riskData={correctiveAction}
            show={showCorrectiveAction}
            setShow={setShowCorrectiveAction}
          />
        ) : (
          ""
        ))} */}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <h5> {modalMessage}</h5>

            <div className="hstack gap-2 pt-4 justify-content-center">
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
};

export { SearchTable };
