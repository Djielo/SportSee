import React from "react";
import PropTypes from "prop-types";

/**
 * [CardGenericMainData description]
 *
 * @param   {String}  icon      [icon description]
 * @param   {Object}  data      [data description]
 * @param   {String}  category  [category description]
 *
 * @component
 */
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

CardGenericMainData.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardGenericMainData;
