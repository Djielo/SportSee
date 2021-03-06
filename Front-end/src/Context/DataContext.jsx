/**
 * @typedef {Object} userFromAxios
 * @property {userData} data
 *
 * @typedef {Object} userData
 * @property {Number} id
 * @property {keyData} keyData
 * @property {Number}  score
 * @property  {userInfo} userInfo
 *
 * @typedef {Object} keyData
 * @property {Number} calorieCount
 * @property {Number} proteinCount
 * @property {Number} carbohydrateCount
 * @property {Number} lipidCount
 *
 * @typedef {Object} userInfo
 * @property {String} firstName
 * @property {String} lastName
 * @property {Number} age
 *
 * @typedef {Object} activityFromAxios
 * @property {activityData} data
 *
 * @typedef {Object} activityData
 * @property {Array.<sessionEntry>} sessions
 * @property {Number} userId
 *
 * @typedef {Object} sessionEntry
 * @property {String} day
 * @property {Number} kilogram
 * @property {Number} calories
 *
 */

import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import mockedData from "./mockedData";

const DataContext = createContext(undefined);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const currentUrl = useLocation();
  const userId = parseInt(currentUrl.pathname.split("/user/")[1]);
  const mocked = currentUrl.search === "?mocked";

  axios.defaults.baseURL=`http://localhost:3000/user/${userId}`;

  /* An array of strings. */
  const endpoints = [
    `/`,
    `/activity`,
    `/performance`,
    `/average-sessions`,
  ];
  
  /* A React hook that is called after every render. It is used to fetch data from the API. */
  useEffect(() => {
    if (mocked) {
      setData({
        activity: extractFromMockedData(userId, mockedData.USER_ACTIVITY),
        performance: extractFromMockedData(userId, mockedData.USER_PERFORMANCE),
        average: extractFromMockedData(userId, mockedData.USER_AVERAGE_SESSIONS),
        user: extractFromMockedData(userId, mockedData.USER_MAIN_DATA),
      });
    } else {
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        axios.spread(({ data: user }, { data: activity }, { data: performance }, { data: average }) => {
          setData({ user, activity, performance, average });
        })
      );
      console.log("ENDPOINTS", endpoints);
      console.log("setData", setData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, mocked]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

/**
 * It takes a userId and an array of objects, and returns an array of objects that have the same
 * userId as the one passed in
 *
 * @param {Number} userId - The userId of the user you want to extract data from
 * @param {Array.<userData> | Array.<activityData>} datas - the mocked datas
 *
 * @returns {userFromAxios | activityFromAxios}
 */
function extractFromMockedData(userId, datas) {
  for (const data of datas) {
    if (data.userId === userId || data.id === userId) return {data};
  }
}



export { DataContextProvider, DataContext };
