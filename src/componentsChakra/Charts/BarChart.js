import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function BarChart(props) {
  const tooltipTheme = useColorModeValue("light", "dark");
  const [series, setSeries] = useState(props.series);

  const [options, setOptions] = useState({
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
        borderRadius: 5,
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
      colors: ["#fff"],
      opacity: 1,
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
    setOptions({
      ...options,
      tooltip: {
        ...options.tooltip,
        theme: tooltipTheme,
      },
    });
  }, [tooltipTheme]);
  useEffect(() => {
    setSeries(props.series);
  }, [props.series]);

  return (
    <Chart
      options={options}
      series={series}
      type="rangeBar"
      width={props.width}
      height={props.height}
      style={{
        background: "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
        borderRadius: "15px",
      }}
    />
  );
}
