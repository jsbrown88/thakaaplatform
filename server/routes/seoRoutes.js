const express = require('express');
const router = express.Router();
const seoController = require('../controllers/seoController');

// Route to get SEO data
router.get('/', seoController.getSeoData);

// Route to update SEO data
router.put('/', seoController.updateSeoData);

module.exports = router;