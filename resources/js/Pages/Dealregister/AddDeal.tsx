import React, { useEffect, useRef, useState } from "react";
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
import { Link, useForm } from "@inertiajs/react";
import { Select, Textarea } from "@headlessui/react";

export default function AddDeal({ show, setShow }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    deal_name: "",
    contact_person: "",
    contact_number: "",
    contact_email: "None",
    expiry_date: "",
    deal_value: "",
    deal_status: "",
    deal_description: "",
    deal_source: "",
  });

  const handleClose = () => setShow(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("dealregister.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setShow(false);
        // Show toast message
        if (window && "toast" in window) {
          // If you use a global toast function
          // @ts-ignore
          window.toast("Deal register successfully");
        } else if (window && "alert" in window) {
          // fallback to alert if no toast
          alert("Deal register successfully");
        }
      },
    });
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        placement="start"
        id="ModalTop"
        size="lg"
      >
        <Modal.Header className="border-bottom" closeButton>
          <Modal.Title id="ModalExampleLabel">Add Deal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <form onSubmit={onSubmit}>
              <Card.Body>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="dealName" className="form-label">
                          Deal Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dealName"
                          placeholder="Enter Deal Name"
                          onChange={(e) => setData("deal_name", e.target.value)}
                          value={data.deal_name}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="contact_person" className="form-label">
                          Contact Person <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact_person"
                          placeholder="Enter Contact Name"
                          onChange={(e) =>
                            setData("contact_person", e.target.value)
                          }
                          value={data.contact_person}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="contact_number" className="form-label">
                          Contact Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact_number"
                          placeholder="Enter Contact Number"
                          onChange={(e) =>
                            setData("contact_number", e.target.value)
                          }
                          value={data.contact_number}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="contact_email" className="form-label">
                          Contact Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact_email"
                          placeholder="Enter Contact Email"
                          onChange={(e) =>
                            setData("contact_email", e.target.value)
                          }
                          value={data.contact_email}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="expiry_date" className="form-label">
                          Deal Expiry Date{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="expiry_date"
                          placeholder="Enter Expiry Date"
                          onChange={(e) =>
                            setData("expiry_date", e.target.value)
                          }
                          value={data.expiry_date}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="deal_value" className="form-label">
                          Deal Value
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="deal_value"
                          placeholder="Enter Deal Value"
                          onChange={(e) =>
                            setData("deal_value", e.target.value)
                          }
                          value={data.deal_value}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="dealName" className="form-label">
                          Deal Status
                        </label>
                        <select
                          className="form-control form-select"
                          onChange={(e) =>
                            setData("deal_status", e.target.value)
                          }
                          value={data.deal_status}
                        >
                          <option></option>
                          <option value="open">Open</option>
                          <option value="won">Won</option>
                          <option value="lost">lost</option>
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <label htmlFor="deal_source" className="form-label">
                          Deal Source
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="deal_source"
                          placeholder="Enter Deal Source"
                          onChange={(e) =>
                            setData("deal_source", e.target.value)
                          }
                          value={data.deal_source}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <label
                          htmlFor="deal_description"
                          className="form-label"
                        >
                          Deal Description
                        </label>
                        <textarea
                          className="form-control"
                          id="deal_description"
                          onChange={(e) =>
                            setData("deal_description", e.target.value)
                          }
                        >
                          {data.deal_description}
                        </textarea>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
              <Card.Footer className="text-end">
                <Row className="justify-content-md-center">
                  <Col xl={2} md={6}>
                    <Button
                      variant="light"
                      className="btn btn-light w-100"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Col>
                  <Col xl={2} md={6}>
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
