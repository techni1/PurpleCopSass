import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SingleProvision from "./SingleProvision";

export default function ProvisionCategory({
  categories,
  thisFrameworkProvision,
  controls,
  organization_framework_id,
}: any) {
  return (
    <React.Fragment>
      <Row>
        <Col>
          {categories.map((category: any) => (
            <Card key={category} className="border-primary-subtle">
              <Card.Header className="bg-primary-subtle h6">
                {category}
              </Card.Header>
              <Card.Body>
                {thisFrameworkProvision.map(
                  (data: any) =>
                    category === data.provisions.category.name && (
                      <SingleProvision
                        key={data.provision_id}
                        provisions={data.provisions}
                        controls={controls}
                        organization_framework_id={organization_framework_id}
                        thisFrameworkProvision={thisFrameworkProvision}
                      />
                    )
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </React.Fragment>
  );
}
