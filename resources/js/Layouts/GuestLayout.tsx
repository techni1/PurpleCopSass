import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ApplicationLogo from "../Components/ApplicationLogo";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Link } from "@inertiajs/react";
import FullScreenDropdown from "../Components/Common/FullScreenDropdown";
import ProfileDropdown from "../Components/Common/ProfileDropdown";

import logoSm from "../../images/logo-sm.png";
import logoDark from "../../images/Insta-GRc-final-v2.png";
import logoLight from "../../images/logo-light.png";

export default function Guest({ children }: any) {
  const [headerClass, setHeaderClass] = useState("");
  const selectLayoutState = (state: any) => state.Layout;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (state: any) => ({
      layoutModeType: state.layoutModeType,
      backgroundImageType: state.backgroundImageType,
    })
  );
  // Inside your component
  const { layoutModeType, backgroundImageType }: any = useSelector(
    selectLayoutProperties
  );

  useEffect(() => {
    const landing = window.location.pathname.slice(1);
    const nftLanding = window.location.pathname.slice(1);

    if (layoutModeType === "dark") {
      document.body.setAttribute("data-bs-theme", "dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
      document.documentElement.setAttribute(
        "data-body-image",
        backgroundImageType
      );

      if (landing === "landing") {
        document.documentElement.setAttribute("data-body-image", "none");
      }
      if (nftLanding === "nft-landing") {
        document.documentElement.setAttribute("data-body-image", "none");
      }
    } else {
      document.body.setAttribute("data-bs-theme", "light");
      document.documentElement.setAttribute("data-bs-theme", "light");
      document.documentElement.setAttribute(
        "data-body-image",
        backgroundImageType
      );

      if (landing === "landing") {
        document.documentElement.setAttribute("data-body-image", "none");
      }
      if (nftLanding === "nft-landing") {
        document.documentElement.setAttribute("data-body-image", "none");
      }
    }
    return () => {
      document.body.removeAttribute("data-bs-theme");
      document.documentElement.removeAttribute("data-bs-theme");
      document.documentElement.removeAttribute("data-body-image");
    };
  }, [layoutModeType, backgroundImageType]);

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setHeaderClass("topbar-shadow");
    } else {
      setHeaderClass("");
    }
  }
  return (
    <React.Fragment>
      <div className="auth-page-wrapper">
        <header id="page-topbar-guest" className={headerClass}>
          <div className="layout-width">
            <div className="navbar-header">
              <div className="d-flex">
                <div className="horizontal-logo">
                  <Link href="/" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src={logoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logoLight} alt="" height="35" />
                    </span>
                  </Link>

                  <Link href="/" className="logo logo-light">
                    <span className="logo-sm">
                      <img src={logoSm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logoLight} alt="" height="54" />
                    </span>
                  </Link>
                </div>

                {/* <SearchOption /> */}
              </div>

              <div className="d-flex align-items-center">
                <FullScreenDropdown />
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </header>
        {children}

        <footer className="footer">
          <div className="container">
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <p className="mb-0 text-muted">
                    &copy; {new Date().getFullYear()} InstaGRC.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
