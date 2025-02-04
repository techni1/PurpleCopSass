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
import { Select, Textarea } from "@headlessui/react";


export default function EditMaster({ show, setShow, master }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        master_key: "",
        master_value: "",
    });

    useEffect(() => {
        if (master) {
            setData({
                master_key: master.master_key || "",
                master_value: master.master_value || "",
            })
        }
    }, [master]);


    const handleClose = () => setShow(false);



    const onSubmit = (e: any) => {
        e.preventDefault();
        patch(route("mastersetting.update", master.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
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

            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Edit Master Setting
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(partner, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Master Setting Details</CardHeader>

                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">


                                        <div className="col-md-12">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Key
                                            </Form.Label>

                                            <Form.Control
                                                id="master_key"
                                                name="master_key"

                                                value={data.master_key}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.master_key ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("master_key", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.master_key}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-12 pt-2">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Value
                                            </Form.Label>
                                            <textarea
                                                id="master_value"
                                                name="master_value"
                                                className={
                                                    "form-control" +
                                                    (errors.master_value ? " is-invalid" : "")
                                                }
                                                required
                                                onChange={(e: any) =>
                                                    setData("master_value", e.target.value)
                                                }
                                                value={data.master_value} // Set value here
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.master_value}
                                            </Form.Control.Feedback>
                                        </div>


                                    </div>
                                </div>

                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">

                                    <Col xl={4} md={12}>
                                        <Button
                                            type="submit"
                                            className="btn btn-primary w-100 btn-block"
                                            disabled={processing}
                                        >
                                            Update
                                        </Button>
                                    </Col>
                                </Row>



                            </Card.Footer>
                        </form>
                    </Card>

                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
}
