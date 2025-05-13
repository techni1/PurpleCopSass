import React, { useState } from "react";
import { Col, Row, Button, CardBody, Card } from "react-bootstrap";

const Section = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const handleAddMenuClick = () => {
    setShow(true);
    setIsBottom(!isBottom);
  };

  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Pending Payment</h4>
            </div>
            <div className="md-12 mt-lg-0">
              <Row>
                <Col>
                  {/* <Button
                    onClick={() => handleAddMenuClick()}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle"></i> Add
                  </Button> */}
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
