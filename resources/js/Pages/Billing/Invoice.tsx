import React, { useEffect, useRef, useState } from "react";
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



export default function Invoice({ showprint, setShowprint, billing }: any) {

    const printRef = useRef<HTMLDivElement>(null);




    const handleClose = () => setShowprint(false);



    const handlePrint = () => {
        if (printRef.current) {
            const printContents = printRef.current.innerHTML;
            const printWindow = window.open("", "_blank");
            if (printWindow) {
                printWindow.document.open();
                printWindow.document.write(`
                    <html>
                    <head>
                        <title>Invoice Print</title>
                        <style>
                            body { font-family: Arial, sans-serif; margin: 20px; }
                            .no-print { display: none !important; }
                        </style>
                    </head>
                    <body>
                        ${printContents}
                    </body>
                    </html>
                `);
                printWindow.document.close();
                printWindow.print();
            }
        }
    };


    return (
        <React.Fragment>
            <Offcanvas
                show={showprint}
                onHide={handleClose}
                placement="start"
                id="OffcanvasTop"
            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="OffcanvasExampleLabel">
                        Invoice
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(billing, undefined, 2)}</pre> */}
                    <div ref={printRef}>
                        <Card>
                            <CardHeader align="center">INVOICE <hr /></CardHeader>
                            <Card.Body>
                                <div className="col-md-12">

                                    <table>
                                        <tr>
                                            <td>
                                                <p><img src="https://purplecop.com/wp-content/uploads/2024/10/36-purple-cop.png" width="40%" /></p>
                                                <p>
                                                    PurpleCop Security Private Limited<br />
                                                    B-57, JHANG SOCIETY CGHS, ROHINI SECTOR 13,<br />
                                                    NEW DELHI, 110085, INDIA<br />
                                                    GSTIN -07AAHCT7251J1Z0
                                                </p>

                                            </td>
                                            <td>
                                                <p >&nbsp;</p>
                                                <p >&nbsp;</p>
                                                <p >&nbsp;</p>
                                                <p>Invoice no 2425/T/D/004</p>
                                                <p>Invoice Date - 2025-05-21</p>
                                                <p>Po Number - 45454</p>
                                                <p>Payment Terms- </p>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <h3>Billing To:</h3>
                                                <p>{billing.organization_id?.legal_name}<br />
                                                    {billing.organization_id?.name}<br />
                                                    {billing.organization_id?.contact_us}<br />
                                                    {billing.organization_id?.address}</p>
                                            </td>
                                            <td>
                                                <h3>Shipping To:</h3>
                                                <p>{billing.organization_id?.legal_name}<br />
                                                    {billing.organization_id?.name}<br />
                                                    {billing.organization_id?.contact_us}<br />
                                                    {billing.organization_id?.address}</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>GSTIN -<br />
                                                Email-</td>
                                            <td>GSTIN -<br />
                                                Email-</td>
                                        </tr>

                                    </table>
                                    <div className="row">


                                        <div className="col-md-12">
                                            <p>&nbsp;</p>

                                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                                <thead>
                                                    <tr>
                                                        <th width="10%">Sn.</th>
                                                        <th width="40%">Description</th>
                                                        <th width="10%">Quantity</th>
                                                        <th width="15%">Price/Unit</th>
                                                        <th width="15%">Amount</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {billing.item_desc?.map((item, index) => (
                                                        <tr key={index} align="center">
                                                            <td>{index + 1}</td>
                                                            <td>{item.framwork}</td>
                                                            <td>{item.qty}</td>
                                                            <td>{item.unitPrice}</td>
                                                            <td>{item.singleAmt}</td>
                                                        </tr>
                                                    )) || (
                                                            <tr>
                                                                <td colSpan={4}>No data available</td>
                                                            </tr>
                                                        )}
                                                </tbody>


                                            </table>
                                            <p>&nbsp;</p>

                                            <table style={{ width: "90%", borderCollapse: "collapse" }}>
                                                <tr>
                                                    <td style={{ width: "50%" }}>&nbsp;</td>
                                                    <td style={{ width: "50%" }}>
                                                        <tr>
                                                            <td> <strong>Gross Total</strong></td>
                                                            <td>{billing?.subtotal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td> <strong>Discount(%)</strong></td>
                                                            <td>{billing.offer_id?.percentage}</td>
                                                        </tr>

                                                        <tr>
                                                            <td> <strong>Total Tax </strong></td>
                                                            <td>{billing?.taxable_total}</td>
                                                        </tr>
                                                        <tr>
                                                            <td> <strong>Payable Amount </strong></td>
                                                            <td>{billing?.billingAmount}</td>
                                                        </tr>

                                                    </td>
                                                </tr>
                                            </table>

                                            <p>&nbsp;</p>
                                            <table style={{ width: "90%", borderCollapse: "collapse" }}>
                                                <tr>

                                                    <td align="left">
                                                        <tr>
                                                            <td><h5>Bank Details</h5></td>

                                                        </tr>
                                                        <tr>
                                                            <td> <strong>Bank Name</strong></td>
                                                            <td>{billing.bank_deatils?.bank_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td> <strong>Account Name</strong></td>
                                                            <td>{billing.bank_deatils?.bank_accountname}</td>
                                                        </tr>
                                                        <tr>
                                                            <td> <strong>Account No</strong></td>
                                                            <td>{billing.bank_deatils?.bank_accountno}</td>
                                                        </tr>

                                                        <tr>
                                                            <td> <strong>Bank SWIFT Code</strong></td>
                                                            <td>{billing.bank_deatils?.bank_swiftcode}</td>
                                                        </tr>

                                                        <tr>
                                                            <td> <strong>Bank IFSC Code</strong></td>
                                                            <td>{billing.bank_deatils?.bank_ifsccode}</td>
                                                        </tr>



                                                    </td>
                                                </tr>
                                                <td>&nbsp;</td>
                                            </table>


                                        </div>


                                    </div>
                                </div>

                            </Card.Body>

                        </Card>

                    </div>

                    <div className="mt-3 no-print">
                        <Row className="justify-content-md-center">
                            <Col xl={4} md={12}>
                                <Button
                                    onClick={handlePrint}
                                    className="btn btn-primary w-100 btn-block"
                                >
                                    Print
                                </Button>
                            </Col>
                        </Row>
                    </div>

                </Offcanvas.Body >
            </Offcanvas >
        </React.Fragment >
    );
}
