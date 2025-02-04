import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Col, Form, Offcanvas, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { debounce } from "lodash";
import type { AppDispatch } from "../../../../../app";
import { useDispatch } from "react-redux";
import { fetchFrameworkProvision } from "../../../../../slices/framework/frameworkReducer";

interface Control {
  id: number;
  name: string;
  code: string;
  control_domain: string;
}

interface LinkControlProps {
  controls: {
    data: Control[];
  };
  show: boolean;
  setShow: (show: boolean) => void;
  provision: {
    id?: number;
    controls: Control[];
  };
  frameworkId: number;
}

interface FormData {
  provision_id: number | undefined;
  control_code_ids: number[];
}

export default function LinkControl({
  controls,
  show,
  setShow,
  provision,
  frameworkId,
}: LinkControlProps) {
  const { data, setData, errors, post, processing, reset } = useForm<FormData>({
    provision_id: 0,
    control_code_ids: [],
  });

  const dispatch: AppDispatch = useDispatch();
  const handleClose = () => setShow(false);
  const [selectedDomain, setSelectedDomain] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Control[]>(controls.data);
  const [controlIds, setControlIds] = useState<number[] | null>(null);

  useEffect(() => {
    let filtered = controls.data;
    if (searchTerm) {
      filtered = filtered.filter(
        (item: Control) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedDomain) {
      filtered = filtered.filter(
        (item: Control) => item.control_domain === selectedDomain
      );
    }
    setFilteredData(filtered);
  }, [searchTerm, selectedDomain, controls.data]);

  useEffect(() => {
    if (provision.controls) {
      setControlIds(
        Array.from(new Set(provision.controls.map((item: Control) => item.id)))
      );
    }
  }, [provision.controls]);

  const domains = Array.from(
    new Set(controls.data.map((item: any) => item.control_domain))
  );

  const handleCheckboxChange = (e: any, controlId: any) => {
    const updatedControlCodeIds = e.target.checked
      ? [...(data.control_code_ids || []), controlId]
      : (data.control_code_ids || []).filter((id) => id !== controlId);

    setData("control_code_ids", updatedControlCodeIds);
  };

  useEffect(() => {
    setData("provision_id", provision.id);
  }, [provision.id]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (frameworkId == 0) {
        return;
      }

      post(route("provision-controls.store"), {
        preserveScroll: true,
        onSuccess: () => {
          // reset();
          setData("control_code_ids", []);
          dispatch(fetchFrameworkProvision(frameworkId));
        },
      });
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setShow(false);
    }
  };

  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        id="offcanvasRight"
      >
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">
            Link Controls
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Header className="pb-0 mb-0">
          <Row>
            <Col>
              <Form.Control
                type="text"
                id="searchcontrols"
                placeholder="Search Controls"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-3"
              />
              {/* <pre>{JSON.stringify(controls.data, undefined, 2)}</pre> */}
            </Col>

            {/* {domains.length > 0 && (
              <Col>
                <Form.Control
                  as="select"
                  value={selectedDomain}
                  id="selectdomain"
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="mb-3"
                >
                  <option value="">Filter Domains</option>
                  {domains.map((domain: any) => (
                    <option key={domain.id} value={domain.name}>
                      {domain.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            )} */}
          </Row>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table className="align-middle mb-0">
            <tbody>
              {filteredData.map(
                (control: Control) =>
                  controlIds != null &&
                  !controlIds.includes(control.id) && (
                    <tr key={control.id}>
                      <td>
                        <div className="Form-check">
                          <Form.Check.Input
                            className="form-check-input"
                            type="checkbox"
                            id={control.id.toString()}
                            checked={data.control_code_ids.includes(control.id)}
                            onChange={(e) =>
                              handleCheckboxChange(e, control.id)
                            }
                          />
                          <Form.Check.Label
                            className="form-check-label"
                            htmlFor={control.code}
                          ></Form.Check.Label>
                        </div>
                      </td>
                      <td>
                        {control.code}
                        {" : "}
                        {control.name}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </Table>
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Form onSubmit={onSubmit}>
            <button type="submit" className="btn btn-soft-primary">
              LINK
            </button>
          </Form>
        </Offcanvas.Header>
      </Offcanvas>
    </React.Fragment>
  );
}
