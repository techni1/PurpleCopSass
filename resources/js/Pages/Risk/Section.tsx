import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

const Section = () => {

  const [file, setFile] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };



  const handleImport = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    Inertia.post(route('people.import'), formData, {
      forceFormData: true,
    });
  };

  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Risk </h4>
            </div>
            <div className="md-12 mt-lg-0">

              <Row>
                <Col>

                  <Link
                    href={route("risk.create")}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle"></i>{" "}
                    Add Risk
                  </Link>


                </Col>

              </Row>

              <Row className="align-items-center">




              </Row>

            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
