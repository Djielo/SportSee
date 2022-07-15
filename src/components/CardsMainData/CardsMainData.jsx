import React, { useContext } from "react";
import CardGenericMainData from "../../components/CardGenericMainData/CardGenericMainData";
import CaloriesIcon from "../../assets/icon_calories.svg";
import ProteinIcon from "../../assets/icon_protein.svg";
import GlucidIcon from "../../assets/icon_glucid.svg";
import LipidIcon from "../../assets/icon_lipid.svg";
import { DataContext } from "../../Context/DataContext";

const CardsMainData = () => {
  const allData = useContext(DataContext);
  const keyData = allData?.user.data.keyData;

  if (allData === undefined) return <p>Loading</p>;
  return (
    <div className="card_generic_mainData">
      <CardGenericMainData icon={CaloriesIcon} data={`${keyData.calorieCount}Kcal`} category={"Calories"} />
      <CardGenericMainData icon={ProteinIcon} data={`${keyData.proteinCount}g`} category={"Proteines"} />
      <CardGenericMainData icon={GlucidIcon} data={`${keyData.carbohydrateCount}g`} category={"Glucides"} />
      <CardGenericMainData icon={LipidIcon} data={`${keyData.lipidCount}g`} category={"Lipides"} />
    </div>
  );
};

export default CardsMainData;
