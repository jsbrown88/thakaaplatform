const express = require('express');
const Investor = require('../models/Investor');

// Create a new investor
exports.createInvestor = async (req, res) => {
    const investor = new Investor(req.body);
    try {
        await investor.save();
        res.status(201).send(investor);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Get all investors
exports.getAllInvestors = async (req, res) => {
    try {
        const investors = await Investor.find({});
        res.send(investors);
    } catch (e) {
        res.status(500).send();
    }
};

// Get investor by ID
exports.getInvestorById = async (req, res) => {
    const _id = req.params.id;
    try {
        const investor = await Investor.findById(_id);
        if (!investor) {
            return res.status(404).send();
        }
        res.send(investor);
    } catch (e) {
        res.status(500).send();
    }
};

// Update an investor by ID
exports.updateInvestor = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'phone'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const investor = await Investor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!investor) {
            return res.status(404).send();
        }

        res.send(investor);
    } catch (e) {
        res.status(400).send(e);
    }
};

// Delete an investor by ID
exports.deleteInvestor = async (req, res) => {
    try {
        const investor = await Investor.findByIdAndDelete(req.params.id);

        if (!investor) {
            res.status(404).send();
        }

        res.send(investor);
    } catch (e) {
        res.status(500).send();
    }
};