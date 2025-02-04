import { Link } from "@inertiajs/react";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ControlDetails from "./FrameworkOverview/ControlComponent/ControlDetails";

const Section = ({ setSearchTerm }: any) => {
  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <Col lg={4}>
                <Form.Control
                  type="text"
                  id="searchprovisions"
                  placeholder="Search provisions..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-auto">
                    <Link
                      href={route("framework.create")}
                      className="btn btn-soft-primary"
                    >
                      <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                      Add Framework
                    </Link>
                  </div>
                </Row>
              </form>
            </div>
          </div>
          {/* <ControlDetails /> */}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
