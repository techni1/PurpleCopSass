import React, { useEffect, useMemo, useState, useCallback } from "react";
import TableContainer from "../../../../Components/Common/TableContainerReactTable";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { debounce } from "lodash";
import { Link } from "@inertiajs/react";

const SearchTable = ({ tableData, framework }: any) => {
  const [frameworkProvision, setFrameworkProvision] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  useEffect(() => {
    const fetchFrameworkProvisions = async () => {
      try {
        const response = await axios.get("/get-framework-provision/2");
        const data = response.data;
        setFrameworkProvision(data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchFrameworkProvisions();
  }, []);

  useEffect(() => {
    let filtered = tableData;
    if (searchTerm) {
      filtered = filtered.filter((item: any) =>
        item.provisions.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedFramework) {
      filtered = filtered.filter(
        (item: any) => item.framework_name === selectedFramework
      );
    }
    setFilteredData(filtered);
  }, [searchTerm, selectedFramework, tableData]);

  const handleIsChecked = (provisionId: number) => {
    return frameworkProvision.some(
      (checked: any) =>
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
            setFrameworkProvision((prev: any) =>
              prev.filter(
                (item: any) =>
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
    }, 300), // Adjust the debounce delay as necessary
    []
  );

  const handleChange = (event: any, provisionId: number) => {
    const newChecked = event.target.checked;
    debouncedHandleChange(newChecked, framework.id, provisionId);
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
        header: "Select",
        accessorKey: "id",
        enableColumnFilter: false,
        cell: (info: any) => (
          <Form.Check
            key={info.row.original.code}
            type="checkbox"
            id={info.row.original.code}
            checked={handleIsChecked(info.row.original.id)}
            onChange={(e) => handleChange(e, info.row.original.id)}
          />
        ),
      },
      {
        header: "Provision",
        accessorKey: "provisions",
        enableColumnFilter: false,
      },
    ],
    [frameworkProvision]
  );

  const frameworkNames = [
    ...new Set(tableData.map((item: any) => item.framework_name)),
  ];

  return (
    <React.Fragment>
      <Row className="pb-3">
        {/* <pre>{JSON.stringify(framework, undefined, 2)}</pre> */}
        <Col lg={6}>
          <Form.Control
            type="text"
            placeholder="Search provisions..."
            value={searchTerm}
            id="searchprovision"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
        </Col>
        <Col lg={4}>
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
        <Col lg={2}>
          <Link
            href={route("provisions.create")}
            className="btn btn-soft-primary"
          >
            <i className="ri-add-circle-line align-middle me-1"></i> Add New
            Provision
          </Link>
        </Col>
      </Row>
      <TableContainer
        columns={columns || []}
        data={filteredData || []}
        customPageSize={10}
      />
    </React.Fragment>
  );
};

export { SearchTable };
