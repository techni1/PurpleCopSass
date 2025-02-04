import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link } from "@inertiajs/react";
import { Button, Dropdown } from "react-bootstrap";
import Assign from "./Assign";
import Result from "./Result";

const SearchTable = ({ routeTo, tableData, users, index = 0 }: any) => {
  // <pre>{JSON.stringify(tableData, undefined, 2)}</pre>

  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);

  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [selectedTopicid, setSelectedTopicid] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState([]);

  const handleAssign = (topicid: number) => {
    setShow(true);
    setSelectedTopicid(topicid);
    setIsBottom(!isBottom);
  };
  const handleResult = (topic: any) => {
    setShow1(true);
    setSelectedTopic(topic);
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
        header: "Topic",
        cell: (info: any) => (
          <Link
            href={route("people.show", info.row.original.id)}
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
        accessorKey: "category",
        enableColumnFilter: false,
      },


      {
        header: "No of Question",
        accessorKey: "question",
        enableColumnFilter: false,
      },

      {
        header: "Assign",

        cell: (info: any) => (
          <Button
            className="btn btn-info btn-sm"
            onClick={() => handleAssign(info.row.original.id)}
          >
            {info.getValue()}
            Assign
          </Button>
        ),
        accessorKey: "Result",
        enableColumnFilter: false,
      },

      {
        header: "Result",

        cell: (info: any) => (
          <Button
            className="btn btn-success btn-sm"
            onClick={() => handleResult(info.row.original)}
          >
            {info.getValue()}
            Result
          </Button>
        ),
        accessorKey: "Result",
        enableColumnFilter: false,
      },








      // {
      //   header: "Actions",
      //   id: "actions",
      //   cell: (info: any) => (
      //     <Dropdown>
      //       <Dropdown.Toggle
      //         href="#"
      //         className="btn btn-soft-primary btn-sm dropdown arrow-none"
      //         as="button"
      //       >
      //         <i className="ri-more-fill align-middle"></i>
      //       </Dropdown.Toggle>
      //       <Dropdown.Menu className="dropdown-menu-end">
      //         <Dropdown.Item className="dropdown-item edit-item-btn">
      //           {/* <Link href={route("framework.edit", info.row.original.id)}> */}
      //           <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
      //           Assign
      //           {/* </Link> */}
      //         </Dropdown.Item>
      //         <Dropdown.Item
      //           className="dropdown-item remove-item-btn text-danger"
      //           onClick={() => { }}
      //         >
      //           <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
      //           DELETE
      //         </Dropdown.Item>
      //       </Dropdown.Menu>
      //     </Dropdown>
      //   ),
      // },
    ],
    []
  );

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(tableData, undefined, 2)}</pre> */}
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

      <Assign
        show={show}
        setShow={setShow}
        topicId={selectedTopicid}
        users={users}
      />


      <Result
        show={show1}
        setShow={setShow1}
        topicId={selectedTopicid}
        topicdata={selectedTopic}


      />


    </React.Fragment>
  );
};

export { SearchTable };
