import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Offcanvas,
    Row,
    Form,
    Button,
    FormControl,

} from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { Select } from "@headlessui/react";


export default function AddMenu({ show, setShow, menu }: any) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        menuid: "",
        url: "",
        status: "",
    });



    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);


    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route("submenu.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();        // Reset form fields
                handleClose();  // Close the Offcanvas
            },

        });
        console.log(data);

    };

    return (
        <React.Fragment>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start"
                id="offcanvasTop"

            >
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="offcanvasExampleLabel">
                        Add New SubMenu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <pre>{JSON.stringify(menu, undefined, 2)}</pre> */}
                    <Card>
                        <CardHeader>SubMenu Details</CardHeader>

                        <form onSubmit={onSubmit}>
                            <Card.Body>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Menu
                                            </Form.Label>
                                            <FormControl
                                                id="name"
                                                name="name"
                                                placeholder="Enter SubMenu Name"
                                                value={data.name}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.name ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("name", e.target.value)}
                                                required
                                            ></FormControl>

                                        </div>

                                        <div className="col-md-12 pt-3">
                                            <Form.Label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Sub Menu
                                            </Form.Label>

                                            <select
                                                className="form-select"
                                                onChange={(e: any) =>
                                                    setData("menuid", e.target.value)
                                                }
                                                name="category_id"
                                                required
                                            >
                                                <option></option>

                                                {menu.map((mdata: any) => (
                                                    <option value={mdata.id}>{mdata.name}</option>
                                                ))}

                                            </select>
                                        </div>




                                        <div className="col-md-12 pt-3">
                                            <Form.Label
                                                htmlFor="assetowner"
                                                className="form-label"
                                            >
                                                URL
                                            </Form.Label>
                                            <FormControl
                                                id="url"
                                                name="url"
                                                placeholder="Enter Menu URL (Optional)"
                                                value={data.url}
                                                autoFocus
                                                className={
                                                    "form-control" + (errors.url ? " is-invalid" : "")
                                                }
                                                onChange={(e: any) => setData("url", e.target.value)}

                                            ></FormControl></div>
                                        <div className="col-md-12  pt-3">
                                            <Form.Label
                                                htmlFor="status"
                                                className="form-label"
                                            >
                                                Status
                                            </Form.Label>

                                            <select
                                                className="form-control form-select"
                                                onChange={(e: any) =>
                                                    setData("status", e.target.value)
                                                }
                                                name="status"
                                                required
                                            >
                                                <option></option>
                                                <option value="1">Active</option>
                                                <option value="0">Deactive</option>
                                            </select>



                                        </div>
                                    </div>
                                </div>

                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-md-center">
                                    <Col xl={2} md={6}>

                                    </Col>
                                    <Col xl={2} md={6}>
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
