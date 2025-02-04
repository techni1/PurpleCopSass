import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Offcanvas,
  Row,
  Button,
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Assign({ show, setShow, topicId, users }: any) {
  const { processing, errors, reset } = useForm({
    name: "",
  });
  const [disableCheckedBox, setDisableCheckedBox] = useState(false);
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    if (topicId) {
      axios
        .get(route("topicassignuser", { id: topicId }))
        .then((response) => {
          setUserData(response.data); // Assuming response data includes `assigned` status for each user
        })
        .catch((error) => {
          console.error("Failed to fetch user details", error);
        });
    }
  }, [topicId]);

  const handleCheckboxChange = async (userId: number, isChecked: boolean) => {
    setDisableCheckedBox(true);
    // Update the local state to immediately reflect the checkbox status
    setUserData((prevData) =>
      prevData.map((user) =>
        user.id === userId ? { ...user, assigned: isChecked } : user
      )
    );

    // Perform the backend request to assign or unassign the user
    if (isChecked) {
      await axios
        .post(route("assignTopic"), {
          topic_id: topicId,
          user_id: userId,
        })
        .then(() => {
          console.log("User assigned successfully");
          toast("User assigned successfully");
        })
        .catch((error) => {
          console.error("Failed to assign user", error);
        });
      setDisableCheckedBox(false);
    } else {
      await axios
        .post(route("unassignTopic"), {
          topic_id: topicId,
          user_id: userId,
        })
        .then(() => {
          toast("User unassigned successfully");
          console.log("User unassigned successfully");
        })
        .catch((error) => {
          console.error("Failed to unassign user", error);
        });
      setDisableCheckedBox(false);
    }
  };
  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      {/* Toast Container to display notifications */}
      <ToastContainer />

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        id="offcanvasTop"
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            Assign Topic:
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ToastContainer />
          <Card>
            <CardHeader>User Assignment</CardHeader>
            <form>
              <Card.Body>
                {/* <pre>{JSON.stringify(userData, undefined, 2)}</pre> */}
                {userData.map((user: any) => (
                  <Col md={12} className="pt-2" key={user.id}>
                    {" "}
                    {/* Ensure a unique key for each user */}
                    <Row>
                      <Col md={8}>{user.name}</Col>
                      <Col md={4}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value={user.id}
                          checked={user.assigned}
                          disabled={disableCheckedBox}
                          onChange={(e) =>
                            handleCheckboxChange(user.id, e.target.checked)
                          }
                        />
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Card.Body>
              <Card.Footer>
                <Row className="justify-content-md-center">
                  <Col xl={2} md={6}>
                    {/* Optional Footer Content */}
                  </Col>
                </Row>
              </Card.Footer>
            </form>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
