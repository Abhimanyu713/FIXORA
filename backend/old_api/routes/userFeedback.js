// Import the required modules
const express = require("express");
const router = express.Router();

const {
  handleCreateFeedback,
  handleGetAllFeedback,
} = require("../controller/userFeedbackController");
const { route } = require("./userExperience");

// Route to fetch all roles (GET request to "/")
router.get("/", handleGetAllFeedback);

// Route to create a new role (POST request to "/register")
router.post("/register", handleCreateFeedback);


module.exports = router;