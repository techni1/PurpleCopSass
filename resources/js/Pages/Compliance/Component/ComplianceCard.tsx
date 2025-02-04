import { Card, Col, Form, Row } from "react-bootstrap";
import {
  STATE_CLASS_MAP,
  STATE_TEXT_MAP,
} from "../../../Components/constants/statusConstant";
import { useState } from "react";
import Actionbtns from "./Action";
import { usePage } from "@inertiajs/react";
import ActionBtnGuest from "./ActionBtnGuest";

export default function ComplianceCard({ compliance, framework }: any) {
  const userRole = usePage().props.auth.roles;
  return (
    <>
      <Col xl={3} md={4}>
        <div className="p-2 rounded-4 card ">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
            <div className="avatar-title bg-white rounded-circle">
              <img
                src={compliance.framework.logo_path}
                alt=""
                className="avatar-xl"
              />
            </div>
            <div>
              <span className="fs-5">{compliance.framework.name}</span>
            </div>
            <div className="pb-2">
              <span className={STATE_CLASS_MAP[compliance.state]}>
                {STATE_TEXT_MAP[compliance.state]}
              </span>
            </div>
            <Card.Footer className="w-100 pb-0 pt-2">
              {userRole[0] == "Guest" ? (
                <ActionBtnGuest compliance={compliance} />
              ) : (
                <Actionbtns
                  visibility={compliance.visibility}
                  compliance={compliance}
                  framework={framework}
                />
              )}
            </Card.Footer>
          </div>
        </div>
      </Col>
    </>
  );
}
