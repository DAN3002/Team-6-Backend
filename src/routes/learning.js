const express = require('express');
const router = express.Router();

const learningController = require('../controllers/learningController');


router.use('/lesson/multiple_choice/end', learningController.end);
router.use('/lesson/matching/end', learningController.end);

router.use('/lesson/:id', learningController.lesson);

router.use('/', learningController.learning);


module.exports = router;