const userModel = require('./model');
const taskModel = require('../task/model');
const {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} = require('../common/response');

module.exports.register = async (data) => {
  let response = {};
  const { email } = data;

  try {
    let existUser = await userModel.find({ email });

    //See if user exist
    if (existUser.length > 0) {
      return responseError(409, SERVER_ERROR);
    }

    const user = await userModel.create(data);
    response = { user };
  } catch (e) {
    // Catch error and console it
    console.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};

module.exports.getAllUsers = async () => {
  let response = {};
  try {
    const users = await userModel.find();
    response = { users };
  } catch (e) {
    // Catch error and console it
    console.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};

module.exports.getUser = async (id) => {
  let response = {};
  try {
    const user = await userModel.findById(id);
    const manager = await userModel.findById(user.managerId);
    const tasks = await taskModel.find({ employeeId: id });
    const subs = await userModel.find({ managerId: id });
    const numOfEmployees = subs.length;

    response = { user, manager, tasks, subs, numOfEmployees };
  } catch (e) {
    // Catch error and console it
    console.error(e.message);
    return responseError(500, SERVER_ERROR);
  }
  return responseSuccess(response);
};
