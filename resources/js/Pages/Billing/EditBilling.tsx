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
import axios from "axios";


export default function EditBilling({ show, setShow, billing, mastersetting, organization, entity, packagedata, offers, framwork, bank }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        organization_id: "",
        entity_id: "",
        invoce_no: "",
        invoice_date: "",
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

    useEffect(() => {
        if (billing) {
            setData({
                organization_id: billing.organization_id || "",


            })
        }
    }, [billing]);


    const handleClose = () => setShow(false);


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
            const updatedData = { ...prevData, discountRate: discountId, discountAmount };
            updateFinalAndBillingAmount(updatedData.items, updatedData.taxRate, discountAmount, updatedData.packageAmount);
            return updatedData;
        });
    };

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const packageId = e.target.value; // Discount ID from the select value
        const packageAmount = parseFloat(e.target.selectedOptions[0].getAttribute("data-package") || "0"); // Fetch discount amount

        setData((prevData) => {
            const updatedData = { ...prevData, packageRate: packageId, packageAmount };
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
        patch(route("billing.update", billing.id), {
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
                        Edit Billing Invoice No -
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <pre>{JSON.stringify(billing, undefined, 2)}</pre>
                    <Card>
                        <CardHeader>Master Setting Details</CardHeader>

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
                                                value={data.organization_id}
                                            >
                                                <option value="">Select Organization</option>
                                                {organization.map((odata: any) => (
                                                    <option key={odata.id} value={odata.id}>
                                                        {odata.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.organization_id}
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
