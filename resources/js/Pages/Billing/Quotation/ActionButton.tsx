import { router } from "@inertiajs/react";
import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import Invoice from "../Invoice";
import CancelBilling from "./CancelBilling";
import Regenrate from "./Regenrate";

const ActionButton = ({
  billing,
  mastersetting,
  organization,
  entity,
  packageshow,
  offers,
  framwork,
  bank,
}: any) => {
  const [show, setShow] = useState<boolean>(false);

  const [showre, setShowre] = useState<boolean>(false);
  const [showprint, setShowprint] = useState<boolean>(false);
  const [showBilling, setShowBilling] = useState<boolean>(false);
  const [selectedBillingid, setSelectedBillingid] = useState(null);
  const [selectedBilling, setSelectedBilling] = useState(null);

  const handleBilling = (billing: any) => {
    if (!billing) return; // Safety check
    setSelectedBillingid(billing.id);
    setSelectedBilling(billing);
    setShowBilling(true);
  };

  const handleCloseModal = () => {
    setShowBilling(false);
  };

  const moveBilling = (selectedBillingid: any) => {
    if (selectedBillingid) {
      router.post(
        route("quotation.movetobilling", { id: selectedBillingid }),
        {},
        {
          onSuccess: () => {
            router.reload();
          },
        }
      );
      setShowBilling(false);
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
      <Dropdown>
        <Dropdown.Toggle
          href="#"
          className="btn btn-soft-primary btn-sm dropdown arrow-none"
          as="button"
        >
          <i className="ri-more-fill align-middle"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
          {billing.billing_status !== "billing" && (
            <Dropdown.Item
              className="dropdown-item edit-item-btn"
              onClick={() => handleBilling(billing)}
            >
              <i className="ri-bill-fill align-bottom me-2 text-primary"></i>{" "}
              Move Billing
            </Dropdown.Item>
          )}

          <Dropdown.Item
            className="dropdown-item edit-item-btn"
            onClick={() => handleBilling(billing)}
          >
            <i className="ri-bill-fill align-bottom me-2 text-primary"></i>{" "}
            Print
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {selectedBillingid && (
        <Modal show={showBilling} onHide={handleCloseModal} centered>
          <Modal.Header className="modal-title" />
          <Modal.Body className="text-center p-5">
            <i className=" ri-close-circle-fill display-5 text-danger"></i>
            <div className="mt-4">
              <h4 className="mb-3">Are you sure </h4>
              <p className="text-muted mb-4">
                {" "}
                You want to convert this Quotation to Billing process{" "}
                {selectedBillingid}
              </p>
              <div className="hstack gap-2 justify-content-center">
                <Button variant="light" onClick={handleCloseModal}>
                  Close
                </Button>

                <Button
                  variant="danger"
                  onClick={(e) => moveBilling(selectedBillingid)}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default ActionButton;
