const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor');

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get mentors by skills
router.get('/skills/:skill', async (req, res) => {
  try {
    const { skill } = req.params;
    const mentors = await Mentor.find({
      areasOfProficiency: { $regex: skill, $options: 'i' }
    });
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get mentors by multiple skills (comma-separated)
router.get('/skills', async (req, res) => {
  try {
    const { skills } = req.query;
    if (!skills) {
      return res.status(400).json({ message: 'Skills parameter is required' });
    }
    
    const skillsArray = skills.split(',').map(skill => skill.trim());
    const mentors = await Mentor.find({
      areasOfProficiency: { 
        $in: skillsArray.map(skill => new RegExp(skill, 'i'))
      }
    });
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new mentor
router.post('/', async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const newMentor = await mentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get mentor by ID
router.get('/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (mentor) {
      res.json(mentor);
    } else {
      res.status(404).json({ message: 'Mentor not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search mentors by name and skills
router.get('/search', async (req, res) => {
  try {
    const { query, skills } = req.query;
    let searchCriteria = {};

    if (query) {
      // Enhanced search: search in both name AND areas of proficiency
      const queryRegex = new RegExp(query, 'i');
      searchCriteria.$or = [
        { name: queryRegex },
        { areasOfProficiency: queryRegex }
      ];
    }

    if (skills) {
      const skillsArray = skills.split(',').map(skill => skill.trim());
      // If we already have $or criteria, we need to use $and
      if (searchCriteria.$or) {
        searchCriteria = {
          $and: [
            searchCriteria,
            { areasOfProficiency: { $in: skillsArray.map(skill => new RegExp(skill, 'i')) } }
          ]
        };
      } else {
        searchCriteria.areasOfProficiency = { 
          $in: skillsArray.map(skill => new RegExp(skill, 'i'))
        };
      }
    }

    const mentors = await Mentor.find(searchCriteria);
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
