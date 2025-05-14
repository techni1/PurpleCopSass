import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link, router, usePage } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import {
  BILLING_PAYMENTSTATUS_CLASS_MAP,
  BILLING_STATUS_CLASS_MAP,
} from "../../../Components/constants/statusConstant";

const SearchTable = ({ tableData, index = 0 }: any) => {
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
        header: "Invoice No",
        cell: (info: any) => (
          <Link
            href={route("billing.show", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "invoce_no",
        enableColumnFilter: false,
      },

      {
        header: "Organization",
        accessorKey: "organization.name",
        enableColumnFilter: false,
      },
      {
        header: "Package",
        accessorKey: "package.name",
        enableColumnFilter: false,
      },

      {
        header: "Invoice Due Date",
        accessorKey: "invoice_due_date",
        enableColumnFilter: false,
      },
      {
        header: "Invoice Date",
        accessorKey: "invoice_date",
        enableColumnFilter: false,
      },

      {
        header: "Final Amount",
        accessorKey: "billingAmount",
        enableColumnFilter: false,
      },
      {
        header: "Next Billing Date",
        accessorKey: "next_billingdate",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        cell: (info: any) => (
          <span className={BILLING_STATUS_CLASS_MAP[info.getValue()]}>
            {info.getValue()}
          </span>
        ),
        accessorKey: "billing_status",
        enableColumnFilter: false,
      },

      {
        header: "Payment Status",
        cell: (info: any) => (
          <span className={BILLING_PAYMENTSTATUS_CLASS_MAP[info.getValue()]}>
            {info.getValue()}
          </span>
        ),
        accessorKey: "payment_status",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
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
