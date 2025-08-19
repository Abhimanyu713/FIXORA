const express = require('express');
const router = express.Router();
const Mentee = require('../models/Mentee');

// Get all mentees
router.get('/', async (req, res) => {
  try {
    const mentees = await Mentee.find();
    res.json(mentees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new mentee
router.post('/', async (req, res) => {
  try {
    const mentee = new Mentee(req.body);
    const newMentee = await mentee.save();
    res.status(201).json(newMentee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get mentee by ID
router.get('/:id', async (req, res) => {
  try {
    const mentee = await Mentee.findById(req.params.id);
    if (mentee) {
      res.json(mentee);
    } else {
      res.status(404).json({ message: 'Mentee not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
