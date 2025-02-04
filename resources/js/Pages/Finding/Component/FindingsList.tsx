// This Component Show the list of findings fot the particular Policies or Evidences

import { useMemo } from "react";
import TableContainer from "../../../Components/Common/TableContainer";

import {
  FINDING_STATUS_CLASS_MAP,
  FINDING_STATUS_TEXT_MAP,
} from "../../../Components/constants/statusConstant";
import { Link } from "@inertiajs/react";

export default function FindingsList({ listData, auditId }: any) {
  const columns = useMemo(() => {
    const baseColumns = [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        header: "Finding Name",
        cell: (info: any) => (
          <Link
            href={route("finding.show", info.row.original)}
            className="p-0 text-capitalize"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "comment",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info: any) => (
          <span
            className={
              "px-2 py-1 rounded " + FINDING_STATUS_CLASS_MAP[info.getValue()]
            }
          >
            {FINDING_STATUS_TEXT_MAP[info.getValue()]}
          </span>
        ),
        enableColumnFilter: false,
      },

      {
        header: "Nature of Finding",
        accessorKey: "nature_of_finding",
        enableColumnFilter: false,
      },
    ];

    // Conditionally add the "Assignee" column
    if (auditId) {
      baseColumns.push({
        header: "Assigned To",
        accessorKey: "comments.approver.name",
        enableColumnFilter: false,
      });
    }
    if (!auditId) {
      baseColumns.push({
        header: "Audit",
        accessorKey: "audit.name",
        enableColumnFilter: false,
      });
    }

    return baseColumns;
  }, [listData, auditId]);

  return (
    <>
      {/* <pre>{JSON.stringify(listData, undefined, 2)}</pre> */}
      <TableContainer
        columns={columns || []}
        data={listData || []}
        customPageSize={10}
        SearchPlaceholder="Search..."
      />
    </>
  );
}
