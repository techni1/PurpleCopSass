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
import { useForm, Link } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Threats({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: "",
        threatsvalue: "",
        status: "",
        valnerability: "",

    });



    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("threatsstoreapi"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
            },
        });
    };


    useEffect(() => {
        if (recentlySuccessful) {
            toast.success("Risk Threats Added");
        }
    }, [recentlySuccessful]);

    return (
        <React.Fragment>
            {/* Toast container to display notifications */}
            <ToastContainer />
            <Modal
                show={show}
                onHide={handleClose}
                placement="center"
                id="ModalTop"
                size="lg"


            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Add Risk Threats
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>

                        <form onSubmit={onSubmit}>
                            <Row className="p-4">
                                <Col xl={12}>
                                    <Form.Label htmlFor="name" className="form-label">
                                        Name <span className="text-danger ms-1">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        id="name"
                                        name="name"
                                        placeholder="Enter Name"
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
                                </Col>



                                <Col md={12}>
                                    <Row>
                                        <Col>
                                            <Form.Label
                                                htmlFor="valnerability"
                                                className="form-label"
                                            >
                                                Vulnerability{" "}
                                                <span className="text-danger ms-1">*</span>
                                            </Form.Label>
                                            <textarea
                                                className="form-control"
                                                id="valnerability"
                                                name="valnerability"
                                                onChange={(e: any) =>
                                                    setData("valnerability", e.target.value)
                                                }
                                                required
                                            ></textarea>

                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.valnerability}
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Row>
                                </Col>


                                <Col xl={6}>
                                    <Form.Label htmlFor="tvalue" className="form-label">
                                        Value <span className="text-danger ms-1">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        id="tvalue"
                                        name="threatsvalue"
                                        placeholder="Enter Value"
                                        value={data.threatsvalue}
                                        autoFocus
                                        className={
                                            "form-control" +
                                            (errors.threatsvalue ? " is-invalid" : "")
                                        }
                                        onChange={(e: any) =>
                                            setData("threatsvalue", e.target.value)
                                        }
                                        required
                                    />
                                    <Form.Control.Feedback
                                        type="invalid"
                                        className="mt-2 d-block"
                                    >
                                        {errors.threatsvalue}
                                    </Form.Control.Feedback>
                                </Col>

                                <Col xl={6}>
                                    <Form.Label htmlFor="status" className="form-label">
                                        Status <span className="text-danger ms-1">*</span>
                                    </Form.Label>
                                    <select
                                        className="form-control form-select"
                                        onChange={(e: any) =>
                                            setData("status", e.target.value)
                                        }
                                        required
                                    >
                                        <option></option>
                                        <option value="on">On</option>
                                        <option value="off">Off</option>
                                    </select>

                                    <Form.Control.Feedback
                                        type="invalid"
                                        className="mt-2 d-block"
                                    >
                                        {errors.status}
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Row className="justify-content-md-center pb-3">
                                <Col xl={2} md={6}>
                                    <Link
                                        href={route("assetcategory.index")}
                                        className="btn btn-light w-100"
                                    >
                                        Cancel
                                    </Link>
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
                        </form>
                    </Card>

                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
