/**
 * @typedef {Object} userFromAxios
 * @property {userData} data
 *
 * @typedef {Object} userData
 * @property {Number} id
 * @property  {userInfo} userInfo
 * @property {Number}  score
 * @property {keyData} keyData
 *
 * @typedef {Object} userInfo
 * @property {String} firstName
 * @property {String} lastName
 * @property {Number} age
 *
 * @typedef {Object} keyData
 * @property {Number} calorieCount
 * @property {Number} proteinCount
 * @property {Number} carbohydrateCount
 * @property {Number} lipidCount
 *
 * @typedef {Object} activityFromAxios
 * @property {activityData} data
 *
 * @typedef {Object} activityData
 * @property {Number} userId
 * @property {Array.<sessionEntry>} sessions
 *
 * @typedef {Object} sessionEntry
 * @property {String} day
 * @property {Number} kilogram
 * @property {Number} calories
 *
 * @typedef {Object} averageSessionsFromAxios
 * @property {averageSessionsData} data
 *
 * @typedef {Object} averageSessionsData
 * @property {Number} userId
 * @property {Array.<sessionEntry>} sessions
 *
 * @typedef {Object} sessionEntry
 * @property {Number} day
 * @property {Number} sessionLength
 *
 * @typedef {Object} performanceFromAxios
 * @property {performanceData} data
 *
 * @typedef {Object} performance
 * @property {Number} userId
 * @property {kind} kind
 * @property {Array.<dataEntry>} data
 *
 * @typedef {Object} kind
 * @property {String} cardio
 * @property {String} energy
 * @property {String} endurance
 * @property {String} strength
 * @property {String} speed
 * @property {String} intensity
 *
 * @typedef {Object} dataEntry
 * @property {Number} value
 * @property {Number} kind
 */

import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import mockedData from "./mockedData";
import PropTypes from "prop-types";

const DataContext = createContext(undefined);

/**
 *
 * @param   {Object}  children - retreive all data
 *
 * @return  {ReactElement} - Provide data to a child component through the React context. Data is pulled either from an API or from a mocked dataset.
 */
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const currentUrl = useLocation();
  const userId = parseInt(currentUrl.pathname.split("/user/")[1]);
  const mocked = currentUrl.search === "?mocked";

  axios.defaults.baseURL = `http://localhost:3000/user/${userId}`;
  const endpoints = [`/`, `/activity`, `/performance`, `/average-sessions`];

  useEffect(() => {
    if (mocked) {
      setData({
        user: extractFromMockedData(userId, mockedData.USER_MAIN_DATA),
        activity: extractFromMockedData(userId, mockedData.USER_ACTIVITY),
        performance: extractFromMockedData(userId, mockedData.USER_PERFORMANCE),
        average: extractFromMockedData(userId, mockedData.USER_AVERAGE_SESSIONS),        
      });
    } else {
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        axios.spread(({ data: user }, { data: activity }, { data: performance }, { data: average }) => {
          setData({ user, activity, performance, average });
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, mocked]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

/**
 *
 * @function extractFromMockedData
 * @param {Number} userId - The userId of the user you want to extract data from
 * @param {Array.<userData> | Array.<activityData> | Array.<averageSessionsData> | Array.<performanceData>} datas - the datas to extract from
 * @returns {userFromAxios | activityFromAxios | averageSessionsFromAxios | performanceFromAxios} - the data extracted
 */
function extractFromMockedData(userId, datas) {
  for (const data of datas) {
    if (data.userId === userId || data.id === userId) return { data };
  }
}

export { DataContextProvider, DataContext };

// PROPTYPES
DataContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

extractFromMockedData.propTypes = {
  userId: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired,
};
