const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

// Route to get training information
router.get('/', trainingController.getTrainingInfo);

// Route to update training information
router.put('/', trainingController.updateTrainingInfo);

module.exports = router;