import React from "react";
import Meditation from "./../../assets/meditation.svg";
import Natation from "./../../assets/natation.svg";
import Cyclisme from "./../../assets/cyclisme.svg";
import Musculation from "./../../assets/musculation.svg";

/**
 * @function HomeVerticalFooter
 *
 * @return  {ReactElement} - Returns a vertical bar located on the left of the home page - It ontains the icons allowing access to the different sports, as well as a copyright.
 *
 */
const HomeVerticalFooter = () => {
  return (
    <div className="vertical_bar">
      <nav className="nav_vertical_bar">
        <img className="icon_vertical_bar" src={Meditation} alt="méditation" />
        <img className="icon_vertical_bar" src={Natation} alt="natation" />
        <img className="icon_vertical_bar" src={Cyclisme} alt="cyclisme" />
        <img className="icon_vertical_bar" src={Musculation} alt="musculation" />
      </nav>
      <p className="text_vertical_bar">Copyright, SportSee 2020</p>
    </div>
  );
};

export default HomeVerticalFooter;
