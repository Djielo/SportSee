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
 * 
 * @typedef {Object} sessionEntry
 * @property {String} day
 * @property {Number} kilogram
 * @property {Number} calories
 * 
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
  const currentUrl = useLocation();
  const userId = currentUrl.pathname.split("/user/")[1];
  const mocked = currentUrl.search === "?mocked";
  console.log(userId, mocked);
  
  const endpoints = [
    `http://localhost:3000/user/${userId}/`,
    `http://localhost:3000/user/${userId}/activity`,
    `http://localhost:3000/user/${userId}/performance`,
    `http://localhost:3000/user/${userId}/average-sessions`,
  ];
  useEffect(() => {
    if (mocked){
      // setData({ user, activity, performance, average });
      return;
    }
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(({ data: user }, { data: activity }, { data: performance }, { data: average }) => {
        console.log(activity)
        setData({ user, activity, performance, average });
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, mocked]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

/**
 * If the mocked parameter is true, then return the userMain property of the object returned by the
 * extractFromMockedData function, otherwise return the userMain property of the object returned by the
 * extractFromData function.
 * @param {Number} userId - the user id of the user you want to get data for
 * @param {Boolean} mocked - boolean
 * @returns An object with a single property, userMain, which is the result of the
 * extractFromMockedData function.
 */
async function getData(userId, mocked) {
  return {
      user: extractFromMockedData(userId, mockedData.USER_MAIN_DATA),
      activity: extractFromMockedData(userId, mockedData.USER_ACTIVITY),
      userSessions: extractFromMockedData(userId, mockedData.USER_AVERAGE_SESSIONS),
      userPerformance: extractFromMockedData(userId, mockedData.USER_PERFORMANCE),
    };
}

/**
 * [extractFromMockedData description]
 *
 * @param   {Number}  userId  [userId description]
 * @param   {Object}  data    [data description] *
 * @return  {[type]}          [return description]
 */

/**
 * It takes a userId and an array of objects, and returns an array of objects that have the same userId
 * as the one passed in
 * @param {Number} userId - The userId of the user you want to extract data from
 * @param {userData | activityData} datas - the mocked datas
 *
 * @returns {userFromAxios | activityFromAxios}
 */

function extractFromMockedData(userId, datas) {
  // eslint-disable-next-line
  return datas.filter((data) => {
    if (data.userId === userId || data.id === userId) return {data};
  });
}

export { DataContextProvider, DataContext };
