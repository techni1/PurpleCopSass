import React, { useState } from "react";
import { Head, Link, useRemember } from "@inertiajs/react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import CreateAudit from "./CreateAudit";
export default function Index({ userframework, audits }: any) {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const handleCreateAudit = () => {
    setCreateModalOpen(true);
  };

  return (
    <React.Fragment>
      <Head title="Audit Center" />

      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Audit Center" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(audits.data[0], undefined, 2)}</pre> */}
          <Row className="mb-3 pb-1">
            <Col xs={12}>
              <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                <div className="flex-grow-1">
                  <h4 className="fs-16 mb-1">All Audit</h4>
                </div>
                <div className="mt-3 mt-lg-0">
                  <form action="#">
                    <Row className="g-3 mb-0 align-items-center">
                      <div className="col-auto">
                        <Button variant="primary" onClick={handleCreateAudit}>
                          <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                          Create Audit
                        </Button>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>

          <Card>
            <Card.Body>
              <div className="live-preview">
                <div className="table-responsive table-card">
                  <Row>
                    <Col>
                      <Table className="align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Audit Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Audit Date</th>
                            <th scope="col">Observation Period</th>
                            <th scope="col">Created On</th>
                          </tr>
                        </thead>
                        <tbody>
                          {audits.data.map((audit: any) => (
                            <tr key={audit.id}>
                              <td>
                                <Link
                                  href={route("auditcenter.show", audit)}
                                  preserveScroll
                                  // onClick={() => handleAuditDetail(audit)}
                                >
                                  {audit.name}
                                </Link>
                              </td>
                              <td>{audit.status}</td>
                              <td>{audit.audit_date}</td>
                              <td>
                                {audit.start_date} - {audit.end_date}
                              </td>
                              <td>{audit.created_at}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <CreateAudit
        isCreateModalOpen={isCreateModalOpen}
        setCreateModalOpen={setCreateModalOpen}
        userframework={userframework}
      />
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
