const mongoose = require('mongoose');

// Define the Verification schema
const VerificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  verificationStatus: {
    type: String,
    enum: ['Pending', 'Verified', 'Rejected'],
    default: 'Pending'
  },
  verificationDocument: {
    type: String,
    required: true
  },
  verificationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Verification', VerificationSchema);