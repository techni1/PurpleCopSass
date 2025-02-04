import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import {
  POLICY_STATUS_CLASS_MAP,
  POLICY_STATUS_TEXT_MAP,
} from "../../../Components/constants/statusConstant";
import CreateCorrectiveAction from "../../CorrectiveAction/CreateCorrectiveAction";

export default function PolicyStatus({
  id,
  policy,
  orgPolicy,
  approver,
  approverStatus,
  assigneeStatus,
  showApprovedBtn,
  setShowApprovedBtn,
}: any) {
  const [frameworks, setFrameworks] = useState([]);
  const user = usePage().props.auth.user;
  const [showCreateCAModal, setShowCreateCAModal] = useState(false);
  const [status, setStatus] = useState("");
  const utcDate = new Date();
  const approvedDate = utcDate.toISOString().split("T")[0];
  const { data, setData, patch, processing, reset } = useForm({});
  const routeTo = `organizationpolicy.update`;
  useEffect(() => {
    setData({
      approver_status: status,
      approver_completion_data: approvedDate,
    });
  }, [status]);

  useEffect(() => {
    if (status != "") {
      patch(route(routeTo, orgPolicy), {
        onSuccess: () => reset(),
      });
    }
  }, [data]);

  useEffect(() => {
    const fetchFramework = async () => {
      try {
        const response = await axios.get(`/get-policy-framework/${policy.id}`);
        setFrameworks(response.data);
      } catch (error) {
        console.error("error fetching framework", error);
      }
    };
    const handleApproverBtn = () => {
      if (approverStatus == "approved" || assigneeStatus == "pending") {
        setShowApprovedBtn(false);
      }
    };
    handleApproverBtn();
    fetchFramework();
  }, [policy]);

  return (
    <Row>
      {/* <pre>{JSON.stringify(orgPolicy, undefined, 2)}</pre> */}

      <div className="pt-2 pb-4 d-flex justify-content-between col-12">
        <div
          className="col-9 d-flex flex-column justify-content-between"
          style={{ height: "70px" }}
        >
          <div className="d-flex justify-content-start gap-2 align-items-center">
            <span className="fs-4">{policy.name}</span>
            <span
              className={
                "text-nowrap " + POLICY_STATUS_CLASS_MAP[orgPolicy.status]
              }
            >
              {POLICY_STATUS_TEXT_MAP[orgPolicy.status]}
            </span>
          </div>
          <div className="d-flex">
            {frameworks &&
              frameworks.map((framework: any) => (
                <div
                  key={framework.id}
                  style={{ fontSize: "12px" }}
                  className="bg-primary-subtle text-primary me-2 py-1 px-2 rounded"
                >
                  <span>{framework.framework_name}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="col-3 d-flex justify-content-between align-items-end flex-column">
          {approver &&
            user.id == approver.id &&
            showApprovedBtn &&
            orgPolicy.approver_status != "approved" && (
              <div>
                <Button
                  onClick={() => setShowCreateCAModal(true)}
                  variant="danger"
                  className="me-2"
                >
                  Deny
                </Button>
                <Button onClick={() => setStatus("approved")} variant="success">
                  Publish
                </Button>
              </div>
            )}
        </div>
      </div>
      <CreateCorrectiveAction
        show={showCreateCAModal}
        setShow={setShowCreateCAModal}
        sourceId={orgPolicy.id}
        sourceType="App\Models\OrganizationPolicy"
        causer="approver"
      />
    </Row>
  );
}
