import { Button, Card, Row } from "react-bootstrap";
import ComplianceCard from "./ComplianceCard";
import { useEffect, useState } from "react";
import CreateCompliance from "./Create";
import { usePage } from "@inertiajs/react";

export default function Compliances({ framework, compliances }: any) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const userRole = usePage().props.auth.roles;
  const [visibilityCount, setVisibilityCount] = useState(0);
  useEffect(() => {
    const visible = compliances.data.filter(
      (compliance: any) => compliance.visibility === 1
    );
    setVisibilityCount(visible.length);
  }, [compliances.data]);

  return (
    <>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center ">
            <div className=" d-flex justify-content-center align-items-center ">
              <h5 className="me-3 m-0">Compliances</h5>
              {userRole[0] != "Guest" && (
                <span className="bg-dark-subtle rounded rounded-4 px-3 py-1">
                  {visibilityCount} Visible
                </span>
              )}
            </div>

            {userRole[0] != "Guest" && (
              <Button
                onClick={() => setShowCreateModal(true)}
                variant="outline-primary"
                className="px-2 py-1"
              >
                <i className="ri-add-circle-line" /> Add
              </Button>
            )}
          </div>
        </Card.Header>
        <Card.Body>
          <div>
            {/* <pre>{JSON.stringify(compliances, undefined, 2)}</pre> */}
            <Row>
              {compliances.data.map((compliance: any, index: number) => (
                <ComplianceCard
                  key={index}
                  compliance={compliance}
                  framework={framework}
                />
              ))}
            </Row>
          </div>
        </Card.Body>
      </Card>

      <CreateCompliance
        show={showCreateModal}
        setShow={setShowCreateModal}
        framework={framework}
      />
    </>
  );
}
