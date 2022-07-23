import React from "react";
import PropTypes from "prop-types";

/**
 * @function CardGenericMainData - This is a stateless functional component that takes in three props: icon, data, and category. This function creates a generic card with this props.
 *
 * @param   {String}  icon      - SVG string.
 * @param   {String}  data      - The quantity with its unit of value.
 * @param   {String}  category  - The macronutrient of the card (calories, protein, carbohydrate, lipid).
 * 
 * @return {} - Returns a card component which contains an icon, data, and category passed in as props.
 */
function CardGenericMainData({ icon, data, category }) {
  return (
    <div className="card_generic_mainData_element">
      <img className="element_img" src={icon} alt={category} />
      <div className="element_details">
        <h2 className="details_title">{data}</h2>
        <p className="details_name">{category}</p>
      </div>
    </div>
  );
};

export default CardGenericMainData;

//PROPTYPES
CardGenericMainData.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};