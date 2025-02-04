import React, { useMemo, useState, useEffect } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllEvidenceScope,
  toggleEvidenceScope,
} from "../../../../slices/evidenceScope/evidenceScopeSlice";
import { Link, useForm, usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import {
  fetchOrganizationEvidenceData,
  getAllOrganizationEvidence,
} from "../../../../slices/OrganizationEvidence/reducer";
import AssigneeModal from "./AssigneeModal";

import EvidenceDetail from "./EvidenceDetail";
import { getAssigneeList } from "../../../../slices/assigneeList/reducer";
import { addOrganizationEvidence } from "../../../../slices/OrganizationEvidence/reducer";

export default function EvidenceList({
  listData,
  organization_framework_id,
  provision_id,
  control_id,
}: any) {
  const [isEvidenceDetailShow, setIsEvidenceDetailShow] = useState(false);
  const [evidenceDetails, setEvidenceDetails] = useState([]);
  const userRoles = usePage().props.auth.roles;
  const userOrganization = usePage().props.auth.userOrganization;
  const [evidenceScopes, setEvidenceScopes] = useState<{
    [key: number]: boolean;
  }>({});
  const [showAssigneeModal, setShowAssigneeModal] = useState(false);
  const [name, setName] = useState("");
  const [assigneeDate, setAssigneeDate] = useState(new Date());
  const [approverDate, setApproverDate] = useState(new Date());
  const {
    data,
    setData,
    post,
    processing,
    errors,
    setError,
    reset,
    clearErrors,
  } = useForm({
    organization_id: userOrganization.id,
    evidence_id: "",
    assignee_id: "",
    assignee_status: "pending",
    approver_status: "pending",
    assignee_due_date: "",
    approver_id: "",
    approver_completion_data: "",
  });

  const defaultnotify = () =>
    toast("Assignee and Approver are updated", {
      position: "top-right",
      hideProgressBar: true,
      className: "text-white bg-success",
    });
  const alreadyExistsnotify = () =>
    toast("This Evidence is already assigneed", {
      position: "top-right",
      hideProgressBar: true,
      className: "text-white bg-info",
    });

  const dispatch = useDispatch();
  const evidenceScopeData = useSelector(getAllEvidenceScope);
  const organizationEvidences = useSelector(getAllOrganizationEvidence);
  const assignees = useSelector(getAssigneeList);

  useEffect(() => {
    const initialScopes: { [key: number]: boolean } = {};
    listData.forEach((evidence: any) => {
      const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${evidence.id}`;
      const isOutOfScope = evidenceScopeData.some(
        (scope: any) =>
          scope.organization_framework_id === organization_framework_id &&
          scope.provision_id === provision_id &&
          scope.control_id === control_id &&
          scope.evidence_id === evidence.id
      );
      //@ts-ignore
      initialScopes[scopeKey] = isOutOfScope;
    });
    setEvidenceScopes(initialScopes);
  }, [
    listData,
    evidenceScopeData,
    organization_framework_id,
    provision_id,
    control_id,
  ]);

  const handleScopeChange = async (evidence_id: number) => {
    try {
      const response = await axios.post("/store-evidence-scope", {
        organization_framework_id: organization_framework_id,
        provision_id: provision_id,
        control_id: control_id,
        evidence_id: evidence_id,
      });
      if (response) {
        dispatch(
          toggleEvidenceScope({
            organization_framework_id,
            provision_id,
            control_id,
            evidence_id,
          })
        );
        const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${evidence_id}`;
        setEvidenceScopes((prevScopes) => ({
          ...prevScopes,
          //@ts-ignore
          [scopeKey]: !prevScopes[scopeKey],
        }));
      }
    } catch (error) {
      console.error("Error updating scope", error);
    }
  };

  const handleAssigneeChange = (evidence: any) => {
    reset();
    clearErrors();
    setApproverDate(new Date());
    setAssigneeDate(new Date());
    setShowAssigneeModal(true);
    setName(evidence.name);
    setData("evidence_id", evidence.id);
  };

  const handleAssigneeModalClose = () => {
    setShowAssigneeModal(false);
  };

  const handleEvidenceDetailsModal = (data: any) => {
    setEvidenceDetails(data);
    setIsEvidenceDetailShow(true);
  };

  const assigneeName = (evidence: any, name: string) => {
    const find = organizationEvidences.find(
      (item: any) => item.evidence.id == evidence.id
    );
    if (name === "evidence") {
      return find ? (
        <Link href={route("organizationevidence.show", find)}>
          {evidence.name}
        </Link>
      ) : (
        <h6>{evidence.name}</h6>
      );
    }
    if (name === "assignee") {
      return find ? (
        <span className="text-dark">{find.assignee.name}</span>
      ) : (
        <button
          onClick={() => handleAssigneeChange(evidence)}
          className="btn border border-primary fs-5 py-0 px-2 text-primary"
        >
          <i className="ri-user-add-line" />
        </button>
      );
    }
  };

  const onAssigneeSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/store-organization-evidence", {
        ...data,
      });
      if (response.data.exists) {
        setShowAssigneeModal(false);
        alreadyExistsnotify();
      }
      if (response.data.success) {
        dispatch(
          addOrganizationEvidence({
            ...data,
          })
        );
        //@ts-ignore
        dispatch(fetchOrganizationEvidenceData(userOrganization.id));
        setShowAssigneeModal(false);
        defaultnotify();
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.errors);
      }
    }
  };

  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: (info: any) => {
          const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${info.row.original.id}`;
          //@ts-ignore
          return evidenceScopes[scopeKey] ? (
            <h6 className="text-muted">{info.getValue()}</h6>
          ) : (
            assigneeName(info.row.original, "evidence")
          );
        },
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        cell: (info: any) => {
          const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${info.row.original.id}`;
          return userRoles == "Admin"
            ? //@ts-ignore
              evidenceScopes[scopeKey]
              ? ""
              : assigneeName(info.row.original, "assignee")
            : "";
        },
      },
      {
        header: "Action",
        accessorKey: "status",
        cell: (info: any) => {
          const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${info.row.original.id}`;
          return userRoles == "Admin" ? (
            <Dropdown>
              <Dropdown.Toggle
                href="#"
                className={
                  "p-0 btn dropdown arrow-none " +
                  //@ts-ignore
                  (evidenceScopes[scopeKey] ? "text-muted" : "")
                }
                as="button"
              >
                {
                  //@ts-ignore
                  evidenceScopes[scopeKey] ? "Out of Scope" : "In Scope"
                }
                {/* <i className="ri-more-2-fill align-middle"></i> */}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item
                  className="dropdown-item edit-item-btn"
                  onClick={() => handleScopeChange(info.row.original.id)}
                >
                  {
                    //@ts-ignore
                    evidenceScopes[scopeKey] ? (
                      <>
                        <i className="ri-add-box-line align-bottom me-2 text-success"></i>{" "}
                        Mark In Scope
                      </>
                    ) : (
                      <>
                        <i className="ri-indeterminate-circle-line align-bottom me-2 text-danger"></i>{" "}
                        Mark Out of Scope
                      </>
                    )
                  }
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            ""
          );
        },
        enableColumnFilter: false,
      },
    ],
    [evidenceScopes, organization_framework_id, provision_id, control_id]
  );
  return (
    <React.Fragment>
      <ToastContainer />

      {listData.length > 0 && (
        <>
          <TableContainer
            columns={columns || []}
            data={listData || []}
            customPageSize={10}
            divClass="table-responsive table-card mb-3"
            tableClass="align-middle table-head-nowrap"
            theadClass="table-light"
            SearchPlaceholder="Search..."
          />
        </>
      )}
      <AssigneeModal
        show={showAssigneeModal}
        handleClose={handleAssigneeModalClose}
        name={name}
        assigneeDate={assigneeDate}
        approverDate={approverDate}
        assignees={assignees}
        setAssigneeDate={setAssigneeDate}
        setApproverDate={setApproverDate}
        data={data}
        setData={setData}
        errors={errors}
        onAssigneeSubmit={onAssigneeSubmit}
        processing={processing}
      />
      {evidenceDetails && (
        <EvidenceDetail
          show={isEvidenceDetailShow}
          setShow={setIsEvidenceDetailShow}
          evidenceDetails={evidenceDetails}
        />
      )}
    </React.Fragment>
  );
}
