import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import { Dropdown } from "react-bootstrap";
import EditMenu from "./EditMenu";

const SearchTable = ({ routeTo, tableData, index = 0 }: any) => {


  const [show, setShow] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);

  const handleEdit = (menuId: number) => {
    setShow(true);
    setSelectedMenuId(menuId);
    setIsBottom(!isBottom);

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
        header: "Mneu",
        cell: (info: any) => (
          <Link
            href={route("menu.show", info.row.original.id)}
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
        accessorKey: "url",
        enableColumnFilter: false,
      },

      {
        header: "Status",
        accessorKey: "status",
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
              <Dropdown.Item className="dropdown-item edit-item-btn"
                onClick={() => handleEdit(info.row.original.id)}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                Edit

              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"

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
      <EditMenu
        show={show}
        setShow={setShow}
        menuId={selectedMenuId}
      />
    </React.Fragment>
  );
};

export { SearchTable };
