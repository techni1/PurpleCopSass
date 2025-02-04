import React, { useState, useEffect } from "react";
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
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function Editoffers({ show, setShow, offer }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: "",
        percentage: "",
        offer_startdate: "",
        offer_enddate: "",
        offer_status: "",
    });

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (offer) {
            setData({
                name: offer.name || "",
                percentage: offer.percentage || "",
                offer_startdate: offer.offer_startdate || "",
                offer_enddate: offer.offer_enddate || "",
                offer_status: offer.offer_status || "",
                offer_id: offer.id,
            });
        }
    }, [offer]);

    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        patch(route("offers.update", offer.id), {
            data,
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
                setShowToast(true);  // Show toast message
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
                size="lg"
            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Edit Offer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <CardHeader>Offers Details</CardHeader>
                        <form onSubmit={onSubmit}>
                            <Card.Body>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
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
                                            <Form.Label
                                                htmlFor="percentage"
                                                className="form-label"
                                            >
                                                Percentage(%)
                                            </Form.Label>
                                            <Form.Control
                                                id="percentage"
                                                name="percentage"
                                                value={data.percentage}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.percentage ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("percentage", e.target.value)}
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
                                                value={data.offer_startdate}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.offer_startdate ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("offer_startdate", e.target.value)}
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
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.offer_enddate ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("offer_enddate", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.offer_enddate}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="offer_enddate"
                                                className="form-label"
                                            >
                                                Status
                                            </Form.Label>
                                           
                                           <select className="form-select form-control" name="offer_status" value={data.offer_status} onChange={(e: any) => setData("offer_status", e.target.value)} required>
                                            <option value=""></option>
                                            <option value="1">On</option>
                                            <option value="0">Off</option>
                                            </select>
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
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Offer updated successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </React.Fragment>
    );
}
