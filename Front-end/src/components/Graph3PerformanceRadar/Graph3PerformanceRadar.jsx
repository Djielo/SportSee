import React from "react";
import { useContext } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";

/**
 * To display a radar chart using the data from the mocked file or API.
 * 
 * The data is stored in a context and I'm trying to access it using the useContext hook. 
 * 
 * The data is an array of objects. 
 * 
 * The objects have two properties: value and kind. 
 * 
 * The kind property is a number. 
 * 
 * To display the kind property as a string. 
 * 
 * The string is stored in another object. 
 * 
 * The object is stored in the same context. 
 * 
 * To access the object using the useContext hook. 
 * 
 * The object is an array of strings. 
 * 
 * To access the strings using the map method. 
 * 
 * To display the strings as labels on the radar chart.
 */
export default function Graph3PerformanceRadar() {
  const allData = useContext(DataContext);
  
  let perfValue = allData?.performance.data.data;
  
  let perfKind = allData?.performance.data.kind;
  
  perfKind === undefined ? <h1>Loading !!</h1> : (perfKind = Object.values(perfKind));
  console.log(perfKind);
  
  const perfKindDisplay = (dataKind) => {
    return perfKind[dataKind];
  };

  let perfValueAverage = perfValue?.map(({ value, kind }) => {
    return { value, kind:perfKindDisplay(kind -1) };
  });

  return (
    <>
      {perfKind === undefined ? (
        <h1>Loading !!</h1>
      ) : (
        <ResponsiveContainer>
          <RadarChart className="graph3_performance_radar" outerRadius={78} width={258} height={263} data={perfValueAverage}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar dataKey="value" stroke="rgba(255,1,1,0.7)" fill="rgba(255,1,1,0.7)" />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
