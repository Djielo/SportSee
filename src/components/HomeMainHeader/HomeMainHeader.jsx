import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const HomeMainHeader = () => {
  const[data] = useContext(DataContext);

  if (data.userInfos === undefined) return (<p>Loading</p>)
  return (
    <div className="header_home_main">
      <h1 className="title">
        Bonjour<span className="firstname">{data.userInfos.firstName}</span>
      </h1>
      <p className="text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default HomeMainHeader;
