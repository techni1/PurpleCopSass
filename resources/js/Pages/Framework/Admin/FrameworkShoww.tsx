import { Container, Row } from "react-bootstrap";
import { Head } from "@inertiajs/react";

import Layout from "../../../Layouts";

import FrameworkProvisionOverview from "./FrameworkProvisionOverview";

const ClientOverview = ({
  // framework,
  organization_framework,
  provisions,
  controlScope,
  provisionScope,
  assignees,
}: any) => {
  const renewDate = new Date("2024-08-23");
  renewDate.setFullYear(renewDate.getFullYear() + 1);
  return (
    <>
      <Head title="Framwork" />
      <div className="page-content">
        <div className="px-3 py-2">
          <Row className="mb-3">
            <div className="col-md">
              <Row className="align-items-center g-3">
                <div className="col-md">
                  <div>
                    <h4 className="fw-bold">
                      {organization_framework.framework.name}
                    </h4>
                    <div className="hstack gap-3 flex-wrap">
                      <div>
                        <i className="ri-building-line align-bottom me-1"></i>{" "}
                        {organization_framework.framework.description}
                      </div>
                      <div className="vr"></div>
                      <div>
                        Activation Date :{" "}
                        <span className="fw-medium">
                          {organization_framework.created_at}
                        </span>
                      </div>
                      <div>
                        Renew Date:{" "}
                        <span className="fw-medium text-danger">
                          {renewDate.toISOString().split("T")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </Row>
        </div>
        <Container fluid>
          {/* <pre>{JSON.stringify(provisions, undefined, 2)}</pre> */}
          <FrameworkProvisionOverview
            provisions={provisions}
            organization_framework={organization_framework.id}
            controlScopeList={controlScope}
            provisionScopeList={provisionScope}
            assignees={assignees}
          />
        </Container>
        {/* )} */}
      </div>
    </>
  );
};

ClientOverview.layout = (page: any) => <Layout>{page}</Layout>;

export default ClientOverview;
