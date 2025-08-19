const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  experienceYears: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update updatedAt before save
mentorSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Encrypt password before save
mentorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is new/changed
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password during login
mentorSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Mentor', mentorSchema);
