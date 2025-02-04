import React, { useEffect, useMemo, useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import {
  Button,
  Dropdown,
  Modal,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";

import ResidualRisk from "./ResidualRisk";

import CreateCorrectiveAction from "../CorrectiveAction/CreateCorrectiveAction";
import TableContainer from "../../Components/Common/TableContainer";

const SearchTable = ({
  routeTo,
  tableData,
  assign,
  index = 0,
  riskDetails,
}: any) => {
  const userOrganization = usePage().props.auth.userOrganization;
  const userRole = usePage().props.auth.roles;

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [riskRegisterToDelete, setRiskRegisterToDelete] = useState("");

  const [selectedRiskRegister, setSelectedRiskRegister] = useState(null);
  const [selectThreats, setSelectThreats] = useState<any[]>([]);
  const [show, setShow] = useState<boolean>(false);
  // const [riskDetails, setRiskDetails] = useState([]);
  const [riskDetailShow, setRiskDetailShow] = useState(false);
  // const handleRiskDetailShow = () => {
  //   setRiskDetailShow(false);
  //   setRiskDetails([]);
  // };

  const handleDeleteClick = (riskRegister: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(
      `RiskRegister "${riskRegister.risk.name}" will be deleted !!`
    );
    setRiskRegisterToDelete(riskRegister);
    setShowDeleteModal(true);
  };

  const [formData, setFormData] = useState({
    details: "",
    dueDate: "",
    assignTo: "",
  });

  const handleAssignClick = (riskregister: any) => {
    setModalTitle("Risk Regiser Assign");
    setModalMessage(``);
    setSelectedRiskRegister(riskregister);
    setShowModal(true);
  };

  const handleResidualrisk = (riskregister: any) => {
    if (userOrganization) {
      setShow(true);
      setSelectedRiskRegister(riskregister);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetFormData();
  };

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (selectedRiskRegister && selectedRiskRegister.id) {
  //     axios
  //       .post(`/riskregister/assign/${selectedRiskRegister.id}`, formData)
  //       .then((response) => {
  //         // console.log(response.data);
  //         resetFormData();
  //         setShowModal(false);
  //       })
  //       .catch((error) => {
  //         console.error("There was an error submitting the form!", error);
  //       });
  //   }
  // };

  const resetFormData = () => {
    setFormData({
      details: "",
      dueDate: "",
      assignTo: "",
    });
    setSelectedRiskRegister(null);
    setSelectThreats([]);
  };

  useEffect(() => {
    if (
      selectedRiskRegister &&
      selectedRiskRegister.id &&
      selectedRiskRegister.id
    ) {
      axios
        .get(`/get-threatsbyrisk/${selectedRiskRegister.id}`)
        .then((response) => {
          setSelectThreats(response.data.selectThreats);
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the threats by risk!",
            error
          );
        });
    } else {
      setSelectThreats([]);
    }
  }, [selectedRiskRegister]);

  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),

        accessorKey: "id",
        enableColumnFilter: false,
      },

      {
        header: "Risk Name",
        cell: (info: any) => (
          // <Link
          //   href={route("riskregister.details", info.row.original)}
          //   method="get"
          //   as="button"
          // >
          //   {info.getValue()}
          // </Link>
          <Link
            href={route("riskregister.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "risk.name",

        enableColumnFilter: false,
      },

      {
        header: "Assets Name",
        cell: (info: any) => (
          <Link
            href={route("riskregister.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "assest.name",

        enableColumnFilter: false,
      },

      {
        header: "CIA",

        accessorKey: "assetvalue",

        enableColumnFilter: false,
      },

      {
        header: "Inherent Value",

        accessorKey: "risk_value",

        enableColumnFilter: false,
      },

      {
        header: "Residual Risk",

        accessorKey: "revised_risk_value",

        enableColumnFilter: false,
      },

      {
        header: "Control Code",

        accessorKey: "controlcode.code",
        enableColumnFilter: false,
      },

      {
        header: "ISMS No",

        accessorKey: "isms_control_no",
        enableColumnFilter: false,
      },

      {
        header: "Provision",

        accessorKey: "provision.provisions",
        enableColumnFilter: false,
      },

      {
        header: "Risk Owner",

        accessorKey: "risk_owner",
        enableColumnFilter: false,
      },

      {
        header: "Risk Treatment",

        accessorKey: "risktreatment_required",
        enableColumnFilter: false,
      },
      {
        header: "Risk Strategy Option",

        accessorKey: "riskstrategy_option",
        enableColumnFilter: false,
      },
      {
        header: "Closer Date",

        accessorKey: "closed_date",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <Dropdown>
            <Dropdown.Toggle
              href="#"
              className="btn btn-soft-primary btn-sm dropdown arrow-none"
              as="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              {userRole[0] != "Super-Admin" && (
                <>
                  <Dropdown.Item
                    className="dropdown-item edit-item-btn text-secondary"
                    onClick={() => handleAssignClick(info.row.original)}
                  >
                    <i className="ri-user-add-fill align-bottom me-2 text-secondary"></i>{" "}
                    Assign
                  </Dropdown.Item>

                  <Dropdown.Item className="dropdown-item remove-item-btn text-muted">
                    <Link
                      href={route("riskregister.edit", info.row.original.id)}
                    >
                      <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                      Edit
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item remove-item-btn text-success"
                    onClick={() => handleResidualrisk(info.row.original)}
                  >
                    <i className="ri-checkbox-circle-fill align-bottom me-2 text-success"></i>{" "}
                    Residual Risk
                  </Dropdown.Item>
                </>
              )}

              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original)}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    []
  );

  const deleteRiskRegister = () => {
    router.delete(route("riskregister.destroy", riskRegisterToDelete));
    setShowModal(false);
    // toprightnotify();
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(tableData.data, undefined, 2)}</pre> */}
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        // theadClass="table-light"
      />

      {selectedRiskRegister && (
        <CreateCorrectiveAction
          show={showModal}
          setShow={setShowModal}
          sourceId={selectedRiskRegister.id}
          sourceType="App\Models\Riskregister"
        />
      )}

      {selectedRiskRegister && (
        <ResidualRisk
          show={show}
          setShow={setShow}
          risk={selectedRiskRegister}
        />
      )}
      {/* 
      <Modal
        show={riskDetailShow}
        onHide={handleRiskDetailShow}
        animation
      ></Modal> */}

      {/* <Modal show={showModal} onHide={handleCloseModal} animation>
        <Modal.Header className="modal-title">
          <h4>{modalTitle}</h4>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body className="p-3">
            <div className="mt-2">
            

              {selectedRiskRegister && (
                <Row>
                  <Card>
                    <CardHeader>
                      Risk Name:- {selectedRiskRegister.risk.name}
                    </CardHeader>
                    <CardBody>
                      <ul>
                        <li className="p-1">
                          Threats:- {selectedRiskRegister.threats.name}
                        </li>
                        <li className="p-1">
                          Vulnerability:-{" "}
                          {selectedRiskRegister.threats.vulerability}
                        </li>
                        <li className="p-1">
                          Control Code:- {selectedRiskRegister.controlcode.code}
                        </li>
                        <li className="p-1">
                          Control Name:- {selectedRiskRegister.controlcode.name}
                        </li>
                        <li className="p-1">
                          Provision Caod:- {selectedRiskRegister.provision.code}
                        </li>
                        <li className="p-1">
                          Provision Name:-{" "}
                          {selectedRiskRegister.provision.provisions}
                        </li>
                        <li className="p-1">
                          CIA:- {selectedRiskRegister.assetvalue}
                        </li>
                        <li className="p-1">
                          Risk Value:- {selectedRiskRegister.risk_value}
                        </li>
                        <li className="p-1">
                          Closer Value:- {selectedRiskRegister.closed_date}
                        </li>
                        <li className="p-1">
                          Risk Owner:- {selectedRiskRegister.risk_owner}
                        </li>
                        <li className="p-1">
                          Risk Straregy:-{" "}
                          {selectedRiskRegister.riskstrategy_option}
                        </li>
                      </ul>
                    </CardBody>
                  </Card>

                  <Col md={12} className="p-2">
                    <Form.Label htmlFor="assetId" className="form-label">
                      Activity/Action/Control Details
                    </Form.Label>

                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </Col>

                  <Col md="6" className="p-2">
                    <Form.Label htmlFor="" className="form-label">
                      {" "}
                      Due Date
                    </Form.Label>

                    <input
                      type="date"
                      name="dueDate"
                      className="form-control"
                      value={formData.dueDate}
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md="6" className="p-2">
                    <Form.Label htmlFor="" className="form-label">
                      {" "}
                      Assign
                    </Form.Label>

                    <select
                      id="assetDropDown"
                      className="form-control form-select"
                      name="assignTo"
                      value={formData.assignTo}
                      onChange={handleChange}
                    >
                      <option>Select...</option>
                      {assign.map((user: any) => (
                        <option
                          key={user.id}
                          value={user.id}
                          hidden={user.organization_id != userOrganization.id}
                        >
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
              )}

              <p className="text-muted mb-4"> {modalMessage}</p>
              <div className="hstack gap-2 justify-content-center">
                <Button variant="light" onClick={handleCloseModal}>
                  Close
                </Button>

                <Button type="submit" variant="danger">
                  Confirm
                </Button>
              </div>
            </div>
          </Modal.Body>
        </form>
      </Modal> */}
      {riskRegisterToDelete && (
        <Modal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          centered
        >
          <Modal.Header className="modal-title" closeButton />

          <Modal.Body className="text-center p-5">
            <i className=" ri-close-circle-fill display-5 text-danger"></i>
            <div className="mt-4">
              <h4 className="mb-3">{modalTitle}</h4>
              <p className="text-muted mb-4"> {modalMessage}</p>
              <div className="hstack gap-2 justify-content-center">
                <Button variant="danger" onClick={(e) => deleteRiskRegister()}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { SearchTable };
