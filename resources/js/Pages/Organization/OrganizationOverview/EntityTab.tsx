import React from "react";
import { Link } from "@inertiajs/react";
import { Card, Col, Row, Table, Dropdown } from "react-bootstrap";
import { SearchTable } from "../SearchTable";

const EntityTab = ({ entities, organization }: any) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row className="mb-3 pb-1">
            <Col xs={12}>
              <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                <div className="flex-grow-1">
                  <h4 className="fs-16 mb-1">Entities</h4>
                </div>

                <div className="mt-3 mt-lg-0">
                  <form action="#">
                    <Row className="g-3 mb-0 align-items-center">
                      <div className="col-auto">
                        <Link
                          href={route("entity.create", {
                            organization_id: organization.id,
                          })}
                          className="btn btn-soft-primary"
                        >
                          <i className="ri-add-circle-line align-middle me-1"></i>{" "}
                          Add Entity
                        </Link>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          {/* <pre>{JSON.stringify(entities, undefined, 2)}</pre> */}
          {entities.data == 0 ? (
            <p>No Entity is Associated with this Organization </p>
          ) : (
            <SearchTable routeTo="entity.show" tableData={entities} />
          )}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default EntityTab;
