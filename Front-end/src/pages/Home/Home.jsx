import React, { useContext } from "react";
import HomeVerticalFooter from "../../components/HomeVerticalFooter/HomeVerticalFooter";
import HomeMain from "../../components/HomeMain/HomeMain";
import Loader from "../../components/Loader/Loader";
import { DataContext } from "../../Context/DataContext";

const Home = () => {
  function isLoading() {
    if (!allData) return false; 
    return allData.loading;
  }
  const allData = useContext(DataContext);
  return (
    <div className="home_container">
      <HomeVerticalFooter />
      {isLoading() ? <Loader /> : <HomeMain />}
    </div>
  );
};

export default Home;
