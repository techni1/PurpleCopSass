import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Dropdown } from "react-bootstrap";
import {
  DOCUMENT_NDA_STATUS_CLASS_MAP,
  DOCUMENT_NDA_STATUS_TEXT_MAP,
  DOCUMENT_STATUS_CLASS_MAP,
  DOCUMENT_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";

const SearchTable = ({ tableData }: any) => {
  const handleRevokeAccess = (documentAccess: any) => {
    console.error(documentAccess);
    router.delete(route("documentaccess.destroy", documentAccess));
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
        header: "User",
        accessorKey: "user.name",
        enableColumnFilter: false,
      },
      {
        header: "Access",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " + DOCUMENT_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {DOCUMENT_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        accessorKey: "access_status",
        enableColumnFilter: false,
      },

      {
        header: "Access Till",
        accessorKey: "remaining_time",
        enableColumnFilter: false,
      },

      {
        header: "Ip Address",
        accessorKey: "ip_address",
        enableColumnFilter: false,
      },
      {
        header: "Device",
        accessorKey: "device_name",
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
              <Dropdown.Item
                onClick={() => handleRevokeAccess(info.row.original)}
                className="dropdown-item edit-item-btn"
              >
                <i className=" ri-close-circle-fill align-bottom me-2 text-danger"></i>{" "}
                Revoke Access
              </Dropdown.Item>
              {/* <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => {}}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                Delete
              </Dropdown.Item> */}
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
