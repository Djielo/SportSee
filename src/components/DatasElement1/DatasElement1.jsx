import React from "react";
import CaloriesIcon from "../../assets/calories_icon.svg";

const DatasElement1 = () => {
  return (
    <div className="datas_element">
      <img className="element_img" src={CaloriesIcon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">1,930kCal</h2>
        <p className="details_name">Calories</p>
      </div>
    </div>
  );
};

export default DatasElement1;
