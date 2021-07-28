import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

export default function BarChart(props) {
  const [series, setSeries] = useState(props.series);

  const [options] = useState({
    chart: {
      background: "transparent",
      foreColor: "#333",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        startingShape: "rounded",
        endingShape: "rounded",
        horizontal: false,
        borderRadius: 7,
        columnWidth: "25%",
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#FFFFFF"],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
    fill: {
      colors: ["#FFFFFF"],
    },
    title: {
      text: undefined,
    },
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
  });

  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        overflow: "hidden",
        borderRadius: "15px",
        background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      }}
    >
      <Chart
        options={options}
        series={series}
        type="rangeBar"
        height="222"
        width="620"
      />
    </div>
  );
}
