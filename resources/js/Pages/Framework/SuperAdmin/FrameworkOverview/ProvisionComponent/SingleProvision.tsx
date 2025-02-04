import React, { useEffect, useState } from "react";
import ScopeButton from "./ScopeButton";
import ControlListView from "../ControlComponent/ControlList";
import { Button, Card, Collapse } from "react-bootstrap";
import ControlsListTable from "../ControlComponent/ControlListTable";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchProvisionScopeData,
  getAllProvisionScope,
  getProvisionScopeError,
  getProvisionScopeStatus,
} from "../../../../../slices/provisionScope/provisionScopeSlice";
import LinkControl from "../ControlComponent/LinkControl";
interface ControlDetails {
  id: any;
  name: any;
  code: any;
  control_weight: any;
  description: any;
  control_domain: any;
  functional_group: any;
  frameworks: any;
  createdBy: any;
  updatedBy: any;
  policy: any[];
  evidence: any[];
  created_at: any;
  updated_at: any;
}

interface Control {
  id: number;
  name: string;
  code: string;
  control_domain: string;
}
export default function SingleProvision({
  provisions,
  controls,
  organization_framework_id,
  thisFrameworkProvision,
}: any) {
  const [showControlList, setShowControlList] = useState<boolean>(false);
  const [frameworkId, setFrameworkId] = useState<number>(0);
  const [openCollapses, setOpenCollapses] = useState<{
    [key: string]: boolean;
  }>({});

  const [provision, setProvision] = useState<{ controls: Control[] }>({
    controls: [],
  });

  // Redux Toolkit
  const dispatch = useDispatch();
  const provisionScopeData = useSelector(getAllProvisionScope);
  const provisionScopeStatus = useSelector(getProvisionScopeStatus);
  const provisionScopeError = useSelector(getProvisionScopeError);
  const [isOutOfScope, setIsOutOfScope] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    if (provisionScopeStatus === "idle") {
      // @ts-ignore
      dispatch(fetchProvisionScopeData());
    }
  }, []);
  useEffect(() => {
    if (thisFrameworkProvision.length > 0) {
      setFrameworkId(thisFrameworkProvision[0].framework_id);
    }
  }, [thisFrameworkProvision]);
  useEffect(() => {
    if (provisionScopeData.length > 0) {
      const newOutOfScopeState: { [key: string]: boolean } = {};
      provisionScopeData.forEach((data: any) => {
        if (data.organization_framework_id === organization_framework_id) {
          newOutOfScopeState[data.provision_id] = true;
        }
      });
      setIsOutOfScope(newOutOfScopeState);
    } else {
      setIsOutOfScope({});
    }
  }, [provisionScopeData, organization_framework_id]);

  const handleShowControlListTable = (id: string) => {
    setOpenCollapses((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleShowControlList = (data: any) => {
    setProvision(data);
    setShowControlList(true);
  };

  return (
    <React.Fragment>
      <div key={provisions.id} className="p-2 py-4 border-bottom">
        <div className="d-flex pb-2 align-items-center justify-content-between">
          <div>
            <h5
              className={
                "me-2 " +
                (isOutOfScope[provisions.id] !== undefined &&
                isOutOfScope[provisions.id]
                  ? "text-muted "
                  : "")
              }
            >
              <span>{provisions.code}</span> {provisions.provisions}
            </h5>
            {provisions.description && (
              <p className="text-muted" style={{ fontSize: "11px" }}>
                {provisions.description}
              </p>
            )}
          </div>
          {controls.data.length > 0 ? (
            ""
          ) : (
            <ScopeButton
              provision_id={provisions.id}
              organization_framework_id={organization_framework_id}
            />
          )}
        </div>
        {provisions.controls.length > 0 ? (
          isOutOfScope[provisions.id] !== undefined &&
          isOutOfScope[provisions.id] ? (
            " "
          ) : (
            <div>
              <div className="d-flex">
                <div className="d-flex flex-wrap align-items-center">
                  <ControlListView controlList={provisions.controls} />
                  <Button
                    className="rounded py-1 px-2"
                    onClick={() => handleShowControlListTable(provisions.id)}
                  >
                    <i
                      className={
                        openCollapses[provisions.id]
                          ? "ri-arrow-up-s-line"
                          : "ri-arrow-down-s-line"
                      }
                    ></i>
                  </Button>
                </div>
              </div>
              <Collapse in={openCollapses[provisions.id]}>
                <Card className="mt-3">
                  <Card.Header className=" d-flex justify-content-between align-items-center">
                    Linked Controls
                    {controls.data.length > 0 ? (
                      <Button
                        variant="light"
                        className="rounded px-2 py-1"
                        onClick={() => handleShowControlList(provisions)}
                      >
                        Link Controls
                      </Button>
                    ) : (
                      ""
                    )}
                  </Card.Header>
                  <Card.Body>
                    <ControlsListTable
                      tableData={provisions.controls}
                      provision_id={provisions.id}
                      organization_framework_id={organization_framework_id}
                    />
                  </Card.Body>
                </Card>
              </Collapse>
            </div>
          )
        ) : controls.data.length > 0 ? (
          <div className="text-center bg-dark-subtle py-3">
            <p className="text-muted">
              No Controls Linked Yet! Please link controls
            </p>
            <Button
              variant="info"
              className="rounded px-2 py-1"
              onClick={() => handleShowControlList(provisions)}
            >
              Link Controls
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>

      {frameworkId !== 0 ? (
        controls.data.length > 0 ? (
          <LinkControl
            controls={controls}
            show={showControlList}
            setShow={setShowControlList}
            provision={provision}
            frameworkId={frameworkId}
          />
        ) : (
          ""
        )
      ) : null}
    </React.Fragment>
  );
}
