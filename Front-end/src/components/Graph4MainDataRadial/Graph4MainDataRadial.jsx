import React, { useContext } from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, Legend } from "recharts";
import { DataContext } from "../../Context/DataContext";

const style = {
  top: 20,
  lineHeight: "24px",
};

const ContentLegend = () => {
  return <span> Score </span>;
};

/**
 * @return  {Object} - Returns a RadarChart component from the Recharts library that contains data related to the user's score, from the allData context object.
 */
function Graph4MainDataRadial() {
  const allData = useContext(DataContext);
  const score = allData?.user.data.score || allData?.user.data.todayScore;

  const data = [
    {
      uv: score * 100,
      fill: "#ff0000",
    },
  ];

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
        minAngle={15}
        background
        clockWise
        dataKey="uv"
        cornerRadius={25}
      />
      
      <text fill="#000" cx="150" cy="150" offset="5" x="150" y="130" className="recharts-text recharts-label graph4_mainData_score" textAnchor="middle"><tspan x="150" dy="0.355em">{ data[0].uv }%</tspan></text>

      <Legend iconSize={0} width={500} height={300} layout="vertical" verticalAlign="middle" wrapperStyle={style} content={ContentLegend} />
    </RadialBarChart>
  );
}

export default Graph4MainDataRadial;
