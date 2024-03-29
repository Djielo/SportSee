import React from "react";
import OvalWeight from "../../assets/oval_weight.png";
import OvalBurned from "../../assets/oval_burned.png";
import Graph1ActivityBarChart from "../Graph1ActivityBarChart/Graph1ActivityBarChart";

/**
 * @function Graph1Activity - Displays a bar graph showing the user's weight and calories burned for each session of the week. The chart has a header with a title and a legend explaining the data.
 *
 * @return  {ReactElement}
 */
function Graph1Activity() {
  return (
    <div className="graph1_activity">
      <div className="graph1_activity_header">
        <h4 className="header_title">Activité quotidienne</h4>
        <div className="header_legend">
          <div className="legend_weight">
            <img className="legend_image" src={OvalWeight} alt="" />
            <p className="legend_text">Poids (kg)</p>
          </div>
          <div className="legend_calories_burned">
            <img className="legend_image" src={OvalBurned} alt="" />
            <p className="legend_text">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <Graph1ActivityBarChart />
    </div>
  );
};

export default Graph1Activity;
