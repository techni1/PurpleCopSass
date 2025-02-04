import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Modal, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function AssetCategoryEdit({
  show,
  setShow,
  queryfunction,
  setQueryFunction,
}: any) {
  const { data, setData, patch, processing, errors, reset, recentlySuccessful } = useForm({
    name: queryfunction.name || "",
  });

  useEffect(() => {
    setData({
      name: queryfunction.name,
    });
  }, [queryfunction]);


  const handleClose = () => {
    setQueryFunction([]);
    setShow(false);
  };


  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Query Function Update");
    }
  }, [recentlySuccessful]);


  const onSubmit = (e: any) => {
    e.preventDefault();
    patch(route("qfunctional.update", queryfunction.id), {
      preserveScroll: true,
      onSuccess: () => {

        setShow(false);
        reset();
        handleClose();
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <h5>Edit Function</h5>
        </Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(category, undefined, 2)}</pre> */}
          <form onSubmit={onSubmit}>
            <Form.Label htmlFor="name" className="form-label">
              Function Name <span className="text-danger ms-1">*</span>
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
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
