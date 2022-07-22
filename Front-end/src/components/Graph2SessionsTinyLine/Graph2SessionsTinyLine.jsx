import React, { useContext } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";

const dayInLetter = (day) => {
  return ["L", "M", "M", "J", "V", "S", "D"][day];
};

export default function Graph2SessionsTinyLine() {
  const allData = useContext(DataContext);
  const average = allData?.average.data.sessions;
  let average2 = average?.map(({ day, sessionLength }) => {
    return { name: dayInLetter(day-1), pv: sessionLength };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        className="graph2_sessions_tinyline"
        width={300}
        height={100}
        data={average2}
        onMouseMove={(e) => {
          let div = document.querySelector(".graph2_sessions");
          if (e.isTooltipActive === true) {
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          } else {
            div.style.background = "#ff0000"
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

const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_graph2_sessions">
        <p className="label_graph2_sessions">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};
