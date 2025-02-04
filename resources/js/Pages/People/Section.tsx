import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Col, Row, Button, CardBody, Card } from "react-bootstrap";

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
    formData.append("file", file);
    Inertia.post(route("people.import"), formData, {
      forceFormData: true,
    });
  };

  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Employee</h4>
            </div>
            <div className="mt-3  col-md-4 gap-3 ">
              <Link
                href={route("people.create")}
                className="btn btn-sm btn-soft-primary"
              >
                <i className="ri-add-circle-line align-middle"></i> Add Employee
              </Link>

              <Button className="btn-sm m-2">Export</Button>

              <Button className="btn-sm m-1" variant="secondary" onClick={toggleFormVisibility}>
                {showForm ? "Hide Import" : "Import"}
              </Button>
              {showForm && (
                <Card>

                  <CardBody>
                    <div className="form-container">


                      <a href={`${window.location.origin}/sample/sample_employee.csv`} target="_blank" rel="noopener noreferrer">
                        <Button className="btn btn-sm btn-soft-info pt-2 m-2 float-end">
                          Download Sample File
                        </Button>
                      </a>




                      <form
                        onSubmit={handleImport}
                        encType="multipart/form-data"
                        className="form-control pt-2"
                      >

                        <input
                          type="file"
                          className="form-control"
                          name="file"
                          onChange={handleFileChange}
                        />
                        <Button type="submit" className="btn btn-sm btn-soft-primary m-2 float-end">
                          Import
                        </Button>
                      </form>
                    </div>
                  </CardBody>
                </Card>
              )}

              <Row className="align-items-center"></Row>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Section;
