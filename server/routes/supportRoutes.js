const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Route to create a new support ticket
router.post('/create', supportController.createSupportTicket);

// Route to get a specific support ticket
router.get('/:id', supportController.getSupportTicket);

// Route to update a specific support ticket
router.put('/:id', supportController.updateSupportTicket);

// Route to delete a specific support ticket
router.delete('/:id', supportController.deleteSupportTicket);

module.exports = router;