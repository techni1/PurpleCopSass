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
import axios from "axios";


export default function AddBilling({ show, setShow, mastersetting, organization, entity, packagedata, offers, framwork, bank }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        organization_id: "",
        entity_id: "",
        invoce_no: "",
        invoice_date: new Date().toISOString().split('T')[0],
        invoice_due_date: "",
        ponumber: "",
        payment_term: "",
        notes: "",
        items: [
            { framworkId: "", unitPrice: 0, qty: 0, hsn: "", singleAmt: 0 }, // Initialize with one row
        ],

        packageid: "",
        offerid: "",
        finalAmount: 0, // Total amount before tax
        taxRate: 0, // Tax rate (0% or 18%)
        billingAmount: 0, // Total amount after tax
        taxAmount: 0,
        packageRate: "",
        discountRate: "",
        bank_details: "",
        paymentnotes: "",



    });

    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);

    const [entities, setEntities] = useState([]);

    const handleOrganizationChange = async (organization_id: string) => {
        setData("organization_id", organization_id); // Update the selected organization ID in state
        if (organization_id) {
            try {
                const response = await axios.get(`/entities/${organization_id}`); // Replace with your actual API endpoint
                setEntities(response.data); // Update the entities state with the fetched data
            } catch (error) {
                console.error("Error fetching entities:", error);
                setEntities([]); // Reset entities if there's an error
            }
        } else {
            setEntities([]); // Reset entities if no organization is selected
        }
    };



    const handleAddRow = () => {
        setData("items", [
            ...data.items,
            { framworkId: "", unitPrice: 0, qty: 0, hsn: "", singleAmt: 0 },
        ]);
    };

    const handleRemoveRow = (index: number) => {
        const updatedItems = data.items.filter((_, i) => i !== index);
        setData("items", updatedItems);
        updateFinalAndBillingAmount(updatedItems, data.taxRate);
    };

    const handleFrameworkChange = async (index: number, framworkId: string) => {
        const updatedItems = [...data.items];
        updatedItems[index].framworkId = framworkId;

        if (framworkId) {
            try {
                const response = await axios.get(`/framework-price/${framworkId}`);
                const unitPrice = parseFloat(response.data.price) || 0;
                const qty = parseFloat(updatedItems[index].qty) || 0;

                updatedItems[index].unitPrice = unitPrice;
                updatedItems[index].singleAmt = unitPrice * qty;
            } catch (error) {
                console.error("Error fetching price:", error);
                updatedItems[index].unitPrice = 0;
                updatedItems[index].singleAmt = 0;
            }
        }

        // Update the items in state and recalculate the amounts
        setData((prevData) => {
            const updatedData = { ...prevData, items: updatedItems };
            updateFinalAndBillingAmount(updatedItems, prevData.taxRate); // Use current taxRate
            return updatedData;
        });
    };
    const handleChange = (index: number, field: string, value: string) => {
        const updatedItems = [...data.items];
        updatedItems[index][field] = value;

        if (field === "qty") {
            const qty = parseFloat(value) || 0;
            const unitPrice = parseFloat(updatedItems[index].unitPrice) || 0;
            updatedItems[index].singleAmt = unitPrice * qty;
        }

        setData("items", updatedItems);
        updateFinalAndBillingAmount(updatedItems, data.taxRate);
    };



    const handleDiscountRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const discountId = e.target.value; // Discount ID from the select value
        const discountAmount = parseFloat(e.target.selectedOptions[0].getAttribute("data-discount") || "0"); // Fetch discount amount

        setData((prevData) => {
            const updatedData = { ...prevData,discountId, discountRate: discountId, discountAmount };
            updateFinalAndBillingAmount(updatedData.items, updatedData.taxRate, discountAmount, updatedData.packageAmount);
            return updatedData;
        });
    };

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const packageId = e.target.value; // Discount ID from the select value
        const packageAmount = parseFloat(e.target.selectedOptions[0].getAttribute("data-package") || "0"); // Fetch discount amount

        setData((prevData) => {
            const updatedData = { ...prevData, packageId, packageRate: packageId, packageAmount };
            updateFinalAndBillingAmount(updatedData.items, updatedData.taxRate, updatedData.discountAmount, packageAmount);
            return updatedData;
        });
    };

    const handleTaxRateChange = (value: string) => {
        const taxRate = parseFloat(value); // Convert string to number

        // Update state with new tax rate and then recalculate amounts
        setData((prevData) => {
            const updatedData = { ...prevData, taxRate };
            updateFinalAndBillingAmount(updatedData.items, taxRate, updatedData.discountAmount, updatedData.packageAmount); // Use updated state for recalculations
            return updatedData;
        });
    };


    const updateFinalAndBillingAmount = (items: any[], taxRate: number, discountAmount: number, packageAmount: number) => {
        // Calculate the final amount
        const finalAmount = items.reduce(
            (sum, item) => sum + (parseFloat(item.singleAmt) || 0),
            0
        );

        // package Amount Addon

        const packageaddon = finalAmount + packageAmount;

        // Calculate the tax amount and billing amount
        const amountAfterDiscount = (packageaddon * discountAmount) / 100;


        const CalbillAmount = packageaddon - amountAfterDiscount;

        const taxAmount = (CalbillAmount * taxRate) / 100;

        const billingAmount = CalbillAmount + taxAmount;

        // Update state with the new calculations
        setData((prevData) => ({
            ...prevData,
            finalAmount: Number(finalAmount), // Ensure values are numbers
            packageaddon: Number(packageaddon),
            taxAmount: Number(taxAmount),
            billingAmount: Number(billingAmount),
        }));
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("quotation.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Offcanvas
            },
            onError: (errors) => {
                console.error(errors); // Log errors if needed
            }
        });
    };

    return (
        <React.Fragment>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start"
                id="OffcanvasTop"
                style={{ width: "70%" }}

            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="OffcanvasExampleLabel">
                        New Quotation
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(packagedata, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Details</CardHeader>

                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">


                                        <div className="col-md-6">
                                            <Form.Label htmlFor="organizationid" className="form-label">
                                                Organization
                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) => handleOrganizationChange(e.target.value)}
                                                name="organization_id"
                                                required
                                            >
                                                <option value="">Select Organization</option>
                                                {organization.map((odata: any) => (
                                                    <option key={odata.id} value={odata.id}>
                                                        {odata.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.organization_id && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.organization_id}
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-6">
                                            <Form.Label htmlFor="entity_id" className="form-label">
                                                Entity (Optional)
                                            </Form.Label>
                                            <select
                                                id="entity_id"
                                                className="form-control form-select"
                                                value={data.entity_id} // Adjust this to the correct state key
                                                onChange={(e: any) => setData("entity_id", e.target.value)} // Update the selected entity in state
                                            >
                                                <option value="">Select Entity</option>
                                                {entities.map((entity: any) => (
                                                    <option key={entity.id} value={entity.id}>
                                                        {entity.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.entity_id}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Invoice Number
                                            </Form.Label>

                                            <Form.Control
                                                id="master_key"
                                                name="invoce_no"
                                                value={data.invoce_no}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.invoce_no ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("invoce_no", e.target.value)}
                                                required
                                            />
                                            {errors.invoce_no && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.invoce_no}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="invoice_date"
                                                className="form-label"
                                            >
                                                Invoice Date
                                            </Form.Label>

                                            <Form.Control
                                                id="invoice_date"
                                                name="invoice_date"
                                                type="date"
                                                value={data.invoice_date}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.invoice_date ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("invoice_date", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.invoice_date}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="invoice_due_date"
                                                className="form-label"
                                            >
                                                Due Date
                                            </Form.Label>

                                            <Form.Control
                                                id="invoice_due_date"
                                                name="invoice_due_date"
                                                type="date"

                                                value={data.invoice_due_date}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.invoice_due_date ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("invoice_due_date", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.invoice_due_date}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="ponumber"
                                                className="form-label"
                                            >
                                                PO Number
                                            </Form.Label>

                                            <Form.Control
                                                id="ponumber"
                                                name="ponumber"
                                                value={data.ponumber}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.ponumber ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("ponumber", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.ponumber}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="payment_term"
                                                className="form-label"
                                            >
                                                Payment Term
                                            </Form.Label>

                                            <Form.Control
                                                id="payment_term"
                                                name="payment_term"
                                                value={data.payment_term}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.payment_term ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("payment_term", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.payment_term}
                                            </Form.Control.Feedback>
                                        </div>


                                        <div className="col-md-4">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Interal Notes
                                            </Form.Label>

                                            <Textarea
                                                id="notes"
                                                className="form-control"
                                                onChange={(e: any) => setData("notes", e.target.value)}
                                            ></Textarea>


                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.notes}
                                            </Form.Control.Feedback>
                                        </div>



                                        <Card className="text-white bg-secondary p-2">
                                            <CardHeader>Items Description</CardHeader>
                                            <CardBody>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-1" align="center">S.No</div>
                                                        <div className="col-md-4"  align="center">Framework</div>
                                                        <div className="col-md-2"  align="center">Unit Price</div>
                                                        <div className="col-md-1"  align="center">Qty</div>
                                                        <div className="col-md-2"  align="center">HSN</div>
                                                        <div className="col-md-2"  align="center"> Amount</div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    {data.items.map((item: any, index: number) => (
                                                        <div className="row text-center mb-2" key={index}>
                                                            <div className="col-md-1">{index + 1}</div>
                                                            <div className="col-md-4">
                                                                <select
                                                                    className="form-control form-select"
                                                                    value={item.framworkId}
                                                                    onChange={(e) =>
                                                                        handleFrameworkChange(index, e.target.value)
                                                                    }
                                                                    required
                                                                >
                                                                    <option value="">Select Framework</option>
                                                                    {framwork.map((fwork: any) => (
                                                                        <option key={fwork.id} value={fwork.id}>
                                                                            {fwork.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <Form.Control
                                                                    value={item.unitPrice}
                                                                    readOnly
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-1">
                                                                <Form.Control
                                                                    value={item.qty}
                                                                    onChange={(e) =>
                                                                        handleChange(index, "qty", e.target.value)
                                                                    }
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="col-md-2">
                                                                <Form.Control
                                                                    value={item.hsn}
                                                                    onChange={(e) =>
                                                                        handleChange(index, "hsn", e.target.value)
                                                                    }
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-2">
                                                                <Form.Control
                                                                    value={item.singleAmt}
                                                                    readOnly
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                            <div className="col-md-1">
                                                                <Button
                                                                    variant="danger"
                                                                    size="sm"
                                                                    onClick={() => handleRemoveRow(index)}
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="text-center mt-3">
                                                        <Button variant="primary" onClick={handleAddRow}>
                                                            Add Row
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardBody>

                                        </Card>




                                        <div className="col-md-6">
                                            <Form.Label
                                                htmlFor="bank_details"
                                                className="form-label"
                                            >
                                                Select Bank
                                            </Form.Label>

                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) => setData("bank_details", e.target.value)}
                                                name="bank_details"
                                                id="bank_details"
                                                required
                                            >
                                                <option value="">Select Bank</option>
                                                {bank.map((odata: any) => (
                                                    <option key={odata.id} value={odata.id}>
                                                        {odata.bank_accountname} - {odata.bank_accountno}
                                                    </option>
                                                ))}
                                            </select>

                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.bank_details}
                                            </Form.Control.Feedback>



                                        </div>
                                        <div className="col-md-6">
                                            <h6>Sub Total Amount: ${data.finalAmount.toFixed(2)}</h6>

                                        </div>
                                        <div className="col-md-6">

                                            <Form.Label
                                                htmlFor="paymentnotes"
                                                className="form-label"
                                            >
                                                Payment Notes
                                            </Form.Label>


                                            <Textarea
                                                id="paymentnotes"
                                                className="form-control"
                                                value={data.paymentnotes}
                                                onChange={(e: any) => setData("paymentnotes", e.target.value)}
                                            ></Textarea>


                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.paymentnotes}
                                            </Form.Control.Feedback>


                                        </div>

                                        <div className="col-md-6">
                                            <Form.Label
                                                htmlFor="packageid"
                                                className="form-label"
                                            >
                                                Package
                                            </Form.Label>

                                            <select
                                                className="form-control form-select"
                                                value={data.packageRate}
                                                onChange={handlePackageChange}
                                                name="packageid"
                                                id="packageid"
                                                required
                                            >
                                                <option></option>
                                                {packagedata.map((pdata: any) => (
                                                    <option value={pdata.id} data-package={pdata.package_amount}>{pdata.name} - {pdata.package_amount}</option>
                                                ))}
                                            </select>


                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.packageid}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Offer
                                            </Form.Label>

                                            <select
                                                className="form-control form-select"

                                                value={data.discountRate}
                                                onChange={handleDiscountRateChange}
                                                name="offerid"

                                            >
                                                <option></option>
                                                {offers.map((offdata: any) => (
                                                    <option value={offdata.id} data-discount={offdata.percentage}>{offdata.name} -  {offdata.percentage}%</option>
                                                ))}
                                            </select>

                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.offerid}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="col-md-6"></div>

                                        <div className="col-md-6">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Select Tax
                                            </Form.Label>

                                            <select
                                                id="taxRate"
                                                className="form-control form-select"
                                                value={data.taxRate} // Reflect updated state
                                                onChange={(e) => handleTaxRateChange(e.target.value)} // Handle changes

                                            >
                                                <option value={0}>0%</option>
                                                <option value={18}>18%</option>
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.master_key}
                                            </Form.Control.Feedback>
                                        </div>



                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">

                                            <h6>Discount Amount: {Number(data.discountAmount).toFixed(2)}%</h6>
                                            <h6>Package Amount: ${Number(data.packageaddon).toFixed(2)}</h6>
                                            <h6>Tax Amount: ${Number(data.taxAmount).toFixed(2)}</h6>
                                        </div>



                                        <div className="col-md-6"></div>
                                        <div className="col-md-6">
                                            <h5>Billing Amount: ${data.billingAmount.toFixed(2)}</h5>
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
