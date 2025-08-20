// Import the required modules
const express = require("express");


// Import mentee-related controller functions
const {
  handleGetAllMentees,
  handleRegisterMentee,
  handleLoginMentee,
  handleDeleteMentee,
  handleUpdateMentee,
} = require("../controller/MenteeController");
const router = express.Router();
// Route to fetch all mentees
router.get("/", handleGetAllMentees);

// Route to register a new mentee
router.post("/register", handleRegisterMentee);

// Route to log in a mentee
router.post("/login", handleLoginMentee);

// Route to delete a mentee
router.delete("/delete", handleDeleteMentee);

// Route to update a mentee
router.patch("/update", handleUpdateMentee);

// Export the router
module.exports = router;
