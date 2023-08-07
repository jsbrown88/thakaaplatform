const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Middleware to check if the user is authenticated
const isAuthenticated = require('../config/auth').isAuthenticated;

// Route to get all notifications for a user
router.get('/', isAuthenticated, notificationController.getNotifications);

// Route to mark a notification as read
router.put('/:id', isAuthenticated, notificationController.markNotificationAsRead);

module.exports = router;