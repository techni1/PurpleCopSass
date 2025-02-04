import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Offcanvas,
    Row,
    Form,
    Button,
    FormControl,

} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { Select, Textarea } from "@headlessui/react";



export default function CancelBilling({ show, setShow, billing }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        reason_for_calcellation: "",
        reson_notes: "",
        invoiceid: ""

    });

    useEffect(() => {
        if (billing) {
            setData({
                invoiceid: billing?.id || ""
            })
        }
    }, [billing]);



    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);



    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("billing.cancel"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Offcanvas
            },

        });
        console.log(data);

    };

    return (
        <React.Fragment>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start"
                id="OffcanvasTop"


            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="OffcanvasExampleLabel">
                        Cancel Invoice
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Invoice Details</CardHeader>

                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">


                                        <div className="col-md-12">
                                            <ul>
                                                <li>Organization Name :- <strong> {billing?.organization_id.name}</strong></li>
                                                <li>Enity Name :- {billing?.entity_id?.name}</li>
                                                <li>Invoice No :- <strong>{billing?.invoce_no}</strong></li>
                                                <li>Invoice Date :- <strong>{billing?.invoice_date}</strong></li>
                                                <li>Invoice Due Date :- {billing?.invoice_due_date}</li>
                                                <li>PO Number :- {billing?.ponumber}</li>
                                                <li>Billing Amount:-<strong> {billing?.billingAmount} </strong> </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <Form.Label
                                                        htmlFor="name"
                                                        className="form-label"
                                                    >
                                                        Reason For Cancellation
                                                    </Form.Label>

                                                    <select
                                                        className="form-control form-select"
                                                        onChange={(e: any) => setData("reason_for_calcellation", e.target.value)}
                                                        name="reason_for_calcellation"
                                                        required
                                                        value={data.reason_for_calcellation}
                                                    >
                                                        <option value=""></option>
                                                        <option value="Mis Match Data">Mis Match Data</option>
                                                        <option value="Invoice Value Diffrent">Invoice Value Diffrent</option>
                                                        <option value="They changed their mind">They changed their mind</option>
                                                        <option value="Their economic situation has changed">Their economic situation has changed</option>
                                                        <option value="They're dissatisfied with the product or service">They're dissatisfied with the product or service</option>
                                                        <option value="They're dissatisfied with the product or service">They request somethings that wasn't available</option>

                                                    </select>




                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.reason_for_calcellation}
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Label
                                                        htmlFor="name"
                                                        className="form-label"
                                                    >
                                                        Notes
                                                    </Form.Label>
                                                    <Textarea
                                                        id="reson_notes"
                                                        className="form-control"
                                                        value={data.reson_notes}
                                                        onChange={(e: any) => setData("reson_notest", e.target.value)}
                                                    ></Textarea>
                                                </div>
                                            </div>
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

                </Offcanvas.Body >
            </Offcanvas >
        </React.Fragment >
    );
}
