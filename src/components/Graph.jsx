/* App.js */
import React, { Component, useContext, useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-stockcharts";
import ChartContext from "@/context/CharContext";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const App = () => {
  const { dragging, setDragging } = useContext(ChartContext);
  const [dataState, setDataState] = useState({
    dataPoints: [],
    isLoaded: false,
  });
  useEffect(() => {
    if (!dataState.isLoaded) {
      fetch("https://canvasjs.com/data/gallery/react/btcusd2017-18.json")
        .then((res) => res.json())
        .then((data) => {
          var dps = [];
          for (var i = 0; i < data.length; i++) {
            dps.push({
              x: new Date(data[i].date),
              y: Number(data[i].close),
            });
          }
          setDataState({
            isLoaded: true,
            dataPoints: dps,
          });
        });
    }
  }, [dataState]);
  useEffect(() => {}, [dragging]);
  const options = {
    theme: "light1",
    subtitles: [
      {
        text: "Cumulative P&L/Time",
      },
    ],
    charts: [
      {
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM DD YYYY",
          },
        },
        axisY: {
          title: "Cumulative P&L",
          prefix: "$",
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "$#,###.##",
          },
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Price (in USD)",
            type: "splineArea",
            color: "#3576a8",
            yValueFormatString: "$#,###.##",
            xValueFormatString: "MMM DD YYYY",
            dataPoints: dataState.dataPoints,
          },
        ],
      },
    ],
    navigator: {
      slider: {
        minimum: new Date("2017-05-01"),
        maximum: new Date("2018-05-01"),
      },
    },
  };
  const containerProps = {
    width: "auto",
    height: "53vh",
    margin: "auto",
  };
  return (
    <div>
      <div>
        {
          // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
          dataState.isLoaded && (
            <CanvasJSStockChart
              containerProps={containerProps}
              options={options}
              /* onRef = {ref => this.chart = ref} */
            />
          )
        }
      </div>
    </div>
  );
};

export default App;
