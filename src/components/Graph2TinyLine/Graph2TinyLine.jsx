import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "L",
    pv: 150,
  },
  {
    name: "M",
    pv: 80,
  },
  {
    name: "M",
    pv: 260,
  },
  {
    name: "J",
    pv: 190,
  },
  {
    name: "V",
    pv: 70,
  },
  {
    name: "S",
    pv: 150,
  },
  {
    name: "D",
    pv: 230,
  },
];

export default function Graph2TinyLine () {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart className="graph2_tinyline" width={300} height={100} data={data}>
        <XAxis dataKey="name" stroke={""} padding={{ left: 10, right: 10 }} />
        <Line type="natural" dataKey="pv" stroke="#fff" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
        <Tooltip cursor={false} data={data.pv} />
      </LineChart>
    </ResponsiveContainer>
  );
}
