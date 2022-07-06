import React from "react";
import OvalWeight from "../../assets/oval_weight.png";
import OvalBurned from "../../assets/oval_burned.png";
import Graph1BarChartActivity from "../Graph1BarChartActivity/Graph1BarChartActivity";

const Graph1 = () => {
  return (
    <div className="graph1">
      <div className="graph1_header">
        <h4 className="title">Activité quotidienne</h4>
        <div className="legend">
          <div className="legend_weight">
            <img className="lengend_image" src={OvalWeight} alt="" />
            <p className="legend_text">Poids (kg)</p>
          </div>
          <div className="legend_calories_burned">
            <img className="lengend_image" src={OvalBurned} alt="" />
            <p className="legend_text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <Graph1BarChartActivity/>
    </div>
  );
};

export default Graph1;
