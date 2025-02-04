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



export default function ConvertBilling({ show, setShow, billing }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        reason_for_calcellation: "",
        reson_notes: "",
        invoiceid: "",

    });

    useEffect(() => {
        if (billing) {
            setData({
                reason_for_calcellation: billing?.reason_for_calcellation || "",
                reson_notes: billing?.reson_notes || "",
                invoiceid: billing?.id || "",
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
                        Convert into Billing
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
                                                <li>PO Number :- {billing?.ponumber}</li>
                                                <li>Billing Amount:-<strong> {billing?.billingAmount} </strong> </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="row">

                                               
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
