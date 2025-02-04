import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

export default function AccessSingleDocument({ documents, users }: any) {
  const [isAccessFromOpen, setIsAccessFormOpen] = useState(false);
  const [accessDate, setAccessDate] = useState<Date | null>(null);

  const {
    data: AccessData,
    setData: setAccessData,
    post: postAccess,
    errors: errorsAccess,
    processing: processingAccess,
    recentlySuccessful: recentlySuccessfulAccess,
    reset: resetAccess,
    errors: accessError,
  } = useForm({
    documents: [],
    users: [],
    date: "",
  });

  const onAccessSubmit = (e: any) => {
    e.preventDefault();
    postAccess(route("documentaccess.store"), {
      preserveScroll: true,
      onSuccess: () => {},
    });
  };

  const handleDateChange =
    (setter: any, field: any) => (selectedDates: any) => {
      if (selectedDates && selectedDates.length > 0) {
        const selectedDate = selectedDates[0];
        const utcDate = new Date(
          Date.UTC(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
          )
        );
        setAccessData(field, utcDate.toISOString().split("T")[0]);
        setter(utcDate);
      }
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
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Document" pageTitle="Dashboard" />
          <Card>
            <Card.Body>
              <Row className="g-3 col">
                <Col xxl={4} lg={6}>
                  <form onSubmit={onAccessSubmit}>
                    <div>
                      <Form.Label
                        htmlFor="choices-users-input"
                        className="form-label"
                      >
                        Select Users
                        <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <div>
                        <Select
                          closeMenuOnSelect={false}
                          isMulti={true}
                          onChange={(selectedOptions: any) => {
                            const userValues = selectedOptions.map(
                              (option: any) => option.value
                            );
                            setAccessData("users", userValues);
                          }}
                          options={users.map((user: any) => ({
                            value: user.id,
                            label: user.name,
                          }))}
                          classNamePrefix="react-select"
                          styles={customStyles}
                        />
                      </div>
                      {errorsAccess.users && (
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errorsAccess.users}
                        </Form.Control.Feedback>
                      )}
                    </div>
                    <div>
                      <Form.Label
                        htmlFor="choices-documents-input"
                        className="form-label"
                      >
                        Select Documents
                        <span className="text-danger ms-1">*</span>
                      </Form.Label>
                      <div>
                        <Select
                          closeMenuOnSelect={false}
                          isMulti={true}
                          onChange={(selectedOptions: any) => {
                            const documentValues = selectedOptions.map(
                              (option: any) => option.value
                            );
                            setAccessData("documents", documentValues);
                          }}
                          options={documents.data.map((document: any) => ({
                            value: document.id,
                            label: `${document.name} - ${document.category}`,
                          }))}
                          classNamePrefix="react-select"
                          styles={customStyles}
                        />
                      </div>
                      {errorsAccess.documents && (
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {errorsAccess.documents}
                        </Form.Control.Feedback>
                      )}
                    </div>
                    <div className="mb-4">
                      <Form.Label htmlFor="choices_date" className="form-label">
                        Grant Access Date{" "}
                        <span className="text-danger">{"*"}</span>
                      </Form.Label>
                      <Flatpickr
                        className={`form-control ${
                          accessError.date ? "is-invalid" : ""
                        }`}
                        value={accessDate}
                        onChange={handleDateChange(setAccessDate, "date")}
                        options={{
                          dateFormat: "Y-m-d",
                          minDate: "today",
                          // disable: [assigneeDate],
                        }}
                      />
                      {accessError.date && (
                        <Form.Control.Feedback
                          type="invalid"
                          className="mt-2 d-block"
                        >
                          {accessError.date}
                        </Form.Control.Feedback>
                      )}
                    </div>

                    <Button type="submit" disabled={processingAccess}>
                      Grant Access
                    </Button>
                  </form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

AccessSingleDocument.layout = (page: any) => <Layout children={page} />;
