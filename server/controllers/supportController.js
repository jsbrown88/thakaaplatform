const express = require('express');
const Support = require('../models/Support');
const router = express.Router();

// Create a new support ticket
router.post('/create', async (req, res) => {
    const supportTicket = new Support({
        userId: req.body.userId,
        issue: req.body.issue,
        description: req.body.description,
        status: 'Open'
    });

    try {
        const savedTicket = await supportTicket.save();
        res.send(savedTicket);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get a specific support ticket
router.get('/:ticketId', async (req, res) => {
    try {
        const supportTicket = await Support.findById(req.params.ticketId);
        res.send(supportTicket);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a support ticket
router.patch('/:ticketId', async (req, res) => {
    try {
        const updatedTicket = await Support.updateOne(
            { _id: req.params.ticketId },
            { $set: { status: req.body.status } }
        );
        res.send(updatedTicket);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;