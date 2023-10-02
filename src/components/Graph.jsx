import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
function Graph() {
  return (
    <div className="bg-white">
      <Line
        data={{
          // x-axis label values
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "# price",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 5000, 350, 150],
              fill: false,
              borderWidth: 4,
              backgroundColor: "white",
              borderColor: "green",
              responsive: true,
            },
          ],
        }}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
}

export default Graph;
