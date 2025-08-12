const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100
  },
  education: {
    type: String,
    required: true,
    enum: ['graduation', 'post-graduation', 'phd', 'other']
  },
  college: {
    type: String,
    required: true,
    trim: true
  },
  stream: {
    type: String,
    required: true,
    trim: true
  },
  areasOfProficiency: [{
    type: String,
    required: true,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

mentorSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Mentor', mentorSchema);
