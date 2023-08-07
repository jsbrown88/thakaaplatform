const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// Route to get all investor updates
router.get('/', investorController.getInvestorUpdates);

// Route to get a specific investor update
router.get('/:id', investorController.getInvestorUpdate);

// Route to create a new investor update
router.post('/', investorController.createInvestorUpdate);

// Route to update an investor update
router.put('/:id', investorController.updateInvestorUpdate);

// Route to delete an investor update
router.delete('/:id', investorController.deleteInvestorUpdate);

module.exports = router;