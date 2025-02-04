import React, { useEffect, useState } from "react";
import { Offcanvas, Form, Button, FormControl } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import axios from "axios";


const EditMenu = ({ show, setShow, menuId }: any) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: "",
        url: "",
        status: "",
    });

    useEffect(() => {
        if (menuId) {
            // Fetch the menu details by ID from the server (you can adjust this as needed)
            axios.get(route("menu.edit", menuId)).then((response) => {
                const menuData = response.data;
                setData({
                    name: menuData.name || "",
                    url: menuData.url || "",
                    status: menuData.status !== undefined ? menuData.status : "",
                });
            }).catch(error => {
                console.error("Failed to fetch menu details", error);
                // Optionally handle the error case
            });
        } else {
            // Reset the form if no menu ID is selected
            reset();
        }
    }, [menuId]);

    const handleClose = () => setShow(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        put(route("menu.update", menuId), {
            onSuccess: () => {
                reset();
                handleClose(); // Close the Offcanvas after success
            },
        });
    };

    return (
        <React.Fragment>

            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Edit Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form onSubmit={onSubmit}>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Form.Label htmlFor="name" className="form-label">
                                        Menu
                                    </Form.Label>
                                    <FormControl
                                        id="name"
                                        name="name"
                                        placeholder="Enter Menu Name"
                                        value={data.name}
                                        className={"form-control" + (errors.name ? " is-invalid" : "")}
                                        onChange={(e: any) => setData("name", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-md-12 pt-3">
                                    <Form.Label htmlFor="url" className="form-label">
                                        URL
                                    </Form.Label>
                                    <FormControl
                                        id="url"
                                        name="url"
                                        placeholder="Enter Menu URL"
                                        value={data.url}
                                        className={"form-control" + (errors.url ? " is-invalid" : "")}
                                        onChange={(e: any) => setData("url", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12 pt-3">
                                    <Form.Label htmlFor="status" className="form-label">
                                        Status
                                    </Form.Label>
                                    <select
                                        className="form-control form-select"
                                        onChange={(e: any) => setData("status", e.target.value)}
                                        name="status"
                                        value={data.status}
                                    >
                                        <option value=""></option>
                                        <option value="1">Active</option>
                                        <option value="0">Deactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-4">
                            <Button type="submit" className="btn btn-primary" disabled={processing}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>

    );
};

export default EditMenu;