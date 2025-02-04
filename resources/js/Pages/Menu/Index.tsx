import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row, Modal } from "react-bootstrap";

import Layout from "../../Layouts";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import { SearchTable } from "./SearchTable";
import { useSelector } from "react-redux";
import {
  fetchAssigneeListData,
  getAssigneeList,
  getAssigneeListStatus,
} from "../../slices/assigneeList/reducer";
import { useDispatch } from "react-redux";

export default function Index({ auth, menus, success }: any) {
  const dispatch = useDispatch();
  const assignees = useSelector(getAssigneeList);
  const assigneesStatus = useSelector(getAssigneeListStatus);

  // useEffect(() => {
  //   if (assigneesStatus == "idle") {
  //     //@ts-ignore
  //     dispatch(fetchAssigneeListData());
  //   }
  // }, [risks, assets]);

  return (
    <React.Fragment>
      <Head title="Menu Management" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(risks, undefined, 2)}</pre> */}
          <BreadCrumb title="Menu Management" pageTitle="Dashboard" />
          <Row>
            <Col>
              <div className="h-100">
                <Section />
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
                    routeTo="menu.show"
                    tableData={menus}
                    assign={assignees}
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
