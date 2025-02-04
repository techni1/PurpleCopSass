import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import { Dropdown } from "react-bootstrap";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {
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
        header: "Risk Name",
        cell: (info: any) => (
          <Link
            href={route("risk.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",

        enableColumnFilter: false,
      },


      {
        header: "Risk Category",

        accessorKey: "riskcategory.name",

        enableColumnFilter: false,
      },

      {
        header: "Status",

        accessorKey: "risk_status",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <Dropdown>
            <Dropdown.Toggle
              href="#"
              className="btn btn-soft-primary btn-sm dropdown arrow-none"
              as="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">

              <Dropdown.Item className="dropdown-item edit-item-btn">
                {/* <Link href={route("framework.edit", info.row.original.id)}> */}
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                Risk Strategy
                {/* </Link> */}
              </Dropdown.Item>


              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => { }}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
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
