import mockedData from "./mockedData";

/**
 * If the mocked parameter is true, then return the userMain property of the object returned by the
 * extractFromMockedData function, otherwise return the userMain property of the object returned by the
 * extractFromData function.
 * @param {Number} userId - the user id of the user you want to get data for
 * @param {Boolean} mocked - boolean
 * @returns An object with a single property, userMain, which is the result of the
 * extractFromMockedData function.
 */

/**
 * It returns a promise that resolves to an object containing four properties, each of which is the
 * result of calling a function that returns a promise.
 * @param userId - the user id to extract data for
 * @param mocked - boolean
 * @returns An object with 4 properties.
 */
console.log(mockedData)

async function getData(userId, mocked) {
  if (mocked) {
    return {
      userMain: extractFromMockedData(userId, mockedData.USER_MAIN_DATA),
      userActivity: extractFromMockedData(userId, mockedData.USER_ACTIVITY),
      userSessions: extractFromMockedData(userId, mockedData.USER_AVERAGE_SESSIONS),
      userPerformance: extractFromMockedData(userId, mockedData.USER_PERFORMANCE),
    };
  }
  //
}

/**
 * [extractFromMockedData description]
 *
 * @param   {Number}  userId  [userId description]
 * @param   {Object}  data    [data description]
 *
 * @return  {[type]}          [return description]
 */

/**
 * It takes a userId and an array of objects, and returns an array of objects that have the same userId
 * as the one passed in
 * @param userId - The userId of the user you want to extract data from
 * @param datas - the mocked datas
 *
 * @returns An array of objects that match the userId.
 */

function extractFromMockedData(userId, datas) {
  return datas.filter((data) => {
    if (data.userId === userId) return data;
  });
}

export { getData };
