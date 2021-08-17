import React from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import { Box } from '@chakra-ui/react';
import { lineChartData, lineChartOptions } from 'variablesChakra/charts';

class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        chartData: [],
        chartOptions: {}
      };
    }

    componentDidMount() {
        this.setState({
            chartData : lineChartData,
            chartOptions: lineChartOptions
        })
    }

  

    render() {
        return (
            
                <ReactApexChart  options={this.state.chartOptions} series={this.state.chartData} type="area" width="100%" height="100%"/>
            
        )
    }
}

export default LineChart;