const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

// Route to get all forum threads
router.get('/', forumController.getForumThreads);

// Route to create a new forum thread
router.post('/', forumController.createForumThread);

// Route to reply to a thread
router.post('/:threadId/replies', forumController.replyToThread);

module.exports = router;