import React, { useState, useEffect } from "react";
import { Card, Col, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
//Import Icons
import FeatherIcon from "feather-icons-react";

// import { getUserDeviceChartsData } from "../../slices/thunks";

import { UsersByDeviceCharts } from "./DashboardAnalyticsCharts";
import { createSelector } from "reselect";
import { ongetUserDeviceChartsData } from "../../slices/thunk";

const UsersByDevice = ({ framworks }: any) => {
  const [isUserDropdown, setUserDropdown] = useState<boolean>(false);
  const toggleDropdown = () => setUserDropdown(!isUserDropdown);

  const dispatch: any = useDispatch();

  const [chartData, setchartData] = useState([]);

  const userdeviceData = createSelector(
    (state: any) => state.DashboardAnalytics,
    (userDeviceData: any) => userDeviceData.userDeviceData
  );
  // Inside your component
  const userDeviceData: any = useSelector(userdeviceData);

  useEffect(() => {
    setchartData(userDeviceData);
  }, [userDeviceData]);

  const [seletedMonth, setSeletedMonth] = useState("today");
  const onChangeChartPeriod = (pType: any) => {
    setSeletedMonth(pType);
    dispatch(ongetUserDeviceChartsData(pType));
  };

  useEffect(() => {
    dispatch(ongetUserDeviceChartsData("today"));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Col xl={4}>
        <Card className="card-height-100">
          <Card.Header className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Framework </h4>
            <div className="flex-shrink-0">
              <Dropdown
                className="card-header-dropdown"
                show={isUserDropdown}
                onClick={toggleDropdown}
                dir="start"
              >
                <Dropdown.Toggle
                  as="a"
                  className="text-reset dropdown-btn arrow-none"
                  role="button"
                >
                  <span className="text-muted fs-16">
                    <i className="mdi mdi-dots-vertical align-middle"></i>
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                  <Dropdown.Item
                    onClick={() => {
                      onChangeChartPeriod("today");
                    }}
                    className={seletedMonth === "today" ? "active" : ""}
                  >
                    Today
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      onChangeChartPeriod("lastWeek");
                    }}
                    className={seletedMonth === "lastWeek" ? "active" : ""}
                  >
                    Last Week
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      onChangeChartPeriod("lastMonth");
                    }}
                    className={seletedMonth === "lastMonth" ? "active" : ""}
                  >
                    Last Month
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      onChangeChartPeriod("currentYear");
                    }}
                    className={seletedMonth === "currentYear" ? "active" : ""}
                  >
                    Current Year
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>
          <Card.Body>
            <div dir="ltr">
              <UsersByDeviceCharts
                series={chartData}
                dataColors='["--vz-primary", "--vz-primary-rgb, .75", "--vz-primary-rgb, 0.60"]'
              />
            </div>
            {/* <pre>{JSON.stringify(framworks, undefined, 2)}</pre> */}
            <div className="table-responsive mt-3">
              <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                <tbody className="border-0">
                  <tr>
                    {framworks.map((data: any, index: any) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between"
                      >
                        <td>
                          <h4 className="text-truncate fs-14 fs-medium mb-0">
                            <i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>
                            {data.framework.name}
                          </h4>
                        </td>
                        <td className="text-end">
                          <p className="text-success fw-medium fs-12 mb-0">
                            <i className="ri-arrow-up-s-fill fs-5 align-middle"></i>
                            {index + 5.7}%
                          </p>
                        </td>
                      </div>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default UsersByDevice;
