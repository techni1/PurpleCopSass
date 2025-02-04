import React, { useMemo, useState, useEffect } from "react";
import TableContainer from "../../../../Components/Common/TableContainer";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllPolicyScope,
  togglePolicyScope,
} from "../../../../slices/policyScope/policyScopeSlice";
import { Link, useForm, usePage } from "@inertiajs/react";
import { getAssigneeList } from "../../../../slices/assigneeList/reducer";
import { toast, ToastContainer } from "react-toastify";
import {
  addOrganizationPolicy,
  fetchOrganizationPolicyData,
  getAllOrganizationPolicy,
} from "../../../../slices/OrganizationPolicy/reducer";
import AssigneeModal from "./AssigneeModal";

import PolicyDetail from "./PolicyDetail";

export default function PolicyList({
  listData,
  organization_framework_id,
  provision_id,
  control_id,
}: any) {
  const [isPolicyDetailShow, setIsPolicyDetailShow] = useState(false);
  const [policyDetails, setPolicyDetails] = useState([]);
  const userRoles = usePage().props.auth.roles;
  const userOrganization = usePage().props.auth.userOrganization;
  const [policyScopes, setPolicyScopes] = useState<{ [key: number]: boolean }>(
    {}
  );
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
    policy_id: "",
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
    toast("This Policy is already assigneed", {
      position: "top-right",
      hideProgressBar: true,
      className: "text-white bg-info",
    });

  const dispatch = useDispatch();
  const policyScopeData = useSelector(getAllPolicyScope);
  const organizationPolicys = useSelector(getAllOrganizationPolicy);
  const assignees = useSelector(getAssigneeList);

  useEffect(() => {
    const initialScopes: { [key: number]: boolean } = {};
    listData.forEach((policy: any) => {
      const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${policy.id}`;
      const isOutOfScope = policyScopeData.some(
        (scope: any) =>
          scope.organization_framework_id === organization_framework_id &&
          scope.provision_id === provision_id &&
          scope.control_id === control_id &&
          scope.policy_id === policy.id
      );
      //@ts-ignore
      initialScopes[scopeKey] = isOutOfScope;
    });
    setPolicyScopes(initialScopes);
  }, [
    listData,
    policyScopeData,
    organization_framework_id,
    provision_id,
    control_id,
  ]);

  const handleScopeChange = async (policy_id: number) => {
    try {
      const response = await axios.post("/store-policy-scope", {
        organization_framework_id: organization_framework_id,
        provision_id: provision_id,
        control_id: control_id,
        policy_id: policy_id,
      });
      if (response) {
        dispatch(
          togglePolicyScope({
            organization_framework_id,
            provision_id,
            control_id,
            policy_id,
          })
        );
        const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${policy_id}`;
        setPolicyScopes((prevScopes) => ({
          ...prevScopes,
          //@ts-ignore
          [scopeKey]: !prevScopes[scopeKey],
        }));
      }
    } catch (error) {
      console.error("Error updating scope", error);
    }
  };

  const handleAssigneeChange = (policy: any) => {
    reset();
    clearErrors();
    setApproverDate(new Date());
    setAssigneeDate(new Date());
    setShowAssigneeModal(true);
    setName(policy.name);
    setData("policy_id", policy.id);
  };

  const handleAssigneeModalClose = () => {
    setShowAssigneeModal(false);
  };

  const handlePolicyDetailsModal = (data: any) => {
    setPolicyDetails(data);
    setIsPolicyDetailShow(true);
  };

  const assigneeName = (policy: any, name: string) => {
    const find = organizationPolicys.find(
      (item: any) => item.policy.id == policy.id
    );
    if (name === "policy") {
      return find ? (
        <Link href={route("organizationpolicy.show", find)}>{policy.name}</Link>
      ) : (
        <h6>{policy.name}</h6>
      );
    }
    if (name === "assignee") {
      return find ? (
        <span className="text-dark">{find.assignee.name}</span>
      ) : (
        <button
          onClick={() => handleAssigneeChange(policy)}
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
      const response = await axios.post("/store-organization-policy", {
        ...data,
      });
      if (response.data.exists) {
        setShowAssigneeModal(false);
        alreadyExistsnotify();
      }
      if (response.data.success) {
        dispatch(
          addOrganizationPolicy({
            ...data,
          })
        );
        //@ts-ignore
        dispatch(fetchOrganizationPolicyData(userOrganization.id));
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
          return policyScopes[scopeKey] ? (
            <h6 className="text-muted">{info.getValue()}</h6>
          ) : (
            assigneeName(info.row.original, "policy")
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
              policyScopes[scopeKey]
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
                  (policyScopes[scopeKey] ? "text-muted" : "")
                }
                as="button"
              >
                {
                  //@ts-ignore
                  policyScopes[scopeKey] ? "Out of Scope" : "In Scope"
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
                    policyScopes[scopeKey] ? (
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
    [policyScopes, organization_framework_id, provision_id, control_id]
  );

  return (
    <React.Fragment>
      <ToastContainer />

      {listData.length > 0 && (
        <TableContainer
          columns={columns || []}
          data={listData || []}
          customPageSize={10}
          divClass="table-responsive table-card mb-3"
          tableClass="align-middle table-head-nowrap"
          theadClass="table-light"
          SearchPlaceholder="Search..."
        />
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
      {policyDetails && (
        <PolicyDetail
          show={isPolicyDetailShow}
          setShow={setIsPolicyDetailShow}
          policyDetails={policyDetails}
        />
      )}
    </React.Fragment>
  );
}
