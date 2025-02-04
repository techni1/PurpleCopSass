import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function ProgressPlaceholder() {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
          </p>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
