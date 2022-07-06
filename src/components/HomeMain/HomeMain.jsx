import React from "react";
import HeaderHomeMain from "../HeaderHomeMain/HeaderHomeMain";
import Graph1 from "../Graph1/Graph1";
import Graph2 from "../Graph2/Graph2";
import Graph3 from "../Graph3/Graph3";
import Graph4 from "../Graph4/Graph4";
import Datas from "../Datas/Datas";

const HomeMain = () => {
  return (
    <div className="home_main">
      <div className="home_main_contents">
        <HeaderHomeMain />
        <div className="contents_all_datas">
          <div className="datas_graphs">
            <Graph1 />
            <div className="performance">
              <Graph2 />
              <Graph3 />
              <Graph4 />
            </div>
          </div>
          <Datas />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
