const mongoose = require('mongoose');

const SEOSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SEO', SEOSchema);