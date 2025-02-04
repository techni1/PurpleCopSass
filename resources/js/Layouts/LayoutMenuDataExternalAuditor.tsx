import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NavdataOrganization = () => {
  //state data
  // const userRoles = usePage().props.auth.roles;

  const [isUserManagement, setIsUserManagement] = useState<boolean>(false);
  const [isUserSubmenu, setIsUserSubmenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isFramework, setIsFramework] = useState<boolean>(false);
  const [isCloud, setIsCloud] = useState<boolean>(false);
  const [isPeople, setIsPeople] = useState<boolean>(false);
  const [isTrust, setIsTrust] = useState<boolean>(false);
  const [isPolicy, setIsPolicy] = useState<boolean>(false);
  const [isEvidence, setIsEvidence] = useState<boolean>(false);

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

    if (iscurrentState !== "Frameworks") {
      setIsFramework(false);
    }
    if (iscurrentState !== "Clouds") {
      setIsCloud(false);
    }
    if (iscurrentState !== "Peoples") {
      setIsPeople(false);
    }
    if (iscurrentState !== "Trusts") {
      setIsTrust(false);
    }
    if (iscurrentState !== "Policy") {
      setIsPolicy(false);
    }
    if (iscurrentState !== "Evidence") {
      setIsEvidence(false);
    }
  }, [history, iscurrentState, isUserManagement, isUserSubmenu]);

  const menuItems: any = [
    {
      id: "client",
      label: "Client Management",
      icon: "ri-building-2-line",
      click: function (e: any) {
        e.preventDefault();
        setIsClient(!isClient);
        setIscurrentState("Clients");
        updateIconSidebar(e);
      },
      stateVariables: isClient,
      subItems: [
        {
          id: "organization",
          label: "Organization",
          link: route("organization.index"),
          parentId: "clients",
        },
        {
          id: "entity",
          label: "Entity",
          link: route("entity.index"),
          parentId: "entity",
        },
      ],
    },
    {
      id: "avtivitylogs",
      label: "Logs",
      icon: "ri-history-fill",
      link: route("logs.index"),
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataOrganization;
