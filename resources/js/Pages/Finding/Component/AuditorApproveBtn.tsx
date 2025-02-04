import { useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CreateCorrectiveAction from "../../CorrectiveAction/CreateCorrectiveAction";

export default function AuditorApproveBtn({
  id,
  auditor,
  requirement,
  setShow,
}: any) {
  // const dispatch = useDispatch();
  const auditorIdKey = `${auditor}_auditor_id`;
  const auditorKey = `${auditor}_auditor_status`;
  const auditorDateKey = `${auditor}_auditor_completion_data`;
  const user = usePage().props.auth.user;
  const [status, setStatus] = useState("");
  const utcDate = new Date();
  const approvedDate = utcDate.toISOString().split("T")[0];
  const { data, setData, patch, processing, reset } = useForm({});
  const routeTo = `organization${requirement}.update`;
  const [showCreateCAModal, setShowCreateCAModal] = useState(false);
  useEffect(() => {
    setData({
      [auditorIdKey]: user.id,
      [auditorKey]: status,
      [auditorDateKey]: approvedDate,
    });
  }, [status]);

  useEffect(() => {
    if (status != "") {
      patch(route(routeTo, id), {
        onSuccess: () => reset(),
      });
    }
  }, [data]);

  return (
    <>
      <div className="text-center">
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
      <CreateCorrectiveAction
        show={showCreateCAModal}
        setShow={setShowCreateCAModal}
        sourceId={id}
        sourceType="App\Models\OrganizationPolicy"
        causer={auditor}
      />
    </>
  );
}
