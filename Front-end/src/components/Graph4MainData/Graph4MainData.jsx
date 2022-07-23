import React from "react";
import Graph4MainDataRadial from "../Graph4MainDataRadial/Graph4MainDataRadial";

/**
 * @function Graph4Main - This function is responsible for rendering the main data for Graph4. This includes a text description of the data as well as the actual data represented in a radial graph.
 *
 * @return  {ReactElement} - Returns a div containing a paragraph and a Graph4MainDataRadial component.
 */
function Graph4MainData() {
  return (
    <div className="graph4_mainData">
      <p className="graph4_mainData_text">de votre objectif</p>
      <Graph4MainDataRadial />
    </div>
  );
};

export default Graph4MainData;
