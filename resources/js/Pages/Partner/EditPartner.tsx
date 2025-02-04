import React, { useState } from "react";
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


export default function EditPartner({ show, setShow, partner, pcategory }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: partner.name || "",
        email: partner.email || "",
        phone: partner.phone || "",
        pancard: partner.pancard || "",
        legalname: partner.legalname || "",
        category_id: partner.category_id || "",
        partners_status: partner.partners_status || "",
        second_contactno: partner.second_contactno || "",
        account_number: partner.account_number || "",
        bank_name: partner.bank_name || "",
        address: partner.address || "",
        ifsc_code: partner.ifsc_code || "",
        commission_rate: partner.commission_rate || ""
    });


    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        patch(route("partner.update", partner.id), {
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
                        Edit Partner
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(partner, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Partner Details</CardHeader>

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
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Email
                                            </Form.Label>

                                            <Form.Control
                                                id="email"
                                                name="email"
                                                value={data.email}
                                                autoFocus
                                                className="form-control"

                                                readOnly
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="phone"
                                                className="form-label"
                                            >
                                                Primary Phone No
                                            </Form.Label>

                                            <Form.Control
                                                id="phone"
                                                name="phone"

                                                value={data.phone}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.phone ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("phone", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="second_contactno"
                                                className="form-label"
                                            >
                                                Secondry Phone No
                                            </Form.Label>

                                            <Form.Control
                                                id="second_contactno"
                                                name="second_contactno"

                                                value={data.second_contactno}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.second_contactno ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("second_contactno", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.second_contactno}
                                            </Form.Control.Feedback>
                                        </div>




                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="pancard"
                                                className="form-label"
                                            >
                                                Pan Card
                                            </Form.Label>

                                            <Form.Control
                                                id="pancard"
                                                name="pancard"
                                                value={data.pancard}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.pancard ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("pancard", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.pancard}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="legalname"
                                                className="form-label"
                                            >
                                                Legal Name
                                            </Form.Label>

                                            <Form.Control
                                                id="legalname"
                                                name="legalname"
                                                value={data.legalname}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.legalname ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("legalname", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.legalname}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="legalname"
                                                className="form-label"
                                            >
                                                Category
                                            </Form.Label>

                                            <Form.Select
                                                className={
                                                    "form-control form-select" + (errors.category_id ? " is-invalid" : "")
                                                }
                                                value={data.category_id}
                                                onChange={(e: any) => setData("category_id", e.target.value)}
                                                required

                                            >
                                                <option value="">Select Category</option>
                                                {pcategory.map((pc: any) => (
                                                    <option key={pc.id} value={pc.id}>
                                                        {pc.name}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.category_id}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="partners_status"
                                                className="form-label"
                                            >
                                                Partners Status

                                            </Form.Label>
                                            <select
                                                id="partners_status"
                                                name="partners_status"
                                                value={data.partners_status}
                                                className={
                                                    "form-control form-select" + (errors.partners_status ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("partners_status", e.target.value)}
                                                required
                                            >
                                                <option></option>
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>


                                            </select>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="address"
                                                className="form-label"

                                            >
                                                Address

                                            </Form.Label>
                                            <Textarea className="form-control"
                                                name="address"
                                                onChange={(e: any) => setData("address", e.target.value)}
                                            >{data.address}</Textarea>
                                        </div>


                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="account_number"
                                                className="form-label"
                                            >
                                                Account Number
                                            </Form.Label>

                                            <Form.Control
                                                id="account_number"
                                                name="account_number"
                                                value={data.account_number}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.account_number ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("account_number", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.account_number}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6 pt-2">
                                            <Form.Label
                                                htmlFor="bank_name"
                                                className="form-label"
                                            >
                                                Bank Number
                                            </Form.Label>

                                            <Form.Control
                                                id="bank_name"
                                                name="bank_name"
                                                value={data.bank_name}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.bank_name ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_name", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.bank_name}
                                            </Form.Control.Feedback>
                                        </div>


                                        <div className="col-md-6 pt-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Label
                                                        htmlFor="ifsc_code"
                                                        className="form-label"
                                                    >
                                                        IFSC Code
                                                    </Form.Label>

                                                    <Form.Control
                                                        id="ifsc_code"
                                                        name="ifsc_code"
                                                        value={data.ifsc_code}
                                                        autoFocus
                                                        className={
                                                            "form-control" + (errors.ifsc_code ? " is-invalid" : "")
                                                        }
                                                        onChange={(e: any) => setData("ifsc_code", e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.ifsc_code}
                                                    </Form.Control.Feedback>
                                                </div>
                                                <div className="col-md-6">

                                                    <Form.Label
                                                        htmlFor="commission_rate"
                                                        className="form-label"
                                                    >
                                                        Commission Rate (%)
                                                    </Form.Label>

                                                    <Form.Control
                                                        id="commission_rate"
                                                        name="commission_rate"
                                                        value={data.commission_rate}
                                                        autoFocus
                                                        className={
                                                            "form-control" + (errors.commission_rate ? " is-invalid" : "")
                                                        }
                                                        onChange={(e: any) => setData("commission_rate", e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.commission_rate}
                                                    </Form.Control.Feedback>

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
                                            Update
                                        </Button>
                                    </Col>
                                </Row>



                            </Card.Footer>
                        </form>
                    </Card>

                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment >
    );
}
