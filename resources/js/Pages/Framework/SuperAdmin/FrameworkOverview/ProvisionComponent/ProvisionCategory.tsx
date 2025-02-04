import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import SingleProvision from "./SingleProvision";
import { v4 as uuidv4 } from "uuid";
export default function ProvisionCategory({
  categories,
  thisFrameworkProvision,
  controls,

}: any) {
  return (
    <React.Fragment>
      <Row>
        {/* <pre>{JSON.stringify(categories,  undefined, 2)}</pre> */}
        <Col>
          {categories.length > 0 ? (
            categories.map((category: any) => (
              <Card key={uuidv4()} className="border-primary-subtle">
                <Card.Header className="bg-primary-subtle h6">
                  {category}
                </Card.Header>
                <Card.Body>
                  {thisFrameworkProvision.map(
                    (data: any) =>
                      data.provisions.category &&
                      category === data.provisions.category.name && (
                        <SingleProvision
                          key={uuidv4()}
                          provisions={data.provisions}
                          controls={controls}

                          thisFrameworkProvision={thisFrameworkProvision}
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
                  {thisFrameworkProvision.map((data: any) => (
                    <SingleProvision
                      key={uuidv4()}
                      provisions={data.provisions}
                      controls={controls}
                      organization_framework_id={organization_framework_id}
                      thisFrameworkProvision={thisFrameworkProvision}
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
