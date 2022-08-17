import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Team Recycling", "Team Energy Savings", "Total Company Savings"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Carbon Savings",
        backgroundColor: "#77BFA3",
        borderColor: "rgb(255, 99, 132)",
        data: [39, 106, 145, 180],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;