import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Alert, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";

import Layout from "../../Layouts";

import Section from "./Section";
import { SearchTable } from "./SearchTable";

export default function Index({ correctiveActions }: any) {
  const user = usePage().props.auth.user;
  const userRoles = usePage().props.auth.roles;

  // const dispatch = useDispatch();
  // const correctiveActions = useSelector(getCorrectiveAction);
  // const correctiveActionsStatus = useSelector(getCorrectiveActionStatus);

  // const [isLoading, setIsLoading] = useState(false);
  const [currentUserCorrectiveAction, setCurrentUserCorrectiveAction] =
    useState([]);

  // useEffect(() => {
  //   const fetchCA = async () => {
  //     setIsLoading(true);
  //     try {
  //       if (correctiveActionsStatus == "idle") {
  //         //@ts-ignore
  //         await dispatch(fetchCorrectiveActionData());
  //       }
  //       setIsLoading(false);
  //     } catch (error) {}
  //   };
  //   fetchCA();
  // }, [correctiveActions]);

  useEffect(() => {
    const corrective = correctiveActions.data.filter(
      (data: any) => data.assignee.id === user.id
    );
    setCurrentUserCorrectiveAction(corrective);
  }, [correctiveActions.data, user.id]);

  return (
    <React.Fragment>
      <Head title="User Policy" />
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Corrective Actions" pageTitle="Dashboard" /> */}
          {/* <pre>{JSON.stringify(correctiveActions.data, undefined, 4)}</pre> */}

          {userRoles[0] != "Super-Admin" && userRoles[0] != "Assignee" && (
            <Row>
              <Col>
                <div className="h-100">
                  <Section />
                </div>
              </Col>
            </Row>
          )}

          {userRoles[0] == "Admin" ||
          userRoles[0] === "Auditor" ||
          userRoles[0] == "Super-Admin" ? (
            correctiveActions.data.length > 0 ? (
              <SearchTable tableData={correctiveActions.data} />
            ) : (
              <div>No Corrective Action Found!</div>
            )
          ) : currentUserCorrectiveAction.length > 0 ? (
            <SearchTable tableData={currentUserCorrectiveAction} />
          ) : (
            <div>No Corrective Action Found!</div>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}
Index.layout = (page: any) => <Layout children={page} />;
// userRoles[0]=='Admin'||userRoles[0]=='Super-Admin'
