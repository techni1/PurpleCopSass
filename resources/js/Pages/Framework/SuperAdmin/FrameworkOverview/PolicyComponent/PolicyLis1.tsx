import React, { useMemo, useState, useEffect } from "react";

import { Button, Col, Dropdown, Offcanvas, Row, Table } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllPolicyScope,
  togglePolicyScope,
} from "../../../../../slices/policyScope/policyScopeSlice";
import { useForm, usePage } from "@inertiajs/react";
import { getAssigneeList } from "../../../../../slices/assigneeList/reducer";
import { toast, ToastContainer } from "react-toastify";
import {
  addOrganizationPolicy,
  fetchOrganizationPolicyData,
  getAllOrganizationPolicy,
} from "../../../../../slices/OrganizationPolicy/reducer";
// import AssigneeModal from "./AssigneeModal";
import SinglePolicy from "../../../../Policy/OrganizationPolicy/SinglePolicy";

export default function PolicyList({
  listData,
  organization_framework_id,
  provision_id,
  control_id,
  assignees,
}: any) {
  const [isPolicyDetailShow, setIsPolicyDetailShow] = useState(false);
  const [isAssigneeLoading, setIsAssigneeLoading] = useState(false);
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

  const dispatch = useDispatch();
  const policyScopeData = useSelector(getAllPolicyScope);
  const organizationPolicys = useSelector(getAllOrganizationPolicy);

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
    // console.log("assignee", organizationPolicys);
    const find = organizationPolicys.find((item: any) =>
      item.policy ? item.policy.id == policy.id : item.policy_id == policy.id
    );
    if (name === "policy") {
      return find ? (
        <Button
          variant="link"
          className="p-0"
          onClick={() => handlePolicyDetailsModal(find)}
        >
          {policy.name}
        </Button>
      ) : (
        <h6 className="text-wrap">{policy.name}</h6>
      );
    }
    if (name === "assignee") {
      return find ? (
        <span className="text-dark">
          {find.assignee ? (
            find.assignee.name
          ) : (
            <p className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </p>
          )}
        </span>
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
    setIsAssigneeLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post("/store-organization-policy", {
        ...data,
      });
      if (response.data.exists) {
        setShowAssigneeModal(false);
        // alreadyExistsnotify();
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
        // defaultnotify();
        setIsAssigneeLoading(false);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.errors);
      }
    }
  };

  const handleClose = () => setIsPolicyDetailShow(false);
  return (
    <React.Fragment>
      <pre>{JSON.stringify(listData, undefined, 2)}</pre>
      <div className="live-preview">
        <div className="table-responsive table-card">
          <Row>
            <Col>
              <Table className="align-middle table-nowrap mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col" style={{ width: "150px" }}>
                      Scope
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listData.map((data: any) => {
                    const scopeKey = `${organization_framework_id}-${provision_id}-${control_id}-${data.id}`;
                    return (
                      <tr key={data.id}>
                        <td>
                          {
                            //@ts-ignore
                            policyScopes[scopeKey] ? (
                              <h6 className="text-muted">{data.name}</h6>
                            ) : (
                              assigneeName(data, "policy")
                            )
                          }
                        </td>
                        <td>{data.status}</td>
                        <td>
                          {userRoles == "Admin" ? (
                            <Dropdown>
                              <Dropdown.Toggle
                                href="#"
                                className={
                                  "p-0 btn dropdown arrow-none btn-light px-2 py-1 rounded " +
                                  //@ts-ignore
                                  (policyScopes[scopeKey] ? "text-muted" : "")
                                }
                                as="button"
                              >
                                {
                                  //@ts-ignore
                                  policyScopes[scopeKey]
                                    ? "Out of Scope"
                                    : "In Scope"
                                }
                                {/* <i className="ri-more-2-fill align-middle"></i> */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item
                                  className="dropdown-item edit-item-btn"
                                  onClick={() => handleScopeChange(data.id)}
                                >
                                  {
                                    //@ts-ignore
                                    policyScopes[scopeKey] ? (
                                      <>
                                        <i className="ri-add-box-line align-bottom me-2 text-success"></i>{" "}
                                        In Scope
                                      </>
                                    ) : (
                                      <>
                                        <i className="ri-indeterminate-circle-line align-bottom me-2 text-danger"></i>{" "}
                                        Out of Scope
                                      </>
                                    )
                                  }
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

      {policyDetails && (
        <Offcanvas
          show={isPolicyDetailShow}
          onHide={handleClose}
          placement="end"
          id="offcanvasRight"
        >
          <Offcanvas.Header className="border-bottom" closeButton>
            <Offcanvas.Title id="offcanvasExampleLabel">
              Policy details
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <SinglePolicy policy={policyDetails} />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </React.Fragment>
  );
}
