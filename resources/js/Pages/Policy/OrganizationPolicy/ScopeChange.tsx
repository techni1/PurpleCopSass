import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";

export default function ScopeChange({ orgPolicy }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    id: orgPolicy.id,
    scope: orgPolicy.scope,
  });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleScope = () => {
    post(route("organizationpolicy.scope", orgPolicy), {
      preserveScroll: true,
      onSuccess: () => {
        handleCloseModal();
        reset();
      },
    });
    // console.log("scope", policy);
  };

  const handleScopeChangeModal = () => {
    setModalTitle("All Progress will be Lost");
    setModalMessage(orgPolicy.policy.name);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Dropdown.Item
        onClick={
          orgPolicy.scope === "in" && orgPolicy.assignee
            ? handleScopeChangeModal
            : handleScope
        }
        className="dropdown-item edit-item-btn"
      >
        {orgPolicy.scope == "in" ? (
          <>
            <i className="ri-indeterminate-circle-line align-bottom me-2 text-danger"></i>{" "}
            Out of Scope
          </>
        ) : (
          <>
            <i className="ri-add-box-line align-bottom me-2 text-success"></i>{" "}
            In Scope
          </>
        )}
      </Dropdown.Item>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-primary"> {modalMessage}</p>
            <p className="text-muted ">will be Out of Scope</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={handleScope}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
