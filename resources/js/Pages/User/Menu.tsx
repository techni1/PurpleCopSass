import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";

import MenuCard from "../../Components/MenuCard";

export default function Menu({ auth, people, success }: any) {
  return (
    <React.Fragment>
      <Head title="Purplecop - Menu" />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="User - Menu" pageTitle="Pages" />
          <Row>
            {/* This is for purpleCop Trust submenu */}
            <MenuCard
            
              url={ route("user.index")}
              icon={"bx bx-list-check bg-success-subtle"}
             
              title={"List"}
              // subTitle={
              //   "View, manage, and update user profiles with role-specific access and permissions"
              // }
            />
            <MenuCard
              url={"/role"}
              icon={"bx bx-user-circle bg-dark-subtle"}
              title={"Role"}
              // subTitle={
              //   "Manage and track documents, policies, and agreements for compliance and regulatory requirements."
              // }
            />
            <MenuCard
              url={"/permission"}
              icon={"bx bx-lock-open bg-warning-subtle"}
              title={"Permissions"}
              // subTitle={
              //   "Store and manage Non-Disclosure Agreements for secure data sharing and confidentiality protection."
              // }
            />
            <MenuCard
              url={route("designation.index")}
              icon={"bx bx-badge-check bg-primary-subtle"}
              title={"Designation"}
              // subTitle={
              //   "Store and manage Non-Disclosure Agreements for secure data sharing and confidentiality protection."
              // }
            />
            <MenuCard
              url={ route("department.index")}
              icon={"bx bx-network-chart bg-info-subtle"}
              title={"Department"}
              // subTitle={
              //   "Store and manage Non-Disclosure Agreements for secure data sharing and confidentiality protection."
              // }
            />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Menu.layout = (page: any) => <Layout children={page} />;
