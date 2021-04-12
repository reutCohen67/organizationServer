const reportModel = require('./model');
const {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} = require('../common/response');

module.exports.sendReport = async (data) => {
  let response = {};
  try {
    const report = await reportModel.create(data);
    response = { report };
  } catch (e) {
    // Catch error and console it
    console.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
