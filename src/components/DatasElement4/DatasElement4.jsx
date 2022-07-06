import React from "react";
import LipidIcon from "../../assets/lipid_icon.svg";

const DatasElement4 = () => {
  return (
    <div className="datas_element">
      <img className="element_img" src={LipidIcon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">50g</h2>
        <p className="details_name">Lipides</p>
      </div>
    </div>
  );
};

export default DatasElement4;
