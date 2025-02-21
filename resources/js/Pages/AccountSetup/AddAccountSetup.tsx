import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,

    Row,
    Form,
    Button,
    Offcanvas
} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import axios from "axios";

export default function AddAccountSetup({ show, setShow, organizations }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        organization_id: "",
        entity_id: "",
        folder_name: "",
        description: "",
        db_name: "",
        db_host: "",
        db_port: "",
        db_username: "",
        db_password: "",
        db_driver: "",
        status: "1",
        
      
    });

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

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("accountsetup.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // Reset form fields
                handleClose(); // Close the Offcanvas
            },
        });
    };

    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={handleClose} id="OffcanvasTop">
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title>Add Account </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card>
                        <CardHeader>Account Details</CardHeader>
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
                                                {organizations.map((odata: any) => (
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
                                        
                                    

                                    <div className="col-md-6 pt-3">
                                        <Form.Label htmlFor="entity_id" className="form-label">
                                            Account Name
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="master_key"
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
                                    <div className="col-md-6 pt-3">
                                        <Form.Label htmlFor="folder_name" className="form-label">
                                            Folder Name
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="master_key"
                                            name="folder_name"
                                            value={data.folder_name}
                                            className={
                                                "form-control" + (errors.folder_name ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("folder_name", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.folder_name}
                                        </Form.Control.Feedback>

                                    </div>
                                    <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_host" className="form-label">
                                            DataBase Host
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_host"
                                            name="db_host"
                                            value={data.db_host}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_host ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_host", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_host}
                                        </Form.Control.Feedback>

                                        </div>
                                        
                                        <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_port" className="form-label">
                                            Port Number
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_port"
                                            name="db_port"
                                            value={data.db_port}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_port ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_port", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_port}
                                        </Form.Control.Feedback>

                                    </div>


                                    <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_name" className="form-label">
                                            DataBase Name
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_name"
                                            name="db_name"
                                            value={data.db_name}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_name ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_name", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_name}
                                        </Form.Control.Feedback>

                                    </div>
                                    <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_username" className="form-label">
                                            Database UserName
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_username"
                                            name="db_username"
                                            value={data.db_username}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_username ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_username", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_username}
                                        </Form.Control.Feedback>

                                    </div>
                                    <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_password" className="form-label">
                                            Database Password
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_password"
                                            name="db_password"
                                            value={data.db_password}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_password ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_password", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_password}
                                        </Form.Control.Feedback>

                                    </div>
                                    <div className="col-md-4 pt-3">
                                        <Form.Label htmlFor="db_driver" className="form-label">
                                            Database Driver
                                        </Form.Label>
                                        
                                        <Form.Control
                                            id="db_driver"
                                            name="db_driver"
                                            value={data.db_driver}
                                            autoFocus
                                            className={
                                                "form-control" + (errors.db_driver ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) => setData("db_driver", e.target.value)}
                                            required
                                        />
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.db_driver}
                                        </Form.Control.Feedback>

                                    </div>
                                   
                                        

                                    <div className="col-md-12 pt-3">
                                        <Form.Label htmlFor="description" className="form-label">
                                            Note (Optional)
                                        </Form.Label>
                                        
                                            <textarea
                                                className="form-control" name="description"
                                                id="description"
                                                
                                                onChange={(e: any) => setData("description", e.target.value)}
                                            ></textarea>

                                        
                                        <Form.Control.Feedback
                                            type="invalid"
                                            className="mt-2 d-block"
                                        >
                                            {errors.description}
                                        </Form.Control.Feedback>

                                    </div>
                                        
                                </div>
                                    
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">
                                    <Col md={12}>
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
        </React.Fragment>
    );
}
