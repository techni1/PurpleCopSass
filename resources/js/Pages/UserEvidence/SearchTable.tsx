import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router, useForm } from "@inertiajs/react";
import Flatpickr from "react-flatpickr";
import {
  EVIDENCE_STATUS_CLASS_MAP,
  EVIDENCE_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

interface UserEvidenceData {
  id: string;
  status: string;
  assigneeId: { id: string; name: string } | null;
  recurrence: string | null;
  review_date: string | null;
  approverId: { id: string; name: string } | null;
  evidenceId: { name: string };
  entityId: { id: string; name: string };
}

const SearchTable = ({ routeTo, tableData, assignees }: any) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [modalMessage, setModalMessage] = useState("");
  const [toUpdate, setToUpdate] = useState("NONE");
  const [modalTitle, setModalTitle] = useState("");
  const [userEvidenceToDelete, setUserEvidenceToDelete] =
    useState<UserEvidenceData | null>(null);
  const [showToChangeModal, setShowToChangeModal] = useState(false);
  const [userEvidenceToUpdate, setUserEvidenceToUpdate] =
    useState<UserEvidenceData | null>(null);

  const handleDeleteClick = (userevidence: UserEvidenceData) => {
    setModalTitle("Are You Sure");
    setModalMessage(
      `User Evidence: ${userevidence.evidenceId.name} of Entity: ${userevidence.entityId.name} will be deleted !!`
    );
    setUserEvidenceToDelete(userevidence);
    setShowDeleteModal(true);
  };

  const handleStatusChange = (userevidence: UserEvidenceData) => {
    setToUpdate("STATUS");
    setUserEvidenceToUpdate(userevidence);
    setShowToChangeModal(true);
  };
  const handleAssigneeChange = (userevidence: UserEvidenceData) => {
    setToUpdate("ASSIGNEE");
    setUserEvidenceToUpdate(userevidence);
    setShowToChangeModal(true);
  };
  const handleRecurrenceChange = (userevidence: UserEvidenceData) => {
    setToUpdate("RECURRENCE");
    setUserEvidenceToUpdate(userevidence);
    setShowToChangeModal(true);
  };
  const handleReviewDateChange = (userevidence: UserEvidenceData) => {
    setToUpdate("REVIEW");
    setUserEvidenceToUpdate(userevidence);
    setShowToChangeModal(true);
  };

  const handleCloseModal = () => {
    setUserEvidenceToUpdate(null);
    setShowDeleteModal(false);
  };

  const handleCloseToChangeModal = () => {
    setShowToChangeModal(false);
  };

  const deleteClient = () => {
    if (userEvidenceToDelete) {
      router.delete(route("userevidence.destroy", userEvidenceToDelete.id));
      setShowDeleteModal(false);
    }
  };

  const { data, setData, patch, processing, errors, reset } = useForm<any>({
    status: "",
    assignee_id: "",
    recurrence: "",
    review_date: "",
    approver_id: "",
    toUpdate: "",
  });

  useEffect(() => {
    if (userEvidenceToUpdate) {
      setData({
        status: userEvidenceToUpdate.status,
        assignee_id: userEvidenceToUpdate.assigneeId
          ? userEvidenceToUpdate.assigneeId.id
          : "",
        recurrence: userEvidenceToUpdate.recurrence,
        review_date: userEvidenceToUpdate.review_date,
        approver_id: userEvidenceToUpdate.approverId
          ? userEvidenceToUpdate.approverId.id
          : "",
      });
      if (userEvidenceToUpdate.review_date) {
        setDate(new Date(userEvidenceToUpdate.review_date));
      }
    }
  }, [userEvidenceToUpdate]);

  const handleDateChange = (selectedDates: any) => {
    if (selectedDates && selectedDates.length > 0) {
      const selectedDate = selectedDates[0];
      // Set the selected date to midnight UTC
      const utcDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      setData("review_date", utcDate.toISOString().split("T")[0]);
    }
  };

  const onStatusSubmit = (e: any) => {
    e.preventDefault();
    if (userEvidenceToUpdate) {
      patch(route("userevidence.update", userEvidenceToUpdate.id), {
        preserveScroll: true,
        onSuccess: () => {
          reset();
          setShowToChangeModal(false);
        },
      });
    }
  };

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
        header: "Evidence Name",
        accessorKey: "evidenceId.name",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " + EVIDENCE_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {EVIDENCE_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        enableColumnFilter: false,
      },
      {
        header: "Entity Name",
        cell: (info: any) => (
          <Link
            href={route("entity.show", info.row.original.entityId.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.row.original.entityId.name}
          </Link>
        ),
        accessorKey: "entity.name",
        enableColumnFilter: false,
      },
      {
        header: "Assignee",
        accessorKey: "assigneeId.name",
        enableColumnFilter: false,
      },
      {
        header: "Recurrence",
        accessorKey: "recurrence",
        enableColumnFilter: false,
      },
      {
        header: "Review Date",
        accessorKey: "review_date",
        enableColumnFilter: false,
      },
      {
        header: "Approved By",
        accessorKey: "approverId.name",
        enableColumnFilter: false,
      },
      {
        header: "Department",
        accessorKey: "departmentId.name",
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
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-success"
                onClick={() => {}}
              >
                <i className="ri-upload-2-line align-bottom me-2 text-success"></i>{" "}
                UPLOAD
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item
                className="dropdown-item remove-item-btn text-info text-uppercase"
                onClick={() => handleStatusChange(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-info"></i>{" "}
                Status
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-info text-uppercase"
                onClick={() => handleAssigneeChange(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-info"></i>{" "}
                Assignee
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-info  text-uppercase"
                onClick={() => handleRecurrenceChange(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-info"></i>{" "}
                Recurrence
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-info text-uppercase"
                onClick={() => handleReviewDateChange(info.row.original)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-info"></i>{" "}
                Review Date
              </Dropdown.Item>
              <Dropdown.Divider />
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

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass=" align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className="ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4"> {modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={deleteClient}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Status Change Modal */}
      {userEvidenceToUpdate && (
        <Modal
          show={showToChangeModal}
          onHide={handleCloseToChangeModal}
          centered
        >
          <Modal.Header className="modal-title" />

          <Modal.Body className="text-center p-5">
            <form onSubmit={onStatusSubmit}>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      {toUpdate === "STATUS" && (
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-status"
                            className="form-label"
                          >
                            Status
                          </Form.Label>
                          <select
                            className="form-select"
                            value={data.status}
                            id="choices-status"
                            onChange={(e) => setData("status", e.target.value)}
                          >
                            <option>Select...</option>
                            <option value="not_uploaded">Not Uploaded</option>
                            <option value="draft">Draft</option>
                            <option value="approved">Approved</option>
                          </select>
                          {errors.status && (
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.status}
                            </Form.Control.Feedback>
                          )}
                        </div>
                      )}
                      {toUpdate === "ASSIGNEE" && (
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-assignee_id"
                            className="form-label"
                          >
                            Assignee
                          </Form.Label>
                          <select
                            className="form-select"
                            value={data.assignee_id}
                            id="choices-assignee_id"
                            onChange={(e) =>
                              setData("assignee_id", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            {assignees.data.map((assign: any) => (
                              <option key={assign.id} value={assign.id}>
                                {assign.name}
                              </option>
                            ))}
                          </select>
                          {errors.assignee_id && (
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.assignee_id}
                            </Form.Control.Feedback>
                          )}
                        </div>
                      )}
                      {toUpdate === "RECURRENCE" && (
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-recurrence"
                            className="form-label"
                          >
                            Recurrence
                          </Form.Label>
                          <select
                            className="form-select"
                            value={data.recurrence}
                            id="choices-recurrence"
                            onChange={(e) =>
                              setData("recurrence", e.target.value)
                            }
                          >
                            <option>Select...</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Annually">Annually</option>
                            <option value="Bi-Annually">Bi-Annually</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Never">Never</option>
                          </select>
                          {errors.recurrence && (
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.recurrence}
                            </Form.Control.Feedback>
                          )}
                        </div>
                      )}
                      {toUpdate === "REVIEW" && (
                        <div className="mb-4">
                          <Form.Label
                            htmlFor="choices-review_date"
                            className="form-label"
                          >
                            Review Date
                          </Form.Label>
                          <Flatpickr
                            className="form-control"
                            value={date}
                            onChange={handleDateChange}
                            options={{
                              dateFormat: "Y-m-d",
                              minDate: "today",
                            }}
                          />
                          {errors.review_date && (
                            <Form.Control.Feedback
                              type="invalid"
                              className="mt-2 d-block"
                            >
                              {errors.review_date}
                            </Form.Control.Feedback>
                          )}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="mt-4">
                <div className="hstack gap-2 justify-content-center">
                  <Button variant="light" onClick={handleCloseToChangeModal}>
                    Close
                  </Button>

                  <Button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={processing}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { SearchTable };
