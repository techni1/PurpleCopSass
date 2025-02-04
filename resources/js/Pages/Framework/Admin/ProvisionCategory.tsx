import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SingleProvision from "./SingleProvision";

export default function ProvisionCategory({
  categories,
  provisions,
  organization_framework_id,
  controlScopeList,
  provisionScopeList,
  assignees,
}: any) {
  return (
    <React.Fragment>
      <Row>
        {/* <pre>{JSON.stringify(categories, undefined, 2)}</pre> */}
        <Col>
          {categories.length > 0 ? (
            categories.map((category: any) => (
              <Card key={category} className="border-primary-subtle ">
                <Card.Header className="bg-primary-subtle h6 rounded-4">
                  {category}
                </Card.Header>
                <Card.Body>
                  {provisions.map(
                    (data: any) =>
                      data.category &&
                      category === data.category.name && (
                        <SingleProvision
                          key={data.id}
                          organization_framework_id={organization_framework_id}
                          provision={data}
                          // thisFrameworkProvision={provisions}
                          controlScopeList={controlScopeList}
                          provisionScopeList={provisionScopeList}
                          assignees={assignees}
                        />
                      )
                  )}
                </Card.Body>
              </Card>
            ))
          ) : (
            <Row>
              <Col>
                <Card.Body>
                  {provisions.map((data: any, index: any) => (
                    <SingleProvision
                      key={`${data.id}-${index}`}
                      organization_framework_id={organization_framework_id}
                      provision={data}
                      // thisFrameworkProvision={provisions}
                      controlScopeList={controlScopeList}
                      provisionScopeList={provisionScopeList}
                      assignees={assignees}
                    />
                  ))}
                </Card.Body>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}
