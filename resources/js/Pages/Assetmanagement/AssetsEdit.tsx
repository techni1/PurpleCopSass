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
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AssetsEdit({ show, setShow, asset, risks, category, subcategory, location, criticality, vendor, department, people }: any) {
    const { data, setData, patch, processing, errors, reset, recentlySuccessful } = useForm({
        categoryid: "",
        name: "",
        subcategoryid: "",
        locationid: "",
        criticalityid: "",
        vendorid: "",
        description: "",
        owner: "",
        departmentid: "",
        value: "",
        currentvalue: "",
        purchasedate: "",
        boardingdate: "",
        retirementdate: "",
        serialnumber: "",
        isunderrisk: "",
        warrentyinfo: "",
        maintenancehistory: "",
        notes: "",
        riskdata: [],

    });




    const handleClose = () => setShow(false);

    useEffect(() => {
        if (asset) {
            setData({
                categoryid: asset.category?.id || "",
                name: asset.name || "",
                subcategoryid: asset.subcategory_id || "",
                locationid: asset.location?.id || "",
                criticalityid: asset.criticalilty || "",
                vendorid: asset.vendor?.id || "",
                value: asset.value || "",
                currentvalue: asset.currentvalue || "",
                purchasedate: asset.purchasedate || "",
                boardingdate: asset.boardingdate || "",
                retirementdate: asset.retirementdate || "",
                serialnumber: asset.serialnumber || "",
                isunderrisk: asset.isunderrisk || "",
                warrentyinfo: asset.warranty_information || "",
                maintenancehistory: asset.warranty_history || "",
                notes: asset.notes || "",
                owner: asset.owner || "",
                departmentid: asset.department?.id || "",
                description: asset.description || "",
            });
        }
    }, [asset]);


    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(asset.id);
        patch(route("assets.update", asset.id), {
            preserveScroll: true,
            onSuccess: () => handleClose(),
        });
    };

    return (
        <React.Fragment>

            {recentlySuccessful && toast.success("Asset update")}
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start"
                id="offcanvasLeft"
            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="offcanvasExampleLabel">
                        Assets Details
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card>

                        <Card.Body>
                            {/* <pre>{JSON.stringify(asset, undefined, 2)}</pre> */}

                            <form onSubmit={onSubmit}>
                                <Col xl={12}>

                                    <Row>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Name <span className="text-danger ms-1">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                id="name"
                                                name="name"
                                                placeholder="Enter Name"
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
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Category{" "}
                                                <span className="text-danger ms-1">*
                                                </span>

                                            </Form.Label>
                                            <select
                                                className="form-control form-select"

                                                onChange={(e: any) =>
                                                    setData("categoryid", e.target.value)
                                                }
                                                value={data.categoryid}
                                                name="category_id"
                                                required
                                            >
                                                <option></option>

                                                {category.map((category: any) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))}
                                            </select>

                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.categoryid}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Type{" "}
                                                <span className="text-danger ms-1">*</span>

                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                value={data.subcategoryid}
                                                onChange={(e: any) =>
                                                    setData("subcategoryid", e.target.value)
                                                }
                                                name="subcategoryid"
                                                required
                                            >
                                                <option></option>

                                                {subcategory.map((subcategory: any) => (
                                                    <option value={subcategory.id}>
                                                        {subcategory.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.subcategoryid}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Location{" "}
                                                <span className="text-danger ms-1">*</span>

                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                value={data.locationid}
                                                onChange={(e: any) =>
                                                    setData("locationid", e.target.value)
                                                }
                                                name="locationid"
                                                required
                                            >
                                                <option></option>

                                                {location.map((location: any) => (
                                                    <option value={location.id}>{location.name}</option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.locationid}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Criticality{" "}
                                                <span className="text-danger ms-1">*</span>


                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) =>
                                                    setData("criticalityid", e.target.value)
                                                }
                                                name="criticalityid"
                                                value={data.criticalityid}
                                                required
                                            >
                                                <option></option>

                                                {criticality.map((criticality: any) => (
                                                    <option value={criticality.id}>
                                                        {criticality.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.criticalityid}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Vendor{" "}
                                                <span className="text-danger ms-1">*</span>

                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) =>
                                                    setData("vendorid", e.target.value)
                                                }
                                                name="vendorid"
                                                value={data.vendorid}
                                                required
                                            >
                                                <option></option>

                                                {vendor.map((vendor: any) => (
                                                    <option value={vendor.id}>{vendor.name}</option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.vendorid}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="value" className="form-label">
                                                Value <span className="text-danger ms-1">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                id="value"
                                                name="value"
                                                placeholder="0.0000"
                                                value={data.value}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.value ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("value", e.target.value)
                                                }
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.value}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="currentvalue"
                                                className="form-label"
                                            >
                                                Current Value{" "}
                                                <span className="text-danger ms-1">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                id="currentvalue"
                                                name="currentvalue"
                                                placeholder="0.0000"
                                                value={data.currentvalue}
                                                autoFocus
                                                className={
                                                    "form-control" +
                                                    (errors.currentvalue ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("currentvalue", e.target.value)
                                                }
                                                required
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.currentvalue}
                                            </Form.Control.Feedback>
                                        </Col>

                                        <Col xl={6}>
                                            <Row>
                                                <Col>
                                                    {" "}
                                                    <Form.Label htmlFor="owner" className="form-label">
                                                        Owner <span className="text-danger ms-1">*</span>
                                                    </Form.Label>
                                                    <select
                                                        className="form-control form-select"
                                                        onChange={(e: any) =>
                                                            setData("owner", e.target.value)
                                                        }
                                                        name="owner"
                                                        value={data.owner}
                                                        required
                                                    >
                                                        <option></option>

                                                        {people.map((people: any) => (
                                                            <option value={people.id}>{people.name}</option>
                                                        ))}
                                                    </select>
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.owner}
                                                    </Form.Control.Feedback>
                                                </Col>
                                                <Col>
                                                    <Form.Label
                                                        htmlFor="departmentid"
                                                        className="form-label"
                                                    >
                                                        Select Department{" "}
                                                        <span className="text-danger ms-1">*</span>
                                                    </Form.Label>
                                                    <select
                                                        className="form-control form-select"
                                                        onChange={(e: any) =>
                                                            setData("departmentid", e.target.value)
                                                        }
                                                        value={data.departmentid}
                                                        name="departmentid"
                                                        required
                                                    >
                                                        <option></option>

                                                        {department.map((department: any) => (
                                                            <option value={department.id}>
                                                                {department.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <Form.Control.Feedback
                                                        type="invalid"
                                                        className="mt-2 d-block"
                                                    >
                                                        {errors.departmentid}
                                                    </Form.Control.Feedback>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="serialnumber"
                                                className="form-label"
                                            >
                                                Serial Number
                                            </Form.Label>
                                            <Form.Control
                                                id="serialnumber"
                                                name="serialnumber"
                                                placeholder="Enter Serial Number"
                                                value={data.serialnumber}
                                                autoFocus
                                                className={
                                                    "form-control" +
                                                    (errors.serialnumber ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("serialnumber", e.target.value)
                                                }
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.serialnumber}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="purchasedate"
                                                className="form-label"
                                            >
                                                Purchase Date
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="purchasedate"
                                                name="purchasedate"
                                                placeholder="Enter Purchase Date"
                                                value={data.purchasedate}
                                                autoFocus
                                                className={
                                                    "form-control" +
                                                    (errors.purchasedate ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("purchasedate", e.target.value)
                                                }
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.purchasedate}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="boardingdate"
                                                className="form-label"
                                            >
                                                Boarding Date
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="boardingdate"
                                                name="boardingdate"
                                                value={data.boardingdate}
                                                autoFocus
                                                className={
                                                    "form-control" +
                                                    (errors.boardingdate ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("boardingdate", e.target.value)
                                                }
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.boardingdate}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="retirementdate"
                                                className="form-label"
                                            >
                                                Retirement date
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                id="retirementdate"
                                                name="retirementdate"
                                                value={data.retirementdate}
                                                autoFocus
                                                className={
                                                    "form-control" +
                                                    (errors.retirementdate ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) =>
                                                    setData("retirementdate", e.target.value)
                                                }
                                            />
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.retirementdate}
                                            </Form.Control.Feedback>
                                        </Col>



                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="description"
                                                className="form-label"
                                            >
                                                Description
                                            </Form.Label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                name="description"
                                                onChange={(e: any) =>
                                                    setData("description", e.target.value)
                                                }
                                                value={data.description}
                                            ></textarea>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="warrentyinfo"
                                                className="form-label"
                                            >
                                                Warranty Information
                                            </Form.Label>
                                            <textarea
                                                className="form-control"
                                                id="warrentyinfo"
                                                name="warrentyinfo"
                                                value={data.warrentyinfo}
                                                onChange={(e: any) =>
                                                    setData("warrentyinfo", e.target.value)
                                                }
                                            ></textarea>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label
                                                htmlFor="maintenancehistory"
                                                className="form-label"
                                            >
                                                Maintenance History
                                            </Form.Label>
                                            <textarea
                                                className="form-control"
                                                id="maintenancehistory"
                                                name="maintenancehistory"
                                                value={data.maintenancehistory}
                                                onChange={(e: any) =>
                                                    setData("maintenancehistory", e.target.value)
                                                }
                                            ></textarea>
                                        </Col>

                                        <Col xl={6}>
                                            <Form.Label htmlFor="noyt" className="form-label">
                                                Notes
                                            </Form.Label>
                                            <textarea
                                                className="form-control"
                                                name="notes"
                                                value={data.notes}
                                                onChange={(e: any) =>
                                                    setData("notes", e.target.value)
                                                }
                                            ></textarea>
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-md-center pt-3">

                                        <Col xl={6} md={6} >
                                            <Button
                                                type="submit"
                                                className="btn btn-primary w-100"
                                                disabled={processing}
                                            >
                                                Update
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </form>
                        </Card.Body>
                    </Card>

                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
}
