import React from "react";
import ProteinIcon from "../../assets/protein_icon.svg";

const DatasElement2 = () => {
  return (
    <div className="datas_element">
      <img className="element_img" src={ProteinIcon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">155g</h2>
        <p className="details_name">Proteines</p>
      </div>
    </div>
  );
};

export default DatasElement2;
