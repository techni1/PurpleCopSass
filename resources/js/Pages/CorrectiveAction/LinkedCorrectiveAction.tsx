import { Button, Card, Col, Row, Table } from "react-bootstrap";
import {
  CORRECTIVE_ACTION_STATUS_CLASS_MAP,
  CORRECTIVE_ACTION_STATUS_TEXT_MAP,
  FINDING_STATUS_CLASS_MAP,
  FINDING_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";
import CorrectiveActionDetails from "./CorrectiveActionDetails";
import { useState } from "react";

const LinkedCorrectiveAction = ({ tableData }: any) => {
  const [correctiveAction, setCorrectiveAction] = useState([]);
  const [showCorrectiveAction, setShowCorrectiveAction] = useState(false);

  const handleCAShow = (CA: any) => {
    setCorrectiveAction(CA);
    setShowCorrectiveAction(true);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <h6>Corrective Action Details</h6>
        </Card.Header>
        <Card.Body>
          <div className="live-preview">
            <div className="table-responsive table-card">
              <Row>
                <Col>
                  <Table className="align-middle table-nowrap mb-0">
                    <thead className="table-light">
                      <tr className="" style={{ fontSize: "12px" }}>
                        <th scope="col">Non Conformity Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Assignee</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Criticality Rating</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((correctiveAction: any) => (
                        <tr key={correctiveAction.id}>
                          <td>
                            <Button
                              variant="link"
                              className="p-0 text-capitalize"
                              // onClick={() => handleCAShow(correctiveAction)}
                            >
                              {correctiveAction.non_conformity_name}
                            </Button>
                          </td>
                          <td>
                            <span
                              className={
                                "px-2 py-1 rounded " +
                                FINDING_STATUS_CLASS_MAP[
                                  correctiveAction.status
                                ]
                              }
                            >
                              {FINDING_STATUS_TEXT_MAP[correctiveAction.status]}
                            </span>
                          </td>
                          <td>{correctiveAction.assignee?.name}</td>
                          <td>{correctiveAction.due_date}</td>

                          <td>
                            <span
                              className={
                                "px-2 py-1 rounded " +
                                CORRECTIVE_ACTION_STATUS_CLASS_MAP[
                                  correctiveAction.criticality_rating
                                ]
                              }
                            >
                              {
                                CORRECTIVE_ACTION_STATUS_TEXT_MAP[
                                  correctiveAction.criticality_rating
                                ]
                              }
                            </span>
                          </td>
                          <td>:</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>

      <CorrectiveActionDetails
        correctiveAction={correctiveAction}
        show={showCorrectiveAction}
        setShow={setShowCorrectiveAction}
      />
    </>
  );
};

export { LinkedCorrectiveAction };

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
//         <Dropdown.Item
//           className="dropdown-item remove-item-btn text-success"
//           onClick={() => {}}
//         >
//           <i className="ri-upload-2-line align-bottom me-2 text-success"></i>{" "}
//           UPLOAD
//         </Dropdown.Item>
//         <Dropdown.Divider />
//       </Dropdown.Menu>
//     </Dropdown>
//   ),
// },
// useEffect(() => {
//   let filtered = tableData;
//   if (searchTerm) {
//     filtered = filtered.filter((item: any) =>
//       item.non_conformity_name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//   }

//   setFilteredData(filtered);
// }, [searchTerm, tableData]);
