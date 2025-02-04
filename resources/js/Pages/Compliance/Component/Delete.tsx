import { router } from "@inertiajs/react";

import { Button, Modal } from "react-bootstrap";

export default function Delete({ show, setShow, framework, compliance }: any) {
  const deleteClient = () => {
    router.delete(route("compliance.destroy", compliance));
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header className="text-center " closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">Compliance {compliance.framework.name}</h4>
            <p className="text-muted mb-4">Will be Removed</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="danger" onClick={(e) => deleteClient()}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
