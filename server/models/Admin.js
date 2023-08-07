const mongoose = require('mongoose');

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
  adminUser: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  siteData: {
    type: Object,
    required: true
  }
});

// Export the Admin model
module.exports = mongoose.model('Admin', AdminSchema);