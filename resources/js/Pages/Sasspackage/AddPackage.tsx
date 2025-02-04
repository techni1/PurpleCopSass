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
        assigned_personal_manager: "",
        db_backup: "",
        notification_email: "",
        notification_sms: "",
        notification_call: "",
        server_type: "",
        custom_featured_request: "",
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


                                            <label htmlFor="assigned_personal_manager" className="form-check-label form-check-label" >Assigned Personal Manager</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="assigned_personal_manager"
                                                className="form-check-input pl-2"
                                                value="1"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("assigned_personal_manager", e.target.checked)
                                                }
                                            />
                                        </div>
                                        <div className="col-md-4 pt-4">


                                            <label htmlFor="notification_email" className="form-check-label form-check-label" >Notification Email</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="notification_email"
                                                className="form-check-input pl-2"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("notification_email", e.target.checked)
                                                }
                                            />
                                        </div>

                                        <div className="col-md-4 pt-4">


                                            <label htmlFor="notification_sms" className="form-check-label form-check-label" >Notification SMS</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="notification_sms"
                                                className="form-check-input pl-2"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("notification_sms", e.target.checked)
                                                }
                                            />
                                        </div>


                                        <div className="col-md-4 pt-4">


                                            <label htmlFor="notification_call" className="form-check-label form-check-label" >Notification Call</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="notification_call"
                                                className="form-check-input pl-2"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("notification_call", e.target.checked)
                                                }
                                            />
                                        </div>
                                        <div className="col-md-4 pt-4">


                                            <label htmlFor="custom_featured_request" className="form-check-label form-check-label" >Custom Featured Request</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="custom_featured_request"
                                                className="form-check-input pl-2"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("custom_featured_request", e.target.checked)
                                                } />
                                        </div>

                                        <div className="col-md-4 pt-4">


                                            <label htmlFor="db_backup" className="form-check-label form-check-label" >DB Backup</label>
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="db_backup"
                                                className="form-check-input pl-2"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                    setData("db_backup", e.target.checked)
                                                } />
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
