import { Link } from "@inertiajs/react";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

const Section = ({
  selectedFramework,
  setSelectedFramework,
  frameworks,
}: any) => {
  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <div className="col-md-3 ">
                <Form.Control
                  as="select"
                  value={selectedFramework}
                  id="selectframework"
                  className="form-select"
                  onChange={(e) => setSelectedFramework(e.target.value)}
                >
                  <option value="">Frameworks</option>
                  {frameworks.map((item: any) => (
                    <option key={item.framework.id} value={item.framework.id}>
                      {item.framework.name}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </div>
            <div className="mt-3 mt-lg-0">
              <Row className="g-3 mb-0 align-items-center">
                <div className="col-auto">
                  <Link
                    href={route("evidence.create")}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle me-1"></i> Add
                    Evidence
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
