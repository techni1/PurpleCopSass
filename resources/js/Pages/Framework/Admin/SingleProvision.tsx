import React, { useEffect, useState } from "react";

import { Button, Card, Collapse, Form, Placeholder } from "react-bootstrap";

import ControlListView from "../SuperAdmin/FrameworkOverview/ControlComponent/ControlList";
import ControlsListTable from "../SuperAdmin/FrameworkOverview/ControlComponent/ControlListTable";
import { Experimental_CssVarsProvider } from "@mui/material";
import axios from "axios";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";

import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchProvisionData,
  getProvisionDataById,
  getProvisionStatus,
} from "../../../slices/provision/reducer";

export default function SingleProvision({
  provision,
  organization_framework_id,
  controlScopeList,
  provisionScopeList,
  assignees,
}: any) {
  const dispatch = useDispatch();
  const provisionDetails = useSelector((state) =>
    getProvisionDataById(state, provision.id)
  ); // Use provision ID to get specific data
  const provisionStatus = useSelector(getProvisionStatus);
  const [openCollapses, setOpenCollapses] = useState<{
    [key: string]: boolean;
  }>({});

  const [isloading, setIsLoading] = useState(false);
  // const [provisionDetails, setProvisionDetails] = useState([]);

  const { data, setData, post, errors, processing, recentlySuccessful, reset } =
    useForm({
      organization_framework_id: organization_framework_id,
      provision_id: "",
      check: true,
    });

  const handleProvisionScope = (event: any, provisionScope: any) => {
    setData({
      ...data,
      provision_id: provisionScope.id,
      check: event.target.checked,
    });
  };

  useEffect(() => {
    const toggleProvisionScope = () => {
      if (data.provision_id != "") {
        post(route("provisionscope.store"), {
          preserveScroll: true,
          onSuccess: () => reset(),
        });
      }
    };
    toggleProvisionScope();
  }, [data]);

  // const provisionScopeCheck = (provisionData: any) => {
  //   const isInScope = provisionScopeList.some(
  //     (item: any) => item.provision_id === provisionData.id
  //   );
  //   if (isInScope) {
  //     return false;
  //   }
  //   return true;
  // };

  const provisionScopeCheck = (provisionData: any) => {
    const isInScope = provisionScopeList.some(
      (item: any) => item.provision_id === provisionData.id
    );
    return !isInScope;
  };

  // const handleShowControlListTable = async (id: string) => {
  //   // console.log(c);
  //   setOpenCollapses((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  //   if (!openCollapses[id]) {
  //     //@ts-ignore
  //     dispatch(fetchProvisionData(id));
  //     // fetchProvisionDetails(id);
  //   }
  // };

  const handleShowControlListTable = (id: string) => {
    setOpenCollapses((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Use effect to fetch provision data when the collapse is opened and data is not present
  useEffect(() => {
    if (openCollapses[provision.id] && provisionDetails.length === 0) {
      // Fetch provision data if it's not already in the store
      //@ts-ignore
      dispatch(fetchProvisionData(provision.id));
    }
  }, [openCollapses, provision.id, provisionDetails.length, dispatch]);

  // async function fetchProvisionDetails(id: any) {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(`/get-provision/${id}`);
  //     setProvisionDetails(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(
  //       "Error Fetching Provision Details",
  //       Experimental_CssVarsProvider
  //     );
  //   }
  // }

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(provisionDetails, undefined, 2)}</pre> */}
      <div key={provision.id} className="p-2 py-4 border-bottom">
        <div className="d-flex pb-2 align-items-center justify-content-between">
          <div>
            <h5
              className={
                "me-2 " + (!provisionScopeCheck(provision) ? "text-muted " : "")
              }
            >
              <span>{provision.code}</span> {provision.provisions}
            </h5>
            {provision.description && (
              <p className="text-muted" style={{ fontSize: "11px" }}>
                {provision.description}
              </p>
            )}
          </div>
          <Card.Header className="align-items-center d-flex border-0">
            <div className="form-check form-switch form-switch-right form-switch-md">
              <Form.Check.Input
                onChange={(e) => handleProvisionScope(e, provision)}
                checked={provisionScopeCheck(provision)}
                className="form-check-input code-switcher"
                id={provision.id}
                type="checkbox"
              />
            </div>
          </Card.Header>
        </div>
        {provisionScopeCheck(provision) && (
          <div>
            <div className="d-flex">
              <div className="d-flex flex-wrap align-items-center">
                <ControlListView controlList={provision.controls} />
                <Button
                  className="rounded py-1 px-2"
                  onClick={() => handleShowControlListTable(provision.id)}
                >
                  <i
                    className={
                      openCollapses[provision.id]
                        ? "ri-arrow-up-s-line"
                        : "ri-arrow-down-s-line"
                    }
                  ></i>
                </Button>
              </div>
            </div>
            <Collapse in={openCollapses[provision.id]}>
              <Card className="mt-3">
                <Card.Header>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Linked Controls</span>
                    {/* <Button
                      onClick={() => fetchProvisionDetails(provision.id)}
                      className="p-0"
                      variant="link"
                    >
                      <i className="ri-loader-3-fill fs-4" />
                    </Button> */}
                  </div>
                </Card.Header>
                <Card.Body>
                  {isloading ? (
                    <CustomPlaceholder />
                  ) : (
                    <ControlsListTable
                      provision_id={provision.id}
                      organization_framework_id={organization_framework_id}
                      controlScopeList={controlScopeList}
                      assignees={assignees}
                    />
                  )}
                </Card.Body>
              </Card>
            </Collapse>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
