import React, { useEffect, useState } from "react";
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
import { useForm } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Criticality({ show, setShow }: any) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: "",

    });



    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("criticality.storeapi"), {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // Reset form fields
                handleClose();

            },

        });
        // console.log(recentlySuccessful);

    };

    useEffect(() => {
        if (recentlySuccessful) {
            toast.success("Criticality Added");
        }
    }, [recentlySuccessful]);


    return (



        <React.Fragment>


            {/* Toast container to display notifications */}
            <ToastContainer />
            <Modal
                show={show}
                onHide={handleClose}
                placement="center"
                id="ModalTop"


            >
                <Modal.Header className="border-bottom" closeButton>
                    <Modal.Title id="ModalExampleLabel">
                        Add Criticality
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>


                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Criticality
                                            </Form.Label>
                                            <FormControl
                                                id="name"
                                                name="name"
                                                placeholder="Enter Location Name"
                                                value={data.name}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.name ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("name", e.target.value)}
                                                required
                                            ></FormControl>

                                        </div>


                                    </div>
                                </div>



                                <Row className="justify-content-md-center pt-3">

                                    <Col md={6}>
                                        <Button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={processing}
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </form>
                    </Card>

                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
}
