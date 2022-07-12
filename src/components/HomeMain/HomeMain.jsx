import React from "react";
import HomeMainHeader from "../HomeMainHeader/HomeMainHeader";
import Graph1Activity from "../Graph1Activity/Graph1Activity";
import Graph2Sessions from "../Graph2Sessions/Graph2Sessions";
import Graph3 from "../Graph3/Graph3";
import Graph4 from "../Graph4/Graph4";
import DataCards from "../DatasCards/DatasCards";

const HomeMain = () => {
  return (
    <div className="home_main">
      <div className="home_main_contents">
        <HomeMainHeader />
        <div className="contents_all_datas">
          <div className="datas_graphs">
            <Graph1Activity />
            <div className="performance">
              <Graph2Sessions />
              <Graph3 />
              <Graph4 />
            </div>
          </div>
          <DataCards />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
