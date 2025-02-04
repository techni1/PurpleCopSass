import { Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { Badge, Button, Col, Dropdown, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "../../Pages/Widgets/Notification.scss";

type Notification = {
  id: string;
  type: string;
  name: string;
  message: string;
  url: string;
  created_at: string;
  read_at: string | null;
};

const NotificationDropdown = () => {
  const { notifications } = usePage().props;
  const { post } = useForm();

  const handleMarkAsRead = (id: string) => {
    post(`/notifications/mark-as-read/${id}`, {
      preserveScroll: true,
    });
  };
  // Handle notification click and mark as read
  const handleClick = (notification: any) => {
    handleMarkAsRead(notification.id);
    router.visit(notification.url);
  };
  return (
    <React.Fragment>
      <Dropdown>
        <Dropdown.Toggle
          type="button"
          as="button"
          className="arrow-none btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
        >
          <i className="bx bx-bell fs-22"></i>
          {
            //@ts-ignore
            notifications.data.length > 0 && (
              <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                {
                  //@ts-ignore
                  notifications.data.length
                }
                <span className="visually-hidden">unread messages</span>
              </span>
            )
          }
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3 bg-primary bg-pattern rounded-top">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0 fs-16 fw-semibold text-white">
                  {" "}
                  Notifications{" "}
                </h6>
              </Col>
              <div className="col-auto dropdown-tabs">
                <span className="badge bg-light-subtle fs-13 text-body">
                  {" "}
                  {
                    //@ts-ignore
                    notifications.data.length
                  }{" "}
                  New
                </span>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
            {
              //@ts-ignore
              notifications.data.map(
                (notification: Notification, key: number) => (
                  <div key={key} className="single_notification">
                    <div className="dd_notification_row">
                      <div className="notification_content">
                        <div>
                          <span>
                            <i className="bx bxs-bell notificaation_icon text-primary"></i>
                          </span>
                        </div>
                        <Button
                          onClick={() => handleClick(notification)} // Mark as read on click
                          variant="link"
                          className="text-black text-start p-0"
                        >
                          <div className="notification_headline">
                            <span
                              className=" text-danger text-capitalize "
                              style={{ fontSize: "13px" }}
                            >
                              {notification.name}
                            </span>
                            <p
                              className="text-primary"
                              style={{ fontSize: "12px" }}
                            >
                              {notification.message}
                            </p>
                          </div>
                        </Button>
                      </div>
                      <div>
                        <div className=" fs-15">
                          <div className="form-check notification-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={!!notification.read_at}
                              onChange={() => handleMarkAsRead(notification.id)}
                              id={`notification-check-${key}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`notification-check-${key}`}
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dd_notification_date">
                      <span>{notification.created_at}</span>
                      {/* <Badge bg="primary"> {notification.type} </Badge> */}
                      <span className="badge bg-primary-subtle text-primary">
                        {notification.type}
                      </span>
                    </div>
                  </div>
                )
              )
            }
            {/* <div className="my-3 text-center">
              <Button className="btn btn-soft-primary waves-effect waves-light">
                View All Messages{" "}
                <i className="ri-arrow-right-line align-middle"></i>
              </Button>
            </div> */}
          </SimpleBar>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

export default NotificationDropdown;
