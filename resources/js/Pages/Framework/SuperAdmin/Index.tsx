import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Section from "./Section";
import { SearchTable } from "./SearchTable";
import FrameworkCard from "../Admin/FrameworkCard";

export default function Index({ auth, frameworks, success }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(frameworks.data);

  useEffect(() => {
    let filtered = frameworks.data;
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [searchTerm, frameworks.data]);

  return (
    <React.Fragment>
      <Head title="Frameworks" />

      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(frameworks.data[0], undefined, 2)}</pre> */}
          <BreadCrumb title="Frameworks" pageTitle="Dashboard" />
          <Row>
            <Col>
              <div className="h-100">
                <Section setSearchTerm={setSearchTerm} />
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
            {/* {filteredData.map((framework: any) => (
              <Col key={framework.id} lg={4}>
                <FrameworkCard framework={framework} />
              </Col>
            ))} */}

            <Card>
              <Card.Body>
                {/* <pre>{JSON.stringify(frameworks, undefined, 2)}</pre> */}
                <SearchTable
                  routeTo="organization.show"
                  tableData={frameworks}
                />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
