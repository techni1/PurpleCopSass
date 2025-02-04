// import React, { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
// import { Link, usePage } from "@inertiajs/react";
// import { debounce } from "lodash";
// import axios from "axios";
// import CustomPlaceholder from "../../../Components/CustomPlaceholder";
// import {
//   FINDING_STATUS_CLASS_MAP,
//   FINDING_STATUS_TEXT_MAP,
// } from "../../../Components/constants/statusConstant";
// import SingleFinding from "../SingleFinding";

// const FindingList = ({ auditId, activeTab }: any) => {
//   const user = usePage().props.auth.user;
//   const userRole = usePage().props.auth.roles;
//   const [isLoading, setIsLoading] = useState(false);
//   const [findings, setFindings] = useState([]);
//   const [singleFindings, setSingleFinding] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState<any[]>(findings);
//   const [showFinding, setShowFinding] = useState(false);
//   const [findingChange, setFindingChange] = useState(1);

//   useEffect(() => {
//     setIsLoading(true);
//     const debounceFetchFindings = debounce(async () => {
//       try {
//         let response;
//         if (auditId) {
//           response = await axios.get(`/get-finding/${auditId}`);
//         } else {
//           response = await axios.get(`/get-finding`);
//         }
//         setFindings(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching findings", error);
//       }
//     });
//     debounceFetchFindings();
//   }, [activeTab, auditId, findingChange]);

//   useEffect(() => {
//     let filtered = findings;
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (item: any) =>
//           item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           item.code.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredData(filtered);
//   }, [searchTerm, findings]);

//   // useEffect(() => {
//   //   console.log(userRole.includes("Super-Admin"));
//   // }, []);
//   const handleSingleFinding = (finding: any) => {
//     setSingleFinding(finding);
//     setShowFinding(true);
//   };
//   return (
//     <React.Fragment>
//       {isLoading ? (
//         <CustomPlaceholder />
//       ) : filteredData.length > 0 ? (
//         <div>
//           <Form.Control
//             type="text"
//             id="searchfindings"
//             placeholder="Search Findings"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="mb-3"
//           />
//           <Card>
//             <Card.Body>
//               <div className="live-preview">
//                 <div className="table-responsive table-card">
//                   <Row>
//                     <Col>
//                       <Table className="align-middle table-nowrap mb-0">
//                         <thead className="table-light">
//                           <tr>
//                             <th scope="col">Finding Name</th>
//                             <th scope="col">Status</th>
//                             <th scope="col">Assignee</th>
//                             <th scope="col">Nature of Finding</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredData.map(
//                             (finding: any, key: number) =>
//                               (finding.commentable.details.assignee.id ==
//                                 user.id ||
//                                 userRole.includes("Super-Admin") ||
//                                 userRole.includes("Auditor") ||
//                                 userRole.includes("Admin")) && (
//                                 <tr key={key}>
//                                   <td>
//                                     <Button
//                                       variant="link"
//                                       className="p-0 text-capitalize"
//                                       onClick={() =>
//                                         handleSingleFinding(finding)
//                                       }
//                                     >
//                                       {finding.comment}
//                                     </Button>
//                                   </td>
//                                   <td>
//                                     <span
//                                       className={
//                                         "px-2 py-1 rounded " +
//                                         FINDING_STATUS_CLASS_MAP[finding.status]
//                                       }
//                                     >
//                                       {FINDING_STATUS_TEXT_MAP[finding.status]}
//                                     </span>
//                                   </td>
//                                   <td>
//                                     {finding.commentable?.details.assignee.name}
//                                   </td>
//                                   <td className=" text-capitalize ">
//                                     {finding.nature_of_finding}
//                                   </td>
//                                   {/* {finding.commentable.details.policy ? (
//                                     <>
//                                       <td>Policy</td>
//                                       <td>
//                                         <span className="text-wrap ">
//                                           {
//                                             finding.commentable.details.policy
//                                               .name
//                                           }
//                                         </span>
//                                       </td>
//                                     </>
//                                   ) : (
//                                     <>
//                                       <td>Evidence</td>
//                                       <td>
//                                         bg
//                                         <span className="text-wrap">
//                                           {
//                                             finding.commentable.details.evidence
//                                               .name
//                                           }
//                                         </span>
//                                       </td>
//                                     </>
//                                   )} */}
//                                 </tr>
//                               )
//                           )}
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       ) : (
//         <div>No Findings Found</div>
//       )}
//       {/* <pre>{JSON.stringify(filteredData, undefined, 2)}</pre> */}
//       {singleFindings && (
//         <SingleFinding
//           finding={singleFindings}
//           showFinding={showFinding}
//           setShowFinding={setShowFinding}
//           setFindingChange={setFindingChange}
//         />
//       )}
//     </React.Fragment>
//   );
// };

// export default FindingList;
