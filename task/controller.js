const userServices = require('./service');

module.exports.sendTask = async (req, res, next) => {
  const task = req.body;
  let response = await userServices.sendTask(task);
  res.status(response.status).send(response.data);
};
