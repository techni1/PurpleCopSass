import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../../../Components/Common/TableContainer";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { router, useForm } from "@inertiajs/react";
import ControlDetails from "./ControlDetails";
import axios from "axios";
import { preventDefault } from "@fullcalendar/core/internal";
import { date } from "yup";
import { productDetails } from "../../../../../common/data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProvisionDataById } from "../../../../../slices/provision/reducer";
import {
  COMPLIANT_STATUS_CLASS_MAP,
  COMPLIANT_STATUS_TEXT_MAP,
} from "../../../../../Components/constants/statusConstant";

export default function ControlsListTable({
  provision_id,
  organization_framework_id,
  controlScopeList,
  assignees,
}: any) {
  const [showControlList, setShowControlList] = useState<boolean>(false);
  const [controlId, setControlId] = useState();
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  const provisionDetails = useSelector((state) =>
    getProvisionDataById(state, provision_id)
  ); //
  const handleShowControlDetails = (control: any) => {
    setControlId(control);
    setShowControlList(true);
  };
  const { data, setData, post, errors, processing, recentlySuccessful, reset } =
    useForm({
      organization_framework_id: organization_framework_id,
      provision_id: provision_id,
      control_id: "",
      check: true,
    });

  const handleControlScope = (event: any, controlScope: any) => {
    setData({
      ...data,
      provision_id: provision_id,
      control_id: controlScope.control_code_id,
      check: event.target.checked,
    });
  };

  useEffect(() => {
    const toggleControlScope = () => {
      if (data.control_id != "") {
        post(route("controlscope.store"), {
          preserveScroll: true,
          onSuccess: () => reset(),
        });
      }
    };
    toggleControlScope();
  }, [data]);

  const controlScopeCheck = (controlData: any) => {
    const isInScope = controlScopeList.some(
      (item: any) =>
        item.provision_id === controlData.provision_id &&
        item.control_id === controlData.control_code_id
    );
    if (isInScope) {
      return false;
    }
    return true;
  };
  // console.log(controlScopeList);
  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
        enableColumnFilter: false,
      },

      {
        header: "Control Name",
        accessorKey: "name",
        cell: (info: any) =>
          controlScopeCheck(info.row.original.pivot) ? (
            <div>
              <button
                onClick={() => handleShowControlDetails(info.row.original.id)}
                className="p-0 border-0 bg-transparent text-primary"
              >
                {info.getValue()}
              </button>
            </div>
          ) : (
            <div>
              <span> {info.getValue()}</span>
            </div>
          ),
        enableColumnFilter: false,
      },
      {
        header: "Percentage",
        cell: (info: any) => (
          <>
            {Math.round(info.getValue())}
            {" %"}
          </>
        ),
        accessorKey: "compliance_percentage",
        enableColumnFilter: false,
      },
      {
        header: "Compliant",
        cell: (info: any) => (
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
                onChange={(e) => handleControlScope(e, info.row.original.pivot)}
                checked={controlScopeCheck(info.row.original.pivot)}
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
    [controlScopeList, provisionDetails.controls]
  );

  return (
    <>
      {/* <pre>{JSON.stringify(tableData, undefined, 2)}</pre> */}
      <TableContainer
        columns={columns || []}
        data={provisionDetails.controls || []}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-head-nowrap"
        // theadClass="table-light"
        SearchPlaceholder="Search..."
      />

      {controlId && (
        <ControlDetails
          show={showControlList}
          setShow={setShowControlList}
          control_id={controlId}
          provision_id={provision_id}
          organization_framework_id={organization_framework_id}
          assignees={assignees}
        />
      )}
    </>
  );
}
