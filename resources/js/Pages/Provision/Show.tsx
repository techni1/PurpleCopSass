import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Tab,
} from "react-bootstrap";
import Section from "./Section";
import { Head, router, useForm } from "@inertiajs/react";
import Layout from "../../Layouts";
import Select from "react-select";

const provisionShow = ({ provision, allControls, provision_controls }: any) => {
  const [selectMulti, setSelectMulti] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [toDelete, setToDelete] = useState("");

  const { data, setData, errors, post, processing, reset } = useForm({
    provision_id: provision.id,
    control_code_ids: [],
  });
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const findProvisionControlId = () => {
    const provisionControl = provision_controls.find((item: any) => {
      return (
        item.control_code_id === toDelete && item.provision_id === provision.id
      );
    });
    return provisionControl ? provisionControl.id : null;
  };

  const handleMultiChange = (selectedOptions: any) => {
    setSelectMulti(selectedOptions);
    setData(
      "control_code_ids",
      selectedOptions.map((option: any) => option.value)
    );
  };

  const handleDelete = (controlId: any) => {
    setShowModal(true);
    setToDelete(controlId);
    setModalMessage("Are you sure you want to remove this Control?");
    setModalTitle("Delink");
  };
  const deleteControl = () => {
    const provisionControlId = findProvisionControlId();
    if (provisionControlId) {
      router.delete(route("provision-control.destroy", provisionControlId));
    }
    setShowModal(false);
  };

  const customStyles = {
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: "#3762ea",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => ({
      ...styles,
      backgroundColor: "#405189",
      color: "white",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
      ...styles,
      color: "white",
      backgroundColor: "#405189",
      ":hover": {
        backgroundColor: "#405189",
        color: "white",
      },
    }),
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("provision-controls.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <React.Fragment>
      <Head title="Provision Overview" />
      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(allControls, undefined, 2)}</pre> */}
          <Tab.Container defaultActiveKey="1">
            <Row>
              <Col lg={12}>
                <Card className="mt-n4 mx-n4">
                  <div className="bg-primary-subtle">
                    <Card.Body className="pb-0 px-4">
                      <Row className="mb-3">
                        <div className="col-md">
                          <Row className="align-items-center g-3">
                            <div className="col-md">
                              <div>
                                <h5 className="fw-bold">
                                  {provision.provisions}
                                </h5>
                                <div className="hstack gap-3 flex-wrap">
                                  <div>
                                    Created at :{" "}
                                    <span className="fw-medium">
                                      {provision.created_at}
                                    </span>
                                  </div>
                                  <div>
                                    Updated at :{" "}
                                    <span className="fw-medium">
                                      {provision.updated_at}
                                    </span>
                                  </div>
                                  <div className="vr"></div>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body>
                    <h5 className="text-uppercase py-2">Controls</h5>
                    <Row>
                      {provision.controls.map((control: any) => (
                        <Col key={control.id} lg={6}>
                          <Card>
                            <Card.Body>
                              <div className="table-card">
                                <table className="table mb-0">
                                  <tbody>
                                    <tr>
                                      <td className="fw-medium">Code</td>
                                      <td className="d-flex justify-content-between">
                                        <span>{control.code}</span>
                                        <button
                                          onClick={() =>
                                            handleDelete(control.id)
                                          }
                                          className="btn py-0 ml-2 text-danger"
                                        >
                                          <i className="ri-delete-bin-2-line"></i>
                                        </button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="fw-medium">Name</td>
                                      <td>{control.name}</td>
                                    </tr>
                                    <tr>
                                      <td className="fw-medium">weightage</td>
                                      <td>
                                        <span className="h5 px-2 py-0 rounded bg-primary-subtle text-primary">
                                          {control.control_weight}
                                        </span>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="fw-medium">Description</td>
                                      <td>{control.description}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <div>
                      <h5>Add Controls To This Provision</h5>

                      <Form onSubmit={onSubmit}>
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-roles-status-input"
                            className="form-label"
                          ></Form.Label>
                          <Select
                            closeMenuOnSelect={false}
                            defaultValue={selectMulti}
                            isMulti={true}
                            onChange={handleMultiChange}
                            options={allControls.data.map((control: any) => ({
                              value: control.id,
                              label: control.code,
                            }))}
                            classNamePrefix="react-select"
                            styles={customStyles}
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="mt-2 d-block"
                          >
                            {errors.control_code_ids}
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
          </Tab.Container>
        </Container>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body className="text-center p-5">
          <i className="ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4">{modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={deleteControl}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
provisionShow.layout = (page: any) => <Layout children={page} />;
export default provisionShow;
