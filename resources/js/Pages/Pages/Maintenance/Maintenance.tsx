import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Head, Link } from "@inertiajs/react";
import ParticlesAuth from "../ParticlesAuth";
import GuestLayout from "../../../Layouts/GuestLayout";
//images import
import maintenanceImg from "../../../../images/maintenance.png";

const Maintenance = () => {
  return (
    <React.Fragment>
      <GuestLayout>
        <ParticlesAuth>
          <Head title="Maintenance" />
          <div className="auth-page-content mt-5">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="text-center mt-sm-1">
                    <div className="mb-5 text-white-50">
                      <h1 className="display-5 coming-soon-text">
                        Site is Under Maintenance
                      </h1>
                      <p className="fs-14">Please check back in sometime</p>
                      <div className="mt-4 pt-2">
                        <Link href="/" className="btn btn-success">
                          <i className="mdi mdi-home me-1"></i> Back to Home
                        </Link>
                      </div>
                    </div>
                    <Row className="justify-content-center mb-5">
                      <Col xl={4} lg={8}>
                        <div>
                          <img
                            src={maintenanceImg}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ParticlesAuth>
      </GuestLayout>
    </React.Fragment>
  );
};

export default Maintenance;
