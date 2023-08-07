const Notification = require('../models/Notification');
const User = require('../models/User');

// Get all notifications
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific notification
exports.getNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (notification == null) {
            return res.status(404).json({ message: 'Cannot find notification' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new notification
exports.createNotification = async (req, res) => {
    const notification = new Notification({
        title: req.body.title,
        message: req.body.message,
        user: req.body.user
    });

    try {
        const newNotification = await notification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a notification
exports.updateNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (notification == null) {
            return res.status(404).json({ message: 'Cannot find notification' });
        }

        if (req.body.title != null) {
            notification.title = req.body.title;
        }
        if (req.body.message != null) {
            notification.message = req.body.message;
        }
        if (req.body.user != null) {
            notification.user = req.body.user;
        }

        const updatedNotification = await notification.save();
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (notification == null) {
            return res.status(404).json({ message: 'Cannot find notification' });
        }

        await notification.remove();
        res.status(200).json({ message: 'Deleted Notification' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};