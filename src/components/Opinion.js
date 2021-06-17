import React from "react";
import { Chart, Line } from "react-chartjs-2";
import Grid from "./Grid";
import Annotation from "chartjs-plugin-annotation";
import "../stylesheets/Opinion.css";

Chart.register(Annotation);

const value = {
  labels: [
    81, 82, 83, 83, 82, 80, 71, 72, 73, 64, 63, 61, 72, 73, 60, 56, 55, 52, 58,
    41, 47, 38, 31, 20, 13, 12, 7, 11,
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [
        81, 82, 83, 83, 82, 80, 71, 72, 73, 64, 63, 61, 72, 73, 60, 56, 55, 52,
        58, 41, 47, 38, 31, 20, 13, 12, 7, 11,
      ],
      fill: false,
      borderColor: "darkblue",
      tension: 0,
      pointRadius: 0,
      borderWidth: 1,
    },
  ],
};

const lineOptions = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 70,
          yMax: 70,
          borderColor: "red",
          borderWidth: 1,
        },
      },
    },
  },
};

function Opinion() {
  return (
    <>
      <div className="chartheader">
        <div className="header">US</div>
        <div className="header">EUROPE</div>
        <div className="header">ASIA</div>
        <div className="header">FX</div>
        <div className="header">RATES</div>
        <div className="header">FUTURE</div>
      </div>
      <div className="chart">
        <div>
          <Line data={value} options={lineOptions} />
        </div>
        <div className="duration">
          <div>1D</div>
          <div>5D</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
        </div>
      </div>
      <Grid />
      <div className="opinioncontainer">
        <div>OPINION</div>
        <div>
          <p>A Scientist Who Said No to Covid Groupthink</p>
          <p>By Adam O’Neal | The Weekend Interview</p>
        </div>
        <div>
          <p>Yes, It’s a Global Tax on American Tech</p>
          <p>By The Editorial Board | Review & Outlook</p>
        </div>
        <div>
          <p>Kathryn Garcia Is Fine With Second Place</p>
          <p>By Tunku Varadarajan | Cross Country</p>
        </div>
      </div>
    </>
  );
}

export default Opinion;
