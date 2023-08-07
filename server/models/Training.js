const mongoose = require('mongoose');

// Define the schema for Training information
const TrainingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  resources: [{
    name: String,
    url: String
  }],
  licenseInfo: {
    type: String
  }
});

module.exports = mongoose.model('Training', TrainingSchema);