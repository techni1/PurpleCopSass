import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import { Button, Dropdown } from "react-bootstrap";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {
  // <pre>{JSON.stringify(tableData, undefined, 2)}</pre>
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
        header: "Topic Name",

        cell: (info: any) => (
          <Link
            href={route("lms.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),

        accessorKey: "name",

        enableColumnFilter: false,
      },

      {
        header: "Category",
        cell: (info: any) => (
          <Link
            href={route("lms.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "category",

        enableColumnFilter: false,
      },

      // {
      //   header: "Status",

      //   accessorKey: "show",
      //   enableColumnFilter: false,
      // },

      {
        header: "Your Score",

        accessorKey: "score",
        enableColumnFilter: false,
      },



      {
        header: "Assign",

        cell: (info: any) => (
          <Link href={route("lms.show", info.row.original.id)}>
            <Button className="btn btn-sm btn-primary"><i className="ri-eye-fill align-bottom me-2 text-white"></i>
            </Button>
          </Link>
        ),
        accessorKey: "Result",
        enableColumnFilter: false,
      },


    ],
    []
  );

  return (
    <React.Fragment>
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
