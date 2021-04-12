const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/register', controller.register);
router.get('/getUsers', controller.getAllUsers);
router.get('/getUsers/:id', controller.getUser);

module.exports = router;
