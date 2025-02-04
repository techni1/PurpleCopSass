import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Modal, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function AssetCategoryCreate({ show, setShow }: any) {
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    name: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("foucsarea.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setShow(false);
        reset();
      },
    });
  };

  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Foucs Area Added");
    }
  }, [recentlySuccessful]);


  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <h5>Create New Focus Area</h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Label htmlFor="name" className="form-label">
              Focus Area <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              id="name"
              name="name"
              placeholder="Enter Criteria"
              value={data.name}
              autoFocus
              className={"form-control" + (errors.name ? " is-invalid" : "")}
              onChange={(e: any) => setData("name", e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {errors.name}
            </Form.Control.Feedback>

            <Button
              type="submit"
              className="btn btn-primary w-100"
              disabled={processing}
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
