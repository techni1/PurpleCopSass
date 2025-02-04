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


export default function AddTicket({ show, setShow,  departments}: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        departmentid:"",
        support_user:"",
        support_title:"",
       
    });

    // @ts-ignore

     const [assign, setAssign] = useState([]);

    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);


    
    const handleDepartmentChange = async (departmentid: string) => {
        setData("departmentid", departmentid); // Update the selected organization ID in state
        if (departmentid) {
            try {
                const response = await axios.get(`/departmentuser/${departmentid}`); // Replace with your actual API endpoint
                setAssign(response.data); // Update the entities state with the fetched data
            } catch (error) {
                console.error("Error fetching users:", error);
                setAssign([]); // Reset entities if there's an error
            }
        } else {
            setAssign([]); // Reset entities if no organization is selected
        }
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("supportteammanage.store"), {
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
                        New Support Member
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
                                            <Form.Label htmlFor="departmentid" className="form-label">
                                                Department
                                            </Form.Label>
                                            <select 
                                            className="form-select form-control"
                                            name="departmentid"
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
                                                {errors.departmentid}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="assign_to" className="form-label">
                                                Assign To
                                            </Form.Label>
                                            <select
                                                id="support_user"
                                                className="form-control form-select"
                                                value={data.support_user} // Adjust this to the correct state key
                                                onChange={(e: any) => setData("support_user", e.target.value)} // Update the selected entity in state
                                            >
                                                <option value="">Select Assignee</option>
                                                {assign.map((support: any) => (
                                                    <option key={support.id} value={support.id}>
                                                        {support.name}
                                                    </option>
                                                ))}
                                            </select>
                                            
                                            

                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.support_user}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="support_title" className="form-label">
                                               Support Role
                                            </Form.Label>
                                            <select 
                                            className="form-select form-control"
                                            name="support_title"
                                            onChange={(e: any) => setData("support_title", e.target.value)} 
                                            required
                                            >
                                                <option value=""></option>
                                                <option value="head">Head</option>
                                                <option value="support assistant">Support Assistant</option>
                                                <option value="team lead">Team Lead</option>
                                                
                                              
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.support_title}
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

                </Modal.Body >
            </Modal >
        </React.Fragment >
    );
}
