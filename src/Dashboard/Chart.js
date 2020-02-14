import React, { Component } from "react";
import { Card } from "./Card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartData } from "./Data";

let options = {
  chart: {
    height: "360px",
    type: "column",
    style: {
      fontFamily: `'Blinker', sans-serif`
    }
  },
  title: {
    text: "Revenue by product"
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Billions($)"
    }
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    series: {
      borderWidth: 0
    },
    column: {
      stacking: "normal"
    }
  },
  series: chartData
};

class Chart extends Component {
  render() {
    return (
      <>
        <Card height={400}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Card>
      </>
    );
  }
}

export default Chart;
