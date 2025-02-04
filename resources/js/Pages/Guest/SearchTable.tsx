import { useMemo } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Button } from "react-bootstrap";

const SearchTable = ({ tableData }: any) => {
  async function handleFileOpen(filePath: any) {
    try {
      // Open the file in a new tab
      window.open(`/show-document/${filePath}`, "_blank");
    } catch (error) {
      console.error("File Not Found", error);
    }
  }

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
        header: "Document",
        accessorKey: "document.name",
        enableColumnFilter: false,
      },
      {
        header: "Action",
        cell: (info: any) => (
          <Button
            variant="link"
            className="p-0"
            onClick={() => handleFileOpen(info.getValue())}
          >
            View
          </Button>
        ),
        accessorKey: "document.document_path",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <>
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
    </>
  );
};

export { SearchTable };
