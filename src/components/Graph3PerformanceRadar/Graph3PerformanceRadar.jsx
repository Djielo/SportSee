import React from "react";
import { useContext } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Graph3PerformanceRadar() {
  // const allData = useContext(DataContext);
  // const averageArray = allData?.performance.data["value", "kind"]
  // const averageKind = allData?.performance.data.kind
  // console.log(averageArray);
  // console.log(averageKind);
  return (
    <ResponsiveContainer>
      <RadarChart className="graph3_performance_radar" outerRadius={85} width={258} height={263} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Mike" dataKey="A" stroke="rgba(255,1,1,0.7)" fill="rgba(255,1,1,0.7)" />
      </RadarChart>
    </ResponsiveContainer>
  );
}
