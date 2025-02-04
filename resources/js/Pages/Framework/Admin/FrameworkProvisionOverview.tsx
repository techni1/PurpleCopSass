import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProvisionCategory from "./ProvisionCategory";

const FrameworkProvisionOverview = ({
  provisions,
  organization_framework,
  controlScopeList,
  provisionScopeList,
  assignees,
}: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorylist = provisions.flatMap((item: any) =>
      item.category ? item.category.name : []
    );
    setCategories(Array.from(new Set(categorylist)));
  }, [provisions]);

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {/* <pre>{JSON.stringify(categories, undefined, 2)}</pre> */}
          <ProvisionCategory
            categories={categories}
            provisions={provisions}
            organization_framework_id={organization_framework}
            controlScopeList={controlScopeList}
            provisionScopeList={provisionScopeList}
            assignees={assignees}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FrameworkProvisionOverview;
