import React, { useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import { Card, Col, Row, Button, Modal, Form } from "react-bootstrap";
import Select from "react-select";

const ControlTab = ({
  auth,
  controlcode,
  allEvidence,
  allPolicies,
  control_policies,
  control_evidence,
}: any) => {
  const [selectMultiEvidence, setSelectMultiEvidence] = useState();
  const [selectMultiPolicy, setSelectMultiPolicy] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [toDelete, setToDelete] = useState("");
  const [policyToDelete, setPolicyToDelete] = useState("");
  const [evidenceToDelete, setEvidenceToDelete] = useState("");

  const {
    data: evidenceData,
    setData: setEvidenceData,
    errors: evidenceErrors,
    post: postEvidence,
    processing: processingEvidence,
    reset: resetEvidence,
  } = useForm({
    control_code_id: controlcode.id,
    evidence_ids: [],
  });

  const {
    data: policyData,
    setData: setPolicyData,
    errors: policyErrors,
    post: postPolicy,
    processing: processingPolicy,
    reset: resetPolicy,
  } = useForm({
    control_code_id: controlcode.id,
    policies_ids: [],
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = (controlcode: any) => {
    router.delete(route("controlcode.destroy", controlcode.id));
  };

  const findControlPolicyId = () => {
    const controlPolicy = control_policies.find((item: any) => {
      return (
        item.control_code_id === controlcode.id &&
        item.policy_id === policyToDelete
      );
    });
    return controlPolicy ? controlPolicy.id : null;
  };
  const findControlEvidenceId = () => {
    const controlEvidence = control_evidence.find((item: any) => {
      return (
        item.control_code_id === controlcode.id &&
        item.evidence_id === evidenceToDelete
      );
    });
    return controlEvidence ? controlEvidence.id : null;
  };

  const handleMultiEvidenceChange = (selectedOptions: any) => {
    setSelectMultiEvidence(selectedOptions);
    setEvidenceData(
      "evidence_ids",
      selectedOptions.map((option: any) => option.value)
    );
  };
  const handleMultiPolicyChange = (selectedOptions: any) => {
    setSelectMultiPolicy(selectedOptions);
    setPolicyData(
      "policies_ids",
      selectedOptions.map((option: any) => option.value)
    );
  };

  const onEvidenceSubmit = (e: any) => {
    e.preventDefault();
    postEvidence(route("control-evidence.store"), {
      preserveScroll: true,
      onSuccess: () => resetEvidence(),
    });
  };

  const onPolicySubmit = (e: any) => {
    e.preventDefault();
    postPolicy(route("control-policy.store"), {
      preserveScroll: true,
      onSuccess: () => resetPolicy(),
    });
  };

  const handlePolicyDelete = (policyId: any) => {
    setShowModal(true);
    setPolicyToDelete(policyId);
    setModalMessage("Are you sure you want to unlink this policy?");
    setModalTitle("Unlink");
    setToDelete("Policy");
  };
  const handleEvidenceDelete = (evidenceId: any) => {
    setShowModal(true);
    setEvidenceToDelete(evidenceId);
    setModalMessage("Are you sure you want to unlink this evidence?");
    setModalTitle("Unlink");
    setToDelete("Evidence");
  };

  const deletePolicy = () => {
    const controlPolicyId = findControlPolicyId();
    if (controlPolicyId) {
      router.delete(route("control-policy.destroy", controlPolicyId));
    }
    setShowModal(false);
  };
  const deleteEvidence = () => {
    const controlEvidenceId = findControlEvidenceId();
    if (controlEvidenceId) {
      router.delete(route("control-evidence.destroy", controlEvidenceId));
    }
    setShowModal(false);
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
      <Row>
        <Col xl={12} lg={12}>
          <Card>
            {/* <pre>{JSON.stringify(controlcode, undefined, 2)}</pre> */}
            <Card.Body>
              <div className="text-muted">
                <h6 className="mb-3 fw-semibold text-uppercase">Description</h6>
                <p>{controlcode.description}</p>

                <div className="pt-3 border-top border-top-dashed mt-4">
                  <Row className="gy-3">
                    <Col lg={3} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Control Domain:
                        </p>
                        <h5 className="fs-15 mb-0">
                          {controlcode.control_domain
                            ? controlcode.control_domain.name
                            : "NA"}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={3} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Functional Group:
                        </p>
                        <h5 className="fs-15 mb-0">
                          {controlcode.functional_group
                            ? controlcode.functional_group.name
                            : "NA"}
                        </h5>
                      </div>
                    </Col>
                    <Col lg={3} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Create Date:
                        </p>
                        <h5 className="fs-15 mb-0">{controlcode.created_at}</h5>
                      </div>
                    </Col>
                    <Col lg={3} sm={6}>
                      <div>
                        <p className="mb-2 text-uppercase fw-medium">
                          Updated Date:
                        </p>
                        <h5 className="fs-15 mb-0">{controlcode.updated_at}</h5>
                      </div>
                    </Col>
                  </Row>
                  <div className="pb-2 border-top border-top-dashed mt-4">
                    <Row>
                      <Col>
                        <h5 className="text-uppercase py-2">Policy</h5>
                        {controlcode.policy.map((policyData: any) => (
                          <div key={policyData.id} className="mt-3 d-flex ">
                            <div className="bg-primary-subtle px-2 py-1 text-primary rounded">
                              <span>{policyData.name}</span>
                            </div>
                            <button
                              onClick={() => handlePolicyDelete(policyData.id)}
                              className="btn py-0 ml-2 text-danger"
                            >
                              <i className="ri-delete-bin-2-line"></i>
                            </button>
                          </div>
                        ))}
                      </Col>
                      <Col>
                        <h5 className="text-uppercase py-2">Evidence</h5>
                        {controlcode.evidence.map((evidenceData: any) => (
                          <div key={evidenceData.id} className="mt-3 d-flex">
                            <div className="bg-primary-subtle px-2 py-1 text-primary rounded">
                              <span>{evidenceData.name}</span>
                            </div>
                            <button
                              onClick={() =>
                                handleEvidenceDelete(evidenceData.id)
                              }
                              className="btn py-0 ml-2 text-danger"
                            >
                              <i className="ri-delete-bin-2-line"></i>
                            </button>
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <div>
                <h5>Add Policies</h5>
                <Form onSubmit={onPolicySubmit}>
                  <div className="mb-4">
                    <Form.Label htmlFor="policy-select" className="form-label">
                      Select Policies
                    </Form.Label>
                    <Select
                      closeMenuOnSelect={false}
                      value={selectMultiPolicy}
                      isMulti={true}
                      onChange={handleMultiPolicyChange}
                      options={allPolicies.data.map((policy: any) => ({
                        value: policy.id,
                        label: policy.name,
                      }))}
                      classNamePrefix="react-select"
                      styles={customStyles}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="mt-2 d-block"
                    >
                      {policyErrors.policies_ids}
                    </Form.Control.Feedback>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <div>
                <h5>Add Evidence</h5>
                <Form onSubmit={onEvidenceSubmit}>
                  <div className="mb-4">
                    <Form.Label
                      htmlFor="evidence-select"
                      className="form-label"
                    >
                      Select Evidence
                    </Form.Label>
                    <Select
                      closeMenuOnSelect={false}
                      value={selectMultiEvidence}
                      isMulti={true}
                      onChange={handleMultiEvidenceChange}
                      options={allEvidence.data.map((evidence: any) => ({
                        value: evidence.id,
                        label: evidence.name,
                      }))}
                      classNamePrefix="react-select"
                      styles={customStyles}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="mt-2 d-block"
                    >
                      {evidenceErrors.evidence_ids}
                    </Form.Control.Feedback>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body className="text-center p-5">
          <i className="ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">
              {modalTitle} {toDelete}
            </h4>
            <p className="text-muted mb-4">{modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>
              {toDelete === "Policy" && (
                <Button variant="danger" onClick={deletePolicy}>
                  Confirm
                </Button>
              )}
              {toDelete === "Evidence" && (
                <Button variant="danger" onClick={deleteEvidence}>
                  Confirm
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ControlTab;
