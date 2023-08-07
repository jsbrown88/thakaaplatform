const express = require('express');
const Training = require('../models/Training');

// Create a new training info
exports.createTrainingInfo = async (req, res) => {
    const training = new Training(req.body);
    try {
        await training.save();
        res.status(201).send(training);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Get all training info
exports.getTrainingInfo = async (req, res) => {
    try {
        const trainings = await Training.find({});
        res.send(trainings);
    } catch (e) {
        res.status(500).send();
    }
};

// Get training info by ID
exports.getTrainingInfoById = async (req, res) => {
    const _id = req.params.id;
    try {
        const training = await Training.findById(_id);
        if (!training) {
            return res.status(404).send();
        }
        res.send(training);
    } catch (e) {
        res.status(500).send();
    }
};

// Update training info by ID
exports.updateTrainingInfo = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'resources'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const training = await Training.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!training) {
            return res.status(404).send();
        }

        res.send(training);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Delete training info
exports.deleteTrainingInfo = async (req, res) => {
    try {
        const training = await Training.findByIdAndDelete(req.params.id);

        if (!training) {
            res.status(404).send();
        }

        res.send(training);
    } catch (e) {
        res.status(500).send();
    }
};