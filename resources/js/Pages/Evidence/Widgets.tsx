import React from "react";
import CountUp from "react-countup";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import shield from "../../../images/shield-2.png";

import {
  STATUS_CLASS_MAP,
  STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

const Widgets = ({ title, value, type }: any) => {
  return (
    <React.Fragment>
      <Col>
        <Card className="card-animate">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div
                className={" overflow-hidden" + STATUS_CLASS_MAP[title]}
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                <span className={"text-nowrap"}>
                  {type
                    ? STATUS_TEXT_MAP[title] + " " + type
                    : STATUS_TEXT_MAP[title]}
                </span>
              </div>
              {/* <img src={shield} alt="" height="35" /> */}
            </div>
            <div className="d-flex align-items-end justify-content-between mt-4">
              <div>
                <h4 className="fs-1 fw-semibold ff-secondary">
                  <span className="counter-value" data-target="559.25">
                    <CountUp start={0} end={value} duration={0.25} />
                  </span>
                </h4>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Widgets;
