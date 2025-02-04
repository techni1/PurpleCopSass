

import React, { useState } from "react";
import { Inertia, Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Image, Offcanvas, OverlayTrigger, Row, Tooltip, } from 'react-bootstrap';

// Import Content
import UiContent from "../../Components/Common/UiContent";

//import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';
import SimpleBar from 'simplebar-react';
import { DefaultOffcanvasExample, PlacementOffcanvasExample, BackdropOffcanvasExample } from "./UiOffcanvasCode";


import avatar1 from "../../../images/users/avatar-1.jpg";
import avatar2 from "../../../images/users/avatar-2.jpg";
import avatar3 from "../../../images/users/avatar-3.jpg";
import avatar4 from "../../../images/users/avatar-4.jpg";
import avatar6 from "../../../images/users/avatar-6.jpg";
import avatar7 from "../../../images/users/avatar-7.jpg";
import avatar8 from "../../../images/users/avatar-8.jpg";

import img2 from "../../../images/small/img-2.jpg";
import img3 from "../../../images/small/img-3.jpg";
import img4 from "../../../images/small/img-4.jpg";
import img9 from "../../../images/small/img-9.jpg";
import img10 from "../../../images/small/img-10.jpg";
import img11 from "../../../images/small/img-11.jpg";
import img12 from "../../../images/small/img-12.jpg";


const Section = ({ adata }) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    assetId: "",


  });



  const [isTop, setIsTop] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [isLeft, setIsLeft] = useState<boolean>(false);
  const [isEnableScroll, setIsEnableScroll] = useState<boolean>(false);
  const [isBackdrop, setIsBackdrop] = useState<boolean>(false);
  const [isScrollBackDrop, setIsScrollBackDrop] = useState<boolean>(false);


  const toggleTopCanvas = () => {
    setIsTop(!isTop);
  };
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
  };
  const toggleLeftCanvas = () => {
    setIsLeft(!isLeft);
  };
  const toggleEnableScroll = () => {
    setIsEnableScroll(!isEnableScroll);
  };
  const toggleBackdrop = () => {
    setIsBackdrop(!isBackdrop);
  };
  const toggleScrollBackDrop = () => {
    setIsScrollBackDrop(!isScrollBackDrop);
  };

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <React.Fragment>
      <Row className="mb-3 pb-1">
        <Col xs={12}>
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4 className="fs-16 mb-1">List of Risk Registered</h4>
            </div>
            <div className="md-12 mt-lg-0">

              <Row>
                <Col>

                  {/* <Button
                    className="btn btn-soft-primary"
                    onClick={handleShow}
                  >
                    <i className="ri-add-circle-line align-middle"></i>{" "}
                    Add Risk Register
                  </Button> */}

                  <Link
                    href={route("riskregister.create")}
                    className="btn btn-soft-primary"
                  >
                    <i className="ri-add-circle-line align-middle"></i>{" "}
                    Add Risk Register
                  </Link>


                </Col>

              </Row>

              <Row className="align-items-center">




              </Row>

            </div>
          </div>
        </Col>
      </Row>




    </React.Fragment>
  );
};

export default Section;
