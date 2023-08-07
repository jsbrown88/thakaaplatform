const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// Route to verify user
router.post('/verify', verificationController.verifyUser);

// Route to get verification status
router.get('/status', verificationController.getVerificationStatus);

module.exports = router;