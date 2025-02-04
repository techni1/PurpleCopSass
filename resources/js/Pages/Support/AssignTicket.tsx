import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Modal,
    Row,
    Form,
    Button,
    FormControl,
} from "react-bootstrap";
import { useForm, usePage } from "@inertiajs/react";
import { Textarea } from "@headlessui/react";
import axios from "axios";

export default function AssignTicket({ showsupport, setShowSupport, ticket, userbyDept }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        assigned_to: "",
        priorty: "",
        ticket_id: ticket.id,
    });

    useEffect(() => {
        if (ticket) {
            setData({
                priorty: ticket.priorty || "",
                ticket_id: ticket.id,

            });
        }
    }, [ticket]);

    const handleClose = () => setShowSupport(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("ticketassign"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
            },
        });
        console.log(data);
    };

    return (
        <React.Fragment>
            <Modal
                show={showsupport}
                onHide={handleClose}
                placement="start"
                id="ModalTop"
                size="lg"
            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Assign Ticket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <pre>{JSON.stringify(userbyDept, undefined, 2)}</pre> */}
                    <Card>
                        <form onSubmit={onSubmit}>
                            <Card.Body>
                                <div className="col-md-12">
                                    <div className="row">

                                        <Card>
                                            <CardBody>
                                                <Row>
                                                    <div className="col-md-6">Title : {ticket.title}</div>
                                                    <div className="col-md-6">Status : {ticket.status}</div>
                                                    <div className="col-md-12">Description : {ticket.description}</div>

                                                    <div className="col-md-6">Organization : {ticket.organization_id}</div>

                                                    <div className="col-md-6">Entity : {ticket.entity_id}</div>
                                                    <div className="col-md-6">Issue Create Date: {ticket.create_date}</div>

                                                    <div className="col-md-6">Department: {ticket.department_name}</div>
                                                </Row>
                                                
                                            </CardBody>
                                        </Card>


                                        <div className="col-md-6">
                                            <Form.Label htmlFor="priorty" className="form-label">
                                                Priorty
                                            </Form.Label>
                                            <select 
                                                className="form-select form-control"
                                                name="priorty"
                                                value={data.priorty}
                                                onChange={(e: any) => setData("priorty", e.target.value)} 
                                                required
                                            >
                                                <option value=""></option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.priorty}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="assigned_to" className="form-label">
                                                Assign To 
                                            </Form.Label>
                                            <select 
                                                className="form-select form-control"
                                                name="assigned_to"
                                                value={data.assigned_to}
                                                onChange={(e: any) => setData("assigned_to", e.target.value)} 
                                                required
                                            >
                                                <option value=""></option>
                                                {userbyDept.map((users: any) => (
                                                    <option key={users.id} value={users.id}>
                                                    {users.name} - <span className="textupper">{users.support_title}</span>
                                                    </option>
                                                ))}
                                                
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.assigned_to}
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
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </form>
                    </Card>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
