const userServices = require('./service');

module.exports.register = async (req, res, next) => {
  const data = req.body;
  let response = await userServices.register(data);
  res.status(response.status).send(response.data);
};

module.exports.getAllUsers = async (req, res, next) => {
  let response = await userServices.getAllUsers();
  res.status(response.status).send(response.data);
};

module.exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  let response = await userServices.getUser(id);
  res.status(response.status).send(response.data);
};
