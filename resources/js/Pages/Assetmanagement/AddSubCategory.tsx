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

export default function AddCategory({ show, setShow, category }: any) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: "",
        categoryid: "",

    });



    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("subcategory.storeapi"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Modal
            },

        });
        //  console.log(data);

    };

    useEffect(() => {
        if (recentlySuccessful) {
            toast.success("Type Added");
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
                        Add Type
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>


                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">





                                        <Col xl={12}>
                                            <Form.Label htmlFor="name" className="form-label">
                                                Select Category{" "}
                                                <span className="text-danger ms-1">*</span>
                                            </Form.Label>
                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) =>
                                                    setData("categoryid", e.target.value)
                                                }
                                                name="framework_id"
                                                required
                                            >
                                                <option></option>

                                                {category.map((category: any) => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))}
                                            </select>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="mt-2 d-block"
                                            >
                                                {errors.categoryid}
                                            </Form.Control.Feedback>
                                        </Col>





                                        <div className="col-md-12">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Type
                                            </Form.Label>
                                            <FormControl
                                                id="name"
                                                name="name"
                                                placeholder="Enter Category Name"
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

                            </Card.Body>
                        </form>
                    </Card>

                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
