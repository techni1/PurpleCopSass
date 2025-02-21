import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NavdataAdmin = () => {
  //state data
  // const userRoles = usePage().props.auth.roles;

  const [isUserManagement, setIsUserManagement] = useState<boolean>(false);
  const [isUserSubmenu, setIsUserSubmenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isSassPackage, setIsSassPackage] = useState<boolean>(false);
  const [isOffers, setIsOffers] = useState<boolean>(false);
  const [isCurrency, setIsCurrentcy] = useState<boolean>(false);
  const [isFramworkPrice, setIsFramworkPrice] = useState<boolean>(false);
  const [isPartnerManagement, setIsPartnerManagement] = useState<boolean>(false);
  const [isMasterSetting, setIsMasterSetting] = useState<boolean>(false);
  const [isSmtpSetting, setIsSmtpSetting] = useState<boolean>(false);
  const [isBankSetting, setIsBankSetting] = useState<boolean>(false);
  const [isBilling, setIsBilling] = useState<boolean>(false);
  const [isSupport, setIsSupport] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");
  const [userData, setUserDta] = useState([]);
  const [isFaq, setIsFaq] = useState([]);

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
    if (iscurrentState !== "Faqs") {
      setIsFaq(false);
    }

    if (iscurrentState !== "Menu") {
      setIsMenu(false);
    }

    if (iscurrentState !== "SassPackage") {
      setIsSassPackage(false);
    }
    if (iscurrentState !== "Offers") {
      setIsOffers(false);
    }
    if (iscurrentState !== "Currency") {
      setIsCurrentcy(false);
    }
    if (iscurrentState !== "partners") {
      setIsPartnerManagement(false);
    }
    if (iscurrentState !== "MasterSetting") {
      setIsMasterSetting(false);
    }
    if (iscurrentState !== "BankSetting") {
      setIsBankSetting(false);
    }
    if (iscurrentState !== "billing") {
      setIsBilling(false);
    }
    if (iscurrentState !== "support") {
      setIsSupport(false);
    }
    if (iscurrentState !== "smtpsetting") {
      setIsSmtpSetting(false);
    }

  }, [history, iscurrentState, isUserManagement, isUserSubmenu]);



  const menuItems: any = [
    // {
    //   label: "Admin",
    //   isHeader: true,
    // },
    {
      id: "admindashboard",
      label: "Dashboard",
      icon: " ri-dashboard-line",
      link: "/#",
    },
    {
      id: "user_management",
      label: "Users",
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
          id: "userlist",
          label: "List",
          link: route("user.index"),
          parentId: "user_management",
        },
        {
          id: "role",
          label: "Role",
          link: "/role",
          parentId: "user_management",
        },

        {
          id: "permission",
          label: "Permissions",
          link: "/permission",
          parentId: "users",
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
      id: "packagemangement",
      label: "Package",
      icon: "ri-vip-diamond-fill",
      link: route("sasspackage.index"),
      stateVariables: isSassPackage,
      click: function (e: any) {
        setIsUserManagement(!isSassPackage);
        setIscurrentState("SassPackage");
      }
    },

    {
      id: "offersmangement",
      label: "Offers",
      icon: "ri-coin-line",
      link: route("offers.index"),
      stateVariables: isOffers,
      click: function (e: any) {
        setIsOffers(!isOffers);
        setIscurrentState("Offers");
      }
    },

    {
      id: "currencymangement",
      label: "Currency",
      icon: "ri-money-dollar-circle-line",
      link: route("currency.index"),
      stateVariables: isCurrency,
      click: function (e: any) {
        setIsCurrentcy(!isCurrency);
        setIscurrentState("Currency");
      }
    },


    {
      id: "framworkprice",
      label: "Framwork Price",
      icon: "ri-home-gear-line",
      link: route("framworkprice.index"),
      stateVariables: isFramworkPrice,
      click: function (e: any) {
        setIsFramworkPrice(!isFramworkPrice);
        setIscurrentState("FramworkPrice");
      }
    },


    {
      id: "partner_management",
      label: "Partner's",
      icon: "ri-store-line",
      link: route("partner.index"),
      stateVariables: isPartnerManagement,
      click: function (e: any) {
        setIsFramworkPrice(!isPartnerManagement);
        setIscurrentState("PartnerManagement");
      }
    },


    {
      id: "master_setting",
      label: "Master Setting",
      icon: "ri-briefcase-fill",
      link: route("mastersetting.index"),
      stateVariables: isMasterSetting,
      click: function (e: any) {
        setIsMasterSetting(!isMasterSetting);
        setIscurrentState("MasterSetting");
      }
    },
    {
      id: "bank_setting",
      label: "Bank",
      icon: "ri-bank-line",
      link: route("bankdetails.index"),
      stateVariables: isBankSetting,
      click: function (e: any) {
        setIsBankSetting(!isBankSetting);
        setIscurrentState("BankSetting");
      }
    },

    {
      id: "billing",
      label: "Billing",
      icon: "ri-money-dollar-circle-line",
      link: route("billing.menu"),
      stateVariables: isBilling,
      click: function (e: any) {
        setIsBilling(!isBilling);
        setIscurrentState("Billing");
      }
    },


    {
      id: "supportmanagement",
      label: "Support",
      icon: "ri-customer-service-2-line",
      link: route("supporttickets.index"),
      stateVariables: isSupport,
      click: function (e: any) {
        setIsSupport(!isSupport);
        setIscurrentState("Support");
      }
    },




    {
      id: "client",
      label: "Organization",
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


        {
          id: "accountsetup",
          label: "Account Setup",
          link: route("accountsetup.index"),
          parentId: "clients",
        },
      ],
    },


    {
      id: "faq",
      label: "FAQ",
      icon: "ri-building-2-line",
      click: function (e: any) {
        e.preventDefault();
        setIsFaq(!isFaq);
        setIscurrentState("Faqs");
        updateIconSidebar(e);
      },
      stateVariables: isFaq,
      subItems: [
        {
          id: "faqcategory",
          label: "FAQ Category",
          link: route("faqcategory.index"),
          parentId: "faq",
        },
        {
          id: "faqsubcategory",
          label: "FAQ Sub Category",
          link: route("faqsubcategory.index"),
          parentId: "faq",
        },
        {
          id: "faqtype",
          label: "FAQ Type",
          link: route("faqtype.index"),
          parentId: "faq",
        },
        {
          id: "faq",
          label: "FAQ Questions",
          link: route("faq.index"),
          parentId: "faq",
        },
      ],
    },




    {
      id: "smtp_setting",
      label: "SMTP Setting",
      icon: "ri-mail-fill",
      link: route("smtpSetting.index"),
      stateVariables: isSmtpSetting,
      click: function (e: any) {
        setIsSmtpSetting(!isSmtpSetting);
        setIscurrentState("SmtpSetting");
      }
    },


    

  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataAdmin;
