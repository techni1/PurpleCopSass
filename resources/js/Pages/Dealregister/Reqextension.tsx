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
import { useForm } from "@inertiajs/react";
import { Select, Textarea } from "@headlessui/react";

export default function Reqextension({
  showprint,
  setShowprint,
  dealregister,
}: any) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    extension_reason: "",
    extension_date: "",
  });
  const handleClose = () => setShowprint(false);

  return (
    <React.Fragment>
      <Modal
        show={showprint}
        onHide={handleClose}
        placement="start"
        id="ModalTop"
        size="lg"
      >
        <Modal.Header className="border-bottom" closeButton>
          <Modal.Title id="ModalExampleLabel">
            Request For Extension
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(dealregister, undefined, 2)}</pre> */}

          <Card>
            <form>
              <Card.Body>
                <Col md={12}>
                  <Row>
                    <Col md={12}>
                      <div className="mb-3">
                        <label
                          htmlFor="deal_description"
                          className="form-label"
                        >
                          Reason for Request
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) =>
                            setData("extension_reason", e.target.value)
                          }
                        ></textarea>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="extension_date" className="form-label">
                          Deal Expiry Date{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="extension_date"
                          placeholder="Extensionl Date"
                          onChange={(e) =>
                            setData("extension_date", e.target.value)
                          }
                          value={data.extension_date}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary"
                  onClick={async (e) => {
                    e.preventDefault();
                    patch(route("dealregister.extension", dealregister.id), {
                      onSuccess: () => {
                        alert("Extension request submitted successfully.");
                        handleClose();
                      },
                    });
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="light"
                  className="btn btn-light ms-2"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Card.Footer>
            </form>
          </Card>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
