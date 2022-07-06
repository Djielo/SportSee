import React from "react";
import Graph2TinyLine from "../Graph2TinyLine/Graph2TinyLine";

const Graph2 = () => {
  return (
    <div className="graph2">
      <h2 className="graph2_title">Durée moyenne des sessions</h2>
      <Graph2TinyLine />
      <div className="graph2_all_days">
        <p className="graph2_days">L</p>
        <p className="graph2_days">M</p>
        <p className="graph2_days">M</p>
        <p className="graph2_days">J</p>
        <p className="graph2_days">V</p>
        <p className="graph2_days">S</p>
        <p className="graph2_days">D</p>
      </div>
    </div>
  );
};

export default Graph2;
