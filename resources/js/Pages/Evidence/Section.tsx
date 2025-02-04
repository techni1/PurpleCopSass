import { Link } from "@inertiajs/react";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Section = () => {
  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of All Evidence</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-auto">
                    <Link
                      href={route("evidence.create")}
                      className="btn btn-soft-primary"
                    >
                      <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                      Add Evidence
                    </Link>
                  </div>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
