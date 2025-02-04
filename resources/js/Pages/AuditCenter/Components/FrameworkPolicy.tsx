import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Button,
  Card,
  Col,
  Form,
  Offcanvas,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "@inertiajs/react";
import { debounce } from "lodash";
import axios from "axios";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";
import {
  fetchOrganizationPolicyData,
  getAllOrganizationPolicy,
} from "../../../slices/OrganizationPolicy/reducer";
import { useSelector } from "react-redux";
import SinglePolicy from "../../Policy/OrganizationPolicy/SinglePolicy";
import { useDispatch } from "react-redux";
import instaCheck from "../../../../images/check_icon.svg";
const FrameworkPolicy = ({ frameworkId, auditId }: any) => {
  //redux
  const organizationPolicys = useSelector(getAllOrganizationPolicy);
  const dispatch = useDispatch();
  let serial = 0;
  const [isLoading, setIsLoading] = useState(false);
  const [policies, setPolicies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>(policies);
  const [policyDetails, setPolicyDetails] = useState([]);
  const [isPolicyDetailShow, setIsPolicyDetailShow] = useState(false);
  const handleClose = () => setIsPolicyDetailShow(false);

  useEffect(() => {
    setIsLoading(true);
    const debounceFetchPolicies = debounce(async () => {
      try {
        const response = await axios.get(`/get-unique-policy/${frameworkId}`);
        setPolicies(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching policies", error);
      }
    });
    debounceFetchPolicies();
  }, [frameworkId, organizationPolicys]);

  useEffect(() => {
    dispatch(
      //@ts-ignore
      fetchOrganizationPolicyData(organizationPolicys[0].organization.id)
    );
  }, [isPolicyDetailShow]);

  useEffect(() => {
    let filtered = policies;
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, policies]);

  const handlePolicyDetailsModal = (data: any) => {
    setPolicyDetails(data);
    setIsPolicyDetailShow(true);
  };

  const assigneeName = (policy: any, name: string) => {
    const find = organizationPolicys.find((item: any) =>
      item.policy ? item.policy.id == policy.id : item.policy_id == policy.id
    );
    if (name === "policy") {
      return find && find.approver_status == "approved" ? (
        <Button
          variant="link"
          className="p-0 text-wrap text-start"
          onClick={() => handlePolicyDetailsModal(find)}
        >
          {policy.name}
        </Button>
      ) : (
        <h6 className="text-wrap">{policy.name}</h6>
      );
    }
    if (name === "assignee") {
      return find && find.assignee ? (
        <span className="text-dark">{find.assignee.name}</span>
      ) : (
        <span className="text-muted">NOT ASSIGNED</span>
      );
    }
  };
  const checkScope = (policy: any) => {
    const find = organizationPolicys.find((item: any) =>
      item.policy ? item.policy.id == policy.id : item.policy_id == policy.id
    );
    if (find && find.scope == "in") {
      return true;
    }
  };

  const checkCompliant = (policyId: any) => {
    const find = organizationPolicys.find((item: any) =>
      item.policy ? item.policy.id == policyId : item.policy_id == policyId
    );
    if (find && find.internal_auditor_status == "approved") {
      return (
        <>
          <img src={instaCheck} alt="Insta-check" style={{ width: "1.1em" }} />
          <span className="text-success"> Compliant</span>
        </>
      );
    } else {
      return (
        <>
          <i
            className="ri-error-warning-fill text-danger"
            style={{ fontSize: "16px" }}
          />
          <span> Non Compliant</span>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <CustomPlaceholder />
      ) : (
        <div>
          {/* <pre>{JSON.stringify(organizationPolicys, undefined, 2)}</pre> */}
          <Form.Control
            type="text"
            id="searchpolicy"
            placeholder="Search Policy"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
          <Card>
            <Card.Body>
              <div className="live-preview">
                <div className="table-responsive table-card">
                  <Row>
                    <Col>
                      <Table className="align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Policy Name</th>
                            {/* <th scope="col">Assignee</th> */}
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((policy: any) => (
                            <>
                              {checkScope(policy) && (
                                <tr key={policy.id}>
                                  <td>{++serial} </td>
                                  <td style={{ width: "400px" }}>
                                    {assigneeName(policy, "policy")}
                                  </td>
                                  {/* <td>{assigneeName(policy, "assignee")}</td> */}

                                  <td>
                                    {checkCompliant(policy.id)}
                                    {/* <i
                                      className="ri-error-warning-fill text-danger"
                                      style={{ fontSize: "16px" }}
                                    />
                                    <span className=" text-uppercase">
                                      non compliant
                                    </span> */}
                                  </td>
                                </tr>
                              )}
                            </>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
      {policyDetails && (
        <Offcanvas
          show={isPolicyDetailShow}
          onHide={handleClose}
          placement="end"
          id="offcanvasRight"
        >
          <Offcanvas.Header className="border-bottom" closeButton>
            <Offcanvas.Title id="offcanvasExampleLabel">
              Policy details
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <SinglePolicy
              policy={policyDetails}
              auditId={auditId}
              show={isPolicyDetailShow}
              setShow={setIsPolicyDetailShow}
            />
          </Offcanvas.Body>
        </Offcanvas>
        // <PolicyDetail
        //   show={isPolicyDetailShow}
        //   setShow={setIsPolicyDetailShow}
        //   policyDetails={policyDetails}
        // />
      )}
    </React.Fragment>
  );
};

export default FrameworkPolicy;
