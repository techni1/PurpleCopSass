import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import {
  Column,
  Table as ReactTable,
  ColumnFiltersState,
  FilterFn,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
} from "../../Components/Common/GlobalSearchFilter";

// Column Filter
const Filter = ({
  column,
}: {
  column: Column<any, unknown>;
  table: ReactTable<any>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder="Search..."
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
};

// Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, value]);

  return (
    <input
      {...props}
      value={value}
      id="search-bar-0"
      className="form-control search"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isProductsFilter?: any;
  isCustomerFilter?: any;
  isOrderFilter?: any;
  isContactsFilter?: any;
  isCompaniesFilter?: any;
  isLeadsFilter?: any;
  isCryptoOrdersFilter?: any;
  isInvoiceListFilter?: any;
  isTicketsListFilter?: any;
  isNFTRankingFilter?: any;
  isTaskListFilter?: any;
  handleTaskClick?: any;
  customPageSize?: any;
  tableClass?: any;
  theadClass?: any;
  trClass?: any;
  thClass?: any;
  divClass?: any;
  SearchPlaceholder?: any;
  handleLeadClick?: any;
  handleCompanyClick?: any;
  handleContactClick?: any;
  handleTicketClick?: any;
  getRowProps?: (row: any) => React.HTMLAttributes<HTMLTableRowElement>;
}

const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder,
  getRowProps,
}: TableContainerProps) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getCanNextPage,
    getPageOptions,
    setPageIndex,
    nextPage,
    previousPage,
    setPageSize,
    getState,
  } = table;

  useEffect(() => {
    Number(customPageSize) && setPageSize(Number(customPageSize));
  }, [customPageSize, setPageSize]);
  // console.log(getRowModel());
  return (
    <Fragment>
      {isGlobalFilter && (
        <Row className="mb-3">
          <Card.Body className="border border-dashed border-end-0 border-start-0">
            <form>
              <Row className="px-2">
                <Col sm={5}>
                  <div
                    className={
                      isProductsFilter ||
                      isContactsFilter ||
                      isCompaniesFilter ||
                      isNFTRankingFilter
                        ? "search-box me-2 mb-2 d-inline-block"
                        : "search-box me-2 mb-2 d-inline-block col-12 "
                    }
                  >
                    <DebouncedInput
                      value={globalFilter ?? ""}
                      onChange={(value) => setGlobalFilter(String(value))}
                      placeholder={SearchPlaceholder}
                    />
                    <i className="bx bx-search-alt search-icon"></i>
                  </div>
                </Col>
                {isProductsFilter && <ProductsGlobalFilter />}
                {isCustomerFilter && <CustomersGlobalFilter />}
                {isOrderFilter && <OrderGlobalFilter />}
                {isContactsFilter && <ContactsGlobalFilter />}
                {isCompaniesFilter && <CompaniesGlobalFilter />}
                {isLeadsFilter && <LeadsGlobalFilter />}
                {isCryptoOrdersFilter && <CryptoOrdersGlobalFilter />}
                {isInvoiceListFilter && <InvoiceListGlobalSearch />}
                {isTicketsListFilter && <TicketsListGlobalFilter />}
                {isNFTRankingFilter && <NFTRankingGlobalFilter />}
                {isTaskListFilter && <TaskListGlobalFilter />}
              </Row>
            </form>
          </Card.Body>
        </Row>
      )}

      <div className={divClass}>
        <Table hover className={tableClass}>
          <thead
            className={theadClass}
            style={{ background: "#7B01FF", color: "white" }}
          >
            {getHeaderGroups().map((headerGroup: any) => (
              <tr className={trClass} key={uuidv4()}>
                {/* <tr className={trClass} key={headerGroup.id}> */}
                {headerGroup.headers.map((header: any) => (
                  <th
                    key={header.id}
                    className={thClass}
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <React.Fragment>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " ",
                          desc: " ",
                        }[header.column.getIsSorted() as string] ?? null}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </React.Fragment>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* <tbody>
            {getRowModel().rows.map((row: any) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell: any) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody> */}
          <tbody>
            {getRowModel().rows.map((row: any) => {
              const rowProps = getRowProps ? getRowProps(row) : {};
              return (
                <tr key={uuidv4()} {...rowProps}>
                  {/* Apply rowProps here */}
                  {row.getVisibleCells().map((cell: any) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
        {getRowModel().rows.length >= 10 ? (
          <div className="col-sm">
            <div className="text-muted">
              Showing
              <span className="fw-semibold ms-1">
                {getState().pagination.pageSize}
              </span>{" "}
              of <span className="fw-semibold">{data.length}</span> Results
            </div>
          </div>
        ) : (
          <div className="col-sm">
            <div className="text-muted">
              Showing <span className="fw-semibold">{data.length}</span> Results
            </div>
          </div>
        )}

        <div className="col-sm-auto">
          <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
            <li
              className={
                !getCanPreviousPage() ? "page-item disabled" : "page-item"
              }
            >
              <Button
                variant="link"
                className="page-link"
                onClick={previousPage}
              >
                Previous
              </Button>
            </li>

            {getPageOptions().map((item: any, key: number) => {
              // Custom pagination logic:
              const totalPages = getPageOptions().length;
              const currentPage = getState().pagination.pageIndex + 1;
              const maxVisiblePages = 5; // Number of pages to show at once
              const showEllipsis = totalPages > maxVisiblePages + 2; // Conditionally show ellipsis
              const startPage = Math.max(
                1,
                currentPage - Math.floor(maxVisiblePages / 2)
              );
              const endPage = Math.min(
                totalPages,
                startPage + maxVisiblePages - 1
              );

              // Render first page and ellipsis if necessary
              if (key === 0 && startPage > 1) {
                return (
                  <React.Fragment key={uuidv4()}>
                    <li className="page-item">
                      <Button
                        variant="link"
                        className="page-link"
                        onClick={() => setPageIndex(0)}
                      >
                        1
                      </Button>
                    </li>
                    {showEllipsis && (
                      <li className="page-item disabled p-1">
                        <span>...</span>
                      </li>
                    )}
                  </React.Fragment>
                );
              }

              // Render middle pages
              if (item + 1 >= startPage && item + 1 <= endPage) {
                return (
                  <li className="page-item" key={uuidv4()}>
                    <Button
                      variant="link"
                      className={
                        getState().pagination.pageIndex === item
                          ? "page-link active"
                          : "page-link"
                      }
                      onClick={() => setPageIndex(item)}
                    >
                      {item + 1}
                    </Button>
                  </li>
                );
              }

              // Render last page and ellipsis if necessary
              if (key === totalPages - 1 && endPage < totalPages) {
                return (
                  <React.Fragment key={uuidv4()}>
                    {showEllipsis && (
                      <li className="page-item disabled p-1">
                        <span>...</span>
                      </li>
                    )}
                    <li className="page-item">
                      <Button
                        variant="link"
                        className="page-link"
                        onClick={() => setPageIndex(totalPages - 1)}
                      >
                        {totalPages}
                      </Button>
                    </li>
                  </React.Fragment>
                );
              }

              return null;
            })}

            <li
              className={!getCanNextPage() ? "page-item disabled" : "page-item"}
            >
              <Button className="page-link" onClick={nextPage} variant="link">
                Next
              </Button>
            </li>
          </ul>
        </div>
      </Row>

      {/* <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
        <div className="col-sm">
          <div className="text-muted">
            Showing
            <span className="fw-semibold ms-1">
              {getState().pagination.pageSize}
            </span>{" "}
            of <span className="fw-semibold">{data.length}</span> Results
          </div>
        </div>
        <div className="col-sm-auto">
          <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
            <li
              className={
                !getCanPreviousPage() ? "page-item disabled" : "page-item"
              }
            >
              <Button
                variant="link"
                className="page-link"
                onClick={previousPage}
              >
                Previous
              </Button>
            </li>
            {getPageOptions().map((item: any, key: number) => (
              <React.Fragment key={uuidv4()}>
                <li className="page-item">
                  <Button
                    variant="link"
                    className={
                      getState().pagination.pageIndex === item
                        ? "page-link active"
                        : "page-link"
                    }
                    onClick={() => setPageIndex(item)}
                  >
                    {item + 1}
                  </Button>
                </li>
              </React.Fragment>
            ))}
            <li
              className={!getCanNextPage() ? "page-item disabled" : "page-item"}
            >
              <Button className="page-link" onClick={nextPage} variant="link">
                Next
              </Button>
            </li>
          </ul>
        </div>
      </Row> */}
    </Fragment>
  );
};

export default TableContainer;
