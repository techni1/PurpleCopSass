import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import { useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addAudit,
  fetchAuditData,
  getAllAudit,
  getAuditStatus,
} from "../../slices/auditCenter/reducer";
import axios from "axios";

export default function CreateAudit({
  isCreateModalOpen,
  setCreateModalOpen,
  userframework,
}: any) {
  const dispatch = useDispatch();
  const audits = useSelector(getAllAudit);
  const [date, setDate] = useState(new Date());

  const {
    data,
    setData,
    post,
    processing,
    errors,
    setError,
    reset,
    clearErrors,
  } = useForm({
    name: "",
    organization_framework_id: "",
    audit_date: "",
    start_date: "",
    end_date: "",
  });

  const onCreateAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("auditcenter.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setCreateModalOpen(false);
      },
    });

    // try {
    //   const response = await axios.post("/store-audit", {
    //     name: data.name,
    //     organization_framework_id: parseInt(data.organization_framework_id),
    //     audit_date: data.audit_date,
    //     start_date: data.start_date,
    //     end_date: data.end_date,
    //   });
    //   if (response.data.success) {
    //     //@ts-ignore
    //     dispatch(fetchAuditData());
    //     handleModalClose();

    //     // dispatch(
    //     //   addAudit({
    //     //     ...data,
    //     //   })
    //     // );
    //   }
    // } catch (error) {
    //   console.error("error fetching audits list", error);
    // }
    // post("/audits"); // Replace with your actual route
  };

  const handleDateChange = (selectedDates: any, field: string) => {
    if (selectedDates && selectedDates.length > 0) {
      const selectedDate = selectedDates[0];
      const utcDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      //@ts-ignore
      setData(field, utcDate.toISOString().split("T")[0]);
    }
  };

  const handleModalClose = () => {
    // setData("start_date", "");
    // setData("end_date", "");
    // reset();
    setCreateModalOpen(false);
  };

  return (
    <Modal show={isCreateModalOpen} onHide={handleModalClose} centered>
      <Modal.Header>
        <div className="w-100 text-center">
          <h4>CREATE AUDIT</h4>
        </div>
      </Modal.Header>
      <Modal.Body className="text-start p-4 pt-4">
        <form onSubmit={onCreateAuditSubmit}>
          <Row>
            <Col lg={12}>
              <div className="mb-4">
                <Form.Label htmlFor="name" className="form-label">
                  Audit Name <span className="text-danger ms-1">*</span>
                </Form.Label>
                <Form.Control
                  id="audit_name"
                  name="name"
                  placeholder="Enter Name"
                  className={
                    "form-control" + (errors.name ? " is-invalid" : "")
                  }
                  onChange={(e: any) => setData("name", e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.name}
                </Form.Control.Feedback>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-4">
                <Form.Label htmlFor="framework" className="form-label">
                  Framework <span className="text-danger ms-1">*</span>
                </Form.Label>
                <select
                  className="form-select"
                  id="choices-framework"
                  required
                  onChange={(e) =>
                    setData("organization_framework_id", e.target.value)
                  }
                >
                  <option>Select...</option>
                  {userframework.map((data: any) => (
                    <option key={data.framework.id} value={data.id}>
                      {data.framework.name}
                    </option>
                  ))}
                </select>
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.organization_framework_id}
                </Form.Control.Feedback>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-4">
                <Form.Label htmlFor="audit_date" className="form-label">
                  Audit Date <span className="text-danger ms-1">*</span>
                </Form.Label>
                <Flatpickr
                  className="form-control"
                  // value={date}
                  placeholder="Pick a audit date"
                  onChange={(dates: any) =>
                    handleDateChange(dates, "audit_date")
                  }
                  options={{
                    dateFormat: "Y-m-d",
                    minDate: "today",
                  }}
                  required
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.audit_date}
                </Form.Control.Feedback>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="text-muted">
              <p>Observation Period</p>
            </div>

            <Col md={6} lg={6}>
              <div className="mb-4">
                <Form.Label htmlFor="start_date" className="form-label">
                  Start Date
                </Form.Label>
                <Flatpickr
                  className="form-control"
                  placeholder="Pick a start date"
                  onChange={(dates: any) =>
                    handleDateChange(dates, "start_date")
                  }
                  options={{
                    dateFormat: "Y-m-d",
                    minDate: "today",
                  }}
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.start_date}
                </Form.Control.Feedback>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="mb-4">
                <Form.Label htmlFor="end_date" className="form-label">
                  End Date
                </Form.Label>
                <Flatpickr
                  className="form-control"
                  placeholder="Pick a end date"
                  onChange={(dates: any) => handleDateChange(dates, "end_date")}
                  options={{
                    dateFormat: "Y-m-d",
                    minDate: "today",
                    disable: [data.start_date],
                  }}
                />
                <Form.Control.Feedback type="invalid" className="mt-2 d-block">
                  {errors.end_date}
                </Form.Control.Feedback>
              </div>
            </Col>
          </Row>

          <div className="mt-4">
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleModalClose}>
                CLOSE
              </Button>
              <Button type="submit" className="btn btn-primary">
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
