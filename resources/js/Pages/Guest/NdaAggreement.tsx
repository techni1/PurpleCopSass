import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios for data fetching
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "@inertiajs/react";

const NdaAgreement = ({ auth, userNda }: any) => {
  const [submitBtn, setSubmitBtn] = useState(true);

  const { data, setData, post, processing, errors, reset } = useForm({
    id: userNda.id,
    nda_status: userNda.nda_status || "",
    nda_signed_date: userNda.nda_signed_date || "",
    nda_end_date: userNda.nda_end_date || "",
    _method: "PUT",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route("nda.update", userNda), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString(); // e.g. '9/19/2024'
  const formattedTime = today.toLocaleTimeString(); // e.g. '10:30:15 AM'
  const currentYear = today.getFullYear();
  const userMetaData = JSON.parse(userNda.user_meta_data);
  return (
    <Row className="d-flex justify-content-center">
      <Col xl={8}>
        <Card>
          <Card.Body>
            <div>
              <div>
                <h2 className="text-center">Mutual Nondisclosure Agreement</h2>
                <p>
                  This Mutual Nondisclosure Agreement (the "Agreement") is
                  entered into as of <b>{formattedDate}</b> of{" "}
                  <b>{currentYear}</b>, at
                  <b>{formattedTime}</b> by and between <b>Purple Cop</b> (
                  <b>Gurugram, India</b>), and <b>{userNda.organization}</b>(
                  <b>{userMetaData.address}</b>) .
                </p>
                <p>
                  <b>Purple Cop</b> is a <b>{"ORG_TYPE"}</b> company registered
                  with an address of <b>Gurugram,India</b> operating in and
                  therefore subject to the laws of ( <b>Delhi</b>, <b>India</b>
                  ).
                </p>
                <p>
                  <b>{userNda.organization}</b> with an address of
                  <b>{userMetaData.address}</b>, <b>{userMetaData.country}</b>{" "}
                  and represented by <b>{auth.name}</b>.
                </p>
                <p>
                  To explore the possibility of a business relationship between
                  <b>Purple Cop</b> and <b>{auth.name}</b> , each party
                  ("Discloser") may disclose sensitive information to the other
                  ("Recipient").
                </p>
                <p>
                  IN CONSIDERATION OF THE MUTUAL PROMISES AND COVENANTS
                  CONTAINED IN THIS AGREEMENT, THE PARTIES AGREE AS FOLLOWS.
                </p>
              </div>
              <div>
                <h4>Article 1. Confidential Information</h4>
                <p>
                  Section 1. Definition of Confidential Information. [ The term
                  "Confidential Information" shall mean information of
                  <b>Purple Cop</b> to the extent not considered a Trade Secret
                  under applicable law, that (i) relates to the business of{" "}
                  <b>Purple Cop</b>, (ii) possesses an element of value to{" "}
                  <b>Purple Cop</b>, (iii) is not generally known to{" "}
                  <b>Purple Cop</b>'s competitors, and (iv) would damage{" "}
                  <b>Purple Cop</b> if disclosed.] [ The term "Confidential
                  Information" means any financial, business, legal and
                  technical information disclosed to Recipient by or for
                  Discloser or any of its affiliates, suppliers, customers and
                  employees. Information includes research, development,
                  operations, marketing, transactions, regulatory affairs,
                  discoveries, inventions, methods, processes, articles,
                  materials, algorithms, software, specifications, designs,
                  drawings, data, strategies, plans, prospects, know-how and
                  ideas, and including any copies, abstracts, summaries,
                  analyses and other derivatives thereof.] Disclosure includes
                  any act of transmitting the information whether previously,
                  presently, or subsequently disclosed to recipient. For
                  convenience, the Disclosing Party may, but is not required to,
                  mark written Confidential Information with the legend
                  "Confidential" or an equivalent designation, Confidential
                  Information also includes information that by its nature would
                  be understood by a reasonable person to be confidential.
                </p>
                <p>
                  [ll. Trade Secrets*. The term "Trade Secrets" shall mean
                  information of <b>Purple Cop</b>, and their licensors,
                  suppliers, clients and customers which is not commonly known
                  or available to the public and which information (i) derives
                  actual or potential economic value from not being generally
                  known to, and not being readily ascertainable by proper means
                  by, other persons who can obtain economic value from its
                  disclosure or use, and (ii) is the subject of efforts that are
                  reasonable under the circumstances to maintain its secrecy.
                  Trade Secrets include, but are not limited to, technical or
                  non-technical data, formulas, patterns, compilations,
                  programs, devices, methods, techniques, drawings, processes,
                  financial data, financial plans, product plans, or a list of
                  actual or potential customers or suppliers. Not withstanding
                  anything to the contrary contained in this definition, the
                  Trade Secrets of either party shall not include any
                  information provided by the Discloer to the Recevier as part
                  of the disclosed Confidential Information.]
                </p>
                <p>
                  <b>
                    Section 2. Exceptions to Confidential Information.
                    Confidential Information shall not include any information
                    that:
                  </b>
                </p>
                <p>
                  (a) was rightfully known to Recipient without restriction
                  before receipt from Discloser;
                  <br />
                  (b) is rightfully disclosed to Recipient without restriction
                  by a third party;
                  <br />
                  (c) is or becomes generally known to the public, otherwise
                  known as within the pulic domain, without violation of this
                  Agreement by Recipient; or <br />
                  (d) is independently developed by Recipient or its employees
                  without access to or reliance on such information.
                  <br />
                </p>
                <p>
                  <b>
                    Section 3. Authority to Disclose Confidential Information.
                  </b>
                </p>
                <p>
                  Discloser represents and warrants to Recipient that it, and
                  any human persons disclosing Confidential Information, are
                  authorized to disclose any Confidential Information made
                  available to Recipient under this Agreement. Discloser further
                  represents and warrants to Recipient that it is not bound by
                  the terms of any other Non-Disclosure Agreement or any other
                  legally binding Agreement which restricts the disclosure of
                  the Confidential Information that is or will be necessary to
                  disclose to Recipient.
                </p>
              </div>
            </div>
            <div className="p-2 pt-3  ">
              <form onSubmit={onSubmit}>
                <div className="d-flex flex-row justify-content-center align-items-center ">
                  <div className="form-check mb-2 w-100">
                    <Form.Check.Input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck1"
                      onChange={(e) => setSubmitBtn(!e.target.checked)}
                    />
                    <Form.Check.Label
                      className="form-check-label"
                      htmlFor="formCheck1"
                    >
                      I Agree
                    </Form.Check.Label>
                  </div>
                  <Button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={submitBtn && !processing}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NdaAgreement;
