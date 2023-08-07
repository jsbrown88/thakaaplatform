const express = require('express');
const Admin = require('../models/Admin');
const auth = require('../config/auth');

const router = express.Router();

// Middleware to check if the user is authenticated and an admin
router.use(auth.checkAdmin);

// Route to get site data
router.get('/data', async (req, res) => {
    try {
        const siteData = await Admin.getSiteData();
        res.json(siteData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to update site data
router.put('/data', async (req, res) => {
    try {
        const updatedData = await Admin.updateSiteData(req.body);
        res.json(updatedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;