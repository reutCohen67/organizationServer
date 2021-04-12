const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/task', controller.sendTask);

module.exports = router;
