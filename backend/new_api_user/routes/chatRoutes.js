const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");

// Mock LLM chat endpoint
router.post("/chat", async (req, res) => {
  try {
    const { message, userType, userSkills } = req.body;

    // Mock LLM response
    const mockResponses = {
      debug: "Here's a step-by-step solution to debug your issue...",
      learn:
        "I recommend starting with the fundamentals and then moving to advanced topics...",
      mentor: "Based on your needs, here are some recommended mentors...",
      general: "That's an interesting question! Let me help you with that...",
    };

    let response = mockResponses.general;

    if (
      message.toLowerCase().includes("debug") ||
      message.toLowerCase().includes("error")
    ) {
      response = mockResponses.debug;
    } else if (
      message.toLowerCase().includes("learn") ||
      message.toLowerCase().includes("study")
    ) {
      response = mockResponses.learn;
    }

    res.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get mentor recommendations based on problem description
router.post("/recommend-mentor", async (req, res) => {
  try {
    const { problemDescription, userType } = req.body;

    // Extract keywords from problem description
    const keywords = problemDescription
      .toLowerCase()
      .split(" ")
      .filter(
        (word) =>
          word.length > 3 &&
          ![
            "the",
            "and",
            "for",
            "with",
            "this",
            "that",
            "have",
            "will",
            "from",
          ].includes(word)
      );

    // Find mentors with matching skills
    let mentors = [];
    if (keywords.length > 0) {
      const skillQuery = {
        $or: keywords.map((keyword) => ({
          areasOfProficiency: { $regex: keyword, $options: "i" },
        })),
      };
      mentors = await Mentor.find(skillQuery).limit(5);
    }

    // If no mentors found, return random mentors
    if (mentors.length === 0) {
      mentors = await Mentor.find().limit(3);
    }

    res.json({
      mentors,
      problemKeywords: keywords,
      recommendations: mentors.map((mentor) => ({
        name: mentor.name,
        skills: mentor.areasOfProficiency,
        education: mentor.education,
        college: mentor.college,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
