import React from "react";
import Meditation from "./../../assets/meditation.svg";
import Natation from "./../../assets/natation.svg";
import Cyclisme from "./../../assets/cyclisme.svg";
import Musculation from "./../../assets/musculation.svg";

const VerticalBar = () => {
  return (
    <nav className="vetical_bar">
      <img className="icon_vertical_bar" src={Meditation} alt="méditation" />
      <img className="icon_vertical_bar" src={Natation} alt="natation" />
      <img className="icon_vertical_bar" src={Cyclisme} alt="cyclisme" />
      <img className="icon_vertical_bar" src={Musculation} alt="musculation" />
    </nav>
  );
};

export default VerticalBar;
