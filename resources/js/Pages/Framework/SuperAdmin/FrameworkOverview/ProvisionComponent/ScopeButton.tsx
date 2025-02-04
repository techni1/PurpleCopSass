import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  getAllProvisionScope,
  toggleProvisionScope,
} from "../../../../../slices/provisionScope/provisionScopeSlice";
import { useSelector } from "react-redux";
export default function ScopeButton({
  provision_id,
  organization_framework_id,
}: any) {
  const [isOutOfScope, setIsOutOfScope] = useState(false);
  const dispatch = useDispatch();
  const provisionScopeData = useSelector(getAllProvisionScope);
  useEffect(() => {
    const checkScopeStatus = () => {
      const status = provisionScopeData.some(
        (item: any) =>
          item.organization_framework_id === organization_framework_id &&
          item.provision_id === provision_id
      );
      setIsOutOfScope(status);
    };
    checkScopeStatus();
  }, [provisionScopeData, provision_id, organization_framework_id]);

  const handleScopeChange = async (id: number) => {
    try {
      const response = await axios.post("/store-provision-scope", {
        organization_framework_id: organization_framework_id,
        provision_id: provision_id,
      });
      // console.log("Scope successfully updated", response.data);
      dispatch(
        toggleProvisionScope({
          provision_id,
          organization_framework_id,
        })
      );
      setIsOutOfScope((prevStatus) => !prevStatus);
    } catch (error) {
      console.error("Error updating scope", error);
    }
  };

  return (
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle
          href="#"
          className="btn dropdown arrow-none"
          as="button"
        >
          <i className="ri-more-2-fill align-middle"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
          <Dropdown.Item
            className="dropdown-item edit-item-btn"
            onClick={() => handleScopeChange(provision_id)}
          >
            {isOutOfScope ? (
              <>
                <i className="ri-add-box-line align-bottom me-2 text-success"></i>{" "}
                In Scope
              </>
            ) : (
              <>
                <i className="ri-indeterminate-circle-line align-bottom me-2 text-danger"></i>{" "}
                Out of Scope
              </>
            )}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
}
