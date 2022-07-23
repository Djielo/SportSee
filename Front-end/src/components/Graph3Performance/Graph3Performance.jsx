import React from "react";
import Graph3PerformanceRadar from "../Graph3PerformanceRadar/Graph3PerformanceRadar";

/**
 * @function Graph3Performance - This function renders a radar graph component for visualizing performance data. It accepts a data prop containing performance data points, and renders a graph accordingly.
 *
 * @return  {ReactElement} - Returns a graph displaying the performance of the user using a radar chart.
 */
function Graph3Performance() {
  return (
    <div className="graph3_performance">
      <Graph3PerformanceRadar />
    </div>
  );
}

export default Graph3Performance;
