const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/report', controller.sendReport);

module.exports = router;
