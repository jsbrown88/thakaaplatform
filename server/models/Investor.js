const mongoose = require('mongoose');

// Define the Investor schema
const InvestorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  investments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }],
  updates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Update'
  }]
});

// Export the Investor model
module.exports = mongoose.model('Investor', InvestorSchema);