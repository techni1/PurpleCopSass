import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProvisionCategory from "./ProvisionComponent/ProvisionCategory";

const OverviewTab = ({
  thisFrameworkProvision,
  controls,
  organization_framework,
}: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorylist = thisFrameworkProvision.flatMap(
      (item: any) => item.provisions.category.name
    );
    setCategories(Array.from(new Set(categorylist)));
  }, [thisFrameworkProvision]);

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(thisFrameworkProvision, undefined, 2)}</pre> */}
      <Row>
        <Col lg={12}>
          <ProvisionCategory
            categories={categories}
            thisFrameworkProvision={thisFrameworkProvision}
            organization_framework_id={organization_framework}
            controls={controls}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default OverviewTab;
