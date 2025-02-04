import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AssetCategoryCreate from "./Create";

const Section = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Query Category</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-auto">
                    <Button
                      onClick={() => setShowCreateModal(true)}
                      className="btn btn-soft-primary"
                    >
                      <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                      Add New
                    </Button>
                  </div>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>

      <AssetCategoryCreate
        show={showCreateModal}
        setShow={setShowCreateModal}
      />
    </>
  );
};

export default Section;
