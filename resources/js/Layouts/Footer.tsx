import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer border-top">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © TPRM.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Third-Party Risk Management (TPRM)
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
