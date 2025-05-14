import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router, usePage } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import ActionButton from "./ActionButton";

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
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "deal_name",
        enableColumnFilter: false,
      },

      {
        header: "Contact Person",
        accessorKey: "contact_person",
        enableColumnFilter: false,
      },
      {
        header: "Contact No",
        accessorKey: "contact_number",
        enableColumnFilter: false,
      },

      {
        header: "Expiry Date",
        accessorKey: "expiry_date",
        enableColumnFilter: false,
      },

      {
        header: "Status",

        accessorKey: "deal_status",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <ActionButton
            dealregister={info.row.original}
            key={info.row.original.id}
          />
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
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
