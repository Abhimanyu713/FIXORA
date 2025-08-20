// Import the required modules
const express = require("express");
const router = express.Router();

// Import role-related controller functions
const {
  handleGetAllRoles, // Function to handle fetching all roles
  handleCreateRole, // Function to handle creating a new role
  handleUpdateRoleExperience, // Function to handle updating the experience of a role
  handleDeleteRole,
  handleGetUserExperience, // Function to handle deleting a role
} = require("../controller/userExperienceController");

// Route to fetch all roles (GET request to "/")
router.get("/", handleGetAllRoles);

// Route to create a new role (POST request to "/register")
router.post("/register", handleCreateRole);

// Route to delete a role (DELETE request to "/delete")
router.delete("/delete", handleDeleteRole);

// Route to update the experience of a role (PATCH request to "/update")
router.patch("/update", handleUpdateRoleExperience);

router.get("/user", handleGetUserExperience);

// Export the router module for use in the main application
module.exports = router;
