import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import Select from "react-select";

export default function DepartmentEdit({
  departments,
  requirement,
  userRoles,
}: any) {
  const [departmentModalShow, setDepartmentModalShow] = useState(false);

  const { data, setData, errors, post, processing, reset } = useForm({
    department_id: "",
    _method: "PUT",
  });

  const [routeTo, setRouteTo] = useState("");

  const handleChange = async (e: any) => {
    const updatedData = {
      ...data,
      [e.name]: parseInt(e.value),
      // [e.target.name]: parseInt(e.target.value),
    };
    setData(updatedData);
  };

  useEffect(() => {
    if (requirement.policy) {
      setRouteTo("policy.update");
    }
    if (requirement.evidence) {
      setRouteTo("evidence.update");
    }
  }, [requirement]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route(routeTo, requirement.policy?.id ?? requirement.evidence?.id), {
      preserveScroll: true,
      onSuccess: () => {
        setDepartmentModalShow(false);
        reset();
      },
    });
  };

  return (
    <>
      <Col lg={3}>
        <h6>Department</h6>
        <div className="fs-6">
          <span className=" text-primary py-1 rounded ">
            {requirement?.policy?.department?.name ??
              requirement?.evidence?.department?.name ??
              "NAN"}
            {userRoles == "Admin" && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Edit</Tooltip>}
              >
                <Button
                  onClick={() => setDepartmentModalShow(true)}
                  className="p-0"
                  variant="link"
                >
                  <i className="ri-edit-line text-secondary " />
                </Button>
              </OverlayTrigger>
            )}
          </span>
        </div>
      </Col>
      <Modal
        show={departmentModalShow}
        onHide={() => setDepartmentModalShow(false)}
        centered
      >
        <Modal.Header closeButton>Edit Department</Modal.Header>
        <Modal.Body>
          {/* <pre>{JSON.stringify(requirement.policy.id, undefined, 2)}</pre> */}
          <form onSubmit={onSubmit}>
            <Row>
              <Select
                onChange={handleChange}
                options={departments.map((department: any) => ({
                  value: department.id,
                  label: department.name,
                  name: "department_id",
                }))}
                className="text-primary"
                styles={{
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "black",
                  }),
                }}
                required
              />
            </Row>
            <Row className="pt-3">
              <div>
                <Button
                  type="submit"
                  className="btn btn-primary w-25"
                  disabled={processing}
                >
                  Save
                </Button>
              </div>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
      {/* <pre>{JSON.stringify(departments, undefined, 2)}</pre> */}
    </>
  );
}
