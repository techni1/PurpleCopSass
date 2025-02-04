import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import Location from "./Location";
import Criticality from "./Criticality";
import Vendor from "./Vendor";

export default function Create({
  auth,
  category,
  subcategory,
  location,
  criticality,
  vendor,
  department,
  people,
  risks
}: any) {
  const { data, setData, post, processing, errors, reset } = useForm({
    categoryid: "",
    name: "",
    subcategoryid: "",
    locationid: "",
    criticalityid: "",
    vendorid: "",
    description: "",
    owner: "",
    departmentid: "",
    value: "",
    currentvalue: "",
    purchasedate: "",
    boardingdate: "",
    retirementdate: "",
    serialnumber: "",
    isunderrisk: "",
    warrentyinfo: "",
    maintenancehistory: "",
    notes: "",
    riskdata: []
  });
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);




  const handlePrimaryChange = (e: any) => {
    const selectedValue = e.target.value;
    setData("isunderrisk", selectedValue);

    // Show or hide the second dropdown based on the selected value
    if (selectedValue === "yes") {
      setShowSecondDropdown(true);
    } else {
      setShowSecondDropdown(false);
    }
  };
  const handleChange = (e: any) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option: any) => option.value);
    setData("riskdata", selectedOptions);
  };

  const [show, setShow] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const [show1, setShow1] = useState<boolean>(false);
  const [isBottom1, setIsBottom1] = useState<boolean>(false);

  const [show2, setShow2] = useState<boolean>(false);
  const [isBottom2, setIsBottom2] = useState<boolean>(false);



  const [show3, setShow3] = useState<boolean>(false);
  const [isBottom3, setIsBottom3] = useState<boolean>(false);


  const [show4, setShow4] = useState<boolean>(false);
  const [isBottom4, setIsBottom4] = useState<boolean>(false);

  const handleResult = () => {
    setShow(true);
    setIsBottom(!isBottom);

  };

  const handletypeResult = () => {
    setShow1(true);
    setIsBottom1(!isBottom1);
  };


  const handleLocationResult = () => {
    setShow2(true);
    setIsBottom2(!isBottom1);
  };


  const handleCriticalityResult = () => {
    setShow3(true);
    setIsBottom3(!isBottom1);
  };

  const handleVendorResult = () => {
    setShow4(true);
    setIsBottom4(!isBottom1);
  };


  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("assets.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Asset Asset" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Add Asset" pageTitle="Dashboard" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <form onSubmit={onSubmit}>
                    <Row className="p-4">
                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label pb-2">
                          Name <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="name"
                          name="name"
                          placeholder="Enter Name"
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
                          className="mt-1 d-block"
                        >
                          {errors.name}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Category{" "}
                          <span className="text-danger ms-1">*
                          </span>
                          <Button
                            style={{ padding: '0px', color: 'green', fontSize: '18px' }}
                            onClick={() => handleResult()}
                            variant="link"
                          >
                            <i className="las la-plus-circle"></i>
                          </Button>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("categoryid", e.target.value)
                          }
                          name="category_id"
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

                      <Col xl={3}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Type{" "}
                          <span className="text-danger ms-1">*</span>
                          <Button
                            style={{ padding: '0px', color: 'green', fontSize: '18px' }}
                            onClick={() => handletypeResult()}
                            variant="link"
                          >
                            <i className="las la-plus-circle"></i>
                          </Button>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("subcategoryid", e.target.value)
                          }
                          name="subcategoryid"
                          required
                        >
                          <option></option>

                          {subcategory.map((subcategory: any) => (
                            <option value={subcategory.id}>
                              {subcategory.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.subcategoryid}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={3}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Location{" "}
                          <span className="text-danger ms-1">*</span>
                          <Button
                            style={{ padding: '0px', color: 'green', fontSize: '18px' }}
                            onClick={() => handleLocationResult()}
                            variant="link"
                          >
                            <i className="las la-plus-circle"></i>
                          </Button>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("locationid", e.target.value)
                          }
                          name="locationid"
                          required
                        >
                          <option></option>

                          {location.map((location: any) => (
                            <option value={location.id}>{location.name}</option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.locationid}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={3}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Criticality{" "}
                          <span className="text-danger ms-1">*</span>

                          <Button
                            style={{ padding: '0px', color: 'green', fontSize: '18px' }}
                            onClick={() => handleCriticalityResult()}
                            variant="link"
                          >
                            <i className="las la-plus-circle"></i>
                          </Button>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("criticalityid", e.target.value)
                          }
                          name="criticalityid"
                          required
                        >
                          <option></option>

                          {criticality.map((criticality: any) => (
                            <option value={criticality.id}>
                              {criticality.name}
                            </option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.criticalityid}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={3}>
                        <Form.Label htmlFor="name" className="form-label">
                          Select Vendor{" "}
                          <span className="text-danger ms-1">*</span>
                          <Button
                            style={{ padding: '0px', color: 'green', fontSize: '18px' }}
                            onClick={() => handleVendorResult()}
                            variant="link"
                          >
                            <i className="las la-plus-circle"></i>
                          </Button>
                        </Form.Label>
                        <select
                          className="form-control form-select"
                          onChange={(e: any) =>
                            setData("vendorid", e.target.value)
                          }
                          name="vendorid"
                          required
                        >
                          <option></option>

                          {vendor.map((vendor: any) => (
                            <option value={vendor.id}>{vendor.name}</option>
                          ))}
                        </select>
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.vendorid}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={3}>
                        <Form.Label htmlFor="value" className="form-label">
                          Value <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="value"
                          name="value"
                          placeholder="0.0000"
                          value={data.value}
                          autoFocus
                          className={
                            "form-control" + (errors.value ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("value", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.value}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={3}>
                        <Form.Label
                          htmlFor="currentvalue"
                          className="form-label"
                        >
                          Current Value{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>
                        <Form.Control
                          id="currentvalue"
                          name="currentvalue"
                          placeholder="0.0000"
                          value={data.currentvalue}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.currentvalue ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("currentvalue", e.target.value)
                          }
                          required
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.currentvalue}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xl={6}>
                        <Row>
                          <Col>
                            {" "}
                            <Form.Label htmlFor="owner" className="form-label">
                              Owner <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <select
                              className="form-control form-select"
                              onChange={(e: any) =>
                                setData("owner", e.target.value)
                              }
                              name="owner"
                              required
                            >
                              <option></option>

                              {people.map((people: any) => (
                                <option value={people.id}>{people.name}</option>
                              ))}
                            </select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.owner}
                            </Form.Control.Feedback>
                          </Col>
                          <Col>
                            <Form.Label
                              htmlFor="departmentid"
                              className="form-label"
                            >
                              Select Department{" "}
                              <span className="text-danger ms-1">*</span>
                            </Form.Label>
                            <select
                              className="form-control form-select"
                              onChange={(e: any) =>
                                setData("departmentid", e.target.value)
                              }
                              name="departmentid"
                              required
                            >
                              <option></option>

                              {department.map((department: any) => (
                                <option value={department.id}>
                                  {department.name}
                                </option>
                              ))}
                            </select>
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.departmentid}
                            </Form.Control.Feedback>
                          </Col>
                        </Row>
                      </Col>

                      <Col xl={3}>
                        <Form.Label
                          htmlFor="serialnumber"
                          className="form-label"
                        >
                          Serial Number
                        </Form.Label>
                        <Form.Control
                          id="serialnumber"
                          name="serialnumber"
                          placeholder="Enter Serial Number"
                          value={data.serialnumber}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.serialnumber ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("serialnumber", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.serialnumber}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={3}>
                        <Form.Label
                          htmlFor="purchasedate"
                          className="form-label"
                        >
                          Purchase Date
                        </Form.Label>
                        <Form.Control
                          type="date"
                          id="purchasedate"
                          name="purchasedate"
                          placeholder="Enter Purchase Date"
                          value={data.purchasedate}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.purchasedate ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("purchasedate", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.purchasedate}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={3}>
                        <Form.Label
                          htmlFor="boardingdate"
                          className="form-label"
                        >
                          Boarding Date
                        </Form.Label>
                        <Form.Control
                          type="date"
                          id="boardingdate"
                          name="boardingdate"
                          value={data.boardingdate}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.boardingdate ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("boardingdate", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.boardingdate}
                        </Form.Control.Feedback>
                      </Col>
                      <Col xl={3}>
                        <Form.Label
                          htmlFor="retirementdate"
                          className="form-label"
                        >
                          Retirement date
                        </Form.Label>
                        <Form.Control
                          type="date"
                          id="retirementdate"
                          name="retirementdate"
                          value={data.retirementdate}
                          autoFocus
                          className={
                            "form-control" +
                            (errors.retirementdate ? " is-invalid" : "")
                          }
                          onChange={(e: any) =>
                            setData("retirementdate", e.target.value)
                          }
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errors.retirementdate}
                        </Form.Control.Feedback>
                      </Col>

                      {/* <Col xl={3}>
                        <Form.Label
                          htmlFor="purchasedate"
                          className="form-label"
                        >
                          Is Under Risk Register?{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select"
                          // onChange={(e: any) =>
                          //   setData("isunderrisk", e.target.value)
                          // }

                          onChange={handlePrimaryChange}
                          required
                        >
                          <option></option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </Col>



                      {showSecondDropdown && (<Col xl={3}>
                        <Form.Label
                          htmlFor="purchasedate"
                          className="form-label"
                        >
                          Apply Risk{" "}
                          <span className="text-danger ms-1">*</span>
                        </Form.Label>

                        <select
                          className="form-control form-select"
                          onChange={handleChange}
                          required
                          multiple
                        >
                          <option></option>
                          {risks.map((risk: any) => (
                            <option key={risk.id} value={risk.id}>
                              {risk.name}
                            </option>
                          ))}
                        </select>
                      </Col>)} */}

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="description"
                          className="form-label"
                        >
                          Description
                        </Form.Label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          onChange={(e: any) =>
                            setData("description", e.target.value)
                          }
                        ></textarea>
                      </Col>

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="warrentyinfo"
                          className="form-label"
                        >
                          Warranty Information
                        </Form.Label>
                        <textarea
                          className="form-control"
                          id="warrentyinfo"
                          name="warrentyinfo"
                          onChange={(e: any) =>
                            setData("warrentyinfo", e.target.value)
                          }
                        ></textarea>
                      </Col>

                      <Col xl={6}>
                        <Form.Label
                          htmlFor="maintenancehistory"
                          className="form-label"
                        >
                          Maintenance History
                        </Form.Label>
                        <textarea
                          className="form-control"
                          id="maintenancehistory"
                          name="maintenancehistory"
                          onChange={(e: any) =>
                            setData("maintenancehistory", e.target.value)
                          }
                        ></textarea>
                      </Col>

                      <Col xl={6}>
                        <Form.Label htmlFor="noyt" className="form-label">
                          Notes
                        </Form.Label>
                        <textarea
                          className="form-control"
                          name="notes"
                          onChange={(e: any) =>
                            setData("notes", e.target.value)
                          }
                        ></textarea>
                      </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                      <Col xl={2} md={6}>
                        <Link
                          href={route("assets.index")}
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
          <AddCategory
            show={show}
            setShow={setShow}
          />

          <AddSubCategory
            show={show1}
            setShow={setShow1}
            category={category}
          />

          <Location
            show={show2}
            setShow={setShow2}

          />

          <Criticality
            show={show3}
            setShow={setShow3}
          />
          <Vendor
            show={show4}
            setShow={setShow4}
          />

        </Container>
      </div>
    </React.Fragment >
  );
}

Create.layout = (page: any) => <Layout children={page} />;
