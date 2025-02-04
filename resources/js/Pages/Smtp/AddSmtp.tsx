import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Row,
    Form,
    Button,
    InputGroup,
    FormControl,
    Toast,
    ToastContainer,
} from "react-bootstrap";
import { useForm, usePage } from "@inertiajs/react";
import { Textarea } from "@headlessui/react";
import axios from "axios";

export default function AddSmtp({ smtpdetails }: any) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (smtpdetails) {
            setData({
                host: smtpdetails.host || "",
                port: smtpdetails.port || "",
                username: smtpdetails.username || "",
                password: smtpdetails.password || "",
                encryption: smtpdetails.encryption || "",
            });
        }
    }, [smtpdetails]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        patch(route("smtpSetting.update", smtpdetails.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                setShowToast(true);  // Show toast message
            },
        });
        console.log(data);
    };

    return (
        <React.Fragment>
            <>
                {/* <pre>{JSON.stringify(smtpdetails, undefined, 2)}</pre> */}
                <Card>
                    <form onSubmit={onSubmit}>
                        <CardBody>
                            <div className="col-md-12">
                                <div className="row">
                                    <Col xl={6}>
                                        <Form.Label htmlFor="host" className="form-label">
                                            SMTP Host Server <span className="text-danger ms-1">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            id="host"
                                            type="text"
                                            name="host"
                                            placeholder="Enter Host"
                                            value={data.host}
                                            className={
                                                "form-control" + (errors.host ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("host", e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="port" className="form-label">
                                            SMTP Port <span className="text-danger ms-1">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            id="port"
                                            type="number"
                                            name="port"
                                            placeholder="Enter Port"
                                            value={data.port}
                                            className={
                                                "form-control" + (errors.port ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("port", e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col xl={6} className="pt-2">
                                        <Form.Label htmlFor="username" className="form-label">
                                            User Name <span className="text-danger ms-1">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            id="username"
                                            type="text"
                                            name="username"
                                            placeholder="Enter Username"
                                            value={data.username}
                                            className={
                                                "form-control" + (errors.username ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("username", e.target.value)}
                                            required
                                        />
                                    </Col>
                                    <Col xl={6} className="pt-2">
                                        <Form.Label htmlFor="password" className="form-label">
                                            Password <span className="text-danger ms-1">*</span>
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="Enter Password"
                                                value={data.password}
                                                className={
                                                    "form-control" + (errors.password ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("password", e.target.value)}
                                                required
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xl={6} className="pt-2">
                                        <Form.Label htmlFor="encryption" className="form-label">
                                            Encryption <span className="text-danger ms-1">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            id="encryption"
                                            type="text"
                                            name="encryption"
                                            placeholder="Enter Encryption"
                                            value={data.encryption}
                                            className={
                                                "form-control" + (errors.encryption ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("encryption", e.target.value)}
                                            required
                                        />
                                    </Col>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
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
                        </CardFooter>
                    </form>
                </Card>
                <ToastContainer position="top-end" className="p-3">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Success</strong>
                        </Toast.Header>
                        <Toast.Body>SMTP settings updated successfully!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </>
        </React.Fragment>
    );
}
