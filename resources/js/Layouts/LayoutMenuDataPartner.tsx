import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NavdataPartner = () => {
  //state data
  // const userRoles = usePage().props.auth.roles;

  const [isUserManagement, setIsUserManagement] = useState<boolean>(false);
  const [isUserSubmenu, setIsUserSubmenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isBilling, setIsBilling] = useState<boolean>(false);
  const [isOrganization, setIsOrganization] = useState<boolean>(false);
  const [isDeal, setIsDeal] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  const [userData, setUserDta] = useState([]);

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub-items")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems: any = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("sub-items");
        const getID: any = document.getElementById(id) as HTMLElement;
        if (getID) getID?.parentElement.classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    if (iscurrentState !== "UserManagement") {
      setIsUserManagement(false);
    }
    if (iscurrentState !== "Clients") {
      setIsClient(false);
    }
    if (iscurrentState !== "Billings") {
      setIsBilling(false);
    }
  }, [history, iscurrentState, isUserManagement, isUserSubmenu]);

  const menuItems: any = [
    {
      id: "dashboard",
      label: "Dashboard",
      link: "/",
      icon: "ri-home-line",
      isHidden: false,
    },

    {
      id: "deal",
      label: "Deal",
      icon: "ri-shake-hands-line",
      link: route("dealregister.index"),
      stateVariables: isDeal,
      click: function (e: any) {
        setIsDeal(!isDeal);
        setIscurrentState("Deal");
      },
    },
    {
      id: "organization",
      label: "Organization",
      icon: "ri-shield-user-line",
      link: route("organization.index"),
      stateVariables: isOrganization,
      click: function (e: any) {
        setIsOrganization(!isOrganization);
        setIscurrentState("Organization");
      },
    },

    {
      id: "billing",
      label: "Quotation",
      icon: "ri-money-dollar-circle-line",
      link: route("quotation.index"),
      stateVariables: isBilling,
      click: function (e: any) {
        setIsBilling(!isBilling);
        setIscurrentState("Billing");
      },
    },

    ,
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataPartner;
