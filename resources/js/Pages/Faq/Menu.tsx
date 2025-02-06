import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";

import MenuCard from "../../Components/MenuCard";

export default function Menu({ auth, people, success }: any) {
  return (
    <React.Fragment>
      <Head title="FAQ - Menu" />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="FAQ - Menu" pageTitle="Pages" />
          <Row>
            {/* This is for purpleCop Trust submenu */}
            <MenuCard
            
              url={ route("faqcategory.index")}
              icon={"bx bx-list-check bg-success-subtle"}
             
              title={"FAQ Category"}
              // subTitle={
              //   "View, manage, and update user profiles with role-specific access and permissions"
              // }
            />
            <MenuCard
              url={route("faqsubcategory.index")}
              icon={"bx bx-list-ul bg-dark-subtle"}
              title={"FAQ Sub Category"}
              // subTitle={
              //   "Manage and track documents, policies, and agreements for compliance and regulatory requirements."
              // }
            />
            <MenuCard
              url={route("faqtype.index")}
              icon={"bx bx-label bg-warning-subtle"}
              title={"FAQ Type"}
              // subTitle={
              //   "Store and manage Non-Disclosure Agreements for secure data sharing and confidentiality protection."
              // }
            />
            <MenuCard
              url={route("faq.index")}
              icon={"bx bx-question-mark bg-primary-subtle"}
              title={"FAQ Questions"}
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
