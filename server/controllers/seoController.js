const express = require('express');
const router = express.Router();
const SEO = require('../models/SEO');

// Get SEO data
router.get('/', async (req, res) => {
    try {
        const seoData = await SEO.find();
        res.json(seoData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update SEO data
router.put('/:id', getSEOData, async (req, res) => {
    if (req.body.title != null) {
        res.seoData.title = req.body.title;
    }
    if (req.body.description != null) {
        res.seoData.description = req.body.description;
    }
    if (req.body.keywords != null) {
        res.seoData.keywords = req.body.keywords;
    }
    try {
        const updatedSEOData = await res.seoData.save();
        res.json(updatedSEOData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getSEOData(req, res, next) {
    let seoData;
    try {
        seoData = await SEO.findById(req.params.id);
        if (seoData == null) {
            return res.status(404).json({ message: 'Cannot find SEO data' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.seoData = seoData;
    next();
}

module.exports = router;