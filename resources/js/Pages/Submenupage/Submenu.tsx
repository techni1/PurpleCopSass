import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import MenuCard from "../../Components/MenuCard";



// import { SearchTable } from "./SearchTable";

export default function Submenu({}: any) {
  return (
    <React.Fragment>
      <Head title="Policy" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Submenu items" pageTitle="Dashboard" />

          {/* This is for people submenu */}
          <Row>
            <MenuCard
              url={route("people.index")}
              icon={"bx bx-user bg-primary-subtle"}
              title={"Employee"}
              subTitle={
                "Track employee records, roles, training, and compliance activities efficiently within the organization"
              }
            />
            <MenuCard
              url={route("lmsadminaccess")}
              icon={"bx bx-shield-quarter bg-secondary-subtle"}
              title={"Security Awareness"}
              subTitle={
                "Monitor and manage employee security awareness training and compliance with cybersecurity protocols effectively"
              }
            />

            {/* This is for purpleCop Trust submenu */}
            <MenuCard
              url={route("purplecop.index")}
              icon={"bx bx-user-pin bg-success-subtle"}
              title={"Profile"}
              subTitle={
                "View, manage, and update user profiles with role-specific access and permissions"
              }
            />
            <MenuCard
              url={route("document.index")}
              icon={"bx bx-file bg-dark-subtle"}
              title={"Document"}
              subTitle={
                "Manage and track documents, policies, and agreements for compliance and regulatory requirements."
              }
            />
            <MenuCard
              url={route("nda.index")}
              icon={"bx bxs-file bg-warning-subtle"}
              title={"NDA"}
              subTitle={
                "Store and manage Non-Disclosure Agreements for secure data sharing and confidentiality protection."
              }
            />

            {/* This is for Reporting submenu */}
            <MenuCard
              url={route("reports.index")}
              icon={"bx bx-layer bg-info-subtle"}
              title={"Monitoring"}
              subTitle={
                "Track and analyze security activities to ensure compliance and mitigate potential risks."
              }
            />
            <MenuCard
              url={route("reportcomplience")}
              icon={"bx bx-file-find bg-primary-subtle"}
              title={"Compliance"}
              subTitle={
                "Monitor and assess adherence to regulatory requirements and internal policies for risk management."
              }
            />

            {/* This is for Client > Organization submenu */}
            <MenuCard
              url={route("organization.index")}
              icon={" bx bx-sitemap bg-secondary-subtle"}
              title={"Organization"}
              subTitle={
                "Organize, manage, and track the complete organizational structure with roles and hierarchies."
              }
            />

            {/* This is for Setting submenu */}
            <MenuCard
              icon={"bx bxs-file-export bg-warning-subtle"}
              title={"Assets"}
              subTitle={
                "Track and manage organizational assets, including hardware, software, and resources for compliance."
              }
            />

            {/* This is for Assets submenu */}
            <MenuCard
              url={route("assetcategory.index")}
              icon={"bx bx-category bg-primary-subtle"}
              title={"Category"}
              subTitle={
                "Organize and manage risk categories for better assessment and decision-making in compliance processes."
              }
            />
            <MenuCard
              url={route("assetsubcategory.index")}
              icon={"bx bx-category-alt bg-secondary-subtle"}
              title={"Sub category"}
              subTitle={
                "Break down risk categories into subcategories for more detailed and specific compliance management."
              }
            />
            <MenuCard
              url={route("assetlocation.index")}
              icon={"bx bx-current-location bg-warning-subtle"}
              title={"Asset Location"}
              subTitle={
                "Track and manage the physical locations of assets for enhanced security and accountability."
              }
            />
            <MenuCard
              url={route("criticality.index")}
              icon={"bx bx-checkbox-square bg-success-subtle"}
              title={"Criticality"}
              subTitle={
                "Assess and classify asset criticality to prioritize security and resource allocation effectively."
              }
            />
            <MenuCard
              url={route("vendor.index")}
              icon={"bx bxs-network-chart bg-dark-subtle"}
              title={"Vendor"}
              subTitle={
                "Manage and track vendor relationships, ensuring compliance and risk mitigation throughout engagements."
              }
            />

            {/* This is for Setting submenu */}
            <MenuCard
              url={route("risk.index")}
              icon={"bx bx-error-alt bg-primary-subtle"}
              title={"Risk"}
              subTitle={
                "Identify, assess, and manage risks to ensure organizational resilience and compliance with regulations"
              }
            />
            <MenuCard
              url={route("threats.index")}
              icon={"bx bxs-message-square-error bg-secondary-subtle"}
              title={"Threats"}
              subTitle={
                "Monitor, analyze, and mitigate potential threats to safeguard organizational assets and operations."
              }
            />
            <MenuCard
              url={route("riskcategory.index")}
              icon={"bx bxs-error bg-secondary-subtle"}
              title={"Risk Category"}
              subTitle={
                "Classify and prioritize risks based on their potential impact and likelihood of occurrence."
              }
            />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Submenu.layout = (page: any) => <Layout children={page} />;
