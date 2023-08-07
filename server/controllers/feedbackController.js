const express = require('express');
const Feedback = require('../models/Feedback');

// Create a new feedback
exports.createFeedback = async (req, res) => {
    const feedback = new Feedback({
        userId: req.body.userId,
        feedback: req.body.feedback
    });

    try {
        const savedFeedback = await feedback.save();
        res.send(savedFeedback);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.send(feedbacks);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Get a specific feedback
exports.getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.feedbackId);
        res.send(feedback);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const removedFeedback = await Feedback.remove({ _id: req.params.feedbackId });
        res.send(removedFeedback);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update a feedback
exports.updateFeedback = async (req, res) => {
    try {
        const updatedFeedback = await Feedback.updateOne(
            { _id: req.params.feedbackId },
            { $set: { feedback: req.body.feedback } }
        );
        res.send(updatedFeedback);
    } catch (err) {
        res.status(400).send(err);
    }
};