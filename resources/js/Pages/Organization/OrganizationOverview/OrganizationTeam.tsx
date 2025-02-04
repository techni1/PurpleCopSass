import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainer";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "@inertiajs/react";

export default function OrganizationTeam({ organization }: any) {
  const [teamList, setTeamList] = useState([]);
  useEffect(() => {
    const fetchOrganizationTeam = async () => {
      try {
        const response = await axios.get(
          `/get-organization-team/${organization.id}`
        );
        setTeamList(response.data);
        console.log(teamList);
      } catch (error) {
        console.error("Error Getting Team List", error);
      }
    };
    fetchOrganizationTeam();
  }, []);

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
        header: "Name",
        cell: (info: any) => (
          <Link
            href={route("user.edit", info.row.original.id)}
            className="link-offset-2 link-underline link-underline-opacity-100"
          >
            {info.getValue()}
          </Link>
        ),
        accessorKey: "name",
        enableColumnFilter: false,
      },
      {
        header: "Email",
        accessorKey: "email",
        enableColumnFilter: false,
      },

      {
        header: "Role",
        cell: (cell) => (
          <>
            {cell.getValue().map((role: any) => (
              <span
                key={role.id}
                className="bg-primary-subtle text-primary px-2 py-1 rounded me-1"
              >
                {role}
              </span>
            ))}
          </>
        ),
        accessorKey: "role",
        enableColumnFilter: false,
      },

      {
        header: "Designation",
        accessorKey: "designation.name",
        enableColumnFilter: false,
      },
      {
        header: "Department",
        accessorKey: "department.name",
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
                <Link href={route("user.edit", info.row.original.id)}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  EDIT
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={
                  () => {}
                  // handleDeleteClick(
                  //   info.row.original.id,
                  //   info.row.original.name
                  // )
                }
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
    <>
      {/* <pre>{JSON.stringify(teamList, undefined, 2)}</pre> */}

      <TableContainer
        columns={columns || []}
        data={teamList || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass="align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
    </>
  );
}
