import React, { useEffect, useState } from "react";
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
import axios from "axios";


export default function Result({ show, setShow, topicdata }: any) {
    const { processing, errors, reset } = useForm({
        name: "",

    });



    const handleClose = () => setShow(false);
    const [isBottom, setIsBottom] = useState<boolean>(false);

    let index = 0;

    const [resultData, setResultData] = useState<any[]>([]);



    useEffect(() => {
        if (topicdata) {
            axios.get(`/getresult/${topicdata.id}`).then((response) => {
                setResultData(response.data); // Assuming response data includes `assigned` status for each user
            }).catch(error => {
                console.error("Failed to fetch user details", error);
            });
        }
    }, [topicdata]);





    return (
        <React.Fragment>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start"
                id="offcanvasTop"

            >
                {/* <pre>{JSON.stringify(topicdata, undefined, 2)}</pre> */}
                <Offcanvas.Header className="border-bottom" closeButton>
                    <Offcanvas.Title id="offcanvasExampleLabel">
                        Topic Name :- {topicdata.name}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Card>
                        {/* <pre>{JSON.stringify(resultData, undefined, 2)}</pre> */}


                        <Card.Body>


                            <Col xl={12}>
                                <Row>
                                    <Col xl={2}>SN.</Col>
                                    <Col xl={8}>Name</Col>
                                    <Col xl={2}>Score</Col>

                                </Row>
                            </Col>


                            <Col xl={12}>

                                {resultData &&


                                    resultData.map((result: any) => (
                                        <Row>
                                            <Col xl={2}>{++index}</Col>
                                            <Col xl={8}>{result.user.name}</Col>
                                            <Col xl={2}>{result.score}</Col>
                                        </Row>
                                    )
                                    )


                                }





                            </Col>



                        </Card.Body>


                    </Card>

                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
}
