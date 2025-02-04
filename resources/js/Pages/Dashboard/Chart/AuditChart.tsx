import React from "react";
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";
import ReactApexChart from "react-apexcharts";

export default function AuditChart({ data, dataColors }: any) {
  var chartStackedBarColors = getChartColorsArray(dataColors);
  const categories = data.map((item: any) => item.Framework);
  const series = [
    {
      name: "Policy",
      data: data.map((item: any) => item.Policy),
    },
    {
      name: "Evidence",
      data: data.map((item: any) => item.Evidence),
    },
    {
      name: "Submitted",
      data: data.map((item: any) => item.Submitted),
    },
    {
      name: "Need Review",
      data: data.map((item: any) => item.needReview),
    },
    {
      name: "Audited",
      data: data.map((item: any) => item.Audited),
    },
  ];
  var options: any = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },

    xaxis: {
      categories: categories,
    },
    yaxis: {},
    tooltip: {
      y: {},
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
    colors: chartStackedBarColors,
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
      <ReactApexChart
        dir="ltr"
        className="apex-charts"
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </React.Fragment>
  );
}
