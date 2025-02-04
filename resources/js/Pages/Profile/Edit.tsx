import React from "react";
import Layout from "../../Layouts";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, usePage } from "@inertiajs/react";
import { Col, Container } from "react-bootstrap";
import EditDetails from "./Partials/EditDetails";

export default function Edit({ auth, mustVerifyEmail, status }: any) {
  const user = usePage().props.auth.user;
  return (
    <React.Fragment>
      <Layout>
        <Head title="Profile" />
        <div className="page-content">
          <Container fluid>
            {/* <Col>
              <UpdateProfileInformationForm
                user={user}
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
              />
            </Col> */}
            <Col>
              <EditDetails
                user={user}
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
              />
            </Col>
            <Col>
              <UpdatePasswordForm className="max-w-xl" />
            </Col>
            {/* <Col>
              <DeleteUserForm className="max-w-xl" />
            </Col> */}
          </Container>
        </div>
      </Layout>
    </React.Fragment>
  );
}
