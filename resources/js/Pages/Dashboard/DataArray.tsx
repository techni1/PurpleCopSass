import { Col, Row } from "react-bootstrap";

export default function DataArray({ data }: any) {
  // return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
  return (
    data &&
    Object.entries(data).map(([key, value]) => (
      <>
        {value && (
          <Row className="" key={key} style={{ fontSize: "12px" }}>
            <Col>
              <span className="text-capitalize">{key.replace(/_/g, " ")}</span>
            </Col>
            <Col>
              <span className="text-muted">{String(value)}</span>
            </Col>
          </Row>
        )}
      </>
    ))
  );
}
