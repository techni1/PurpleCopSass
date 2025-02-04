import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,

    Row,
    Form,
    Button,
    Offcanvas
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function AddFrameworkPrice({ show, setShow, currency }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        items: [{ currencyId: "", price: "" }], // Initialize with one row
    });

    const handleClose = () => setShow(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("framworkprice.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // Reset form fields
                handleClose(); // Close the Offcanvas
            },
        });
    };

    const addNewRow = () => {
        setData("items", [...data.items, { currencyId: "", price: "" }]);
    };

    const removeRow = (index: number) => {
        const updatedItems = data.items.filter((_, idx) => idx !== index);
        setData("items", updatedItems);
    };

    const handleItemChange = (index: number, field: string, value: string) => {
        const updatedItems = [...data.items];
        updatedItems[index][field] = value;
        setData("items", updatedItems);
    };

    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={handleClose} id="OffcanvasTop">
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title>Add New Framework Price</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card>
                        <CardHeader>Currency Details</CardHeader>
                        <form onSubmit={onSubmit}>
                            <Card.Body>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12 pt-2">
                                            <Form.Label htmlFor="name" className="form-label">
                                                Framework
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
                                        {data.items.map((item, index) => (
                                            <div key={index} className="row pt-3">
                                                <div className="col-md-5">
                                                    <Form.Label className="form-label">Currency</Form.Label>
                                                    <Form.Select
                                                        className="form-control form-select"
                                                        value={item.currencyId}
                                                        onChange={(e) =>
                                                            handleItemChange(index, "currencyId", e.target.value)
                                                        }
                                                    >
                                                        <option value="">Select Currency</option>
                                                        {currency.map((curr: any) => (
                                                            <option key={curr.id} value={curr.id}>
                                                                {curr.name}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </div>
                                                <div className="col-md-5">
                                                    <Form.Label className="form-label">Price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        className="form-control"
                                                        value={item.price}
                                                        onChange={(e) =>
                                                            handleItemChange(index, "price", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-md-2 d-flex align-items-end">
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => removeRow(index)}
                                                        disabled={data.items.length === 1} // Prevent removal if only one row
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        className="mt-3"
                                        variant="secondary"
                                        onClick={addNewRow}
                                    >
                                        Add New Row
                                    </Button>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">
                                    <Col md={12}>
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
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
}
