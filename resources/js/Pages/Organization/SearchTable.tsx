import React, { useEffect, useMemo, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import Loader from "../../Components/Common/Loader";
import { Button, Form } from "react-bootstrap";
import { APPROVER_STATUS_CLASS_MAP_DATE, APPROVER_STATUS_TEXT_MAP } from "../../Components/constants/statusConstant";

const StatusToggle = ({ id, status }: { id: number; status: boolean }) => {
  const [checked, setChecked] = useState(status);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked;
    setChecked(newStatus);

    Inertia.post('/update-status', { id, status: newStatus }, {
      onError: (errors) => {
        console.error('Error updating status:', errors);
      }
    });
  };

  return (
    <div className="form-check form-switch form-switch-right form-switch-md">
      <Form.Check.Input
        onChange={handleChange}
        checked={checked}
        className="form-check-input code-switcher"
        id={`status-toggle-${id}`}
        type="checkbox"
      />
    </div>
  );
};

const SearchTable = ({ routeTo, tableData }: any) => {
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
        header: "Company Name",
        cell: (info: any) => (
          <Link
            href={route(routeTo, info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",
        enableColumnFilter: false,
      },

      {
        header: "URL",
        cell: (info: any) => (
          <a href={info.getValue()} target="_blank" rel="noopener noreferrer">
            <i className=" ri-external-link-line fs-18" />
          </a>
        ),
        accessorKey: "url",
        enableColumnFilter: false,
      },

      {
        header: "Security Officer",
        accessorKey: "security_officer",
        enableColumnFilter: false,
      },

      {
        header: "address",
        accessorKey: "address",
        enableColumnFilter: false,
      },
      {
        header: "Partner ",
        accessorKey: "addedby.username",
        enableColumnFilter: false,
      },
      
      {
        header: "Status",
        cell: (info: any) => (
          <>
            <span className={APPROVER_STATUS_CLASS_MAP_DATE[info.getValue()]}>
              {APPROVER_STATUS_TEXT_MAP[info.getValue()]}
            </span>
            <StatusToggle id={info.row.original.id} status={info.getValue()} />
          </>
        ),
        accessorKey: "status",
        enableColumnFilter: false,
      },

    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={tableData || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
    </React.Fragment>
  );
};

export { SearchTable };
