// Import the required modules
const express = require("express");
const {
  handleGetAllLanguageRecord,
  handleCreateLanguageRecord,
  handleDeleteLanguageRecord,
  handleUpdateLanguageRecord,
} = require("../controller/userLanguagesRecordController");
const router = express.Router();

// Import role-related controller functions

// Route to fetch all Language Records (GET request to "/")
router.get("/", handleGetAllLanguageRecord);

// Route to create a new Language Record (POST request to "/register")
router.post("/register", handleCreateLanguageRecord);

// Route to delete a Language Record (DELETE request to "/delete")
router.delete("/delete", handleDeleteLanguageRecord);

// Route to update the experience of a Language Record (PATCH request to "/update")
router.patch("/update", handleUpdateLanguageRecord);

// Export the router module for use in the main application
module.exports = router;
