import { Head } from "@inertiajs/react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { SearchTable } from "./SearchTable";
import Layout from "../../Layouts";
import Guest from "../../Layouts/GuestLayout";

export default function Index({ userNda, documentAccessList }: any) {
  return (
    <>
      <Head title="Document" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Documents" pageTitle="Dashboard" />

          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <SearchTable tableData={documentAccessList.data} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
Index.layout = (page: any) => <Guest children={page} />;
