import React, { useState } from "react";
import {
    Card,
    Modal,
    Row,
    Button,
    FormControl,
    Form,
} from "react-bootstrap";
import { Link, useForm, usePage } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inertia } from "@inertiajs/inertia";

export default function Bulkimport({ show, setShow }: any) {

    const { data, setData, post, processing, errors, reset } = useForm({
        file: null,
    });




    const handleClose = () => {
        setShow(false);
        // Reset form data when closing the modal
    };

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setFile(e.target.files[0]);
    //     }
    // };

    // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     if (file) {
    //         const formData = new FormData();
    //         formData.append("file", file);

    //         Inertia.post(route("assetsimport"), formData, {
    //             forceFormData: true,
    //         });
    //     } else {
    //         toast.error("Please select a file to upload.");
    //     }
    // };


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("assetsimport"), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                handleClose()
            },
        });
    };


    return (
        <React.Fragment>
            <ToastContainer />

            <Modal
                show={show}
                onHide={handleClose}
                placement="start"
                id="ModalLeft"
            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Bulk Import
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <div className="form-container">

                                <a href={`${window.location.origin}/sample/assets_sample.csv`} target="_blank" rel="noopener noreferrer">
                                    <Button className="btn btn-sm btn-soft-info mt-2 float-end">
                                        Download Sample File
                                    </Button>
                                </a>

                                <form
                                    onSubmit={onSubmit}
                                    encType="multipart/form-data"
                                    className="pt-5"
                                >
                                    <div className="form-group">
                                        <label className="form-label">Select CSV File </label>
                                        <Form.Control
                                            id="file"
                                            name="file"
                                            type="file"
                                            className={
                                                "mt-1 form-control" +
                                                (errors.file ? " is-invalid" : "")
                                            }
                                            onChange={(e: any) =>
                                                setData("file", e.target.files[0])
                                            }
                                        />
                                    </div>
                                    <Row>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <Button type="submit" className="btn btn-sm btn-block btn-soft-primary mt-2 col-md-12">
                                                Import
                                            </Button>
                                        </div>
                                    </Row>
                                </form>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
