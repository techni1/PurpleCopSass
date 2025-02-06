import { Link } from "@inertiajs/react";
import { Card, Col } from "react-bootstrap";

export default function ({ url, icon, title, subTitle }: any) {
  return (
    <>
      <Col xl={3} md={3}>
        <Link href={url}>
          <Card>
            <Card.Body>
              <div className="my-2 d-flex justify-content-center">
                <i
                  className={icon}
                  style={{
                    fontSize: "30px",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "#3b3535",
                    
                  }}
                ></i>
              </div>
              <div>
                <h5 className="text-primary text-center mb-0 mt-2">{title}</h5>
              </div>
              <div>
                <p >{subTitle}</p>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}
