/**
 * @typedef {Object} CustomizedTooltip
 * @property {Boolean} active
 * @property {Array} payload
 */

import React, { useContext } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";
import PropTypes from "prop-types";

const dayInLetter = (day) => {
  return ["L", "M", "M", "J", "V", "S", "D"][day];
};

/**
 *
 * @returns {ReactElement} - The line chart that shows the session for each day of the week.
 */
export default function Graph2SessionsTinyLine() {
  const allData = useContext(DataContext);
  const allSessions = allData?.average.data.sessions;
  let eachSession = allSessions?.map(({ day, sessionLength }) => {
    return { name: dayInLetter(day - 1), pv: sessionLength };
  });
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        className="graph2_sessions_tinyline"
        width={300}
        height={100}
        data={eachSession}
        onMouseMove={(e) => {
          let div = document.querySelector(".graph2_sessions");
          if (e.isTooltipActive === true) {
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100);
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
          } else {
            div.style.background = "#ff0000";
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

/**
 * This function is responsible for displaying the user's session duration value in the specified window and updating the graph properties based on the values provided by the Graph2SessionsTinyLine object.
 *
 * @param   {Boolean}  active - The active state of the graph is being updated based on the values provided by the Graph2SessionsTinyLine.
 * @param   {Array}  payload - The payload displays the user's session value related to the active point of the graph.
 * 
 * @return  {ReactElement}
 */
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

// PROPTYPES
CustomizedTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
