import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap"
import Invoice from "./Invoice";
import CancelBilling from "./CancelBilling";
import Regenrate from "./Regenrate";
import PaymentUpdate from "./PaymentUpdate";

const ActionButton=({billing, mastersetting, organization, entity, packageshow, offers, framwork, bank}:any)=>{
     
    const [show, setShow] = useState<boolean>(false);
    const userRole = usePage().props.auth.user.roles[0].name;
    const [showre, setShowre] = useState<boolean>(false);
    const [showprint, setShowprint] = useState<boolean>(false);
    const [showpayment, setShowPayment] = useState<boolean>(false);
  
    const [selectedBilling, setSelectedBilling] = useState(null);

   
    const handleMaster = (billing: any) => {
      if (billing) {
        setShow(true);
        setSelectedBilling(billing);
      }
    };
    const handleRegenrate = (billing: any) => {
      if (billing) {
        setShowre(true);
        setSelectedBilling(billing);
      }
    };
    const handleInvoice = (billing: any) => {
      if (billing) {
        setShowprint(true);
        setSelectedBilling(billing);
      }
    };


    const handlePayment = (billing: any) => {
      if(billing){
        setShowPayment(true);
        setSelectedBilling(billing);
      }
    };
  

    return(
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

              <Dropdown.Item className="dropdown-item edit-item-btn"
                onClick={() => handleInvoice(billing)}
              >
                <i className="ri-printer-fill align-bottom me-2 text-primary"></i>{" "}
                Invoice

              </Dropdown.Item>
              

              {userRole == "Super-Admin" &&  (

                <Dropdown.Item className="dropdown-item edit-item-btn"
                onClick={() => handlePayment(billing)}
                >

                <i className="ri-money-dollar-circle-fill align-bottom me-2 text-success"></i>{" "}
                Payment Update
                </Dropdown.Item>
              )}



              {billing.billing_status=='New' && (
 <Dropdown.Item className="dropdown-item edit-item-btn"
 onClick={() => handleMaster(billing)}
>

 <i className="ri-close-circle-fill align-bottom me-2 text-danger"></i>{" "}
 Cancel
</Dropdown.Item>

              )}

{billing.billing_status=='Cancel' && (
  <Dropdown.Item className="dropdown-item edit-item-btn"
  onClick={() => handleRegenrate(billing)}
>
  <i className="ri-recycle-fill align-bottom me-2 text-success"></i>{" "}
  Regenrate
</Dropdown.Item>
              )}

             
            </Dropdown.Menu>
          </Dropdown>
        
        
        
      {selectedBilling && (
        <Invoice
          showprint={showprint}
          setShowprint={setShowprint}
          billing={selectedBilling}
        />
      )}


{selectedBilling && (
        <PaymentUpdate
        showpayment={showpayment}
        setShowPayment={setShowPayment}
          billing={selectedBilling}
        />
      )}


      {selectedBilling && (
        <CancelBilling
          show={show}
          setShow={setShow}
          billing={selectedBilling}
        />
      )}
      {selectedBilling && (
        <Regenrate
          show={showre}
          setShow={setShowre}
          billing={selectedBilling}
          mastersetting={mastersetting}
          organization={organization}
          entity={entity}
          packagedata={packageshow}
          offers={offers}
          framwork={framwork}
          bank={bank}
        />
      )}






      
        </>

        
    )
}
export default ActionButton;