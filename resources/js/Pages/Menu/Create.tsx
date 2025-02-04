import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import axios from "axios";

export default function Create({
  auth,
  assets,
  threats,
  riskcategory,
  controls,
}: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    riskcatId: "",
    applyrisk: "",
    assetId: "",
    availabilityvalue: "",
    valnerability: "",
    c: "",
    i: "",
    a: "",
    threatId: "",
    threatsvalue: "",
    valnerabilityvlaue: "",
    largest: "",
    controlId: "",
    provisionid: "",
    ownername: "",
    traetmentstatus: "",
    riskstrategy: "",
    closerdate: "",
    sumvalue: 0,
  });

  const [riskcatId, setRiskId] = useState({ riskcatId: "" });
  const [applyrisk, setApplyRisk] = useState([]);
  const [assetId, setAssetId] = useState({ assetId: "" });
  const [threatId, setThreatId] = useState([]);
  const [controlId, setControlId] = useState({ controlId: "" });
  const [assetowner, setOwner] = useState({ assetowner: "" });
  const [assetCategory, setAssetCategory] = useState("");
  const [assetLocation, setAssetLocation] = useState("");
  const [assettype, setAssetType] = useState("");
  const [vulnerability, setVulnerability] = useState("");

  const [provisions, setProvisions] = useState([]);

  useEffect(() => {
    if (data.assetId) {
      // axios.get(`/api/assets/${assetId}`)
      axios
        .get(`/get-assetdata/${data.assetId}`)
        .then((response) => {
          setAssetCategory(response.data.category.name);
          setOwner(response.data.owner);
          setAssetLocation(response.data.location.name);
          setAssetType(response.data.subcategory.name);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the asset description!",
            error
          );
        });
    } else {
      setAssetCategory("");
      //@ts-ignore
      setOwner("");
      setAssetLocation("");
      setAssetType("");
    }
  }, [data.assetId]);

  useEffect(() => {
    if (data.riskcatId) {
      // axios.get(`/api/assets/${assetId}`)
      axios
        .get(`/get-applyrisk/${data.riskcatId}`)
        .then((response) => {
          setApplyRisk(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the Risk!", error);
        });
    }
  }, [data.riskcatId]);

  useEffect(() => {
    if (data.applyrisk) {
      axios
        .get(`/get-applythreats/${data.applyrisk}`)
        .then((response) => {
          setThreatId(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the Risk Threats!", error);
        });
    } else {
      setThreatId([]);
    }
  }, [data.applyrisk]);

  useEffect(() => {
    if (data.threatId) {
      // axios.get(`/api/assets/${assetId}`)
      axios
        .get(`/get-vulerability/${data.threatId}`)
        .then((response) => {
          setVulnerability(response.data.vulerability);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the asset description!",
            error
          );
        });
    } else {
      setVulnerability("");
    }
  }, [data.threatId]);

  useEffect(() => {
    if (data.controlId) {
      // axios.get(`/api/assets/${assetId}`)
      axios
        .get(`/get-provisions/${data.controlId}`)
        .then((response) => {
          setProvisions(response.data.provisions);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the asset description!",
            error
          );
        });
    } else {
      setProvisions([]);
    }
  }, [data.controlId]);

  const [impactvalue, setImpactValues] = useState({
    c: 0,
    i: 0,
    a: 0,
    threatsvalue: 0,
    valnerabilityvlaue: 0,
  });

  const [largest, setLargest] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const largestValue = Math.max(impactvalue.c, impactvalue.i, impactvalue.a);
    setLargest(largestValue);

    setSum(
      impactvalue.valnerabilityvlaue + impactvalue.threatsvalue + largestValue
    );
  }, [impactvalue]);

  const handleChange = (e) => {
    setImpactValues({
      ...impactvalue,
      [e.name]: parseInt(e.value, 10),
    });

    const updatedData = {
      ...data,
      [e.name]: e.value,
      assetimpact: largest, // Update assetimpact with the correct value
      sumvalue: sum, // Update sum with the correct value
    };

    setData(updatedData);
  };

  const getBackgroundColor = (sum: any) => {
    if (sum > 7) {
      return "red";
    } else if (sum > 4) {
      return "yellow";
    } else {
      return "white";
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("riskregister.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      data: {
        ...data,
        assetimpact: largest,
        sum: sum,
      },
    });
    // console.log(data);
    // console.log(largest);
    // console.log(sum);
  };

  const customStyles = {
    multiValue: (styles: any) => ({
      ...styles,
      backgroundColor: "#3762ea",
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      backgroundColor: "#405189",
      color: "white",
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      color: "white",
      backgroundColor: "#405189",
      ":hover": {
        backgroundColor: "#405189",
        color: "white",
      },
    }),
  };

  return (
    <React.Fragment>
      <Head title="Risk Register" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Risk Register" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  {/* <pre>{JSON.stringify(assets, undefined, 2)}</pre> */}

                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="riskcatId" className="form-label">
                          Risk Category{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Select
                          // value={data.assetId}
                          onChange={handleChange}
                          options={riskcategory.map((rc: any) => ({
                            value: rc.id,
                            label: rc.name,
                            name: "riskcatId",
                          }))}
                          className="text-primary"
                          styles={{
                            singleValue: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                          }}
                          required
                        />
                        {/* <select id="riskcatId"
                          className="form-control form-select"
                          name="riskcatId"
                          value={data.riskcatId}
                          onChange={handleChange}>
                          <option></option>
                          {riskcategory.map((rc: any) => (
                            <option key={rc.id} value={rc.id}>
                              {rc.name}
                            </option>
                          ))}
                        </select> */}
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.riskcatId}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="risk" className="form-label">
                          Apply Risk <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Select
                          // value={data.assetId}
                          onChange={handleChange}
                          options={applyrisk.map((risk: any) => ({
                            value: risk.id,
                            label: risk.name,
                            name: "applyrisk",
                          }))}
                          className="text-primary"
                          styles={{
                            singleValue: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                          }}
                          required
                        />
                        {/* <select
                            id="risk"
                            className="form-control form-select"
                            name="applyrisk"
                            value={data.applyrisk}
                            onChange={handleChange}
                          >
                            <option></option>

                            {applyrisk.map((risk: any) => (
                              <option key={risk.id} value={risk.id}>
                                {risk.name}
                              </option>
                            ))}
                          </select> */}
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.applyrisk}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6}>
                        <Form.Label htmlFor="assetId" className="form-label">
                          Assets
                        </Form.Label>
                        <Select
                          // value={data.assetId}
                          onChange={handleChange}
                          options={assets.map((asset: any) => ({
                            value: asset.id,
                            label: asset.name,
                            name: "assetId",
                          }))}
                          className="text-primary"
                          styles={{
                            singleValue: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                          }}
                          required
                        />
                        {/* <select
                          id="assetId"
                          className="form-control form-select"
                          name="assetId"
                          value={data.assetId}
                          onChange={handleChange}
                        >
                          <option></option>
                          {assets.map((asset: any) => (
                            <option key={asset.id} value={asset.id}>
                              {asset.name}
                            </option>
                          ))}
                        </select> */}
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.assetId}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={12}>
                        {assetLocation && (
                          <div id="asset-description">
                            <Card className="bg-info text-white">
                              <CardHeader>Assets Details</CardHeader>
                              <CardBody>
                                <Row>
                                  <Col xl={4}>
                                    <Form.Label
                                      htmlFor="assetowner"
                                      className="form-label"
                                    >
                                      Assets Owner
                                    </Form.Label>

                                    <Form.Control
                                      id="assetowner"
                                      //@ts-ignore
                                      value={assetowner}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>

                                  <Col xl={4}>
                                    <Form.Label
                                      htmlFor="assetCategory"
                                      className="form-label"
                                    >
                                      Category
                                    </Form.Label>

                                    <Form.Control
                                      id="assetCategory"
                                      placeholder="0"
                                      value={assetCategory}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>

                                  <Col xl={4}>
                                    <Form.Label
                                      htmlFor="assettype"
                                      className="form-label"
                                    >
                                      Asset Type
                                    </Form.Label>

                                    <Form.Control
                                      id="assettype"
                                      placeholder="0"
                                      value={assettype}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>

                                  <Col xl={4}>
                                    <Form.Label
                                      htmlFor="assetLocation"
                                      className="form-label"
                                    >
                                      Asset Location
                                    </Form.Label>

                                    <Form.Control
                                      id="assetLocation"
                                      placeholder="0"
                                      value={assetLocation}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </div>
                        )}
                      </Col>

                      <Col lg={8}>
                        <Card className="bg-warning">
                          <CardHeader>Asset Value</CardHeader>
                          <CardBody>
                            <Col md={12}>
                              <Row>
                                <Col md={4}>
                                  <Form.Label
                                    htmlFor="c"
                                    className="form-label"
                                  >
                                    Confidentiality Value{" "}
                                    <span className="text-danger ms-1">*</span>
                                  </Form.Label>
                                  <Select
                                    onChange={handleChange}
                                    options={[
                                      { value: 0, label: 0, name: "c" },
                                      { value: 1, label: 1, name: "c" },
                                      { value: 2, label: 2, name: "c" },
                                      { value: 3, label: 3, name: "c" },
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
                                  {/* <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      value={impactvalue.c}
                                      id="c"
                                      name="c"
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select> */}
                                </Col>
                                <Col md={4}>
                                  <Form.Label
                                    htmlFor="name"
                                    className="form-label"
                                  >
                                    Integrity Value{" "}
                                    <span className="text-danger ms-1">*</span>
                                  </Form.Label>
                                  <Select
                                    onChange={handleChange}
                                    options={[
                                      { value: 0, label: 0, name: "i" },
                                      { value: 1, label: 1, name: "i" },
                                      { value: 2, label: 2, name: "i" },
                                      { value: 3, label: 3, name: "i" },
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
                                  {/* <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      id="i"
                                      name="i"
                                      value={impactvalue.i}
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select> */}
                                </Col>
                                <Col md={4}>
                                  <Form.Label
                                    htmlFor="name"
                                    className="form-label"
                                  >
                                    Availability Value{" "}
                                    <span className="text-danger ms-1">*</span>
                                  </Form.Label>{" "}
                                  <Select
                                    onChange={handleChange}
                                    options={[
                                      { value: 0, label: 0, name: "a" },
                                      { value: 1, label: 1, name: "a" },
                                      { value: 2, label: 2, name: "a" },
                                      { value: 3, label: 3, name: "a" },
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
                                  {/* <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      id="a"
                                      name="a"
                                      value={impactvalue.a}
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select> */}
                                </Col>
                              </Row>
                            </Col>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col lg={4}>
                        <Form.Label
                          htmlFor="valnerability"
                          className="form-label"
                        >
                          Assets Value (Impact){" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <Form.Control
                          name="assetimpact"
                          placeholder="0"
                          autoFocus
                          className={
                            "form-control" +
                            //@ts-ignore
                            (errors.assetimpact ? " is-invalid" : "")
                          }
                          id="largest"
                          value={largest}
                          readOnly
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {
                            //@ts-ignore
                            errors.assetimpact
                          }
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={6}>
                        <Form.Label htmlFor="threatId" className="form-label">
                          Threat <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Select
                          onChange={handleChange}
                          options={threats.map((threat: any) => ({
                            value: threat.id,
                            label: threat.name,
                            name: "threatId",
                          }))}
                          className="text-primary"
                          styles={{
                            singleValue: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                          }}
                          required
                        />
                        {/* <select
                          id="assetDropDown"
                          className="form-control form-select"
                          name="threatId"
                          value={data.threatId}
                          onChange={handleChange}
                        >
                          <option></option>
                          {threatId.map((threat: any) => (
                            <option key={threat.id} value={threat.id}>
                              {threat.name}
                            </option>
                          ))}
                        </select> */}
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.threatId}
                        </Form.Control.Feedback>
                      </Col>

                      <Col md={6}>
                        <Form.Label
                          htmlFor="valnerability"
                          className="form-label"
                        >
                          Vulnerability{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        {vulnerability && (
                          <div id="vulnerability">
                            <p className="form-control">{vulnerability}</p>
                          </div>
                        )}
                      </Col>

                      <Col xl={4}>
                        <Form.Label htmlFor="controlId" className="form-label">
                          Internal Control System{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Select
                          onChange={handleChange}
                          options={controls.map((control: any) => ({
                            value: control.id,
                            label: control.name,
                            name: "controlId",
                          }))}
                          className="text-primary"
                          styles={{
                            singleValue: (baseStyles, state) => ({
                              ...baseStyles,
                              color: "black",
                            }),
                          }}
                          required
                        />
                        {/* <select
                          id="controlId"
                          className="form-control form-select"
                          value={data.controlId}
                          name="controlId"
                          onChange={handleChange}
                        >
                          <option></option>
                          {controls.map((control: any) => (
                            <option key={control.id} value={control.id}>
                              {control.name}
                            </option>
                          ))}
                        </select> */}
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.controlId}
                        </Form.Control.Feedback>
                      </Col>

                      <Col md={8}>
                        <Row>
                          <Card className="bg-warning">
                            <CardHeader>Asset Value</CardHeader>
                            <CardBody>
                              <Col md={12}>
                                <Row>
                                  <Col md={4}>
                                    <Form.Label
                                      htmlFor="threatsvalue"
                                      className="form-label"
                                    >
                                      Threat Value{" "}
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
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
                                    {/* <select
                                      className="form-control form-select"
                                      id="threatsvalue"
                                      name="threatsvalue"
                                      onChange={handleChange}
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select> */}
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
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
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
                                    {/* <select
                                      className="form-control form-select"
                                      id="valnerabilityvlaue"
                                      name="valnerabilityvlaue"
                                      onChange={handleChange}
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </select> */}
                                    <Form.Control.Feedback
                                      type="invalid"
                                      className="mt-2 d-block"
                                    >
                                      {errors.valnerabilityvlaue}
                                    </Form.Control.Feedback>
                                  </Col>
                                  <Col md={4}>
                                    <Form.Label
                                      htmlFor="sum"
                                      className="form-label"
                                    >
                                      Risk Value{" "}
                                      <span className="text-danger ms-1">
                                        *
                                      </span>
                                    </Form.Label>
                                    <Form.Control
                                      id="sum"
                                      name="sum"
                                      placeholder="0"
                                      value={sum}
                                      style={{
                                        backgroundColor:
                                          getBackgroundColor(sum),
                                      }}
                                      className={
                                        "form-control" +
                                        //@ts-ignore
                                        (errors.sum ? " is-invalid" : "")
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
                                        errors.sum
                                      }
                                    </Form.Control.Feedback>
                                  </Col>
                                </Row>
                              </Col>
                            </CardBody>
                          </Card>
                        </Row>
                      </Col>

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="provisionid"
                          className="form-label"
                        >
                          Activity/ Control details (Reasons for Acceptance){" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        {provisions.length > 0 && (
                          <Select
                            onChange={(e: any) =>
                              setData("provisionid", e.value)
                            }
                            options={provisions.map((provision: any) => ({
                              value: provision.id,
                              label: provision.provisions,
                            }))}
                            className="text-primary"
                            styles={{
                              singleValue: (baseStyles, state) => ({
                                ...baseStyles,
                                color: "black",
                              }),
                            }}
                            required
                          />
                          // <select
                          //   className="form-control form-select"
                          //   name="provisionid"
                          //   onChange={(e: any) =>
                          //     setData("provisionid", e.target.value)
                          //   }
                          //   required
                          // >
                          //   <option value="">Select a Activity</option>
                          //   {provisions.map((provision) => (
                          //     <option key={provision.id} value={provision.id}>
                          //       {provision.provisions}
                          //     </option>
                          //   ))}
                          // </select>
                        )}

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.provisionid}
                        </Form.Control.Feedback>
                      </Col>

                      <Col md={6}>
                        <Form.Label htmlFor="ownername" className="form-label">
                          Risk Owner Name{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="ownername"
                          name="ownername"
                          placeholder="Enter Risk Owner Name"
                          value={data.ownername}
                          className={
                            "form-control" +
                            (errors.ownername ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("ownername", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.ownername}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={4}>
                        <Form.Label
                          htmlFor="traetmentstatus"
                          className="form-label"
                        >
                          Risk Treatment Required{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <Select
                          onChange={(e: any) =>
                            setData("traetmentstatus", e.value)
                          }
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
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
                        {/* <select
                          id="traetmentstatus"
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("traetmentstatus", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select> */}

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.traetmentstatus}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={4}>
                        <Form.Label
                          htmlFor="riskstrategy"
                          className="form-label"
                        >
                          Risk strategy{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Select
                          onChange={(e: any) =>
                            setData("riskstrategy", e.value)
                          }
                          options={[
                            { value: "accept", label: "Accept" },
                            { value: "avoid", label: "Avoid" },
                            { value: "transfer", label: "Transfer" },
                            { value: "reduce", label: "Reduce" },
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
                        {/* <select
                          id="riskstrategy"
                          name="riskstrategy"
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("riskstrategy", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="accept">Accept</option>
                          <option value="avoid">Avoid</option>
                          <option value="transfer">Transfer</option>
                          <option value="reduce">Reduce</option>
                        </select> */}

                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.riskstrategy}
                        </Form.Control.Feedback>
                      </Col>

                      <Col md={4}>
                        <Form.Label htmlFor="closerdate" className="form-label">
                          Plan Closer Date{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="closerdate"
                          type="date"
                          name="closerdate"
                          className={
                            "form-control" +
                            (errors.closerdate ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("closerdate", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.closerdate}
                        </Form.Control.Feedback>
                      </Col>

                      {/* <pre>{JSON.stringify(provisions, undefined, 2)}</pre> */}
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("assetcategory.index")}
                          className="btn btn-light w-100"
                        >
                          Cancel
                        </Link>
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
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

Create.layout = (page: any) => <Layout children={page} />;
