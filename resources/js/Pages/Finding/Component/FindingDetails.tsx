import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import FindingRemark from "./FindingRemark";
import CreateCorrectiveAction from "../../CorrectiveAction/CreateCorrectiveAction";
import { useEffect, useState } from "react";
import AttachmentList from "../../../Components/AttachmentList";
import { LinkedCorrectiveAction } from "../../CorrectiveAction/LinkedCorrectiveAction";

export default function FindingDetails({ finding }: any) {
  const [showCreateCAModal, setShowCreateCAModal] = useState(false);

  const [closeBtn, setCloseBtn] = useState(true);

  const handleCreateCorrectiveAction = () => {
    setShowCreateCAModal(true);
  };
  // const [findingStatus, setFindingStatus] = useState();
  const [isShowRemarkModal, setIsShowRemarkModal] = useState(false);

  const handleRemark = () => {
    setIsShowRemarkModal(true);
  };

  useEffect(() => {
    if (finding.correctiveAction.length > 0) {
      const areAllClosed = finding.correctiveAction.every(
        (data: any) => data.status !== "open"
      );
      setCloseBtn(areAllClosed);
    }
  }, [finding]);

  return (
    <>
      <CreateCorrectiveAction
        show={showCreateCAModal}
        setShow={setShowCreateCAModal}
        sourceId={finding.id}
        sourceType="App\Models\Finding"
      />

      {/* <pre>{JSON.stringify(finding, undefined, 2)}</pre> */}
      <Row className="mb-3">
        <Col className="d-flex">
          <div className="bg-primary-subtle text-primary py-1 px-2 rounded">
            <span>Audit Name: </span>
            <span className=" text-uppercase">{finding.audit?.name}</span>
          </div>
        </Col>
        {finding.status === "open" && (
          <Col className="d-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle
                href="#"
                className="btn btn-soft-primary btn-sm dropdown arrow-none"
                as="button"
              >
                Actions <i className="ri-arrow-down-s-line align-middle"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item className="dropdown-item edit-item-btn">
                  <Button variant="link" onClick={handleCreateCorrectiveAction}>
                    <i className="ri-check-fill align-bottom me-2"></i>
                    Create Corrective Action
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <div className="py-1 px-2 fs-5">
            <span>
              {finding.comments?.policy?.name ??
                finding.comments?.evidence?.name}
            </span>
          </div>
        </Col>
      </Row>

      <Row className="p-2" lg={12} md={12}>
        <Col>
          <h6 className=" text-muted">Assigned To</h6>
          <div className="fs-6">
            <i className="ri-account-circle-line text-info" />
            <span className=" text-primary px-2 py-1 rounded ">
              {finding.comments?.approver.name}
            </span>
          </div>
        </Col>
        <Col>
          <h6 className=" text-muted">Nature of Finding</h6>
          <div className="fs-6">
            <span className="text-primary py-1 rounded text-uppercase ">
              {finding.nature_of_finding}
            </span>
          </div>
        </Col>
      </Row>

      {finding.remark && (
        <Row className="p-2" lg={12} md={12}>
          <Col>
            <h6 className=" text-muted">Closing Remarks</h6>
            <div className="fs-6">
              <span className="">{finding.comment}</span>
            </div>
          </Col>
        </Row>
      )}

      {finding.attachment_path && (
        <Row className="p-2" lg={12} md={12}>
          <Col>
            <AttachmentList
              filePath={finding.attachment_path}
              name={"attachment"}
            />
          </Col>
        </Row>
      )}
      {closeBtn && finding.status === "open" && (
        <Row className="mt-3">
          <Col>
            <Button onClick={handleRemark}>Close Finding</Button>
          </Col>
        </Row>
      )}
      <FindingRemark
        show={isShowRemarkModal}
        setShow={setIsShowRemarkModal}
        finding={finding}
      />

      {finding.correctiveAction && finding.correctiveAction.length > 0 && (
        <Row className="pt-4">
          <Col>
            <LinkedCorrectiveAction tableData={finding.correctiveAction} />
          </Col>
        </Row>
      )}
    </>
  );
}
