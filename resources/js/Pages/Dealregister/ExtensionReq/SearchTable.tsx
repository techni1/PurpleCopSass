import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link, router, usePage } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import ActionButton from "././ActionButton";

const SearchTable = ({ auth, tableData, index = 0 }: any) => {
  // useEffect(() => {
  //   console.log(employeeToDelete);
  // }, [employeeToDelete]);
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
        header: "Deal Name",
        cell: (info: any) => (
          <Link
            href={route("dealregister.extensionshow", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100 text-capitalize"
          >
            {String(info.getValue())}
          </Link>
        ),
        accessorKey: "dealregister.deal_name",
        enableColumnFilter: false,
      },

      {
        header: "Expiry Date",
        accessorKey: "dealregister.expiry_date",
        enableColumnFilter: false,
      },
      {
        header: "Request Expiry Date",
        accessorKey: "extension_date",
        enableColumnFilter: false,
      },
      {
        header: "Approved Expiry Date",
        accessorKey: "approved_expirydate",
        enableColumnFilter: false,
      },

      {
        header: "Status",
        cell: (info: any) => (
          <span className={`text-capitalize`}>{String(info.getValue())}</span>
        ),
        accessorKey: "status",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <div className="d-flex align-items-center gap-2">
            <Link
              href={route("dealregister.extensionshow", info.row.original.id)}
              className="btn btn-sm btn-outline-primary"
              title="Edit"
            >
              <i className="ri-edit-line"></i>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      {/* {<pre>{JSON.stringify(tableData, undefined, 2)}</pre>} */}

      <TableContainer
        columns={columns || []}
        data={tableData || []}
        isGlobalFilter={false}
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
