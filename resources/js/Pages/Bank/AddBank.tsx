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
import { Textarea } from "@headlessui/react";


export default function AddBank({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        bank_name: "",
        bank_accountname: "",
        bank_accountno: "",
        bank_ifsccode: "",
        bank_swiftcode: "",
        notes: ""

    });

    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);




    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("bankdetails.store"), {
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
                        New Bank
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(packagedata, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Details</CardHeader>

                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">

                                        <div className="col-md-12">
                                            <Form.Label htmlFor="bank_accountname" className="form-label">
                                                Bank Account Name
                                            </Form.Label>
                                            <Form.Control
                                                id="master_key"
                                                name="invoce_no"
                                                value={data.bank_accountname}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.bank_accountname ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_accountname", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.bank_accountname}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="bank_name" className="form-label">
                                                Bank Name
                                            </Form.Label>
                                            <Form.Control
                                                id="master_key"
                                                name="invoce_no"
                                                value={data.bank_name}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.bank_name ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_name", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.bank_name}
                                            </Form.Control.Feedback>
                                        </div>



                                        <div className="col-md-6">
                                            <Form.Label htmlFor="bank_accountno" className="form-label">
                                                Account No.
                                            </Form.Label>
                                            <Form.Control
                                                id="bank_accountno"
                                                name="bank_accountno"
                                                value={data.bank_accountno}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.bank_accountno ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_accountno", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.bank_accountno}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6">
                                            <Form.Label htmlFor="bank_ifsccode" className="form-label">
                                                IFSC Code
                                            </Form.Label>
                                            <Form.Control
                                                id="bank_ifsccode"
                                                name="bank_ifsccode"
                                                value={data.bank_ifsccode}
                                                className={
                                                    "form-control" + (errors.bank_ifsccode ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_ifsccode", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.bank_ifsccode}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="bank_swiftcode" className="form-label">
                                                SWIFT Code
                                            </Form.Label>
                                            <Form.Control
                                                id="bank_swiftcode"
                                                name="bank_swiftcode"
                                                value={data.bank_swiftcode}
                                                className={
                                                    "form-control" + (errors.bank_swiftcode ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_swiftcode", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.bank_swiftcode}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-12">
                                            <Form.Label htmlFor="notes" className="form-label">
                                                Notes
                                            </Form.Label>
                                            <Textarea
                                                id="notes"
                                                className="form-control"
                                                onChange={(e: any) => setData("notes", e.target.value)}
                                            ></Textarea>
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

                </Modal.Body >
            </Modal >
        </React.Fragment >
    );
}
