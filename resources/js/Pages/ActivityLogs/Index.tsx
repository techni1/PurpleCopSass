import React, { useMemo, useState } from "react";
import { Head } from "@inertiajs/react";
import { Card, Col, Container, Row, Table, Form } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";

interface ActivityLog {
  id: number;
  created_at: Date;
  causer: { name: string } | null;
  description: string;
  subject_id: number;
  log_name: string;
  subject: { name: string } | null;
  properties: {
    attributes: { [key: string]: any } | null;
    old: { [key: string]: any } | null;
  };
}

interface Props {
  auth: any;
  activitylogs: ActivityLog[];
}

interface Properties {
  attributes: { [key: string]: any } | null;
  old: { [key: string]: any } | null;
}

interface CustomFC<P = {}> extends React.FC<P> {
  layout?: (page: React.ReactNode) => React.ReactNode;
}

const Index: CustomFC<Props> = ({ auth, activitylogs }) => {
  let lastIndex = 0;

  const [selectedLogName, setSelectedLogName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const uniqueLogNames = Array.from(
    new Set(activitylogs.map((log) => log.log_name))
  );

  const filteredLogs = activitylogs.filter((log) => {
    const matchesLogName = selectedLogName
      ? log.log_name === selectedLogName
      : true;
    const matchesStartDate = startDate
      ? new Date(log.created_at) >= new Date(startDate)
      : true;
    const matchesEndDate = endDate
      ? new Date(log.created_at) <= new Date(endDate)
      : true;
    return matchesLogName && matchesStartDate && matchesEndDate;
  });

  const formatDateTime = (isoDate: Date) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return (
      <div>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
    );
  };

  const renderChanges = (properties: Properties) => {
    const changes = [];

    if (properties.attributes && properties.old) {
      changes.push(<span className="h6 text-info">Update</span>);
      for (const [key, value] of Object.entries(properties.attributes)) {
        if (value !== properties.old[key]) {
          changes.push(
            <div key={key}>
              <strong>Old:</strong> {key}: {properties.old[key]} <br />
              <strong>New:</strong> {key}: {value}
            </div>
          );
        }
      }
    }
    if (properties.attributes && properties.old == null) {
      changes.push(<p className="h6 text-success">Create</p>);
      for (const [key, value] of Object.entries(properties.attributes)) {
        changes.push(
          <div key={key}>
            {key}: {value}
          </div>
        );
      }
    }
    if (properties.attributes == null && properties.old) {
      changes.push(<p className="h6 text-danger">Delete</p>);
      for (const [key, value] of Object.entries(properties.old)) {
        changes.push(
          <div key={key}>
            {key}: {value}
          </div>
        );
      }
    }

    return changes;
  };

  const columns = useMemo(
    () => [
      {
        header: "Date",
        accessorKey: "created_at",
        cell: (info: any) => formatDateTime(info.getValue()),
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Causer",
        accessorKey: "causer.name",

        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Model",
        accessorKey: "log_name",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Subject",

        cell: ({ row: { original } }) => (
          <div>
            <span className="px-2">Id: {original.subject_id} -</span>
            <span>
              {original.subject
                ? original.subject.name || "N/A"
                : original.properties?.old?.name || "N/A"}
            </span>
          </div>
        ),

        // cell: (info: any) =>
        //   info.row.original.event === "deleted"
        //     ? info.row.original.properties.old.name
        //     : info.getValue(),
        // cell: (info: any) =>
        //   info.getValue().split("\\")[info.getValue().split("\\").length - 1],
        accessorKey: "subject.name",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Details",
        accessorKey: "properties",
        cell: (info: any) => renderChanges(info.getValue()),
        enableColumnFilter: false,
        enableSorting: false,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Head title="Activity Logs" />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Activity Logs" pageTitle="Dashboard" />
          {/* <pre>{JSON.stringify(filteredLogs, undefined, 2)}</pre> */}
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      Filter by Log Name:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        as="select"
                        value={selectedLogName}
                        onChange={(e) => setSelectedLogName(e.target.value)}
                      >
                        <option value="">All</option>
                        {uniqueLogNames.map((logName) => (
                          <option key={logName} value={logName}>
                            {logName}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      Filter by Start Date:
                    </Form.Label>
                    <Col sm="4">
                      <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </Col>
                    <Form.Label column sm="2">
                      Filter by End Date:
                    </Form.Label>
                    <Col sm="4">
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <div className="live-preview">
                    <div className="table-responsive">
                      <Card>
                        <Card.Body>
                          <TableContainer
                            columns={columns || []}
                            data={filteredLogs || []}
                            isGlobalFilter={false}
                            customPageSize={10}
                            divClass="table-responsive table-card mb-3"
                            tableClass="align-middle table-nowrap"
                            theadClass="table-light"
                            SearchPlaceholder="Search..."
                          />
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Index.layout = (page: any) => <Layout children={page} />;

export default Index;
