import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Bulkimport from "./Bulkimport";

const Section = () => {

  const [show, setShow] = useState<boolean>(false);
  const handleEdit = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Asset Managements</h4>
            </div>
            <div className="mt-3 mt-lg-0">
              <form action="#">
                <Row className="g-3 mb-0 align-items-center">
                  <div className="col-auto">
                    <Link
                      href={route("assets.create")}
                      className="btn btn-soft-primary"
                    >
                      <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                      Add Asset
                    </Link>
                    <span>&nbsp;</span>

                    <Button
                      onClick={() => handleEdit()}
                      className="btn btn-soft-success"
                    >
                      Bulk Import
                    </Button>
                  </div>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Bulkimport
        show={show}
        setShow={setShow}


      />
    </React.Fragment>
  );
};

export default Section;
