const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/', productController.getProductList);

// Route to get a specific product by id
router.get('/:id', productController.getProductDetails);

// Route to search for products
router.get('/search/:query', productController.searchProduct);

// Route to filter products
router.get('/filter/:filter', productController.filterProduct);

// Route to create a new product
router.post('/', productController.createProduct);

// Route to update a product
router.put('/:id', productController.updateProduct);

// Route to delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;