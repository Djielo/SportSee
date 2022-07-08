import React from "react";

const DataGenericCard = ({icon, data, category}) => {
  return (
    <div className="datas_element">
      <img className="element_img" src={icon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">{data}</h2>
        <p className="details_name">{category}</p>
      </div>
    </div>
  );
};

export default DataGenericCard;
