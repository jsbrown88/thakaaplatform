const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route to submit feedback
router.post('/submit', feedbackController.submitFeedback);

// Route to get feedback
router.get('/get', feedbackController.getFeedback);

module.exports = router;