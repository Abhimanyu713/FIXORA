// Import the required modules
const express = require("express");
const router = express.Router();

// Import user-related controller functions
const {
  handleGetAllUser,   // Function to handle fetching all users
  handleAddUser,      // Function to handle user registration
  handleLoginUser,    // Function to handle user login
  handleDeleteUser,   // Function to handle user deletion
  hnadleUpdateUser,   // Function to handle user updates (Note: Typo in 'hnadle')
} = require("../controller/userController");

// Route to fetch all users (GET request to "/")
router.get("/", handleGetAllUser);

// Route to register a new user (POST request to "/register")
router.post("/register", handleAddUser);

// Route to log in a user (POST request to "/login")
router.post("/login", handleLoginUser);

// Route to delete a user (DELETE request to "/delete")
router.delete("/delete", handleDeleteUser);

// Route to update a user (PATCH request to "/update")
router.patch("/update", hnadleUpdateUser); // Note: Function name contains a typo and should be corrected in the controller.

// Export the router module for use in the main application
module.exports = router;
