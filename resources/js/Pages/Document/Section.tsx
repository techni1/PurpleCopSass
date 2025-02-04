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
              <h4 className="fs-16 mb-1">List of All Documents</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <Row className="g-3 mb-0 align-items-center">
                <div className="col-auto">
                  <Link
                    href={route("document.create")}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                    Upload New
                  </Link>
                </div>
                <div className="col-auto">
                  <Link
                    href={route("documentaccess.create")}
                    className="btn btn-secondary"
                  >
                    <i className="ri-file-shield-2-line align-middle me-1"></i>{" "}
                    Grant Access
                  </Link>
                </div>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
