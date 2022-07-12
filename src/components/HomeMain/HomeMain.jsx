import React from "react";
import HomeMainHeader from "../HomeMainHeader/HomeMainHeader";
import Graph1Activity from "../Graph1Activity/Graph1Activity";
import Graph2Sessions from "../Graph2Sessions/Graph2Sessions";
import Graph3Performance from "../Graph3Performance/Graph3Performance";
import Graph4MainData from "../Graph4MainData/Graph4MainData";
import CardsMainData from "../CardsMainData/CardsMainData";

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
              <Graph3Performance />
              <Graph4MainData />
            </div>
          </div>
          <CardsMainData />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
