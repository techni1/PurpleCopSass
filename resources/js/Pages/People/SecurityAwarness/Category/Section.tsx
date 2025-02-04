import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

const Section = () => {




  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of SA Category</h4>
            </div>
            <div className="md-6 mt-lg-0">
              <Row>
                <Col>
                  <Link
                    href={route("sacategory.create")}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle"></i> Add
                    SA Topic
                  </Link>
                </Col>

              </Row>

              <Row className="align-items-center"></Row>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
