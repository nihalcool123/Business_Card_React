import React, { Component } from "react";
import { Card } from "./Card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      stacking: "percent"
    }
  },
  series: [
    {
      name: "Phone",
      data: [5, 3, 4, 7, 2, 1],
      color: "#60181E"
    },
    {
      name: "Services",
      data: [2, 2, 3, 2, 1, 1],
      color: "#DA5862"
    },
    {
      name: "Laptops",
      data: [3, 4, 4, 2, 5, 1],
      color: "#EEB5B9"
    }
  ]
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
