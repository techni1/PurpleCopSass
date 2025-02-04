import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

//import Images
import illustrator from "../../../images/illustrator-1.png";
import { Link } from "@inertiajs/react";
import {
  CORRECTIVE_STATUS_CLASS_MAP,
  CORRECTIVE_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

const TopReferrals = ({ correctiveAction }: any) => {
  return (
    <React.Fragment>
      <Col xl={4} md={6}>
        <Card className="card-height-100">
          <Card.Header className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">
              Top Corrective Action
            </h4>
            <div className="flex-shrink-0">
              <button type="button" className="btn btn-soft-primary btn-sm">
                Export Report
              </button>
            </div>
          </Card.Header>

          <Card.Body>
            <Row className="align-items-center">
              <Col xs={6}>
                <h6 className="text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3">
                  Total Corrective Action
                </h6>
                <h4 className="fs- mb-0">15</h4>
                <p className="mb-0 mt-2 text-muted">
                  <span className="badge bg-success-subtle text-success mb-0">
                    <i className="ri-arrow-up-line align-middle"></i> 15.72 %
                  </span>{" "}
                  vs. previous month
                </p>
              </Col>
              <Col xs={6}>
                <div className="text-center">
                  <img src={illustrator} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
            <div className="mt-3 pt-2">
              <div className="progress progress-lg rounded-pill">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "25%" }}
                ></div>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "18%" }}
                ></div>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "22%" }}
                ></div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "16%" }}
                ></div>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "19%" }}
                ></div>
              </div>
            </div>

            <div className="mt-3 pt-2">
              {correctiveAction.map((ca: any, key: number) => (
                <div key={key} className="d-flex mb-2">
                  <div className="flex-grow-1">
                    <p className="text-muted fs-14 mb-0">
                      <i className="mdi mdi-circle align-middle text-primary me-2"></i>
                      {ca.non_conformity_name}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      style={{ fontSize: "10px" }}
                      className={
                        "px-2 py-1 rounded " +
                        CORRECTIVE_STATUS_CLASS_MAP[ca.status]
                      }
                    >
                      {CORRECTIVE_STATUS_TEXT_MAP[ca.status]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 text-center">
              <Link
                href={route("correctiveaction.index")}
                className="text-muted text-decoration-underline"
              >
                Show All
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TopReferrals;
