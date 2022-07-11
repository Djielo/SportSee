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

const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_graph2">
        <p className="label_graph2">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Graph2TinyLine() {
  return (
    <ResponsiveContainer width="100%" height="100%" >
      <LineChart
        className="graph2_tinyline "
        width={300}
        height={100}
        data={data}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector(".graph2");
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          }
        }}
      >
        <XAxis dataKey="name" stroke={""} padding={{ left: 10, right: 10 }} />

        <Line
          type="natural"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
          dataKey="pv"
          barSize={20}
          fill="#8884d8"
          name="Name"
        />

        <Tooltip content={<CustomizedTooltip />} cursor={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
