import { Card, Col, Row } from "react-bootstrap";

export default function CompanyProfile({ organization }: any) {
  return (
    <>
      <Card>
        <Card.Header>
          <h5>Company Overview</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* <pre>{JSON.stringify(organization, undefined, 2)}</pre> */}
            <p>{organization.overview}</p>
          </Row>
        </Card.Body>
        <Card.Footer>
          <h5>Additional Information</h5>
          <Row className="pt-2">
            <Col xl={2}>
              <p className="mb-2  ">Website:</p>
            </Col>
            <Col>
              <a
                href={organization.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {organization.url}
              </a>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col xl={2}>
              <p className="mb-2  ">Contack Us:</p>
            </Col>
            <Col>
              <a
                href={organization.contact_us}
                target="_blank"
                rel="noopener noreferrer"
              >
                {organization.contact_us}
              </a>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col xl={2}>
              <p className="mb-2  ">Terms & Condition</p>
            </Col>
            <Col>
              <a
                href={organization.terms_condition}
                target="_blank"
                rel="noopener noreferrer"
              >
                {organization.terms_condition}
              </a>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col xl={2}>
              <p className="mb-2  ">Privacy Policy</p>
            </Col>
            <Col>
              <a
                href={organization.privacy_policy}
                target="_blank"
                rel="noopener noreferrer"
              >
                {organization.privacy_policy}
              </a>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col xl={2}>
              <p className="mb-2  ">Contack Us:</p>
            </Col>
            <Col>
              <span>{organization.founded_in}</span>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}
