import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, Legend } from "recharts";
import { getData } from "../../services/dataManager";

const data = [
  {
    uv: 12,
    pv: 100,
    fill: "#ff0000",
  },
];

const style = {
  top: 20,
  lineHeight: "24px",
};

const ContentLegend = () => {
  return <span> Score </span>;
};

export default function Graph4MainDataRadial() {
  return (
    <RadialBarChart
      className="graph4_mainData_radial"
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={80}
      outerRadius={340}
      barSize={10}
      startAngle={-270}
      endAngle={90}
      data={data}
    >
      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
      <RadialBar
        className="graph4_mainData_score"
        minAngle={15}
        label={{ position: "center", fill: "#000" }}
        background
        clockWise
        dataKey="uv"
        cornerRadius={25}
      />
      <Legend iconSize={0} width={500} height={300} layout="vertical" verticalAlign="middle" wrapperStyle={style} content={ContentLegend} />
    </RadialBarChart>
  );
}
