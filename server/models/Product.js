const mongoose = require('mongoose');

// Define the product schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  images: [{
    type: String,
  }],
  category: {
    type: String,
    required: true,
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  }],
});

// Export the product model
module.exports = mongoose.model('Product', ProductSchema);