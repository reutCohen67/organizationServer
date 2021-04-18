const userServices = require('./service');
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.register = async (req, res, next) => {
  const data = req.body;
  await check('firstName').not().isEmpty().run(req);
  await check('lastName').not().isEmpty().run(req);
  await check('position').not().isEmpty().run(req);
  await check('email').isEmail().run(req);
  await check('password').isLength({ min: 6 }).run(req);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }

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
