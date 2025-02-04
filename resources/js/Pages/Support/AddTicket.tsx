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


export default function AddTicket({ show, setShow, organization,  departments}: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        organization_id:"",
        entity_id: "",
        department_id:"",
        assign_to:"",
        priorty:"",
        description: "",

    });

    // @ts-ignore
   
     const [entities, setEntities] = useState([]);
     const [assign, setAssign] = useState([]);

    const handleClose = () => setShow(false);

    const [isBottom, setIsBottom] = useState<boolean>(false);


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
    const handleDepartmentChange = async (department_id: string) => {
        setData("department_id", department_id); // Update the selected organization ID in state
        if (department_id) {
            try {
                const response = await axios.get(`/departmentuser/${department_id}`); // Replace with your actual API endpoint
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
        post(route("supporttickets.store"), {
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

                                        <div className="col-md-12">
                                            <Form.Label htmlFor="title" className="form-label">
                                               Title
                                            </Form.Label>
                                            <Form.Control
                                                id="title"
                                                name="title"
                                                value={data.title}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.title ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("title", e.target.value)}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.title}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label htmlFor="bank_name" className="form-label">
                                                Organization
                                            </Form.Label>
                                            
                                            <select 
                                            className="form-select form-control"
                                            onChange={(e: any) => handleOrganizationChange(e.target.value)}
                                            name="organization_id"
                                            required
                                            >
                                                <option></option>
                                                
                                                {organization?.map((odata: any) => (
                                                    <option key={odata.id} value={odata.id}>
                                                        {odata.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                                                {errors.organization_id}
                                            </Form.Control.Feedback>
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

                                        <div className="col-md-6">
                                            <Form.Label htmlFor="department_id" className="form-label">
                                                Department
                                            </Form.Label>
                                            <select 
                                            className="form-select form-control"
                                            name="department_id"
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
                                                {errors.department_id}
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
