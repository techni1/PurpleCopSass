import React, { useMemo, useState } from "react";
import { Card, Col, Dropdown } from "react-bootstrap";
import { topPages } from "../../common/data";
import { Link } from "@inertiajs/react";
import DataArray from "./DataArray";
import TableContainer from "../../Components/Common/TableContainer";

const UserLogs = ({ userLogs }: any) => {
  const [isTopPageDropdown, setTopPageDropdown] = useState<boolean>(false);
  const toggleDropdown = () => {
    setTopPageDropdown(!isTopPageDropdown);
  };

  const dateFormate = (dateString: any) => {
    const date = new Date(dateString);
    const humanReadableDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Optional, for 12-hour format
    });
    return humanReadableDate;
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
        header: "Action",
        accessorKey: "log_name",
        enableColumnFilter: false,
      },
      {
        header: "Event",
        accessorKey: "event",
        enableColumnFilter: false,
      },
      {
        header: "Date",
        cell: (info: any) => (
          <span style={{ fontSize: "12px" }}>
            {dateFormate(info.getValue())}
          </span>
        ),
        accessorKey: "created_at",
        enableColumnFilter: false,
      },

      {
        header: "Properties",
        cell: (info: any) => (
          <DataArray data={info.row.original.properties.attributes} />
        ),
        accessorKey: "status",
        enableColumnFilter: false,
      },
    ],
    [userLogs]
  );
  const getRowProps = (row: any) => {
    // Example: Change background color based on some condition
    return {
      style: {
        backgroundColor:
          row.original.scope === "out"
            ? "#cecece"
            : row.index % 2 == 0
            ? "#f9f9f9"
            : "#e9e9e9",
      },
      className: row.original.assignee ? "highlight-row" : "",
    };
  };
  return (
    <React.Fragment>
      <Col>
        <Card
          className="card-height-100"
          style={{ border: "1px solid #E6EAEF", borderRadius: "14px" }}
        >
          <Card.Header
            className="align-items-center d-flex"
            style={{ borderRadius: "14px 14px 0 0" }}
          >
            <h4 className="card-title mb-0 flex-grow-1">Recent Activities</h4>
            {/* <div className="flex-shrink-0">
              <Dropdown
                show={isTopPageDropdown}
                onClick={toggleDropdown}
                className="card-header-dropdown"
              >
                <Dropdown.Toggle
                  as="a"
                  className="text-reset dropdown-btn arrow-none"
                  role="button"
                >
                  <span className="text-muted fs-16">
                    <i className="mdi mdi-dots-vertical align-middle"></i>
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  <Dropdown.Item>Today</Dropdown.Item>
                  <Dropdown.Item>Last Week</Dropdown.Item>
                  <Dropdown.Item>Last Month</Dropdown.Item>
                  <Dropdown.Item>Current Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </Card.Header>
          <Card.Body className="">
            <TableContainer
              columns={columns || []}
              data={userLogs || []}
              // isGlobalFilter={true}
              customPageSize={10}
              getRowProps={getRowProps}
              // divClass="table-responsive table-card mb-3"
              // tableClass=" align-middle table-wrap"
              // theadClass="table-light"
              SearchPlaceholder="Search..."
            />
            {/* <div className="table-responsive table-card">
              <table className="table align-middle table-borderless table-centered table-nowrap mb-0">
                <thead
                  style={{ background: "rgb(123, 0, 255)", color: "white" }}
                >
                  <tr>
                    <th scope="col" style={{ width: "62" }}>
                      Action
                    </th>
                    <th scope="col">Event</th>
                    <th scope="col">Date</th>
                    <th scope="col">Properties</th>
                  </tr>
                </thead>
                <tbody>
                  {(userLogs || []).map((item: any, index: any) => (
                    <tr key={index}>
                      <td>
                        <a href="#">{item.log_name}</a>
                      </td>
                      <td>{item.event}</td>
                      <td>{dateFormate(item.created_at)}</td>

                      <td>
                        <DataArray data={item.properties.attributes} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default UserLogs;
