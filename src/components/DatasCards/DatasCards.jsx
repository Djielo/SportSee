import React, { useContext } from "react";
import DataGenericCard from "../../components/DataGenericCard/DataGenericCard";
import CaloriesIcon from "../../assets/icon_calories.svg";
import ProteinIcon from "../../assets/icon_protein.svg";
import GlucidIcon from "../../assets/icon_glucid.svg";
import LipidIcon from "../../assets/icon_lipid.svg";
import { DataContext } from "../../Context/DataContext";

const DataCards = () => {
  const [data] = useContext(DataContext);
  console.log(data);

  if (data.keyData === undefined) return (<p>Loading</p>)
  return (
    <div className="datas">
      <DataGenericCard icon={CaloriesIcon} data={`${data.keyData.calorieCount}Kcal`} category={"Calories"} />
      <DataGenericCard icon={ProteinIcon} data={`${data.keyData.proteinCount}g`} category={"Proteines"} />
      <DataGenericCard icon={GlucidIcon} data={`${data.keyData.carbohydrateCount}g`} category={"Glucides"} />
      <DataGenericCard icon={LipidIcon} data={`${data.keyData.lipidCount}g`} category={"Lipides"} />
    </div>
  );
};

export default DataCards;
