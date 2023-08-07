const mongoose = require('mongoose');

// Define the Doctor schema
const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true
  },
  specialty: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  activityHistory: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Doctor', DoctorSchema);