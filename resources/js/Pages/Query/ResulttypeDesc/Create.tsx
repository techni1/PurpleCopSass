import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Modal, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function AssetCategoryCreate({ show, setShow }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("category.store"), {
      preserveScroll: true,
      onSuccess: () => {
        toprightnotify();
        setShow(false);
        reset();
      },
    });
  };
  const toprightnotify = () =>
    toast("Category is created", {
      position: "top-right",
      hideProgressBar: true,
      className: "bg-success text-white",
    });
  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header>
          <h5>Create New Category</h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Label htmlFor="name" className="form-label">
              Category Name <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              id="name"
              name="name"
              placeholder="Enter Name"
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
