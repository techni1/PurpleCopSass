import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import Loader from "../../Components/Common/Loader";

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
