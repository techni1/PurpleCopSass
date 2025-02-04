import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import axios from "axios";

export default function Create({ auth, assets, threats, controls }: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    assetid: "",
    status: "",
    assetvalue: "",
    availabilityvalue: "",

    valnerability: "",


  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("threats.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });

  };


  const [assetId, setAssetId] = useState('');
  const [threatId, setThreatId] = useState('');
  const [controlId, setControlId] = useState('');
  const [assetowner, setOwner] = useState('');
  const [assetCategory, setAssetCategory] = useState('');
  const [assetLocation, setAssetLocation] = useState('');
  const [assettype, setAssetType] = useState('');
  const [vulnerability, setVulnerability] = useState('');
  const [provisions, setProvisions] = useState([]);



  useEffect(() => {
    if (assetId) {
      // axios.get(`/api/assets/${assetId}`)
      axios.get(`/get-assetdata/${assetId}`)
        .then(response => {
          setAssetCategory(response.data.category.name);
          setOwner(response.data.owner);
          setAssetLocation(response.data.location.name);
          setAssetType(response.data.subcategory.name);
        })
        .catch(error => {
          console.error('There was an error fetching the asset description!', error);
        });
    } else {
      setAssetCategory('');
      setOwner('');
      setAssetLocation('');
      setAssetType('');
    }
  }, [assetId]);


  useEffect(() => {
    if (threatId) {
      // axios.get(`/api/assets/${assetId}`)
      axios.get(`/get-threats/${threatId}`)
        .then(response => {
          setVulnerability(response.data.vulerability);

        })
        .catch(error => {
          console.error('There was an error fetching the asset description!', error);
        });
    } else {
      setVulnerability('');

    }
  }, [threatId]);


  useEffect(() => {
    if (controlId) {
      // axios.get(`/api/assets/${assetId}`)
      axios.get(`/get-provisions/${controlId}`)
        .then(response => {
          setProvisions(response.data.provisions);

        })
        .catch(error => {
          console.error('There was an error fetching the asset description!', error);
        });
    } else {
      setProvisions([]);

    }
  }, [controlId]);




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

    setSum(impactvalue.valnerabilityvlaue + impactvalue.threatsvalue + largestValue);
  }, [impactvalue]);

  const handleChange = (e) => {
    setImpactValues({
      ...impactvalue,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  const getBackgroundColor = (sum) => {
    if (sum > 7) {
      return 'red';
    } else if (sum > 4) {
      return 'yellow';
    } else {
      return 'white';
    }
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
                        <Form.Label htmlFor="assetDropDown" className="form-label">
                          Assets <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select id="assetDropDown" className="form-control form-select" name="assetid" value={assetId} onChange={(e) => setAssetId(e.target.value)}>
                          <option></option>
                          {assets.map((asset: any) => (
                            <option key={asset.id} value={asset.id}>
                              {asset.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>


                      {<Col xl={12}>

                        {assetLocation && (
                          <div id="asset-description">
                            <Card className="bg-info text-white">
                              <CardHeader>Assets Details</CardHeader>
                              <CardBody>
                                <Row>
                                  <Col xl={4}>

                                    <Form.Label htmlFor="assetDropDown" className="form-label">
                                      Assets Owner
                                    </Form.Label>

                                    <Form.Control
                                      id="name"
                                      placeholder="0"
                                      value={assetowner}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>

                                  <Col xl={4}>

                                    <Form.Label htmlFor="assetDropDown" className="form-label">
                                      Category
                                    </Form.Label>

                                    <Form.Control
                                      id="name"
                                      placeholder="0"
                                      value={assetCategory}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>


                                  <Col xl={4}>

                                    <Form.Label htmlFor="assetDropDown" className="form-label">
                                      Asset Type
                                    </Form.Label>

                                    <Form.Control
                                      id="name"
                                      placeholder="0"
                                      value={assettype}
                                      className="form-control"
                                      readOnly
                                    />
                                  </Col>


                                  <Col xl={4}>

                                    <Form.Label htmlFor="assetDropDown" className="form-label">
                                      Asset Location
                                    </Form.Label>

                                    <Form.Control
                                      id="name"
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



                      </Col>}

                      <Col md={6}>
                        <Row>

                          <Card className="bg-warning">
                            <CardHeader>Asset Value</CardHeader>
                            <CardBody>
                              <Col md={12}>
                                <Row>
                                  <Col md={4}>
                                    <Form.Label htmlFor="name" className="form-label">
                                      Confidentiality Value <span className="text-danger ms-1">*</span>
                                    </Form.Label>

                                    <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      id="c"
                                      name="c"
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>


                                    </select>



                                    <Form.Control.Feedback
                                      type="invalid"
                                      className="mt-2 d-block"
                                    >
                                      {errors.name}
                                    </Form.Control.Feedback>


                                  </Col>
                                  <Col md={4}>


                                    <Form.Label htmlFor="name" className="form-label">
                                      Integrity Value <span className="text-danger ms-1">*</span>
                                    </Form.Label>
                                    <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      id="i"
                                      name="i"
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>


                                    </select>


                                  </Col>
                                  <Col md={4}>

                                    <Form.Label htmlFor="name" className="form-label">
                                      Availabilty Value <span className="text-danger ms-1">*</span>
                                    </Form.Label>
                                    <select
                                      className="form-control form-select"
                                      onChange={handleChange}
                                      id="a"
                                      name="a"
                                      required
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>


                                    </select>

                                  </Col>


                                </Row>
                              </Col>
                            </CardBody>
                          </Card>

                        </Row>

                      </Col>




                      <Col md={6}>

                        <Form.Label htmlFor="valnerability" className="form-label">
                          Assets Value (Impact) <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <Form.Control

                          name="assetvalue"
                          placeholder="0"

                          autoFocus
                          className={
                            "form-control" + (errors.name ? " is-invalid" : "")
                          }
                          id="largest" value={largest} readOnly
                          onChange={(e: any) => setData("assetvalue", e.target.value)}
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>

                      </Col>




                      <Col xl={6}>
                        <Form.Label htmlFor="assetDropDown" className="form-label">
                          Threat <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select id="assetDropDown" className="form-control form-select" value={threatId} onChange={(e) => setThreatId(e.target.value)}>
                          <option></option>
                          {threats.map((threat: any) => (
                            <option key={threat.id} value={threat.id}>
                              {threat.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>


                      <Col md={6}>
                        <Form.Label htmlFor="valnerability" className="form-label">
                          Threat Value <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select className="form-control form-select" id="threatsvlaue" name="threatsvalue" onChange={handleChange} required>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.valnerability}
                        </Form.Control.Feedback>

                      </Col>

                      <Col md={6}>
                        <Form.Label htmlFor="valnerability" className="form-label">
                          Vulnerability  <span className="text-danger ms-1">*</span>
                        </Form.Label>


                        {vulnerability && (

                          <div id="vulnerability">

                            <p className="form-control">{vulnerability}</p>
                          </div>

                        )}



                      </Col>

                      <Col md={6}>
                        <Form.Label htmlFor="valnerability" className="form-label">
                          Vulnerability Value <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select className="form-control form-select" id="valnerabilityvlaue" name="valnerabilityvlaue" onChange={handleChange} required>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.valnerability}
                        </Form.Control.Feedback>

                      </Col>

                      <Col md={6}>

                        <Form.Label htmlFor="valnerability" className="form-label">
                          Risk Value <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control

                          name="name"
                          placeholder="0"
                          id="sum"
                          value={sum}
                          style={{ backgroundColor: getBackgroundColor(sum) }}
                          className={
                            "form-control" + (errors.name ? " is-invalid" : "")
                          }
                          onChange={(e: any) => setData("name", e.target.value)}
                          readOnly
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.valnerability}
                        </Form.Control.Feedback>
                      </Col>




                      <Col xl={6}>
                        <Form.Label htmlFor="assetDropDown" className="form-label">
                          Internal Control System <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select id="assetDropDown" className="form-control form-select" value={controlId} onChange={(e) => setControlId(e.target.value)}>
                          <option></option>
                          {controls.map((control: any) => (
                            <option key={control.id} value={control.id}>
                              {control.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>



                      <Col md={6}>

                        <Form.Label htmlFor="valnerability" className="form-label">
                          Risk Owner Name <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="name"
                          name="name"
                          placeholder="Enter Risk Owner Name"
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



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.valnerability}
                        </Form.Control.Feedback>
                      </Col>






                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Risk Treatment Required <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>

                        </select>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>




                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Risk strategy <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="accept">Accept</option>
                          <option value="avoid">Avoid</option>
                          <option value="transfer">Transfer</option>
                          <option value="reduce">Reduce</option>

                        </select>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>


                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Activity/ Control details (Reasons for Acceptance) <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        {provisions.length > 0 && (

                          <select className="form-control form-select">
                            <option value="">Select a Activity</option>
                            {provisions.map(provision => (
                              <option key={provision.provision_id} value={provision.provisions}>{provision.provisions}</option>
                            ))}
                          </select>

                        )}



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>


                      <Col md={6}>

                        <Form.Label htmlFor="valnerability" className="form-label">
                          Plan Closer Date <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="name"
                          type="date"
                          name="name"
                          placeholder="0"
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



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.valnerability}
                        </Form.Control.Feedback>
                      </Col>



                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          Changes <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("status", e.target.value)
                          }
                          required
                        >
                          <option></option>
                          <option value="major">Major</option>
                          <option value="minor">Minor</option>
                        </select>



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>


                      <Col xl={6}>
                        <Form.Label htmlFor="status" className="form-label">
                          New Internal Control System <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        {provisions.length > 0 && (

                          <select className="form-control form-select">
                            <option value="">Select a Activity</option>
                            {provisions.map(provision => (
                              <option key={provision.provision_id} value={provision.provisions}>{provision.provisions}</option>
                            ))}
                          </select>

                        )}



                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.status}
                        </Form.Control.Feedback>
                      </Col>









                      {/* <pre>{JSON.stringify(provisions, undefined, 2)}</pre> */}

                      <Col md={6}>
                        <Card className="bg-success text-white">
                          <CardHeader>Revised Values</CardHeader>
                          <CardBody>
                            <Col md={12}>
                              <Row>
                                <Col md={4}>

                                  <Form.Label htmlFor="status" className="form-label">
                                    Threat <span className="text-danger ms-1">*</span>
                                  </Form.Label>
                                  <select
                                    className="form-control form-select"
                                    onChange={(e: any) =>
                                      setData("status", e.target.value)
                                    }
                                    required
                                  >
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>


                                  </select>



                                  <Form.Control.Feedback
                                    type="invalid"
                                    className="mt-2 d-block"
                                  >
                                    {errors.status}
                                  </Form.Control.Feedback>

                                </Col>
                                <Col md={4}>
                                  <Form.Label htmlFor="status" className="form-label">
                                    Vulnerablility <span className="text-danger ms-1">*</span>
                                  </Form.Label>
                                  <select
                                    className="form-control form-select"
                                    onChange={(e: any) =>
                                      setData("status", e.target.value)
                                    }
                                    required
                                  >
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>


                                  </select>



                                  <Form.Control.Feedback
                                    type="invalid"
                                    className="mt-2 d-block"
                                  >
                                    {errors.status}
                                  </Form.Control.Feedback>

                                </Col>
                                <Col md={4}>
                                  <Form.Label htmlFor="status" className="form-label">
                                    Risk Value <span className="text-danger ms-1">*</span>
                                  </Form.Label>
                                  <select
                                    className="form-control form-select"
                                    onChange={(e: any) =>
                                      setData("status", e.target.value)
                                    }
                                    required
                                  >
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>


                                  </select>



                                  <Form.Control.Feedback
                                    type="invalid"
                                    className="mt-2 d-block"
                                  >
                                    {errors.status}
                                  </Form.Control.Feedback>



                                </Col>



                              </Row>


                            </Col>
                          </CardBody>
                        </Card>

                      </Col>
                      <Col md={6}></Col>




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
      </div >
    </React.Fragment >
  );
}

Create.layout = (page: any) => <Layout children={page} />;
