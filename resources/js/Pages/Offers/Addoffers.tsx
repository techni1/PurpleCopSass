import React, { useState } from "react";
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

export default function Addoffers({ show, setShow }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    percentage: "",
    offer_startdate: "",
    offer_enddate: "",
    offer_status: "",
  });

  const handleClose = () => setShow(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("offers.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset(); // Reset form fields
        handleClose(); // Close the Modal
      },
    });
    console.log(data);
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        placement="start"
        id="ModalTop"
        size="xl"
      >
        <Modal.Header className="border-bottom" closeButton>
          <Modal.Title id="ModalExampleLabel">Add New Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
          <Card>
            <CardHeader>Offers Details</CardHeader>

            <form onSubmit={onSubmit}>
              <Card.Body>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 pt-2">
                      <Form.Label htmlFor="name" className="form-label">
                        Name
                      </Form.Label>

                      <Form.Control
                        id="name"
                        name="name"
                        value={data.name}
                        autoFocus
                        className={
                          "form-control" + (errors.name ? " is-invalid" : "")
                        }
                        onChange={(e: any) => setData("name", e.target.value)}
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.name}
                      </Form.Control.Feedback>
                    </div>
                    <div className="col-md-6 pt-2">
                      <Form.Label htmlFor="short_desc" className="form-label">
                        Percentage(%)
                      </Form.Label>
                      <Form.Control
                        id="percentage"
                        name="percentage"
                        value={data.percentage}
                        autoFocus
                        className={
                          "form-control" +
                          (errors.percentage ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("percentage", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.percentage}
                      </Form.Control.Feedback>
                    </div>

                    <div className="col-md-6 pt-2">
                      <Form.Label
                        htmlFor="offer_startdate"
                        className="form-label"
                      >
                        Offer Start Date
                      </Form.Label>
                      <Form.Control
                        id="offer_startdate"
                        type="date"
                        name="offer_startdate"
                        min={new Date().toISOString().split("T")[0]} // Set minimum date to today
                        value={data.offer_startdate}
                        autoFocus
                        className={
                          "form-control" +
                          (errors.offer_startdate ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("offer_startdate", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.offer_startdate}
                      </Form.Control.Feedback>
                    </div>
                    <div className="col-md-6 pt-2">
                      <Form.Label
                        htmlFor="offer_enddate"
                        className="form-label"
                      >
                        Offer End Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="offer_enddate"
                        name="offer_enddate"
                        value={data.offer_enddate}
                        min={
                          data.offer_enddate ||
                          new Date().toISOString().split("T")[0]
                        } // Set minimum date to offer_startdate or today
                        autoFocus
                        className={
                          "form-control" +
                          (errors.offer_enddate ? " is-invalid" : "")
                        }
                        onChange={(e: any) =>
                          setData("offer_enddate", e.target.value)
                        }
                        required
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="mt-2 d-block"
                      >
                        {errors.offer_enddate}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <Row className="justify-content-md-center">
                  <Col xl={2} md={12}>
                    <Button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={processing}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </form>
          </Card>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
