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


export default function AddPartner({ show, setShow, pcategory }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        pancard: "",
        legalname: "",
        category_id: "",
        partners_status: "",
        second_contactno: "",
        account_number: "",
        bank_name: "",
        bank_branch: "",
        bank_address:"",
        ifsc_code: "",
        address: "",
        commission_rate: "",
        logo: null,
        gst_vat_document: "",
        cancel_cheque: "",
        coi_document: "",
        pancard_document: "",
        ibn_number:"",
        swiftcode: "",
        tprm: "",
        msme: "",
        payment_released: "",
        
    });


    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("partner.store"), {
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
                style={{ width: "60%" }}

            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="OffcanvasExampleLabel">
                        Add New Partner
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
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

                                        <div className="col-md-4 pt-2">
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
                                                className={
                                                    "form-control" + (errors.email ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("email", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-4 pt-2">
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

                                        <div className="col-md-4 pt-2">
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




                                        <div className="col-md-4 pt-2">
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
                                        
                                        <div className="col-md-4 pt-2">
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

                                        

                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="address"
                                                className="form-label"
                                            >
                                                Address

                                            </Form.Label>
                                            <Textarea
                                                className="form-control"
                                                name="address"
                                                onChange={(e: any) => setData("address", e.target.value)}
                                            ></Textarea>
                                        </div>
                                        
                                                <div className="col-md-4 pt-2">
                                                        <Form.Label
                                                            htmlFor="logo"
                                                            className="form-label"
                                                        >
                                                            Logo/Profile Pic
                                                        </Form.Label>

                                                        <Form.Control
                                                            id="logo"
                                                            type="file"
                                                            name="logo"
                                                            className={
                                                                "mt-1 form-control" +
                                                                (errors.logo ? " is-invalid" : "")
                                                            }
                                                            onChange={(e: any) => setData("logo", e.target.value)}
                                                        />
                                                        <Form.Control.Feedback
                                                            type="invalid"
                                                            className="mt-2 d-block"
                                                        >
                                                            {errors.logo}
                                                        </Form.Control.Feedback>
                                                </div>
                                                <div className="col-md-4 pt-2">

                                                        <Form.Label
                                                            htmlFor="gst_vat_document"
                                                            className="form-label"
                                                        >
                                                        GST/VAT Ceritifate
                                                        </Form.Label>

                                                        <Form.Control
                                                             id="gst_vat_document"
                                                            type="file"
                                                            name="gst_vat_document"
                                                            value={data.gst_vat_document}
                                                            autoFocus
                                                            className={
                                                                "form-control" + (errors.gst_vat_document ? " is-invalid" : "")
                                                            }
                                                            onChange={(e: any) => setData("gst_vat_document", e.target.value)}
                                                            
                                                        />
                                                        <Form.Control.Feedback
                                                            type="invalid"
                                                            className="mt-2 d-block"
                                                        >
                                                            {errors.gst_vat_document}
                                                        </Form.Control.Feedback>
                                                </div>
                                                <div className="col-md-4 pt-2">
                                                        <Form.Label
                                                            htmlFor="cancel_cheque"
                                                            className="form-label"
                                                        >
                                                        Cancel Cheque
                                                        </Form.Label>

                                                        <Form.Control
                                                        id="cancel_cheque"
                                                        type="file"
                                                            name="cancel_cheque"
                                                            value={data.cancel_cheque}
                                                            autoFocus
                                                            className={
                                                                "form-control" + (errors.cancel_cheque ? " is-invalid" : "")
                                                            }
                                                            onChange={(e: any) => setData("cancel_cheque", e.target.value)}
                                                            
                                                        />
                                                        <Form.Control.Feedback
                                                            type="invalid"
                                                            className="mt-2 d-block"
                                                        >
                                                            {errors.cancel_cheque}
                                                        </Form.Control.Feedback>
                                                 </div>
                                                <div className="col-md-4 pt-2">

                                                        <Form.Label
                                                            htmlFor="coi_document"
                                                            className="form-label"
                                                        >
                                                        COI Document
                                                        </Form.Label>

                                                        <Form.Control
                                                        id="coi_document"
                                                        type="file"
                                                            name="coi_document"
                                                            value={data.coi_document}
                                                            autoFocus
                                                            className={
                                                                "form-control" + (errors.coi_document ? " is-invalid" : "")
                                                            }
                                                            onChange={(e: any) => setData("coi_document", e.target.value)}
                                                            
                                                        />
                                                        <Form.Control.Feedback
                                                            type="invalid"
                                                            className="mt-2 d-block"
                                                        >
                                                            {errors.coi_document}
                                                        </Form.Control.Feedback>
                                                </div>


                                                <div className="col-md-4 pt-2">

                                                        <Form.Label
                                                            htmlFor="pancard_document"
                                                            className="form-label"
                                                        >
                                                        Pan Card
                                                        </Form.Label>

                                                        <Form.Control
                                                        id="pancard_document"
                                                        type="file"
                                                            name="pancard_document"
                                                            value={data.pancard_document}
                                                            autoFocus
                                                            className={
                                                                "form-control" + (errors.pancard_document ? " is-invalid" : "")
                                                            }
                                                            onChange={(e: any) => setData("pancard_document", e.target.value)}
                                                            
                                                        />
                                                        <Form.Control.Feedback
                                                            type="invalid"
                                                            className="mt-2 d-block"
                                                        >
                                                            {errors.pancard_document}
                                                        </Form.Control.Feedback>
                                                </div>
                                            


                                        <div className="col-md-4 pt-2">
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




                                        

                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="bank_name"
                                                className="form-label"
                                            >
                                                Bank Name
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


                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="bank_branch"
                                                className="form-label"
                                            >
                                                Bank Branch Name
                                            </Form.Label>

                                            <Form.Control
                                                id="bank_branch"
                                                name="bank_branch"
                                                value={data.bank_branch}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.bank_branch ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("bank_branch", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.bank_branch}
                                            </Form.Control.Feedback>
                                        </div>


                                        <div className="col-md-4 pt-2">
                                                    <Form.Label
                                                        htmlFor="ibn_number"
                                                        className="form-label"
                                                    >
                                                        IBN Number
                                                    </Form.Label>

                                                    <Form.Control
                                                        id="ibn_number"
                                                        name="ibn_number"
                                                        value={data.ibn_number}
                                                        autoFocus
                                                        className={
                                                            "form-control" + (errors.ibn_number ? " is-invalid" : "")
                                                        }
                                                        onChange={(e: any) => setData("ibn_number", e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.ibn_number}
                                                    </Form.Control.Feedback>
                                                </div>

                                                <div className="col-md-4 pt-2">
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
                                        

                                        <div className="col-md-4 pt-2">
                                                    <Form.Label
                                                        htmlFor="swiftcode"
                                                        className="form-label"
                                                    >
                                                        Swift Code
                                                    </Form.Label>

                                                    <Form.Control
                                                        id="swiftcode"
                                                        name="swiftcode"
                                                        value={data.swiftcode}
                                                        autoFocus
                                                        className={
                                                            "form-control" + (errors.swiftcode ? " is-invalid" : "")
                                                        }
                                                        onChange={(e: any) => setData("swiftcode", e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.swiftcode}
                                                    </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="bank_address"
                                                className="form-label"
                                            >
                                                Bank Address
                                            </Form.Label>
                                            <textarea className="form-control"
                                                name="bank_address"
                                                onChange={(e: any) => setData("bank_address", e.target.value)}
                                            ></textarea>

                                            
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.bank_address}
                                            </Form.Control.Feedback>
                                        </div>

                                       
                                        
                                        <div className="col-md-12 pt-2">
                                            <div className="row">

                                                
                                                <div className="col-md-4">
                                                    <Form.Label
                                                        htmlFor="tprm"
                                                        className="form-label"
                                                    >
                                                      TPRM 
                                                    </Form.Label>
                                                    <select
                                                        className="form-select"
                                                        onChange={(e: any) => setData("tprm", e.target.value)}
                                                    >
                                                        <option></option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                   
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.tprm}
                                                    </Form.Control.Feedback>
                                                </div>

                                                <div className="col-md-4">
                                                    <Form.Label
                                                        htmlFor="msme"
                                                        className="form-label"
                                                    >
                                                      MSME 
                                                    </Form.Label>
                                                    <select
                                                        className="form-select"
                                                        onChange={(e: any) => setData("msme", e.target.value)}
                                                    >
                                                        <option></option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                   
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.msme}
                                                    </Form.Control.Feedback>
                                                </div>


                                                <div className="col-md-4">
                                                    <Form.Label
                                                        htmlFor="payment_released"
                                                        className="form-label"
                                                    >
                                                      Payment Relased (In Days)
                                                    </Form.Label>
                                                    <select
                                                        className="form-select"
                                                        onChange={(e: any) => setData("payment_released", e.target.value)}
                                                    >
                                                        <option></option>
                                                        <option value="30">30 Days</option>
                                                        <option value="45">45 Days</option>
                                                        <option value="60">60 Days</option>
                                                        <option value="90">90 Days</option>
                                                    </select>
                                                   
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.payment_released}
                                                    </Form.Control.Feedback>
                                                </div>
                                                
                                                
                                            </div>

                                           
                                        </div>
                                        
                                        <Card className="text-white bg-primary">
                                            <CardBody>
                                                <div className="col-md-12">
                                                    <div className="row">
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
                                                            htmlFor="commission_rate"
                                                            className="form-label"
                                                        >
                                                            Commission Rate(%)
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


                                            </CardBody>
                                        </Card>
                                        
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

                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment >
    );
}
