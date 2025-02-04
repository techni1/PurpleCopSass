import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Card, Col, Row, Dropdown, Button, Modal } from "react-bootstrap";

const OverviewTab = ({ auth, organization, entities }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleDeleteClick = (organization: any) => {
    if (entities.data && entities.data.length > 0) {
      setModalTitle("Cannot Delete Organization");
      setModalMessage(
        "This organization has associated entities. Please delete the entities first before deleting the organization."
      );
    } else {
      setModalTitle("Are You Sure");
      setModalMessage(`Organization ${organization.name} will be deleted !!`);
    }
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = (organization: any) => {
    router.delete(route("organization.destroy", organization.id));
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            {/* <pre>{JSON.stringify(entities, undefined, 2)}</pre> */}
            <Card.Body>
              <div className="text-muted">
                <h6 className="mb-3 fw-semibold text-uppercase">Summary</h6>
                <p>{organization.overview}</p>

                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row className="gy-3">
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Security Officer :
                        </p>

                        <h5 className="fs-15 mb-0">
                          {organization.security_officer}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Create Date :
                        </p>
                        <h5 className="fs-15 mb-0">
                          {organization.created_at}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Updated Date :
                        </p>
                        <h5 className="fs-15 mb-0">
                          {organization.updated_at}
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row className="gy-3">
                    <Col lg={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Address:
                        </p>
                        <h5 className="fs-15 mb-0">{organization.address}</h5>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Website:
                        </p>
                        <a
                          href={organization.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {organization.url}
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row xs="auto" className="justify-content-end gy-3">
                    <Col>
                      <div>
                        <Link
                          href={route("organization.edit", organization.id)}
                          className="btn btn-soft-primary"
                        >
                          <i className="ri-edit-circle-line align-middle me-1"></i>{" "}
                          EDIT
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteClick(organization)}
                        >
                          <i className="ri-close-circle-line align-middle me-1"></i>{" "}
                          DELETE
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Vertically Centered */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4"> {modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>
              {entities.data == 0 && (
                <Button
                  variant="danger"
                  onClick={(e) => deleteClient(organization)}
                >
                  Confirm
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default OverviewTab;
