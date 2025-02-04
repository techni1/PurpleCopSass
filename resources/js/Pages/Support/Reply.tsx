import React, { useState } from "react";
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


export default function Reply({ showreply, setShowReply, ticket}: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        departmentid:"",
        assign_to:"",
        priorty:"",
        description: "",

    });

    // @ts-ignore
   
    

    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);


    
   

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("supporttickets.assign"), {
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
                show={show}
                onHide={handleClose}
                placement="start"
                id="ModalTop"
                size="lg"

            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        New Ticket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <pre>{JSON.stringify(organization, undefined, 2)}</pre> */}
                    <Card>
                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">

                                        
                                        


                                        <div className="col-md-6">
                                            <Form.Label htmlFor="assign_to" className="form-label">
                                                Department
                                            </Form.Label>
                                            <select 
                                            className="form-select form-control"
                                            name="assign_to"
                                            required
                                            onChange={(e: any) => handleDepartmentChange(e.target.value)}
                                            >
                                                <option></option>
                                                
                                                {departments?.map((dept: any) => (
                                                    <option key={dept.id} value={dept.id}>
                                                        {dept.name}
                                                    </option>
                                                ))}
                                            </select>



                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.assign_to}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="assign_to" className="form-label">
                                                Assign To
                                            </Form.Label>
                                            <select
                                                id="assign_to"
                                                className="form-control form-select"
                                                value={data.assign_to} // Adjust this to the correct state key
                                                onChange={(e: any) => setData("assign_to", e.target.value)} // Update the selected entity in state
                                            >
                                                <option value="">Select Assignee</option>
                                                {assign.map((support: any) => (
                                                    <option key={support.id} value={support.id}>
                                                        {support.name}
                                                    </option>
                                                ))}
                                            </select>
                                            
                                            

                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.assign_to}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="priorty" className="form-label">
                                               Priorty
                                            </Form.Label>
                                            <select 
                                            className="form-select form-control"
                                            name="priorty"
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
                                        

                                        <div className="col-md-12">
                                            <Form.Label htmlFor="description" className="form-label">
                                                Detail
                                            </Form.Label>
                                            <Textarea
                                                id="description"
                                                className="form-control"
                                                onChange={(e: any) => setData("description", e.target.value)}
                                            ></Textarea>
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

                </Modal.Body >
            </Modal >
        </React.Fragment >
    );
}
