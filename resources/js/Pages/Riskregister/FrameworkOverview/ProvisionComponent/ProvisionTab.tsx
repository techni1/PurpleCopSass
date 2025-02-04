import React, { useCallback, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Card, Col, Row, Table, Form } from "react-bootstrap";
import axios from "axios";
import { debounce } from "lodash";

interface FrameworkProvision {
  framework_id: number;
  provision_id: number;
}

interface Provision {
  id: number;
  code: string;
  provisions: string;
  framework_name: string;
  category: {
    name: string;
  };
}

interface ProvisionTabProps {
  framework: {
    id: number;
  };
  allProvisions: {
    data: Provision[];
  };
}

const ProvisionTab: React.FC<ProvisionTabProps> = ({
  framework,
  allProvisions,
}) => {
  let count = 1;
  const [frameworkProvision, setFrameworkProvision] = useState<
    FrameworkProvision[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [filteredData, setFilteredData] = useState<Provision[]>(
    allProvisions.data
  );

  useEffect(() => {
    const fetchFrameworkProvisions = async () => {
      try {
        const response = await axios.get("/get-framework-provision");
        const data = response.data;
        setFrameworkProvision(data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchFrameworkProvisions();
  }, []);

  useEffect(() => {
    let filtered = allProvisions.data;
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.provisions.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedFramework) {
      filtered = filtered.filter(
        (item) => item.framework_name === selectedFramework
      );
    }
    setFilteredData(filtered);
  }, [searchTerm, selectedFramework, allProvisions.data]);

  const handleIsChecked = (provisionId: number) => {
    return frameworkProvision.some(
      (checked) =>
        checked.framework_id === framework.id &&
        checked.provision_id === provisionId
    );
  };

  const debouncedHandleChange = useCallback(
    debounce(async (newChecked, frameworkId, provisionId) => {
      try {
        if (newChecked) {
          const response = await axios.post("/update-framework-provision", {
            framework_id: frameworkId,
            provision_id: provisionId,
          });
          if (response.data.success) {
            setFrameworkProvision((prev) => [
              ...prev,
              { framework_id: frameworkId, provision_id: provisionId },
            ]);
            console.log("Provision Added");
          }
        } else {
          const response = await axios.delete("/delete-framework-provision", {
            data: {
              framework_id: frameworkId,
              provision_id: provisionId,
            },
          });
          if (response.data.success) {
            setFrameworkProvision((prev) =>
              prev.filter(
                (item) =>
                  !(
                    item.framework_id === frameworkId &&
                    item.provision_id === provisionId
                  )
              )
            );
            console.log("Provision Removed");
          }
        }
      } catch (error) {
        console.error("Error Updating Provision", error);
      }
    }, 300),
    []
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    provisionId: number
  ) => {
    const newChecked = event.target.checked;
    debouncedHandleChange(newChecked, framework.id, provisionId);
  };

  const frameworkNames = Array.from(
    new Set(allProvisions.data.map((item) => item.framework_name))
  );

  return (
    <React.Fragment>
      <Row className="pb-3">
        <Col lg={4}>
          <Form.Control
            type="text"
            id="searchprovisions"
            placeholder="Search provisions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
        </Col>
        <Col lg={3}>
          <Form.Control
            as="select"
            value={selectedFramework}
            id="selectframework"
            onChange={(e) => setSelectedFramework(e.target.value)}
            className="mb-3"
          >
            <option value="">Frameworks</option>
            {frameworkNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col lg={3}>
          <Link
            href={route("provisions.create")}
            className="btn btn-soft-primary"
          >
            <i className="ri-add-circle-line align-middle me-1"></i> Add New
            Provision
          </Link>
        </Col>
      </Row>
      <Card>
        <h5 className="p-3">Link Provisions</h5>
        <Card.Body>
          <div className="live-preview">
            <div className="table-responsive table-card">
              <Table className="align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" style={{ width: "46px" }}>
                      <div className="form-check">
                        <Form.Check.Input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          disabled
                          id="cardtableCheck"
                        />
                        <Form.Check.Label
                          className="form-check-label"
                          htmlFor="cardtableCheck"
                        ></Form.Check.Label>
                      </div>
                    </th>
                    <th scope="col">Code</th>
                    <th scope="col">Provisions</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((provision) => (
                    <tr key={provision.id}>
                      <td>{count++}</td>
                      <td>
                        <div className="form-check">
                          <Form.Check.Input
                            className="form-check-input"
                            type="checkbox"
                            id={provision.code}
                            checked={handleIsChecked(provision.id)}
                            onChange={(e) => handleChange(e, provision.id)}
                          />
                          <Form.Check.Label
                            className="form-check-label"
                            htmlFor={provision.code}
                          ></Form.Check.Label>
                        </div>
                      </td>
                      <td>{provision.code}</td>
                      <td className="">{provision.provisions}</td>
                      <td style={{ width: "200px" }}>
                        {provision.category.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ProvisionTab;
