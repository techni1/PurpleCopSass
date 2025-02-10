import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import CancelBilling from "./CancelBilling";
import Regenrate from "./Regenrate";
import Invoice from "../Invoice";

import ActionButton from "./ActionButton";
import { BILLING_STATUS_CLASS_MAP, BILLING_STATUS_TEXT_MAP } from "../../../Components/constants/statusConstant";

const SearchTable = ({ tableData, index = 0, mastersetting, organization, entity, packageshow, offers, framwork, bank }: any) => {
 
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
            href={route("quotation.show", info.row.original.id)}
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
        accessorKey: "organization_id.name",
        enableColumnFilter: false,
      },
      {
        header: "Package",
        accessorKey: "package_id.name",
        enableColumnFilter: false,
      },
      {
        header: "Offer",
        accessorKey: "offer_id.name",
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
        header: "Tax Amount",
        accessorKey: "taxable_total",
        enableColumnFilter: false,
      },
      {
        header: "Final Amount",
        accessorKey: "final_amount",
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
            {BILLING_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        accessorKey: "billing_status",
        enableColumnFilter: false,
      },
      
      {
        header: "Added By",
        accessorKey: "created_by",
        enableColumnFilter: false,
      },

      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <ActionButton 
          billing={info.row.original}
          key={info.row.original.id}
          mastersetting={mastersetting}
          organization={organization}
          entity={entity}
          packageshow={packageshow}
          offers={offers}
          framwork={framwork}
          bank ={bank}
          
        
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
        data={tableData.data || []}
        isGlobalFilter={false}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />


      {/* {selectedBilling && (
        <EditBilling
          show={show}
          setShow={setShow}
          billing={selectedBilling}
        />
      )} */}


    </React.Fragment>
  );
};

export { SearchTable };
