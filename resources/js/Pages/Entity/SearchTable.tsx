import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";

const SearchTable = ({ routeTo, tableData, securityOfficers }: any) => {
  const findUserById = (id: any) => {
    const user = securityOfficers.data.find(
      (user: any) => user.id.toString() === id
    );
    return user ? user.name : "Not Assigned";
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
        header: "Entity Name",
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
        header: "Organization Name",
        cell: (info: any) => (
          <Link
            href={route(routeTo, info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "organization.name",
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
        cell: (info: any) => findUserById(info.row.original.security_officer),
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
      {/* <pre>
                {JSON.stringify(
                    tableData.data[0].organization.name,
                    undefined,
                    2
                )}
            </pre> */}
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
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
