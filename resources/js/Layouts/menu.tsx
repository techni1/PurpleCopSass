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
  const [isRiskManagement, setIsRiskManagement] = useState<boolean>(false);
  const [isPeople, setIsPeople] = useState<boolean>(false);
  const [isAssets, setIsAsset] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");


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


    if (iscurrentState !== "Peoples") {
      setIsPeople(false);
    }
    if (isSetting !== "Setting") {
      setIsSetting(false);
    }
  }, [history, iscurrentState, isUserManagement, isUserSubmenu]);

  const menuItems: any = [
    // {
    //   label: "Admin",
    //   isHeader: true,
    // },
    // {
    //   id: "admindashboard",
    //   label: "Dashboard",
    //   icon: " ri-dashboard-line",
    //   link: "/#",
    // },
    {
      id: "dashboard",
      label: "Dashboard",
      link: "/",
      icon: "ri-home-line",
    },


    {
      id: "user_management",
      label: "User Management",
      icon: "ri-account-circle-line",
      click: function (e: any) {
        e.preventDefault();
        setIsUserManagement(!isUserManagement);
        setIscurrentState("UserManagement");
        updateIconSidebar(e);
      },
      stateVariables: isUserManagement,
      subItems: [
        {
          id: "users",
          label: "Users",
          link: "/user",
          parentId: "user_management",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsUserSubmenu(!isUserSubmenu);
          },
          stateVariables: isUserSubmenu,
          childItems: [
            {
              id: "user",
              label: "Users List",
              link: route("user.index"),
              parentId: "users",
            },
            {
              id: "roles",
              label: "User Role",
              link: "/role",
              parentId: "users",
            },
            {
              id: "permission",
              label: "User Permissions",
              link: "/permission",
              parentId: "users",
            },
          ],
        },
        {
          id: "designation",
          label: "Designation",
          link: route("designation.index"),
          parentId: "user_management",
        },
        {
          id: "department",
          label: "Department",
          link: route("department.index"),
          parentId: "user_management",
        },
      ],
    },

    {
      label: "User",
      isHeader: true,
    },
    {
      id: "client",
      label: "Client",
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
        // {
        //   id: "entity",
        //   label: "Entity",
        //   link: route("entity.index"),
        //   parentId: "entity",
        // },
      ],
    },

    {
      id: "setting",
      label: "Setting",
      icon: "ri-building-2-line",
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
              link: '#',
              parentId: "assetmangement",
            },

          ],
        },

        // {
        //   id: "entity",
        //   label: "Entity",
        //   link: route("entity.index"),
        //   parentId: "entity",
        // },
      ],
    },

    // {
    //   id: "avtivitylogs",
    //   label: "Logs",
    //   icon: "ri-history-fill",
    //   link: route("logs.index"),
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataOrganization;
