const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Route to get all chat messages
router.get('/', chatController.getAllChats);

// Route to get a specific chat message by id
router.get('/:id', chatController.getChatById);

// Route to create a new chat message
router.post('/', chatController.createChat);

// Route to update a chat message by id
router.put('/:id', chatController.updateChat);

// Route to delete a chat message by id
router.delete('/:id', chatController.deleteChat);

module.exports = router;