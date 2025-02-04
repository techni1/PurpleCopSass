const RiskDetails = ({ data }: any) => {
  return (
    <div className="container mt-4">
      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
      <div>
        <div className="pb-3 px-3">
          <h4>Risk Details</h4>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Risk Information */}
            {data.risk && (
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5>Risk Information</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Risk Name:</strong> {data.risk.name}
                    </p>
                    <p>
                      <strong>Risk Status:</strong>{" "}
                      {data.risk.risk_status === "0" ? "Open" : "Closed"}
                    </p>
                    <p>
                      <strong>Risk Priority:</strong> {data.risk.risk_peroirty}
                    </p>
                    <p>
                      <strong>Risk Value:</strong> {data.risk_value}
                    </p>
                    <p>
                      <strong>Risk Owner:</strong> {data.risk_owner}
                    </p>
                    <p>
                      <strong>Strategy Option:</strong>{" "}
                      {data.riskstrategy_option}
                    </p>
                    <p>
                      <strong>Closed Date:</strong> {data.closed_date}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Asset Information */}
            {data.assest && (
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5>Asset Information</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Asset Name:</strong> {data.assest.name}
                    </p>
                    <p>
                      <strong>Category:</strong> {data.assest.category.name}
                    </p>
                    <p>
                      <strong>Current Value:</strong> {data.assest.currentvalue}
                    </p>
                    {/* <p>
                      <strong>Location:</strong> {data.assest.locationName.name}
                    </p> */}
                    {/* <p>
                      <strong>Owner:</strong> {data.assest.ownerName?.name}
                    </p> */}
                    <p>
                      <strong>Is Under Risk:</strong> {data.assest.isunderrisk}
                    </p>
                    <p>
                      <strong>Serial No:</strong> {data.assest.serialnumber}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="row">
            {/* Threat Information */}
            {data.threats && (
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5>Threat Information</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Threat Name:</strong> {data.threats.name}
                    </p>
                    <p>
                      <strong>Vulnerability:</strong>{" "}
                      {data.threats.vulerability}
                    </p>
                    <p>
                      <strong>Threat Value:</strong>{" "}
                      {data.threats.threats_value}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Control Information */}
            {data.controlcode && (
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5>Control Information</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Control Name:</strong> {data.controlcode.name}
                    </p>
                    <p>
                      <strong>Control Code:</strong> {data.controlcode.code}
                    </p>
                    <p>
                      <strong>Control Weight:</strong>{" "}
                      {data.controlcode.control_weight}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="row">
            {/* Provision Information */}
            {data.provision && (
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5>Provision Information</h5>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Provision Code:</strong> {data.provision.code}
                    </p>
                    <p>
                      <strong>Provision Description:</strong>{" "}
                      {data.provision.provisions}
                    </p>
                    <p>
                      <strong>Framework Name:</strong>{" "}
                      {data.provision.framework_name}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDetails;

// import React, { useEffect, useState } from "react";
// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Col,
//     Offcanvas,
//     Row,
//     Form,
//     Button,
//     FormControl,

// } from "react-bootstrap";
// import { Head, Link, useForm } from "@inertiajs/react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function RiskDetails({ show, setShow, selectedRiskRegister }: any) {
//     const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
//         name: "",
//         status: "",
//         perority: "",
//         threatt: [],
//         riskcat: "",

//     });

//     const handleClose = () => setShow(false);
//     const [isBottom, setIsBottom] = useState<boolean>(false);

//     const [threatt, setThreatt] = useState([]);

//     const handleChange = (e: any) => {
//         const { name, value } = e.target;
//         setData(name, value);
//     };

//     const onSubmit = (e: any) => {
//         e.preventDefault();
//         post(route("riskstoreapi"), {
//             preserveScroll: true,
//             onSuccess: () => {
//                 reset();        // Reset form fields
//                 handleClose();  // Close the Modal
//             },

//         });
//     };

//     useEffect(() => {
//         if (recentlySuccessful) {
//             toast.success("New Risk Added");
//         }
//     }, [recentlySuccessful]);

//     return (
//         <React.Fragment>
//             {/* Toast container to display notifications */}
//             <ToastContainer />

//             <Offcanvas
//                 show={show}
//                 onHide={handleClose}
//                 placement="start"
//                 id="offcanvasTop"

//             >

//                 <Offcanvas.Header className="border-bottom" closeButton>
//                     <Offcanvas.Title id="offcanvasExampleLabel">
//                         Risk Register
//                     </Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     <pre>{JSON.stringify(selectedRiskRegister, undefined, 2)}</pre>
//                     <Card>
//                         <CardHeader>Risk Details</CardHeader>

//                         <form onSubmit={onSubmit}>
//                             <Card.Body>

//                                 <div className="col-md-12">
//                                     <div className="row">

//                                         <div className="col-md-6">
//                                             <Form.Label
//                                                 htmlFor="name"
//                                                 className="form-label"
//                                             >
//                                                 Apply Risk
//                                             </Form.Label>
//                                             <FormControl
//                                                 id="name"
//                                                 name="name"
//                                                 placeholder="Enter Menu Name"
//                                                 value={data.name}
//                                                 autoFocus
//                                                 className={
//                                                     "form-control" + (errors.name ? " is-invalid" : "")
//                                                 }
//                                                 onChange={(e: any) => setData("name", e.target.value)}
//                                                 required
//                                             ></FormControl></div>
//                                         <div className="col-md-6"></div>

//                                         <div className="col-md-12">
//                                             <Form.Label
//                                                 htmlFor="name"
//                                                 className="form-label"
//                                             >
//                                                 Menu
//                                             </Form.Label>
//                                             <FormControl
//                                                 id="name"
//                                                 name="name"
//                                                 placeholder="Enter Menu Name"
//                                                 value={data.name}
//                                                 autoFocus
//                                                 className={
//                                                     "form-control" + (errors.name ? " is-invalid" : "")
//                                                 }
//                                                 onChange={(e: any) => setData("name", e.target.value)}
//                                                 required
//                                             ></FormControl>

//                                         </div>
//                                         <div className="col-md-12 pt-3">
//                                             <Form.Label
//                                                 htmlFor="assetowner"
//                                                 className="form-label"
//                                             >
//                                                 URL
//                                             </Form.Label>
//                                             <FormControl
//                                                 id="url"
//                                                 name="url"
//                                                 placeholder="Enter Menu URL (Optional)"
//                                                 value={data.url}
//                                                 autoFocus
//                                                 className={
//                                                     "form-control" + (errors.url ? " is-invalid" : "")
//                                                 }
//                                                 onChange={(e: any) => setData("url", e.target.value)}

//                                             ></FormControl></div>
//                                         <div className="col-md-12  pt-3">
//                                             <Form.Label
//                                                 htmlFor="status"
//                                                 className="form-label"
//                                             >
//                                                 Status
//                                             </Form.Label>

//                                             <select
//                                                 className="form-control form-select"
//                                                 onChange={(e: any) =>
//                                                     setData("status", e.target.value)
//                                                 }
//                                                 name="status"
//                                                 required
//                                             >
//                                                 <option></option>
//                                                 <option value="1">Active</option>
//                                                 <option value="0">Deactive</option>
//                                             </select>

//                                         </div>
//                                     </div>
//                                 </div>

//                             </Card.Body>
//                             <Card.Footer>
//                                 <Row className="justify-content-md-center">
//                                     <Col xl={2} md={6}>

//                                     </Col>
//                                     <Col xl={2} md={6}>
//                                         <Button
//                                             type="submit"
//                                             className="btn btn-primary w-100"
//                                             disabled={processing}
//                                         >
//                                             Submit
//                                         </Button>
//                                     </Col>
//                                 </Row>

//                             </Card.Footer>
//                         </form>
//                     </Card>

//                 </Offcanvas.Body>
//             </Offcanvas>

//         </React.Fragment>
//     );
// }
