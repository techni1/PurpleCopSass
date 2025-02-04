import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, useForm } from "@inertiajs/react";

import {
  Button,
  Dropdown,
  Col,
  Container,
  Form,
  Image,
  Offcanvas,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import AssetsDetails from "./RiskComponent/AssetsDetails";
import AssetsEdit from "./AssetsEdit";
// Import Content

const SearchTable = ({ routeTo, tableData, riskdata, category, subcategory, location, criticality, vendor, department, people, index = 0 }: any) => {
  const [asset, setAsset] = useState([]);

  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = (asset: any) => {
    setAsset(asset);
    setShow(true);
  };


  const handleEdit = (asset: any) => {
    setAsset(asset);
    setShow1(true);
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
        header: "Name",
        cell: (info: any) => (
          <Button
            onClick={() => handleEdit(info.row.original)}
            variant="link"
          >
            {info.getValue()}
          </Button>
        ),
        accessorKey: "name",

        enableColumnFilter: false,
      },

      {
        header: "Category",

        accessorKey: "category.name",

        enableColumnFilter: false,
      },

      {
        header: "Asset Type",

        accessorKey: "subcategory.name",

        enableColumnFilter: false,
      },

      {
        header: "Department",

        accessorKey: "department.name",

        enableColumnFilter: false,
      },

      {
        header: "Criticality",

        accessorKey: "criticality.name",

        enableColumnFilter: false,
      },

      // {
      //   header: "Owner",

      //   accessorKey: "owner",

      //   enableColumnFilter: false,
      // },

      {
        header: "Risk Register",

        accessorKey: "isunderrisk",

        enableColumnFilter: false,
      },

      {
        header: "Risk Evalution",
        cell: (info: any) => (
          < Button
            onClick={() => handleShow(info.row.original)}
            className="btn btn-sm btn-primary"
          >

            Risk Register
          </ Button >),

        enableColumnFilter: false,
      },





      // {
      //   header: "Sub Category",
      //   cell: (info: any) => (
      //     <Link
      //       href={route("assetsubcategory.show", info.row.original.asset_categoryid)}
      //       className="link-offset-2 link-underline link-underline-opacity-100"
      //     >
      //       {info.getValue()}
      //     </Link>
      //   ),
      //   accessorKey: "name",

      //   enableColumnFilter: false,
      // },

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
              {/* <Dropdown.Item className="dropdown-item remove-item-btn text-danger">
                <Button
                  onClick={() => handleShow(info.row.original)}
                  variant="link"
                >
                  <i className="ri-folder-shield-fill align-bottom me-2 text-danger"></i>{" "}
                  Risk Register
                </Button>
              </Dropdown.Item> */}
              <Dropdown.Item className="dropdown-item edit-item-btn">

                <Button
                  onClick={() => handleEdit(info.row.original)}
                  variant="link"
                >
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </Button>




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

      {asset && (
        <AssetsDetails
          show={show}
          setShow={setShow}
          asset={asset}
          risks={riskdata}

        />
      )}
      {asset && (
        <AssetsEdit
          show={show1}
          setShow={setShow1}
          asset={asset}
          risks={riskdata}
          category={category}
          subcategory={subcategory}
          location={location}
          criticality={criticality}
          vendor={vendor}
          department={department}
          people={people}

        />
      )}
    </React.Fragment>
  );
};

export { SearchTable };
