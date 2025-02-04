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
import { Head, Link, useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Select from "react-select";

export default function ResidualRisk({ show, setShow, risk }: any) {
  const {
    data,
    setData,
    patch,
    processing,
    errors,
    reset,
    recentlySuccessful,
  } = useForm({
    threatId: "",
    threatsvalue: 0,
    valnerabilityvlaue: 0,
    sum: 0,
  });

  const handleClose = () => setShow(false);

  const [threatId, setThreatId] = useState([]);
  const [vulnerability, setVulnerability] = useState("");

  const [sum, setSum] = useState(0);

  // This function handles changes from standard input elements.
  const handleSelectChange = (selectedOption: any) => {
    setData("threatId", selectedOption?.value || "");
  };

  // This function handles changes from standard input elements and select elements.
  const handleChange = (selectedOption: any) => {
    const { name, value } = selectedOption.target
      ? selectedOption.target
      : selectedOption;
    setData(name, value);
  };

  useEffect(() => {
    if (recentlySuccessful) {
      toast.success("Residual Risk Value updated");
    }
  }, [recentlySuccessful]);

  useEffect(() => {
    const calculatedSum =
      Number(data.threatsvalue) +
      Number(data.valnerabilityvlaue) +
      (risk.assetvalue || 0);
    // setSum(calculatedSum);

    setData("sum", calculatedSum);
  }, [data.threatsvalue, data.valnerabilityvlaue, risk.assetvalue]);

  const getBackgroundColor = (sum: any) => {
    if (sum > 6) {
      return "red";
    } else if (sum > 4) {
      return "yellow";
    } else {
      return "white";
    }
  };

  useEffect(() => {
    if (risk) {
      axios
        .get(route("getthreatsAPI"))
        .then((response) => {
          setThreatId(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch threats details", error);
        });
    }
  }, [risk]);

  useEffect(() => {
    if (data.threatId) {
      axios
        .get(`/get-vulerability/${data.threatId}`)
        .then((response) => {
          setVulnerability(response.data.vulerability);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the vulnerability description!",
            error
          );
        });
    } else {
      setVulnerability("");
    }
  }, [data.threatId]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    patch(route("riskregister.update", { id: risk.id }), {
      preserveScroll: true,
      onSuccess: () => {
        reset(); // Reset form fields
        handleClose(); // Close the Modal
      },
      data: {
        ...data,
        sum: sum,
      },
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        id="offcanvasTop"
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            Residual Risk
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card>
            <CardHeader>Risk Details</CardHeader>
            <form onSubmit={onSubmit}>
              <Card.Body>
                <Card className="text-white bg-info">
                  <CardHeader>Previous details</CardHeader>
                  <CardBody>
                    <Col md={12}>
                      <Row>
                        <Col md={6}>
                          <Form.Label htmlFor="name" className="form-label">
                            Apply Risk
                          </Form.Label>
                          <FormControl
                            id="name"
                            name="name"
                            placeholder="Enter Risk Name"
                            value={risk?.risk?.name || ""}
                            className={
                              "form-control" +
                              (errors.name ? " is-invalid" : "")
                            }
                            onChange={handleChange}
                            required
                          ></FormControl>
                        </Col>

                        {risk.assest && (
                          <Col md={6}>
                            <Form.Label
                              htmlFor="assetName"
                              className="form-label"
                            >
                              Assets Name
                            </Form.Label>
                            <FormControl
                              id="assetName"
                              name="assetName"
                              placeholder="Asset Name"
                              value={risk.assest.name}
                              className={
                                "form-control" +
                                (errors.assetName ? " is-invalid" : "")
                              }
                              onChange={handleChange}
                              required
                            ></FormControl>
                          </Col>
                        )}

                        {risk.threats && (
                          <div className="col-md-12 pt-2">
                            <Form.Label htmlFor="name" className="form-label">
                              Previous Threats
                            </Form.Label>
                            <FormControl
                              value={risk.threats.name}
                              className={
                                "form-control" +
                                (errors.name ? " is-invalid" : "")
                              }
                              readOnly
                            ></FormControl>

                            <div className="col-md-12 pt-2">
                              <Form.Label htmlFor="name" className="form-label">
                                Previous Vulnerability
                              </Form.Label>
                              <FormControl
                                value={risk.threats.vulerability}
                                className={
                                  "form-control" +
                                  (errors.name ? " is-invalid" : "")
                                }
                                readOnly
                              ></FormControl>
                            </div>
                          </div>
                        )}

                        {risk.assetvalue && (
                          <div className="col-md-6 pt-2">
                            <Form.Label htmlFor="name" className="form-label">
                              CIA Value
                            </Form.Label>
                            <FormControl
                              id="name"
                              readOnly
                              value={risk.assetvalue}
                              className={
                                "form-control" +
                                (errors.name ? " is-invalid" : "")
                              }
                            ></FormControl>
                          </div>
                        )}

                        {risk.risk_value && (
                          <div className="col-md-6 pt-2">
                            <Form.Label htmlFor="name" className="form-label">
                              Previous Risk Value
                            </Form.Label>
                            <FormControl
                              id="name"
                              value={risk.risk_value}
                              className={
                                "form-control" +
                                (errors.name ? " is-invalid" : "")
                              }
                              readOnly
                            ></FormControl>
                          </div>
                        )}
                      </Row>
                    </Col>
                  </CardBody>
                </Card>

                {/* Threat Dropdown */}
                <Row>
                  <Col md={12}>
                    <Form.Label htmlFor="threatId" className="form-label">
                      Apply Threats
                    </Form.Label>
                    <Select
                      id="threatId"
                      onChange={handleSelectChange}
                      options={threatId.map((threat: any) => ({
                        value: threat.id,
                        label: threat.name,
                      }))}
                      className="text-primary"
                      styles={{
                        singleValue: (baseStyles) => ({
                          ...baseStyles,
                          color: "black",
                        }),
                      }}
                      required
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="mt-2 d-block"
                    >
                      {errors.threatId}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                {/* Vulnerability Section */}
                {vulnerability && (
                  <Row>
                    <Col md={12} className="pt-2">
                      <Form.Label
                        htmlFor="vulnerability"
                        className="form-label"
                      >
                        Applied Vulnerability
                      </Form.Label>
                      <p id="vulnerability" className="form-control">
                        {vulnerability}
                      </p>
                    </Col>
                  </Row>
                )}

                <Card>
                  <CardHeader>Residual Risk</CardHeader>
                  <CardBody>
                    <Col md={12}>
                      <Row>
                        <Col md={4}>
                          <Form.Label
                            htmlFor="threatsvalue"
                            className="form-label"
                          >
                            Threat Value{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Select
                            onChange={handleChange}
                            options={[
                              {
                                value: 0,
                                label: 0,
                                name: "threatsvalue",
                              },
                              {
                                value: 1,
                                label: 1,
                                name: "threatsvalue",
                              },
                              {
                                value: 2,
                                label: 2,
                                name: "threatsvalue",
                              },
                              {
                                value: 3,
                                label: 3,
                                name: "threatsvalue",
                              },
                            ]}
                            className="text-primary"
                            styles={{
                              singleValue: (baseStyles, state) => ({
                                ...baseStyles,
                                color: "black",
                              }),
                            }}
                            required
                          />

                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.threatsvalue}
                          </Form.Control.Feedback>
                        </Col>
                        <Col md={4}>
                          <Form.Label
                            htmlFor="valnerabilityvlaue"
                            className="form-label"
                          >
                            Vulnerability Value{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Select
                            onChange={handleChange}
                            options={[
                              {
                                value: 0,
                                label: 0,
                                name: "valnerabilityvlaue",
                              },
                              {
                                value: 1,
                                label: 1,
                                name: "valnerabilityvlaue",
                              },
                              {
                                value: 2,
                                label: 2,
                                name: "valnerabilityvlaue",
                              },
                              {
                                value: 3,
                                label: 3,
                                name: "valnerabilityvlaue",
                              },
                            ]}
                            className="text-primary"
                            styles={{
                              singleValue: (baseStyles, state) => ({
                                ...baseStyles,
                                color: "black",
                              }),
                            }}
                            required
                          />

                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.valnerabilityvlaue}
                          </Form.Control.Feedback>
                        </Col>
                        <Col md={4}>
                          <Form.Label htmlFor="sumvalue" className="form-label">
                            Risk Value{" "}
                            <span className="text-danger ms-1">*</span>
                          </Form.Label>
                          <Form.Control
                            id="sumvalue"
                            name="sumvalue"
                            placeholder="0"
                            value={data.sum}
                            style={{
                              backgroundColor: getBackgroundColor(data.sum),
                            }}
                            className={
                              "form-control" +
                              //@ts-ignore
                              (errors.sumvalue ? " is-invalid" : "")
                            }
                            onChange={handleChange}
                            readOnly
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {
                              //@ts-ignore
                              errors.sumvalue
                            }
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Card>
              </Card.Body>
              <Card.Footer>
                <Row className="justify-content-md-center">
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
