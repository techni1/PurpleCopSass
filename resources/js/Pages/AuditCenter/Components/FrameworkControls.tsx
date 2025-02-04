import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import { debounce } from "lodash";
import axios from "axios";
import CustomPlaceholder from "../../../Components/CustomPlaceholder";

const FrameworkControls = ({ frameworkId }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [controls, setControls] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>(controls);

  useEffect(() => {
    setIsLoading(true);
    const debounceFetchControls = debounce(async () => {
      try {
        const response = await axios.get(`/get-unique-control/${frameworkId}`);
        setControls(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching controls", error);
      }
    });
    debounceFetchControls();
  }, [frameworkId]);

  useEffect(() => {
    let filtered = controls;
    if (searchTerm) {
      filtered = filtered.filter(
        (item: any) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, controls]);

  return (
    <React.Fragment>
      {isLoading ? (
        <CustomPlaceholder />
      ) : (
        <div>
          {/* <pre>{JSON.stringify(controls, undefined, 2)}</pre> */}
          <Form.Control
            type="text"
            id="searchcontrols"
            placeholder="Search Controls"
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
                            <th scope="col">Control Name</th>
                            <th scope="col">Code</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((control: any) => (
                            <tr key={control.id}>
                              <td>
                                {/* <Button
                                  variant="link"
                                  className="p-0"
                                  onClick={() => {}}
                                > */}
                                {control.name}
                                {/* </Button> */}
                              </td>
                              <td>{control.code}</td>
                              <td>
                                <i
                                  className="ri-error-warning-fill text-danger"
                                  style={{ fontSize: "16px" }}
                                />{" "}
                                <span className=" text-uppercase">
                                  non compliant
                                </span>
                              </td>
                            </tr>
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
    </React.Fragment>
  );
};

export default FrameworkControls;
