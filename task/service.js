const taskModel = require('./model');
const {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} = require('../common/response');

module.exports.sendTask = async (data) => {
  let response = {};
  try {
    const task = await taskModel.create(data);
    response = { task };
  } catch (e) {
    // Catch error and console it
    console.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
