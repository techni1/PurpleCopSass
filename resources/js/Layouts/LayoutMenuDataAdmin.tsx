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
  const [isReports, setIsReports] = useState<boolean>(false);
  const [isFramework, setIsFramework] = useState<boolean>(false);
  const [isRiskManagement, setIsRiskManagement] = useState<boolean>(false);
  const [isCloud, setIsCloud] = useState<boolean>(false);
  const [isPeople, setIsPeople] = useState<boolean>(false);
  const [isTrust, setIsTrust] = useState<boolean>(false);
  const [isPolicy, setIsPolicy] = useState<boolean>(false);
  const [isEvidence, setIsEvidence] = useState<boolean>(false);
  const [isAssets, setIsAsset] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [isSecurtityAwarenss, setIsSecurtityAwarenss] =
    useState<boolean>(false);

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
    if (iscurrentState !== "Reports") {
      setIsReports(false);
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
    if (iscurrentState !== "RiskManagement") {
      setIsRiskManagement(false);
    }
    if (iscurrentState !== "Assets") {
      setIsAsset(false);
    }
    if (iscurrentState !== "SecurtityAwarenss") {
      setIsSecurtityAwarenss(false);
    }
    if (iscurrentState !== "Setting") {
      setIsSetting(false);
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
      id: "frameworkmangement",
      label: "Framework",
      icon: "ri-list-settings-line",
      link: route("framework.index"),
    },
    {
      id: "policy",
      label: "Policy",
      link: route("organizationpolicy.index"),
      icon: "ri-book-open-line",
    },
    {
      id: "evidence",
      label: "Evidence Task",
      link: route("organizationevidence.index"),
      icon: "ri-file-zip-line",
    },

    {
      id: "people",
      label: "People",
      icon: "ri-group-line",
      click: function (e: any) {
        e.preventDefault();
        setIsPeople(!isPeople);
        setIscurrentState("Peoples");
        updateIconSidebar(e);
      },
      stateVariables: isPeople,
      subItems: [
        {
          id: "employee",
          label: "Employee",
          link: route("people.index"),
          parentId: "people",
        },
        {
          id: "employee",
          label: "Security Awareness",
          link: route("lmsadminaccess"),
          parentId: "people",
        },
      ],
    },
    {
      id: "trust",
      label: "Purplecop Trust",
      icon: "ri-safe-2-line",
      click: function (e: any) {
        e.preventDefault();
        setIsTrust(!isTrust);
        setIscurrentState("Trusts");
        updateIconSidebar(e);
      },
      stateVariables: isTrust,
      subItems: [
        {
          id: "Profile",
          label: "Profile",
          link: route("purplecop.index"),
          parentId: "trust",
        },
        {
          id: "document",
          label: "Document",
          link: route("document.index"),
          icon: "ri-file-3-line",
          parentId: "trust",
        },
        {
          id: "nda",
          label: "NDA",
          link: route("nda.index"),
          parentId: "trust",
        },
      ],
    },

    // {
    //   id: "trust",
    //   label: "Purplecop Trust",
    //   link: route("trust.index"),
    //   icon: "ri-safe-2-line",
    // },
    {
      id: "assetregister",
      label: "Assets Register",
      link: route("assets.index"),
      icon: "ri-checkbox-circle-line",
    },
    {
      id: "riskregister",
      label: "Risk Register",
      link: route("riskregister.index"),
      icon: " ri-file-warning-line",
    },
    {
      id: "correctiveaction",
      label: "Corrective Action",
      link: route("correctiveaction.index"),
      icon: "bx bx-network-chart",
    },
    {
      id: "auditcenter",
      label: "Audit Center",
      link: route("auditcenter.index"),
      icon: "ri-scales-line",
    },

    {
      id: "reports",
      label: "Reporting",
      icon: "ri-pie-chart-line",
      click: function (e: any) {
        e.preventDefault();
        setIsReports(!isReports);
        setIscurrentState("Reports");
        updateIconSidebar(e);
      },
      stateVariables: isReports,
      subItems: [
        {
          id: "montioring",
          label: "Monitoring",
          link: route("reports.index"),
          parentId: "reports",
        },

        {
          id: "compliance",
          label: "Compliance",
          link: route("reportcomplience"),
          parentId: "reports",
        },
      ],
    },

    {
      id: "client",
      label: "Client",
      icon: "ri-shield-user-line",
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
      ],
    },

    {
      id: "setting",
      label: "Setting",
      icon: "ri-file-settings-line",
      click: function (e: any) {
        e.preventDefault();
        setIsSetting(!isSetting);
        setIscurrentState("Setting");
        updateIconSidebar(e);
      },
      stateVariables: isSetting,
      subItems: [
        {
          id: "assetmangement",
          label: "Assets",
          icon: " ri-briefcase-2-line",
          parentId: "setting",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsAsset(!isAssets);
          },
          stateVariables: isAssets,
          childItems: [
            {
              id: "assetcategory",
              label: "Category",
              link: route("assetcategory.index"),
              parentId: "assetmangement",
            },
            {
              id: "assetsubcategory",
              label: "Sub Category",
              link: route("assetsubcategory.index"),
              parentId: "assetmangement",
            },
            {
              id: "assetlocation",
              label: "Asset Location",
              link: route("assetlocation.index"),
              parentId: "assetmangement",
            },
            {
              id: "assetcriticality",
              label: "Criticality",
              link: route("criticality.index"),
              parentId: "assetmangement",
            },
            {
              id: "assetvendor",
              label: "Vendor",
              link: route("vendor.index"),
              parentId: "assetmangement",
            },
          ],
        },
        {
          id: "riskmanagement",
          label: "Risk",
          parentId: "setting",
          icon: "ri-shield-star-line",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsRiskManagement(!isRiskManagement);
          },
          stateVariables: isRiskManagement,
          childItems: [
            {
              id: "risk",
              label: "Risk",
              link: route("risk.index"),
              parentId: "RiskManagement",
            },
            {
              id: "threats",
              label: "Threats",
              link: route("threats.index"),
              parentId: "RiskManagement",
            },

            {
              id: "riskcategory",
              label: "Risk Category",
              link: route("riskcategory.index"),
              parentId: "RiskManagement",
            },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataOrganization;
