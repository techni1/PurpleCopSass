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

export default function Show({ success, documents }: any) {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [documentToDelete, setDocumentToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [filteredData, setFilteredData] = useState(documents.data);

  const handleDeleteClick = (document: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(document.document.name);
    setDocumentToDelete(document);
    setShowModal(true);
  };

  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(route("document.destroy", documentToDelete));
    setShowModal(false);
  };
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
        header: "Document",
        cell: (info: any) => (
          <Link href={route("document.show", info.row.original.slug)}>
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",
        enableColumnFilter: false,
      },

      {
        header: "Category",
        cell: (info: any) => {
          if (info.getValue() == "Organization-Policy") {
            return "Policy";
          }
          if (info.getValue() == "Organization-Evidence") {
            return "Evidence";
          }
          return info.getValue();
        },
        accessorKey: "category",
        enableColumnFilter: false,
      },

      {
        header: "Uploader",
        accessorKey: "createdBy",
        enableColumnFilter: false,
      },
      {
        header: "Created on",
        accessorKey: "created_at",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <Dropdown>
            <Dropdown.Toggle
              href="#"
              className="btn btn-soft-primary btn-sm dropdown arrow-none"
              as="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item className="dropdown-item open-item-btn">
                <Button
                  key={info.row.original.id}
                  variant="link"
                  className="p-0"
                  onClick={() =>
                    handleFileOpen(info.row.original.document_path)
                  }
                >
                  <i className="ri-file-2-fill align-bottom me-2 text-secondary"></i>{" "}
                  OPEN
                </Button>
              </Dropdown.Item>

              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original)}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    let filtered = documents.data;
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [selectedFramework, searchTerm, documents.data]);

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

          <Row>
            <Col lg={4}>
              <Form.Control
                type="text"
                id="searchDocument"
                placeholder="Search Document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-3"
              />
            </Col>
          </Row>
          {/* <pre>{JSON.stringify(filteredData, undefined, 2)}</pre> */}
          <TableContainer
            columns={columns || []}
            data={filteredData || []}
            // isGlobalFilter={true}
            customPageSize={10}
            // divClass="table-responsive table-card mb-3"
            // tableClass=" align-middle table-wrap"
            // theadClass="table-light"
            SearchPlaceholder="Search..."
          />
        </Container>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <h5> {modalMessage}</h5>
            <p className="text-danger mb-4">Delete Document</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={(e) => deleteClient()}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
