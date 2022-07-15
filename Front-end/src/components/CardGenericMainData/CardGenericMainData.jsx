import React from "react";

const CardGenericMainData = ({ icon, data, category }) => {
  return (
    <div className="card_generic_mainData_element">
      <img className="element_img" src={icon} alt="calories_icon" />
      <div className="element_details">
        <h2 className="details_title">{data}</h2>
        <p className="details_name">{category}</p>
      </div>
    </div>
  );
};

export default CardGenericMainData;
