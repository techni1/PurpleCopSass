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



export default function AddCurrency({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        symbol: "",


    });


    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("currency.store"), {
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
                        Add New Currency
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Currency Details</CardHeader>

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
                                                htmlFor="short_desc"
                                                className="form-label"
                                            >
                                                Symbol
                                            </Form.Label>
                                            <Form.Control
                                                id="symbol"
                                                name="symbol"

                                                value={data.symbol}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.symbol ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("symbol", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.symbol}
                                            </Form.Control.Feedback>


                                        </div>





                                    </div>
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

                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
}
