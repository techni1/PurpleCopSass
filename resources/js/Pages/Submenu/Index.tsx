import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row, Modal } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Index({ auth, submenus, menu, success }: any) {


  // useEffect(() => {
  //   if (assigneesStatus == "idle") {
  //     //@ts-ignore
  //     dispatch(fetchAssigneeListData());
  //   }
  // }, [risks, assets]);

  return (
    <React.Fragment>
      <Head title="SubMenu Management" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
          <BreadCrumb title="SubMenu Management" pageTitle="Submenu" />
          <Row>
            <Col>
              <div className="h-100">
                <Section
                  menu={menu}
                />
              </div>
            </Col>
          </Row>
          {success && (
            <Row>
              <Col>
                <Alert
                  variant="secondary"
                  className="text-white bg-secondary alert-label-icon"
                  role="alert"
                  closeVariant="white"
                  dismissible
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <SearchTable
                    routeTo="submenu.show"
                    tableData={submenus}
                    menu={menu}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
