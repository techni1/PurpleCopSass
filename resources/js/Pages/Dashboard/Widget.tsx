import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";

const Widget = ({ facts }: any) => {
  return (
    <React.Fragment>
      <Row>
        {/* <pre>{JSON.stringify(facts, undefined, 2)}</pre> */}

        <Col md={3}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">Active Framework</p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value">
                      <CountUp
                        start={0}
                        end={facts.totalframwork}
                        duration={4}
                      />
                    </span>
                  </h2>
                  <p className="mb-0 text-muted text-truncate ">
                    {/* <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i> 2.24 %
                    </span>{" "} */}

                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon icon="align-left" className="text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">Active User</p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value">
                      <CountUp start={0} end={facts.toaluser} duration={4} />
                    </span>
                  </h2>
                  <p className="mb-0 text-muted text-truncate ">
                    {/* <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                    </span>{" "} */}

                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon icon="users" className="text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">Pending Action</p>
                  <h2 className="mt-4 ff-secondary fw-semibold">
                    <span className="counter-value">
                      <CountUp
                        start={0}
                        end={facts.totalguidlines}
                        duration={4}
                      />
                    </span>
                  </h2>
                  <p className="mb-0 text-muted text-truncate ">
                    {/* <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                    </span>{" "} */}

                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon icon="activity" className="text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">High Risk</p>
                  <h4
                    className="mt-4 ff-secondary fw-semibold"
                    style={{ fontSize: "27.23px" }}
                  >
                    <span className="counter-value" data-target="97.66">
                      <CountUp start={0} end={68} duration={4} />
                    </span>
                  </h4>
                  <p className="mb-0 text-muted text-truncate ">
                    {/* <span className="badge bg-light text-danger mb-0">
                      <i className="ri-arrow-down-line align-middle"></i> 3.96 %
                    </span>{" "} */}

                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon
                        icon="alert-octagon"
                        className="text-primary"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Col md={6}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">Total Evidence</p>
                  <h4 className="fs-22 mt-4 ff-secondary fw-semibold">
                    <span className="counter-value" data-target="3">
                      <CountUp start={0} end={225} duration={4} />
                    </span>
                  </h4>
                  <p className="mb-0 text-muted text-truncate ">
                    <span className="badge bg-light text-danger mb-0">
                      <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                    </span>{" "}
                    Approved
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon icon="clock" className="text-primary" />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="card-animate">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fw-medium text-muted mb-0">Total Activity</p>
                  <h4 className="fs-22 mt-4 ff-secondary fw-semibold">
                    <span className="counter-value" data-target="33.48">
                      <CountUp
                        start={0}
                        end={facts.totalactivity}
                        duration={4}
                      />
                    </span>
                  </h4>
                  <p className="mb-0 text-muted text-truncate ">
                    <span className="badge bg-light text-success mb-0">
                      <i className="ri-arrow-up-line align-middle"></i>
                    </span>
                  </p>
                </div>
                <div>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-primary-subtle rounded-circle fs-2">
                      <FeatherIcon
                        icon="external-link"
                        className="text-primary"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default Widget;
