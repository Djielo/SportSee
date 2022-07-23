/**
 * @typedef {Object} CustomizedTooltip
 * @property {Boolean} active
 * @property {Array} payload
 */

import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DataContext } from "../../Context/DataContext";
import PropTypes from "prop-types";

/**
 *
 * @returns {ReactElement} - The bar chart is rendered with the provided data context.
 */
export default function Graph1ActivityBarChart() {
  const allData = useContext(DataContext);
  const activity = allData?.activity.data.sessions;
  let activityDisplay = activity?.map(({ day, kilogram, calories }) => {
    return { day: day = new Date(day).getDate(), kilogram: kilogram, calories: calories };
  });

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        className="graph1_activity_barChart_activity"
        width={740}
        height={196}
        data={activityDisplay}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
        <XAxis dataKey="day" tickLine={false} tickSize={15} padding={{ left: -47, right: -48 }} />
        <YAxis yAxisId="kilogram" orientation="right" domain={["dataMin -1", "dataMax +2"]} tickCount={3} stroke={""} tickSize={50} />
        <YAxis yAxisId="calories" hide />

        <Tooltip content={<CustomizedTooltip />} />

        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={7} />
        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={7} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/**
 * This function is responsible for displaying the user's session duration value in the specified window and updating the graph properties based on the values provided by the Graph1ActivityBarChart object.
 *
 * @param   {Boolean}  active - The active state of the graph is being updated based on the values provided by the Graph1ActivityBarChart.
 * @param   {Array}  payload - The payload displays the user's session value related to the active bars of the graph.
 * 
 * @return  {ReactElement}
 */
const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom_tooltip_graph1_activity">
        <p className="label_graph1_activity_kilo">{`${payload[0].value}Kg`}</p>
        <p className="label_graph1_activity_cal">{`${payload[1].value}kCal`}</p>
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