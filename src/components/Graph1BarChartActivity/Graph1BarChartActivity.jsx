import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "1",
    uv: 70,
    pv: 69.8,
  },
  {
    name: "2",
    uv: 69.7,
    pv: 69.3,
  },
  {
    name: "3",
    uv: 70.4,
    pv: 69.6,
  },
  {
    name: "4",
    uv: 70.5,
    pv: 70.1,
  },
  {
    name: "5",

    uv: 70.4,
    pv: 70.3,
  },
  {
    name: "6",
    uv: 69.4,
    pv: 69.1,
  },
  {
    name: "7",
    uv: 70.8,
    pv: 70.4,
  },
];

const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_graph1">
        <p className="label_graph1_1">{`${payload[0].value}`}</p>
        <p className="label_graph1_2">{`${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Graph1BarChartActivity() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        className="graph1_barChart_activity"
        width={740}
        height={196}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
        <XAxis dataKey="name" tickLine={false} tickSize={15} padding={{ left: -47, right: -48 }} />
        <YAxis orientation="right" domain={[69, 71]} tickCount={3} stroke={""} tickSize={40} />

        <Tooltip content={<CustomizedTooltip />} />

        {/* <Tooltip contentStyle={{ backgroundColor: "#e60000", color: "#fff" }} itemStyle={{color: "#fff"}} cursor="C4C4C480" /> */}

        <Bar dataKey="pv" fill="#282D30" radius={[3, 3, 0, 0]} barSize={7} />
        <Bar dataKey="uv" fill="#E60000" radius={[3, 3, 0, 0]} barSize={7} />
      </BarChart>
    </ResponsiveContainer>
  );
}
