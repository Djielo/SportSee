import React from "react";
import DataGenericCard from "../../components/DataGenericCard/DataGenericCard";
import CaloriesIcon from "../../assets/icon_calories.svg";
import ProteinIcon from "../../assets/icon_protein.svg";
import GlucidIcon from "../../assets/icon_glucid.svg";
import LipidIcon from "../../assets/icon_lipid.svg";


const DataCards = () => {
  return (
    <div className="datas">
      <DataGenericCard icon={CaloriesIcon} data={`1920kCal`} category={"Calories"} />
      <DataGenericCard icon={ProteinIcon} data={`155g`} category={"Proteines"} />
      <DataGenericCard icon={GlucidIcon} data={`290g`} category={"Glucides"} />
      <DataGenericCard icon={LipidIcon} data={`50g`} category={"Lipides"} />
    </div>
  );
};

export default DataCards;
