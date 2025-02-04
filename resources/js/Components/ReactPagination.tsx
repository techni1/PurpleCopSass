import { Link } from "@inertiajs/react";
import React from "react";
import { Row } from "react-bootstrap";

export default function ReactPagination({ links }: any) {
  return (
    <React.Fragment>
      <Row className="g-0 justify-content-end mb-4">
        <div className="col-sm-auto">
          <ul className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
            {links.map((link: any) => (
              <Link
                className="btn btn-primary"
                preserveScroll
                href={link.url || ""}
                key={link.label}
                dangerouslySetInnerHTML={{ __html: link.label }}
              ></Link>
            ))}
          </ul>
        </div>
      </Row>
    </React.Fragment>
  );
}
