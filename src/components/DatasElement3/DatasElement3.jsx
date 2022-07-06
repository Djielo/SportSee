import React from "react";
import GlucidIcon from "../../assets/glucid_icon.svg";

const DatasElement3 = () => {
  return (
    <div className="datas_element">
      <img className="element_img" src={GlucidIcon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">290g</h2>
        <p className="details_name">Glucides</p>
      </div>
    </div>
  );
};

export default DatasElement3;
