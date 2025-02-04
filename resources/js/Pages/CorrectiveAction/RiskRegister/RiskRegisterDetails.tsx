import { Button, Card, Col, Form, Offcanvas, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";
import {
  CORRECTIVE_STATUS_CLASS_MAP,
  CORRECTIVE_STATUS_TEXT_MAP,
} from "../../../Components/constants/statusConstant";
import { useForm } from "@inertiajs/react";
import { fetchCorrectiveActionData } from "../../../slices/correctiveAction/reducer";
import { useDispatch } from "react-redux";

interface RiskRegister {
  id: any;
  riskregister: any;
  assignee: any;
  remediate_action: any;
  duedate: any;
  status: any;
  remark: any;
}

export default function RiskRegisterDetails({ riskData, show, setShow }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [riskRegister, setRiskRegister] = useState<RiskRegister>({
    id: "",
    riskregister: "",
    assignee: "",
    remediate_action: "",
    duedate: "",
    status: "",
    remark: "",
  });

  const { data, setData, reset, post, errors, processing } = useForm({
    status: "close",
    remark: "",
    // _method: "PUT",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchRiskRegister() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `/show-risk-register-assignee/${riskData.type_id}`
        );
        setRiskRegister(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error Fetching Corrective action", error);
      }
    }
    fetchRiskRegister();
  }, [riskData]);

  const handleClose = () => {
    setShow(false);
  };

  const onRemarkSubmit = async (e: any) => {
    e.preventDefault();
    post(route("riskregisterassignee.update", riskRegister), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        handleClose();
        //@ts-ignore
        dispatch(fetchCorrectiveActionData());
      },
    });
  };

  return (
    <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
      <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title>
          <span className="text-uppercase">
            {riskRegister.remediate_action}
          </span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoading ? (
          <CustomPlaceholder />
        ) : (
          <Row>
            <Card>
              <Card.Body>
                <Row className="p-2">
                  <Col md={5} sm={12}>
                    <h6>Remediate Action</h6>
                    <span className="text-muted">
                      {riskRegister.remediate_action}
                    </span>
                  </Col>
                  <Col md={5} sm={12}>
                    <h6>Status</h6>
                    <span
                      className={
                        "px-2 py-1 rounded " +
                        CORRECTIVE_STATUS_CLASS_MAP[riskRegister.status]
                      }
                    >
                      {CORRECTIVE_STATUS_TEXT_MAP[riskRegister.status]}
                    </span>
                  </Col>
                </Row>

                <Row className="p-2 mb-3">
                  <Col md={5} sm={12}>
                    <h6>Assigned To</h6>
                    <div>
                      <i className="ri-account-circle-line text-info" />
                      <span className=" text-primary px-2 py-1 rounded ">
                        {riskRegister.assignee.name}
                      </span>
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <h6>Due Date</h6>
                    <span className="text-muted">{riskRegister.duedate}</span>
                  </Col>
                </Row>
                {riskRegister.remark && (
                  <Card>
                    <Row className="p-2">
                      <Col>
                        <h6>Closing Remarks</h6>
                        <div>
                          <span>{riskRegister.remark}</span>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                )}
                <Row>
                  {riskRegister.riskregister && (
                    <Col>
                      <Card>
                        <Card.Header>
                          Risk Name:- {riskRegister.riskregister.risk.name}
                        </Card.Header>
                        <Card.Body>
                          <ul>
                            <li className="p-1">
                              Threats:- {riskRegister.riskregister.threats.name}
                            </li>
                            <li className="p-1">
                              Vulnerability:-{" "}
                              {riskRegister.riskregister.threats.vulerability}
                            </li>
                            <li className="p-1">
                              Control Code:-{" "}
                              {riskRegister.riskregister.controlcode.code}
                            </li>
                            <li className="p-1">
                              Control Name:-{" "}
                              {riskRegister.riskregister.controlcode.name}
                            </li>
                            <li className="p-1">
                              Provision Caod:-{" "}
                              {riskRegister.riskregister.provision.code}
                            </li>
                            <li className="p-1">
                              Provision Name:-{" "}
                              {riskRegister.riskregister.provision.provisions}
                            </li>
                            <li className="p-1">
                              CIA:- {riskRegister.riskregister.assetvalue}
                            </li>
                            <li className="p-1">
                              Risk Value:-{" "}
                              {riskRegister.riskregister.risk_value}
                            </li>
                            <li className="p-1">
                              Closer Value:-{" "}
                              {riskRegister.riskregister.closed_date}
                            </li>
                            <li className="p-1">
                              Risk Owner:-{" "}
                              {riskRegister.riskregister.risk_owner}
                            </li>
                            <li className="p-1">
                              Risk Straregy:-{" "}
                              {riskRegister.riskregister.riskstrategy_option}
                            </li>
                          </ul>
                          {/* <pre>
                            {JSON.stringify(
                              riskRegister.riskregister,
                              undefined,
                              2
                            )}
                          </pre> */}
                        </Card.Body>
                      </Card>
                      {!riskRegister.remark && (
                        <Card>
                          <Card.Header>
                            <h5>Leave Remark Before Closing</h5>
                          </Card.Header>
                          <Card.Body>
                            <form onSubmit={onRemarkSubmit}>
                              <Row>
                                <Col>
                                  <Form.Control
                                    id="remark"
                                    name="remark"
                                    as="textarea"
                                    rows={3}
                                    placeholder="Your Remark..."
                                    value={data.remark}
                                    className={
                                      "form-control border border-0 bg-light text-secondary " +
                                      (errors.remark ? " is-invalid" : "")
                                    }
                                    onChange={(e: any) =>
                                      setData("remark", e.target.value)
                                    }
                                    required
                                  />
                                  <Form.Control.Feedback
                                    type="invalid"
                                    className="mt-2 d-block"
                                  >
                                    {errors.remark}
                                  </Form.Control.Feedback>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={3}>
                                  <Button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={processing}
                                  >
                                    Close
                                  </Button>
                                </Col>
                              </Row>
                            </form>
                          </Card.Body>
                        </Card>
                      )}
                    </Col>
                  )}
                </Row>

                {/* <pre>{JSON.stringify(riskRegister, undefined, 2)}</pre> */}
              </Card.Body>
            </Card>
          </Row>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
