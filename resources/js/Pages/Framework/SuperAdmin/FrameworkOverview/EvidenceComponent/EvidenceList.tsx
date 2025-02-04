import { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../../../Components/Common/TableContainer";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";
import Reassign from "../../../../Evidence/OrganizationEvidence/Reassign";
import {
  fetchProvisionData,
  getProvisionDataById,
} from "../../../../../slices/provision/reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  COMPLIANT_STATUS_CLASS_MAP,
  COMPLIANT_STATUS_TEXT_MAP,
} from "../../../../../Components/constants/statusConstant";

export default function EvidenceList({
  control_id,
  provision_id,
  organization_framework_id,
  assignees,
}: // evidenceScopeList,
any) {
  const {
    data,
    setData,
    patch,
    errors,
    processing,
    recentlySuccessful,
    reset,
  } = useForm({
    scope: "",
  });
  // const dispatch=useDispatch();
  const [reassign, setReassign] = useState([]);
  const [showReassignModal, setShowReassignModal] = useState(false);
  const [check, setCheck] = useState();
  const [listData, setListData] = useState([]);

  const dispatch = useDispatch();
  const provisionDetails = useSelector((state) =>
    getProvisionDataById(state, provision_id)
  ); // Use provision ID to get specific data
  const [orgEvidenceId, setOrgEvidenceId] = useState("");
  const handleEvidenceScope = (event: any, evidenceScope: any) => {
    setCheck(event.target.checked);
    const newScope = event.target.checked ? "in" : "out";
    setData("scope", newScope);
    setOrgEvidenceId(evidenceScope.org_evidence_id);
  };
  const handleReassign = (evidence: any) => {
    setReassign(evidence.org_evidence_id);
    setShowReassignModal(true);
  };
  const handleReassignClose = () => {
    setShowReassignModal(false);
  };

  useEffect(() => {
    const findControl = provisionDetails.controls.find(
      (control: any) => control.id == control_id
    );
    setListData(findControl.evidence);
  }, [provisionDetails, control_id]);

  useEffect(() => {
    const toggleEvidenceScope = () => {
      if (orgEvidenceId != "") {
        patch(route("organizationevidence.update", orgEvidenceId), {
          preserveScroll: true,
          onSuccess: () => {
            // Update the scope in listData for the toggled evidence
            //@ts-ignore
            dispatch(fetchProvisionData(provision_id));
          },
        });
      }
    };
    toggleEvidenceScope();
  }, [orgEvidenceId, check]);

  const columns = useMemo(
    () => [
      {
        header: "Control Name",
        accessorKey: "name",
        cell: (info: any) =>
          info.row.original.scope == "in" ? (
            <Link
              href={route(
                "organizationevidence.show",
                info.row.original.org_evidence_id
              )}
              className="p-0 border-0 bg-transparent text-primary"
            >
              {info.getValue()}
            </Link>
          ) : (
            info.getValue()
          ),
        enableColumnFilter: false,
      },
      {
        header: "Assigned to",
        cell: (info: any) => (
          <>
            {info.row.original.scope == "in" &&
              (info.getValue() ? (
                <div>
                  <div>
                    <i className="ri-account-circle-line text-secondary " />{" "}
                    {info.getValue()}
                  </div>
                  <div>
                    <i className="ri-account-circle-line text-secondary " />{" "}
                    {info.row.original.approver}
                  </div>
                </div>
              ) : (
                <Button
                  className=" bg-transparent border rounded border-primary text-primary"
                  onClick={() => handleReassign(info.row.original)}
                >
                  <i className="ri-user-add-fill" />
                </Button>
              ))}
          </>
        ),
        accessorKey: "assignee",
        enableColumnFilter: false,
      },

      {
        header: "Compliant",
        cell: (info: any) =>
          info.row.original.scope == "in" && (
            <span
              className={
                "text-nowrap" + COMPLIANT_STATUS_CLASS_MAP[info.getValue()]
              }
            >
              {COMPLIANT_STATUS_TEXT_MAP[info.getValue()]}
            </span>
          ),
        accessorKey: "status",
        enableColumnFilter: false,
      },
      {
        header: "Scope",
        cell: (info: any) => (
          <Card.Header className="align-items-center d-flex border-0">
            <div className="form-check form-switch form-switch-right form-switch-md">
              <Form.Check.Input
                onChange={(e) => handleEvidenceScope(e, info.row.original)}
                checked={info.row.original.scope == "in" ? true : false}
                className="form-check-input code-switcher"
                id={info.row.original.id}
                type="checkbox"
              />
            </div>
          </Card.Header>
        ),
        enableColumnFilter: false,
      },
    ],
    [listData]
  );
  return (
    <>
      {/* <pre>{JSON.stringify(provisionDetails.controls, undefined, 2)}</pre> */}
      <TableContainer
        columns={columns || []}
        data={listData || []}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-head-nowrap"
        // theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      <Reassign
        orgEvidence={reassign}
        show={showReassignModal}
        setShow={setShowReassignModal}
        handleClose={handleReassignClose}
        assignees={assignees}
        provision_id={provision_id}
      />
    </>
  );
}
