import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const NavdataOrganization = () => {
  const menuItems: any = [
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
      id: "correctiveaction",
      label: "Corrective Action",
      link: route("correctiveaction.index"),
      icon: "ri-checkbox-circle-line",
    },
    {
      id: "auditcenter",
      label: "Audit Center",
      link: route("auditcenter.index"),
      icon: "ri-scales-line",
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavdataOrganization;
