import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Card, Col, Row, Dropdown, Button, Modal } from "react-bootstrap";

const OverviewTab = ({ auth, entity, securityOfficers }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleDeleteClick = (entity: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Entity ${entity.name} will be deleted !!`);

    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = (entity: any) => {
    router.delete(route("entity.destroy", entity.id));
  };
  const findUserById = (id: any) => {
    const user = securityOfficers.data.find(
      (user: any) => user.id.toString() === id
    );
    return user ? user.name : "User not found";
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="text-muted">
                <h6 className="mb-3 fw-semibold text-uppercase">Summary</h6>
                <p>
                  It will be as simple as occidental in fact, it will be
                  Occidental. To an English person, it will seem like simplified
                  English, as a skeptical Cambridge friend of mine told me what
                  Occidental is. The European languages are members of the same
                  family. Their separate existence is a myth. For science,
                  music, sport, etc, Europe uses the same vocabulary. The
                  languages only differ in their grammar, their pronunciation
                  and their most common words.
                </p>

                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row className="gy-3">
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Security Officer :
                        </p>
                        <h5 className="fs-15 mb-0">
                          {findUserById(entity.security_officer)}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Create Date :
                        </p>
                        <h5 className="fs-15 mb-0">{entity.created_at}</h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Updated Date :
                        </p>
                        <h5 className="fs-15 mb-0">{entity.updated_at}</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row className="gy-3">
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Organization:
                        </p>
                        <h5 className="fs-15 mb-0">
                          {entity.organization.name}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Address:
                        </p>
                        <h5 className="fs-15 mb-0">{entity.address}</h5>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Website:
                        </p>
                        <a
                          href={entity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entity.url}
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
                          href={route("entity.edit", entity.id)}
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
                          onClick={() => handleDeleteClick(entity)}
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

              <Button variant="danger" onClick={(e) => deleteClient(entity)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default OverviewTab;
