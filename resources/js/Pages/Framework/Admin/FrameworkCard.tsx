import { Link, useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button, Card, Col, ProgressBar, Row } from "react-bootstrap";

type FrameworkCardProps = {
  framework: any;
  organization_frameworks: any[];
  policyList: any;
  evidenceList: any;
};

export default function FrameworkCard({
  framework,
  organization_frameworks,
  policyList,
  evidenceList,
}: FrameworkCardProps) {
  const [frameworkData, setFrameworkData] = useState<any>(null);
  const [evidenceData, setEvidenceData] = useState<any[]>([]);
  const [evidenceStatusCounts, setEvidenceStatusCounts] = useState({
    submitted: 0,
    approved: 0,
    published: 0,
    audited: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [evidencePercentage, setEvidencePercentage] = useState(0);
  const [policyData, setPolicyData] = useState<any[]>([]);
  const [policyStatusCounts, setPolicyStatusCounts] = useState({
    submitted: 0,
    approved: 0,
    published: 0,
    audited: 0,
  });
  const [policyPercentage, setPolicyPercentage] = useState(0);
  const userRole = usePage().props.auth.roles;
  const [isBlocked, setIsBlocked] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    framework_id: "",
  });

  // General fetch function for both policies and evidence
  const fetchFrameworkData = async (
    type: string,
    list: any[],
    setData: React.Dispatch<any[]>
  ) => {
    let filtered = list;

    if (framework && framework.status == 1) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `/${type}-by-framework/${framework.id}`
        );
        let frameworkData = response.data;

        filtered = list.filter((item: any) =>
          frameworkData.some(
            (frameworkItem: any) => frameworkItem.id === item[type].id
          )
        );
      } catch (error) {
        console.error(
          `Error Fetching ${
            type.charAt(0).toUpperCase() + type.slice(1)
          } by Framework`,
          error
        );
      }
    }
    setIsLoading(false);
    setData(filtered);
  };

  useEffect(() => {
    fetchFrameworkData("policy", policyList.data, setPolicyData);
    fetchFrameworkData("evidence", evidenceList.data, setEvidenceData);
  }, [framework, policyList, evidenceList]);

  useEffect(() => {
    setData("framework_id", framework.id);
    setIsActive(
      organization_frameworks.some(
        (present: any) => present.framework_id === framework.id
      )
    );
    setIsBlocked(
      organization_frameworks.some(
        (present: any) =>
          present.framework_id === framework.id && present.isblocked === "0"
      )
    );
    setIsDisable(framework.status === "0");
  }, [framework, organization_frameworks]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("organizationframework.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  // Count statuses for policies and evidences
  useEffect(() => {
    const policyCounts = countStatuses(policyData);
    setPolicyStatusCounts(policyCounts);

    const evidenceCounts = countStatuses(evidenceData);
    setEvidenceStatusCounts(evidenceCounts);
    const combinedCounts = {
      totalPolicy: policyData.length,
      totalEvidence: evidenceData.length,
      submitted: policyCounts.submitted + evidenceCounts.submitted,
      approved: policyCounts.approved + evidenceCounts.approved,
      published: policyCounts.published + evidenceCounts.published,
      audited: policyCounts.audited + evidenceCounts.audited,
    };

    setFrameworkData(combinedCounts);
  }, [policyData, evidenceData]);

  // Calculate percentages for both policies and evidences
  useEffect(() => {
    if (policyData.length > 0) {
      const percentagePolicy =
        (policyStatusCounts.published / policyData.length) * 100 || 0;
      setPolicyPercentage(percentagePolicy);
    }

    if (evidenceData.length > 0) {
      const percentageEvidence =
        (evidenceStatusCounts.published / evidenceData.length) * 100 || 0;
      setEvidencePercentage(percentageEvidence);
    }
  }, [policyStatusCounts, evidenceStatusCounts, policyData, evidenceData]);

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(frameworkData, undefined, 2)}</pre> */}
      {isActive ? (
        <Link
          href={
            isBlocked && isDisable ? "" : route("framework.show", framework.id)
          }
          className={isBlocked && isDisable ? "pe-none" : ""}
        >
          <Card
            key={framework.id}
            className={isBlocked && isDisable ? "bg-dark-subtle" : ""}
          >
            <Card.Header className="">
              <div className="d-flex justify-content-between ">
                <div className="h3 w-100 text-center">{framework.name}</div>
                <div>
                  {isBlocked && isDisable && (
                    <i className="ri-lock-fill text-danger" />
                  )}
                </div>
              </div>

              <div className="py-2 ">
                <div className="text-center pb-3">
                  <div className="fs-3 bolder text-primary">
                    {isLoading ? (
                      <Button variant="link" className="btn-load p-0">
                        <span className="spinner-border flex-shrink-0 text-danger"></span>
                      </Button>
                    ) : (
                      <span className="text-primary bolder">
                        {((policyPercentage + evidencePercentage) / 2).toFixed(
                          2
                        )}{" "}
                        %
                      </span>
                    )}
                  </div>
                  <div className="text-bold">Compliance Progress</div>
                </div>
                <div className="live-preview bg-primary-subtle border border-grey rounded-4 py-3 px-3">
                  <div className="mb-4">
                    <h5 className="fs-13">
                      Policy{" - "}
                      {isLoading ? (
                        <Button variant="link" className="btn-load p-0">
                          <span className="spinner-border flex-shrink-0 text-danger"></span>
                        </Button>
                      ) : (
                        <span className="text-primary bolder">
                          {policyPercentage.toFixed(2)}%
                        </span>
                      )}
                    </h5>
                    <ProgressBar
                      variant="primary"
                      now={policyPercentage}
                      className="progress-sm"
                    />
                  </div>
                  <div className="mb-2">
                    <h5 className="fs-13">
                      Evidence{" - "}
                      {isLoading ? (
                        <Button variant="link" className="btn-load p-0">
                          <span className="spinner-border flex-shrink-0 text-danger"></span>
                        </Button>
                      ) : (
                        <span className="text-primary bolder">
                          {evidencePercentage.toFixed(2)}%
                        </span>
                      )}
                    </h5>
                    <ProgressBar
                      variant="primary"
                      now={evidencePercentage}
                      className="progress-sm"
                    />
                  </div>
                </div>
                {/* <Row className="pt-3 gap-2">
                  <Col className="p-2">
                    <p>Policy</p>
                    <span className="px-2 py-2 border border-1 rounded-circle text-secondary fw-bold">
                      {policyPercentage.toFixed(2)}%

                    </span>
                  </Col>
                  <Col className="p-2">
                    <p>Evidence</p>
                    <span className="px-2 py-2 border border-1 rounded-circle text-secondary fw-bold">
                      {evidencePercentage.toFixed(2)}%
                    </span>
                  </Col>
                </Row> */}
              </div>
            </Card.Header>
          </Card>
        </Link>
      ) : (
        userRole != "Auditor" && (
          <Card
            key={framework.id}
            className={isDisable ? "bg-dark-subtle" : ""}
          >
            <Card.Header className="text-center">
              <div className="d-flex justify-content-between">
                <div></div>
                <div className="h3">{framework.name}</div>
                <div>
                  {isDisable && <i className="ri-lock-fill text-danger" />}
                </div>
              </div>
              <div className="py-2">
                {!isDisable && (
                  <>
                    <div className="fs-3 bolder text-primary">
                      {isLoading ? (
                        <Button variant="link" className="btn-load p-0">
                          <span className="spinner-border flex-shrink-0 text-danger"></span>
                        </Button>
                      ) : (
                        ((policyPercentage + evidencePercentage) / 2).toFixed(2)
                      )}
                    </div>
                    <div className="text-bold">Compliance Progress</div>
                  </>
                )}
                <div className="pt-3 pb-2 fs-5">
                  <span className="px-2">No. of Requirements:</span>
                  <span className="px-2 bg-info rounded text-light">
                    {framework.provisionCount}
                  </span>
                </div>
              </div>

              {userRole[0] === "Admin" && (
                <form onSubmit={isDisable ? () => {} : onSubmit}>
                  <button
                    disabled={isDisable}
                    className="btn btn-soft-primary text-uppercase"
                  >
                    Activate
                  </button>
                </form>
              )}
            </Card.Header>
          </Card>
        )
      )}
    </React.Fragment>
  );
}

// Helper function for counting statuses
function countStatuses(datalist: any[]) {
  const statusCounts = {
    submitted: 0,
    approved: 0,
    published: 0,
    audited: 0,
  };

  datalist.forEach((data) => {
    switch (data.status) {
      case "submitted":
        statusCounts.submitted++;
        break;
      case "published":
        statusCounts.published++;
        break;
      case "approved":
        statusCounts.approved++;
        break;
      case "audited":
        statusCounts.audited++;
        break;
      default:
        break;
    }
  });

  return statusCounts;
}
