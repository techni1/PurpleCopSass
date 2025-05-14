import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import Reqextension from "./Reqextension";

const ActionButton = ({ auth, dealregister }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const userRole = usePage().props.auth.user.roles[0].name;
  const [showre, setShowre] = useState<boolean>(false);
  const [showprint, setShowprint] = useState<boolean>(false);

  const [deal, setDeal] = useState(null);

  const handleReqExtension = (dealregister: any) => {
    if (dealregister) {
      setShowprint(true);
      setDeal(dealregister);
    }
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          href="#"
          className="btn btn-soft-primary btn-sm dropdown arrow-none"
          as="button"
        >
          <i className="ri-more-fill align-middle"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
          <Dropdown.Item
            className="dropdown-item edit-item-btn"
            onClick={() => handleReqExtension(dealregister)}
          >
            <i className="ri-calendar-fill align-bottom me-2 text-primary"></i>{" "}
            Request Extension
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {deal && (
        <Reqextension
          showprint={showprint}
          setShowprint={setShowprint}
          dealregister={deal}
        />
      )}
    </>
  );
};
export default ActionButton;
