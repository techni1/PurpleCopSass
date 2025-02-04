import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CreateCorrectiveAction from "./CreateCorrectiveAction";

const Section = () => {
  const [showCreateCAModal, setShowCreateCAModal] = useState(false);
  const handleCreateCorrectiveAction = () => {
    setShowCreateCAModal(true);
  };
  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col lg={12}>
          <div className="d-flex align-items-lg-center align-items-md-center flex-lg-row  flex-md-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">Corrective Actions</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <Button onClick={handleCreateCorrectiveAction}>
                <i className="ri-add-circle-line align-middle me-1"></i> Add New
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <CreateCorrectiveAction
        show={showCreateCAModal}
        setShow={setShowCreateCAModal}
        sourceId={null}
        sourceType={null}
      />
    </React.Fragment>
  );
};

export default Section;
