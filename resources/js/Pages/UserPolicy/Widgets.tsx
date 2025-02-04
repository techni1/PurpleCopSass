import React from "react";
import CountUp from "react-countup";
import { Card, Col } from "react-bootstrap";
import { Link } from "@inertiajs/react";

const Widgets = ({ title, value }: any) => {
  return (
    <React.Fragment>
      <Col xl={2} md={4}>
        <Card className="card-animate">
          <Card.Body>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1 overflow-hidden">
                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                  {title}
                </p>
              </div>
            </div>
            <div className="d-flex align-items-end justify-content-between mt-4">
              <div>
                <h4 className="fs-22 fw-semibold ff-secondary">
                  <span className="counter-value" data-target="559.25">
                    <CountUp start={0} end={value} duration={1} />
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
