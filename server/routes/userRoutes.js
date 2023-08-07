const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', userController.register);

// Route for user login
router.post('/login', userController.login);

// Route for user logout
router.get('/logout', userController.logout);

// Route for getting user profile
router.get('/profile/:userId', userController.getUserProfile);

// Route for updating user profile
router.put('/profile/:userId', userController.updateUserProfile);

// Route for user authentication
router.get('/authenticate', userController.authenticateUser);

module.exports = router;