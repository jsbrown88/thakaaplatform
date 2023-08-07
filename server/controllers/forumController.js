const express = require('express');
const Forum = require('../models/Forum');
const router = express.Router();

// Get all forum threads
router.get('/', async (req, res) => {
    try {
        const forumThreads = await Forum.find();
        res.json(forumThreads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new forum thread
router.post('/', async (req, res) => {
    const newThread = new Forum({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });

    try {
        const savedThread = await newThread.save();
        res.status(201).json(savedThread);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Reply to a forum thread
router.post('/:id/reply', getThread, async (req, res) => {
    res.thread.replies.push({
        content: req.body.content,
        author: req.body.author
    });

    try {
        const updatedThread = await res.thread.save();
        res.json(updatedThread);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for getting a thread by ID
async function getThread(req, res, next) {
    let thread;
    try {
        thread = await Forum.findById(req.params.id);
        if (thread == null) {
            return res.status(404).json({ message: 'Cannot find thread' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.thread = thread;
    next();
}

module.exports = router;