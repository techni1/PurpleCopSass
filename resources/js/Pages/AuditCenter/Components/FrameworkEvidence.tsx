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
  fetchOrganizationEvidenceData,
  getAllOrganizationEvidence,
} from "../../../slices/OrganizationEvidence/reducer";
import { useSelector } from "react-redux";
import SingleEvidence from "../../Evidence/OrganizationEvidence/SingleEvidence";
import { useDispatch } from "react-redux";

const FrameworkEvidence = ({ frameworkId, auditId }: any) => {
  //redux
  const organizationEvidences = useSelector(getAllOrganizationEvidence);
  const dispatch = useDispatch();
  let serial = 0;
  const [isLoading, setIsLoading] = useState(false);
  const [evidences, setPolicies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>(evidences);
  const [evidenceDetails, setEvidenceDetails] = useState([]);
  const [isEvidenceDetailShow, setIsEvidenceDetailShow] = useState(false);
  const handleClose = () => setIsEvidenceDetailShow(false);

  useEffect(() => {
    setIsLoading(true);
    const debounceFetchPolicies = debounce(async () => {
      try {
        const response = await axios.get(`/get-unique-evidence/${frameworkId}`);
        setPolicies(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching evidences", error);
      }
    });
    debounceFetchPolicies();
  }, [frameworkId, organizationEvidences]);

  useEffect(() => {
    dispatch(
      //@ts-ignore
      fetchOrganizationEvidenceData(organizationEvidences[0].organization.id)
    );
  }, [isEvidenceDetailShow]);

  useEffect(() => {
    let filtered = evidences;
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, evidences]);

  const handleEvidenceDetailsModal = (data: any) => {
    setEvidenceDetails(data);
    setIsEvidenceDetailShow(true);
  };

  const assigneeName = (evidence: any, name: string) => {
    const find = organizationEvidences.find((item: any) =>
      item.evidence
        ? item.evidence.id == evidence.id
        : item.evidence_id == evidence.id
    );
    if (name === "evidence") {
      return find && find.approver_status == "approved" ? (
        <Button
          variant="link"
          className="p-0 text-wrap text-start"
          onClick={() => handleEvidenceDetailsModal(find)}
        >
          {evidence.name}
        </Button>
      ) : (
        <h6 className="text-wrap">{evidence.name}</h6>
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
  const checkScope = (evidence: any) => {
    const find = organizationEvidences.find((item: any) =>
      item.evidence
        ? item.evidence.id == evidence.id
        : item.evidence_id == evidence.id
    );
    if (find && find.scope == "in") {
      return true;
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <CustomPlaceholder />
      ) : (
        <div>
          {/* <pre>{JSON.stringify(organizationEvidences, undefined, 2)}</pre> */}
          <Form.Control
            type="text"
            id="searchevidence"
            placeholder="Search Evidence"
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
                            <th scope="col">Evidence Name</th>
                            {/* <th scope="col">Assignee</th> */}
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((evidence: any) => (
                            <>
                              {checkScope(evidence) && (
                                <tr key={evidence.id}>
                                  <td>{++serial} </td>
                                  <td style={{ width: "400px" }}>
                                    {assigneeName(evidence, "evidence")}
                                  </td>
                                  {/* <td>{assigneeName(evidence, "assignee")}</td> */}

                                  <td>
                                    <i
                                      className="ri-error-warning-fill text-danger"
                                      style={{ fontSize: "16px" }}
                                    />
                                    <span className=" text-uppercase">
                                      non compliant
                                    </span>
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
      {evidenceDetails && (
        <Offcanvas
          show={isEvidenceDetailShow}
          onHide={handleClose}
          placement="end"
          id="offcanvasRight"
        >
          <Offcanvas.Header className="border-bottom" closeButton>
            <Offcanvas.Title id="offcanvasExampleLabel">
              Evidence details
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <SingleEvidence
              evidence={evidenceDetails}
              auditId={auditId}
              show={isEvidenceDetailShow}
              setShow={setIsEvidenceDetailShow}
            />
          </Offcanvas.Body>
        </Offcanvas>
        // <EvidenceDetail
        //   show={isEvidenceDetailShow}
        //   setShow={setIsEvidenceDetailShow}
        //   evidenceDetails={evidenceDetails}
        // />
      )}
    </React.Fragment>
  );
};

export default FrameworkEvidence;
