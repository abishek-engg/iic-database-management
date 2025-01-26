import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    const options = {};
    const data = {
        labels:["Self Driven","MIC Driven","Calendar","Celebration"],
        datasets:[
            {
                label: "Event Count",
                data: [2,4,1,7],
                backgroundColor:"#76ABAE",
                borderColor:"#31363F",
                borderWidth:1,
            }
        ]
    }
  return <Bar options={options} data={data}/>;
}

export default BarChart;
