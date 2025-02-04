import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Head, usePage } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app";
import { fetchFrameworkProvision } from "../../../slices/framework/frameworkReducer";
import Layout from "../../../Layouts";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";
import OverviewTab from "../SuperAdmin/FrameworkOverview/OverviewTab";
import {
  fetchPolicyScopeData,
  getPolicyScopeStatus,
} from "../../../slices/policyScope/policyScopeSlice";

import {
  fetchOrganizationPolicyData,
  getAllOrganizationPolicy,
  getOrganizationPolicyStatus,
} from "../../../slices/OrganizationPolicy/reducer";
import {
  fetchAssigneeListData,
  getAssigneeListStatus,
} from "../../../slices/assigneeList/reducer";
import {
  fetchOrganizationEvidenceData,
  getOrganizationEvidenceStatus,
} from "../../../slices/OrganizationEvidence/reducer";

const ClientOverview = ({ framework, organization_framework }: any) => {
  const userOrganization = usePage().props.auth.userOrganization;
  const emptydata = { data: [] };
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { thisFrameworkProvision, status, error } = useSelector(
    (state: any) => state.framework
  );
  const policyScopeStatus = useSelector(getPolicyScopeStatus);
  const policyAssigneeListStatus = useSelector(getAssigneeListStatus);
  const organizationPolicyStatus = useSelector(getOrganizationPolicyStatus);
  const organizationEvidenceStatus = useSelector(getOrganizationEvidenceStatus);
  const organizationPolicys = useSelector(getAllOrganizationPolicy);
  useEffect(() => {
    if (policyScopeStatus === "idle") {
      //@ts-ignore
      dispatch(fetchPolicyScopeData());
    }
    if (policyAssigneeListStatus === "idle") {
      //@ts-ignore
      dispatch(fetchAssigneeListData());
    }
    if (organizationPolicyStatus === "idle") {
      //@ts-ignore
      dispatch(fetchOrganizationPolicyData(userOrganization.id));
    }
    if (organizationEvidenceStatus === "idle") {
      //@ts-ignore
      dispatch(fetchOrganizationEvidenceData(userOrganization.id));
    }
  }, [
    dispatch,
    policyScopeStatus,
    policyAssigneeListStatus,
    organizationPolicyStatus,
  ]);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchOrganizationPolicyData(userOrganization.id));
  }, [organizationPolicys.length]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const resultAction = await dispatch(
          fetchFrameworkProvision(framework.id)
        );
      } catch (err) {
        console.error("Failed to fetch framework provision:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [dispatch, framework.id]);

  return (
    <React.Fragment>
      <Head title="Framwork" />
      {/* <pre>{JSON.stringify(organization_frameworks, undefined, 2)}</pre> */}
      <div className="page-content">
        <div className="px-3 py-2">
          <Row className="mb-3">
            <div className="col-md">
              <Row className="align-items-center g-3">
                <div className="col-md">
                  <div>
                    <h4 className="fw-bold">{framework.name}</h4>
                    <div className="hstack gap-3 flex-wrap">
                      <div>
                        <i className="ri-building-line align-bottom me-1"></i>{" "}
                        {framework.description}
                      </div>
                      <div className="vr"></div>
                      <div>
                        Created at :{" "}
                        <span className="fw-medium">
                          {framework.created_at}
                        </span>
                      </div>
                      <div>
                        Updated at :{" "}
                        <span className="fw-medium">
                          {framework.updated_at}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Row>
        </div>
        {isLoading ? (
          <CustomPlaceholder />
        ) : (
          <Container fluid>
            {/* <pre>{JSON.stringify(thisFrameworkProvision, undefined, 2)}</pre> */}

            <OverviewTab
              thisFrameworkProvision={thisFrameworkProvision}
              organization_framework={organization_framework.id}
              controls={emptydata}
            />
          </Container>
        )}
      </div>
    </React.Fragment>
  );
};

ClientOverview.layout = (page: any) => <Layout>{page}</Layout>;

export default ClientOverview;
