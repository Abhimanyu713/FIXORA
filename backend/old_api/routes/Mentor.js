// Import the required modules
const express = require("express");


// Import mentor-related controller functions
const {
handleGetAllMentors,
handleRegisterMentor,
handleLoginMentor,
handleDeleteMentor,
handleUpdateMentor,
handleGetUserBySkill
} = require("../controller/MentorController");

const router = express.Router();
// Route to fetch all mentors
router.get("/", handleGetAllMentors);

// Route to register a new mentor
router.post("/register", handleRegisterMentor);

// Route to log in a mentor
router.post("/login", handleLoginMentor);

// Route to delete a mentor
router.delete("/delete", handleDeleteMentor);

// Route to update a mentor
router.patch("/update", handleUpdateMentor);

// Route to get the mentor by skill 
router.get("/mentors",handleGetUserBySkill)

// Export the router
module.exports = router;