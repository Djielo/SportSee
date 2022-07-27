import React from "react";
import { useContext } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";
import PropTypes from "prop-types";

/**
 * @function Graph3PerformanceRadar
 * @param {Object} allData - The performance data is retrieved from the DataContext and stored in the perfValue variable
 *
 * @return  {Object} - Returns a RadarChart component from the Recharts library that displays a user's performance data. The data provided by destructuring the perfValue and perfKind objects, from the allData context object.
 */
export default function Graph3PerformanceRadar() {
  const allData = useContext(DataContext);
  let perfValue = allData?.performance.data.data;
  let perfKind = allData?.performance.data.kind;
  
  !perfKind ? (
    <h1>LOADING</h1>
  ) : (
    (perfKind = Object.values(perfKind).map((kind) => {
      if (kind === "cardio") return (kind = "Cardio");
      if (kind === "energy") return (kind = "Energie");
      if (kind === "endurance") return (kind = "Endurance");
      if (kind === "strength") return (kind = "Force");
      if (kind === "speed") return (kind = "Vitesse");
      if (kind === "intensity") return (kind = "Intensité");
      return kind;
    }))
  );
  console.log(perfKind);
  /**
   * @function perfKindDisplay
   * @returns {perfKindValue} - Returns the value of the key in the perfKind object that matches the dataKind parameter.
   */
  const perfKindDisplay = (dataKind) => {
    return perfKind[dataKind];
  };

  /**
   *
   * @param   {Number}  value - The value related to the kind of activity performed by the user
   * @param   {String}  kind - The kind of activity performed by the user related to the value object key
   *
   * @return  {Object} - returns an object with a value and kind property
   */
  let perfValueByKind = perfValue?.map(({ value, kind }) => {
    return { value, kind: perfKindDisplay(kind - 1) };
  });
  /**
   *
   */
  return (
    <>
      {perfKind === undefined ? (
        <h1>LOADING</h1>
      ) : (
        <ResponsiveContainer>
          <RadarChart className="graph3_performance_radar" outerRadius={78} width={258} height={263} data={perfValueByKind}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar dataKey="value" stroke="rgba(255,1,1,0.7)" fill="rgba(255,1,1,0.7)" />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

//PROPTYPES
Graph3PerformanceRadar.propTypes = {
  allData: PropTypes.object,
};
