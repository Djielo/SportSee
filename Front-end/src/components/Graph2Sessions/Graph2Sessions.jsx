import React from "react";
import Graph2SessionsTinyLine from "../Graph2SessionsTinyLine/Graph2SessionsTinyLine";

const Graph2Sessions = () => {
  return (
    <div className="graph2_sessions">
      <h2 className="graph2_sessions_title">Durée moyenne des sessions</h2>
      <Graph2SessionsTinyLine />
    </div>
  );
};

export default Graph2Sessions;
