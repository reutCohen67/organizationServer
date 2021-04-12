const userServices = require('./service');

module.exports.sendReport = async (req, res, next) => {
  const report = req.body;
  let response = await userServices.sendReport(report);
  res.status(response.status).send(response.data);
};
