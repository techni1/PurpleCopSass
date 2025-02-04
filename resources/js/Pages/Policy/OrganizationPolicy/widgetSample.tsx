import React from "react";
import CountUp from "react-countup";
import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import shield from "../../../images/shield-2.png";
import { STATUS_CLASS_MAP, STATUS_TEXT_MAP } from "../../../Components/constants/statusConstant";


const WidgetSample = ({ }: any) => {
    return (
        <React.Fragment>
            <ButtonGroup aria-label="Basic checkbox toggle button group">
                <Card className="card-animate" style={{ margin: '0 25px 1.5rem 25px' }}>
                    <input type="checkbox" className="btn-check" id="btncheck1" defaultValue='' />
                    <Button as='label' variant='light' className="mb-0 material-shadow-none" htmlFor="btncheck1" style={{ border: 'none' }}>

                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className={" overflow-hidden" + STATUS_CLASS_MAP["submitted"]} style={{ fontSize: '18px', fontWeight: '500' }} >
                                    <span className={"text-nowrap"} >
                                        {"type"
                                            ? STATUS_TEXT_MAP["submitted"] + " " + "type"
                                            : STATUS_TEXT_MAP["submitted"]}
                                    </span>
                                </div>
                                {/* <img src={shield} alt="" height="35" /> */}


                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-1 fw-semibold ff-secondary">
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp start={0} end={125} duration={0.25} />
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Button>
                </Card>
                <Card className="card-animate" style={{ margin: '0 25px 1.5rem 25px' }}>
                    <input type="checkbox" className="btn-check" id="btncheck2" defaultValue='' />
                    <Button as='label' variant='light' className="mb-0 material-shadow-none" htmlFor="btncheck2" style={{ border: 'none' }}>

                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className={" overflow-hidden" + STATUS_CLASS_MAP["submitted"]} style={{ fontSize: '18px', fontWeight: '500' }} >
                                    <span className={"text-nowrap"} >
                                        {"type"
                                            ? STATUS_TEXT_MAP["submitted"] + " " + "type"
                                            : STATUS_TEXT_MAP["submitted"]}
                                    </span>
                                </div>
                                {/* <img src={shield} alt="" height="35" /> */}


                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-1 fw-semibold ff-secondary">
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp start={0} end={125} duration={0.25} />
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Button>
                </Card>
                <Card className="card-animate" style={{ margin: '0 25px 1.5rem 25px' }}>
                    <input type="checkbox" className="btn-check" id="btncheck3" defaultValue='' />
                    <Button as='label' variant='light' className="mb-0 material-shadow-none" htmlFor="btncheck3" style={{ border: 'none' }}>

                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className={" overflow-hidden" + STATUS_CLASS_MAP["submitted"]} style={{ fontSize: '18px', fontWeight: '500' }} >
                                    <span className={"text-nowrap"} >
                                        {"type"
                                            ? STATUS_TEXT_MAP["submitted"] + " " + "type"
                                            : STATUS_TEXT_MAP["submitted"]}
                                    </span>
                                </div>
                                {/* <img src={shield} alt="" height="35" /> */}


                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-1 fw-semibold ff-secondary">
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp start={0} end={125} duration={0.25} />
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Button>
                </Card>
                <Card className="card-animate" style={{ margin: '0 25px 1.5rem 25px' }}>
                    <input type="checkbox" className="btn-check" id="btncheck4" defaultValue='' />
                    <Button as='label' variant='light' className="mb-0 material-shadow-none" htmlFor="btncheck4" style={{ border: 'none' }}>

                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className={" overflow-hidden" + STATUS_CLASS_MAP["submitted"]} style={{ fontSize: '18px', fontWeight: '500' }} >
                                    <span className={"text-nowrap"} >
                                        {"type"
                                            ? STATUS_TEXT_MAP["submitted"] + " " + "type"
                                            : STATUS_TEXT_MAP["submitted"]}
                                    </span>
                                </div>
                                {/* <img src={shield} alt="" height="35" /> */}


                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-1 fw-semibold ff-secondary">
                                        <span className="counter-value" data-target="559.25">
                                            <CountUp start={0} end={125} duration={0.25} />
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Button>
                </Card>




            </ButtonGroup>

        </React.Fragment>
    );
};

export default WidgetSample;
