import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  Row,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Vendor({ show, setShow }: any) {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } =
    useForm({
      name: "",
      contactno: "",
      email: "",
      buinessname: "",
    });

  const handleClose = () => setShow(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("vendor.storeapi"), {
      preserveScroll: true,
      onSuccess: () => {
        reset(); // Reset form fields
        handleClose(); // Close the Modal
        toast("Vendor added successfully");
      },
    });
    console.log(data);
  };

  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Location Added");
    }
  }, [recentlySuccessful]);

  return (
    <React.Fragment>
      {/* Toast container to display notifications */}
      <ToastContainer />
      <Modal show={show} onHide={handleClose} placement="center" id="ModalTop">
        <Modal.Header className="border-bottom" closeButton>
          <Modal.Title id="ModalExampleLabel">Add Verdor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <form onSubmit={onSubmit}>
              <Card.Body>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Label htmlFor="name" className="form-label">
                        Vendor
                      </Form.Label>
                      <FormControl
                        id="name"
                        name="name"
                        placeholder="Enter Vendor Name"
                        value={data.name}
                        autoFocus
                        className={
                          "form-control" + (errors.name ? " is-invalid" : "")
                        }
                        onChange={(e: any) => setData("name", e.target.value)}
                        required
                      ></FormControl>
                    </div>

                    <Col xl={12}>
                      <Form.Label htmlFor="name" className="form-label">
                        Business Name{" "}
                        <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="buinessname"
                        name="buinessname"
                        placeholder="Enter business Name"
                        value={data.buinessname}
                        autoFocus
                        className={
                          "form-control" +
                          (errors.buinessname ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("buinessname", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.buinessname}
                      </Form.Control.Feedback>
                    </Col>

                    <Col xl={12}>
                      <Form.Label htmlFor="name" className="form-label">
                        Contact No <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="contactno"
                        name="contactno"
                        placeholder="Enter Contact"
                        value={data.contactno}
                        autoFocus
                        className={
                          "form-control" +
                          (errors.contactno ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("contactno", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.contactno}
                      </Form.Control.Feedback>
                    </Col>

                    <Col xl={12}>
                      <Form.Label htmlFor="name" className="form-label">
                        Email <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        value={data.email}
                        autoFocus
                        className={
                          "form-control" + (errors.email ? " is-invalid" : "")
                        }
                        onChange={(e: any) => setData("email", e.target.value)}
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.email}
                      </Form.Control.Feedback>
                    </Col>
                  </div>
                </div>

                <Row className="justify-content-md-center pt-3">
                  <Col md={6}>
                    <Button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={processing}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </form>
          </Card>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
