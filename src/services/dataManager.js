import mockedData from "./mockedData";

/**
 * @param {Number} userId.)
 * @param {Boolean} mocked
 */
async function getData(userId,mocked){
  if (mocked){
    return {
        userMain:extractFromMockedData(userId, mockedData.USER_MAIN_DATA),
    }
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

function extractFromMockedData(userId, data){
    return data.filter(data=>{if (data.userId === userId) return data;})
}

export {
    getData
}