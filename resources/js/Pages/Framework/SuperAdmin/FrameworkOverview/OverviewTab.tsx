import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProvisionCategory from "./ProvisionComponent/ProvisionCategory";

const OverviewTab = ({
  thisFrameworkProvision,
  framework

}: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorylist = thisFrameworkProvision.flatMap((item: any) =>
      item.provisions.category ? item.provisions.category.name : []
    );
    setCategories(Array.from(new Set(categorylist)));
  }, [thisFrameworkProvision]);

  return (
    <React.Fragment>
      <Row>

        <pre>{JSON.stringify(framework, undefined, 2)}</pre>

        {/* <Col lg={12}>
          <ProvisionCategory
            categories={thisFrameworkProvision.category}
            thisFrameworkProvision={thisFrameworkProvision}
            //organization_framework_id={organization_framework}
            controls={thisFrameworkProvision.controls}
          />
        </Col> */}
      </Row>
    </React.Fragment>
  );
};

export default OverviewTab;
