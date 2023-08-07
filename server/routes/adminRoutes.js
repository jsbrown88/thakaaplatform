const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Route to get site data
router.get('/siteData', adminController.getSiteData);

// Route to update site data
router.put('/siteData', adminController.updateSiteData);

// Route to login as admin
router.post('/login', adminController.loginAdmin);

// Route to logout as admin
router.post('/logout', adminController.logoutAdmin);

module.exports = router;