const express = require('express');
const router = express.Router();

const testC = require('../controllers/testController');

router.use('/', testC.matching);


module.exports = router;