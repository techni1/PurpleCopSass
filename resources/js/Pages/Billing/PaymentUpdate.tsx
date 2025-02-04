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
import axios from "axios";
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS


export default function PaymentUpdate({ showpayment, setShowPayment, billing }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        payment_status: billing.payment_status || "", // Initialize with existing payment status
        id: billing.id,
    });


    

    const handleClose = () => setShowPayment(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);

   
    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("billing.paymentstatus"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
                toast.success('Payment status updated successfully', {
                    autoClose: 5000, // Set duration to 5 seconds
                }); // Show success toast
            },

        });
        console.log(data);

    };

    return (
        <React.Fragment>
            <Modal
                show={showpayment}
                onHide={handleClose}
               
                id="ModalTop"
                
            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Billing Update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}


                    <Card>
                 
                        <form onSubmit={onSubmit}>
                            <Card.Body>
                                <input type="hidden" name="id" value={billing.id} />
                                <div className="col-md-12">
                                    <Row>
                                        <Col md={6}>Invoice No :- {billing.invoce_no}</Col>
                                        <Col md={6}>Invoice Due Date :- {billing.invoice_due_date}</Col>
                                        <Col md={6}>Next Billing Date :- {billing.next_billingdate}</Col>
                                        <Col md={6}>Billing Amount :- {billing.billingAmount}</Col>
                                    </Row>
                                    


                                    <div className="row pt-3">
                                        <div className="col-md-12">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                               Payment Update
                                            </Form.Label>

                                            <select 
                                            className="form-select"
                                            onChange={(e) => setData("payment_status", e.target.value)}
                                            value={data.payment_status} 
                                            >
                                                <option></option>
                                                <option value="Paid">Paid</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Cancelled">Cancelled</option>
                                                <option value="Refunded">Refunded</option>
                                               
                                            </select>

                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.payment_status}
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

                </Modal.Body >
            </Modal >
        </React.Fragment >
    );
}
