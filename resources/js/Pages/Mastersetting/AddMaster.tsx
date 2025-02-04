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
import { Select, Textarea } from "@headlessui/react";


export default function AddMaster({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        master_key: "",
        master_value: "",

    });


    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("mastersetting.store"), {
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
                size="lg"

            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Add New Setting
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Details</CardHeader>

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
                                                    "form-control" + (errors.master_value ? " is-invalid" : "")
                                                }
                                                required
                                                onChange={(e: any) => setData("master_value", e.target.value)}
                                            >{data.master_value}</textarea>

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
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>



                            </Card.Footer>
                        </form>
                    </Card>

                </Modal.Body>
            </Modal >
        </React.Fragment >
    );
}
