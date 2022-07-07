import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 12,
    fill: "#ff0000",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -80%)",
};

export default function Graph4Radial() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        className="graph4_radial"
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={60}
        endAngle={220}
      >
        <RadialBar minAngle={15} background clockWise dataKey="uv" cornerRadius={25} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
