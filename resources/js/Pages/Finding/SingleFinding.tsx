import { Card } from "react-bootstrap";
import {
  FINDING_STATUS_CLASS_MAP,
  FINDING_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

import FindingDetails from "./Component/FindingDetails";

export default function SingleFinding({ finding }: any) {
  return (
    <>
      <Card>
        <Card.Header className="border-bottom">
          <Card.Title className="w-100 d-flex justify-content-between align-items-center ">
            <span className=" text-capitalize ">{finding.comment}</span>
            <span
              style={{ fontSize: "12px" }}
              className={
                "px-2 py-1 rounded " + FINDING_STATUS_CLASS_MAP[finding.status]
              }
            >
              {FINDING_STATUS_TEXT_MAP[finding.status]}
            </span>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <FindingDetails finding={finding} />
        </Card.Body>
      </Card>
    </>
  );
}
