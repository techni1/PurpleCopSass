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
import { Select } from "@headlessui/react";


export default function AddPackage({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        short_desc: "",
        payment_type: "",
        custom_day: "",
        instance_config_details: "",
        file_storage: "",
        no_of_integration: "",
        no_of_user: "",
        grace_period_day: "",
        assigned_personal_manager: 0,
        db_backup: 0,
        notification_email: 0,
        notification_sms: 0,
        notification_call: 0,
        server_type: "",
        custom_featured_request: 0,
        package_amount: ""
    });


    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("sasspackage.store"), {
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
                id="offcanvasTop"

            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="offcanvasExampleLabel">
                        Add New Package
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>Package Details</CardHeader>

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
                                                htmlFor="short_desc"
                                                className="form-label"
                                            >
                                                Short Description
                                            </Form.Label>

                                            <textarea className="form-control"
                                                name="short_desc"
                                                id="short_desc"
                                                onChange={(e: any) => setData("short_desc", e.target.value)}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="payment_type"
                                                className="form-label"
                                            >
                                                Payment type

                                            </Form.Label>
                                            <select
                                                id="payment_type"
                                                className={
                                                    "form-control form-select" + (errors.payment_type ? " is-invalid" : "")
                                                }
                                                required
                                                onChange={(e: any) => setData("payment_type", e.target.value)}
                                            >
                                                <option></option>
                                                <option value="monthly">Monthly</option>
                                                <option value="quarterly">Quarterly</option>
                                                <option value="yearly">Yearly</option>
                                                <option value="custom">Custom</option>

                                            </select>

                                        </div>

                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="custom_day"
                                                className="form-label"
                                            >
                                                Custom Day
                                            </Form.Label>
                                            <FormControl
                                                id="custom_day"
                                                name="custom_day"

                                                value={data.custom_day}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.custom_day ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("custom_day", e.target.value)}

                                            ></FormControl>
                                        </div>

                                        <div className="col-md-4 pt-2">
                                            <Form.Label
                                                htmlFor="server_type"
                                                className="form-label"
                                            >
                                                Server Type

                                            </Form.Label>
                                            <select
                                                id="server_type"
                                                name="server_type"
                                                className={
                                                    "form-control form-select" + (errors.server_type ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("server_type", e.target.value)}
                                                required
                                            >
                                                <option></option>
                                                <option value="Shared">Shared</option>
                                                <option value="Private">Private</option>


                                            </select>
                                        </div>


                                        <div className="col-md-12  pt-3">
                                            <Form.Label
                                                htmlFor="instance_config_details"
                                                className="form-label"
                                            >
                                                Instance Config. Details
                                            </Form.Label>

                                            <textarea
                                                id="instance_config_details"
                                                name="instance_config_details"
                                                className={
                                                    "form-control" + (errors.instance_config_details ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("instance_config_details", e.target.value)}
                                                required
                                            ></textarea>



                                        </div>

                                        <div className="col-md-3 pt-3">
                                            <Form.Label
                                                htmlFor="no_of_integration"
                                                className="form-label"
                                            >
                                                No of Integration
                                            </Form.Label>
                                            <FormControl
                                                id="no_of_integration"
                                                name="no_of_integration"

                                                value={data.no_of_integration}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.no_of_integration ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("no_of_integration", e.target.value)}
                                                required

                                            ></FormControl>
                                        </div>
                                        <div className="col-md-3 pt-3">
                                            <Form.Label
                                                htmlFor="no_of_integration"
                                                className="form-label"
                                            >
                                                No of User (Max)
                                            </Form.Label>
                                            <FormControl
                                                id="no_of_user"
                                                name="no_of_user"

                                                value={data.no_of_user}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.no_of_user ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("no_of_user", e.target.value)}
                                                required
                                            ></FormControl>

                                        </div>
                                        <div className="col-md-3 pt-3">


                                            <Form.Label
                                                htmlFor="no_of_integration"
                                                className="form-label"
                                            >
                                                Grace Period
                                            </Form.Label>
                                            <FormControl
                                                id="grace_period_day"
                                                name="grace_period_day"
                                                value={data.grace_period_day}
                                                className={
                                                    "form-control" + (errors.grace_period_day ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("grace_period_day", e.target.value)}
                                                required

                                            ></FormControl>
                                        </div>
                                        <div className="col-md-3 pt-3">


                                            <Form.Label
                                                htmlFor="file_storage"
                                                className="form-label"
                                            >
                                                File Storage (GB)
                                            </Form.Label>
                                            <FormControl
                                                id="file_storage"
                                                name="file_storage"
                                                value={data.file_storage}
                                                className={
                                                    "form-control" + (errors.file_storage ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("file_storage", e.target.value)}
                                                required
                                            ></FormControl>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="assigned_personal_manager" className="form-check-label">
                                                Assigned Personal Manager
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="assigned_personal_manager_yes"
                                                    name="assigned_personal_manager"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("assigned_personal_manager", 1)}
                                                    checked={data.assigned_personal_manager === 1}
                                                />
                                                <label htmlFor="assigned_personal_manager_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="assigned_personal_manager_no"
                                                    name="assigned_personal_manager"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("assigned_personal_manager", 0)}
                                                    checked={data.assigned_personal_manager === 0}
                                                />
                                                <label htmlFor="assigned_personal_manager_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="notification_email" className="form-check-label">
                                                Notification Email
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="notification_email_yes"
                                                    name="notification_email"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_email", 1)}
                                                    checked={data.notification_email === 1}
                                                />
                                                <label htmlFor="notification_email_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="notification_email_no"
                                                    name="notification_email"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_email", 0)}
                                                    checked={data.notification_email === 0}
                                                />
                                                <label htmlFor="notification_email_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="notification_sms" className="form-check-label">
                                                Notification SMS
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="notification_sms_yes"
                                                    name="notification_sms"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_sms", 1)}
                                                    checked={data.notification_sms === 1}
                                                />
                                                <label htmlFor="notification_sms_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="notification_sms_no"
                                                    name="notification_sms"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_sms", 0)}
                                                    checked={data.notification_sms === 0}
                                                />
                                                <label htmlFor="notification_sms_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="notification_call" className="form-check-label">
                                                Notification Call
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="notification_call_yes"
                                                    name="notification_call"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_call", 1)}
                                                    checked={data.notification_call === 1}
                                                />
                                                <label htmlFor="notification_call_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="notification_call_no"
                                                    name="notification_call"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("notification_call", 0)}
                                                    checked={data.notification_call === 0}
                                                />
                                                <label htmlFor="notification_call_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="custom_featured_request" className="form-check-label">
                                                Custom Featured Request
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="custom_featured_request_yes"
                                                    name="custom_featured_request"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("custom_featured_request", 1)}
                                                    checked={data.custom_featured_request === 1}
                                                />
                                                <label htmlFor="custom_featured_request_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="custom_featured_request_no"
                                                    name="custom_featured_request"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("custom_featured_request", 0)}
                                                    checked={data.custom_featured_request === 0}
                                                />
                                                <label htmlFor="custom_featured_request_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 pt-4">
                                            <label htmlFor="db_backup" className="form-check-label">
                                                DB Backup
                                            </label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="db_backup_yes"
                                                    name="db_backup"
                                                    value="1"
                                                    className="form-check-input"
                                                    onChange={() => setData("db_backup", 1)}
                                                    checked={data.db_backup === 1}
                                                />
                                                <label htmlFor="db_backup_yes" className="form-check-label">
                                                    Yes
                                                </label>
                                                &nbsp;
                                                <input
                                                    type="radio"
                                                    id="db_backup_no"
                                                    name="db_backup"
                                                    value="0"
                                                    className="form-check-input"
                                                    onChange={() => setData("db_backup", 0)}
                                                    checked={data.db_backup === 0}
                                                />
                                                <label htmlFor="db_backup_no" className="form-check-label">
                                                    No
                                                </label>
                                            </div>
                                        </div>


                                        <div className="col-md-6 pt-3">
                                            <Form.Label
                                                htmlFor="package_amount"
                                                className="form-label"
                                            >
                                                Package Amount (in $)
                                            </Form.Label>


                                            <FormControl
                                                id="package_amount"
                                                name="package_amount"
                                                value={data.package_amount}
                                                className={
                                                    "form-control" + (errors.package_amount ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("package_amount", e.target.value)}
                                                required
                                                placeholder="0.00"
                                            ></FormControl>

                                        </div>


                                    </div>
                                </div>

                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">

                                    <Col xl={2} md={12}>
                                        <Button
                                            type="submit"
                                            className="btn btn-primary w-100"
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
