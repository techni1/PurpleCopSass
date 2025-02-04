import React from "react";
import { Offcanvas } from "react-bootstrap";

export default function EvidencDetail({ evidenceDetails, show, setShow }: any) {
  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="offcanvasRight"
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            evidenc details
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <pre>{JSON.stringify(evidenceDetails, undefined, 2)}</pre>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
