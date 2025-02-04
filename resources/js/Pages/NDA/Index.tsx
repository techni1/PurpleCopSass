import React, { useEffect, useMemo, useState } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import {
  Alert,
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import Layout from "../../Layouts";
import TableContainer from "../../Components/Common/TableContainer";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Section from "./Section";
import {
  DOCUMENT_NDA_STATUS_CLASS_MAP,
  DOCUMENT_NDA_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

export default function Index({ success, ndaUsers }: any) {
  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        header: "User",
        accessorKey: "user.name",
        enableColumnFilter: false,
      },
      {
        header: "Organization",
        accessorKey: "organization",
        enableColumnFilter: false,
      },

      {
        header: "NDA Status",
        cell: (info: any) => (
          <>
            <span
              className={
                "px-2 py-1 rounded " +
                DOCUMENT_NDA_STATUS_CLASS_MAP[info.getValue()]
              }
            >
              {DOCUMENT_NDA_STATUS_TEXT_MAP[info.getValue()]}
            </span>
          </>
        ),
        accessorKey: "nda_status",
        enableColumnFilter: false,
      },

      {
        header: "Signed on",
        accessorKey: "nda_signed_date",
        enableColumnFilter: false,
      },
      // {
      //   header: "Valid Till",
      //   accessorKey: "nda_end_date",
      //   enableColumnFilter: false,
      // },

      // {
      //   header: "Actions",
      //   id: "actions",
      //   cell: (info: any) => (
      //     <Dropdown>
      //       <Dropdown.Toggle
      //         href="#"
      //         className="btn btn-soft-primary btn-sm dropdown arrow-none"
      //         as="button"
      //       >
      //         <i className="ri-more-fill align-middle"></i>
      //       </Dropdown.Toggle>
      //       <Dropdown.Menu className="dropdown-menu-end">
      //         <Dropdown.Item className="dropdown-item open-item-btn">
      //           <Button
      //             key={info.row.original.id}
      //             variant="link"
      //             className="p-0"
      //             onClick={() =>
      //               handleFileOpen(info.row.original.document_path)
      //             }
      //           >
      //             <i className="ri-file-2-fill align-bottom me-2 text-secondary"></i>{" "}
      //             OPEN
      //           </Button>
      //         </Dropdown.Item>

      //         <Dropdown.Item
      //           className="dropdown-item remove-item-btn text-danger"
      //           onClick={() => handleDeleteClick(info.row.original)}
      //         >
      //           <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
      //           DELETE
      //         </Dropdown.Item>
      //       </Dropdown.Menu>
      //     </Dropdown>
      //   ),
      // },
    ],
    []
  );

  return (
    <React.Fragment>
      <Head title="Document" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Document" pageTitle="Dashboard" />
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
                >
                  <i className="ri-check-double-line label-icon"></i>
                  {success}
                </Alert>
              </Col>
            </Row>
          )}

          {/* <pre>{JSON.stringify(ndaUsers, undefined, 2)}</pre> */}
          <TableContainer
            columns={columns || []}
            data={ndaUsers.data || []}
            // isGlobalFilter={true}
            customPageSize={10}
            // divClass="table-responsive table-card mb-3"
            // tableClass=" align-middle table-wrap"
            // theadClass="table-light"
            SearchPlaceholder="Search..."
          />
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
