import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";

import MenuCard from "../../Components/MenuCard";

export default function Menu({ auth, people, success }: any) {
  return (
    <React.Fragment>
      <Head title="Organization - Menu" />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Organization - Menu" pageTitle="Pages" />
          <Row>
            {/* This is for purpleCop Trust submenu */}
            <MenuCard
            
              url={route("organization.index")}
              icon={"bx bx-list-check bg-success-subtle"}
              title={"Organization"}
              // subTitle={
              //   "View, manage, and update user profiles with role-specific access and permissions"
              // }
            />
            <MenuCard
              url={route("entity.index")}
              icon={"bx bx-user-circle bg-dark-subtle"}
              title={"Entity"}
              // subTitle={
              //   "Manage and track documents, policies, and agreements for compliance and regulatory requirements."
              // }
            />
            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Menu.layout = (page: any) => <Layout children={page} />;
