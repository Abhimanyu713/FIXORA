const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  college: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 16,
    max: 100
  },
  thingsToLearn: [{
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

menteeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Mentee', menteeSchema);
