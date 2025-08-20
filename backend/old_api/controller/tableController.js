const createUserExperienceTable = require("../tables/createUserExperienceTable.js"); // Function to create the user_experience table
const createUserDetailTable = require("../tables/createUserDetailsTable.js");
const createUserEducationTable = require("../tables/createUserEducationTable.js");
const createUserLanguagesTable = require("../tables/createUserLanguageTable.js");
const creaeUserFeedbackTable = require("../tables/createFeedbackTable.js");

const createAllTable = async () => {
  (async () => {
    try {
      await createUserExperienceTable(); // Create the table
    } catch (err) {
      console.log("Error creating user_experience table", err.message); // Log errors
    }
  })();

  (async () => {
    try {
      await createUserDetailTable();
    } catch (error) {
      console.log("Error creating user_details table");
    }
  })();

  (async () => {
    try {
      await createUserEducationTable();
    } catch (error) {
      console.log("Error creating user_education_table table");
    }
  })();

  (async () => {
    try {
      await createUserLanguagesTable(); // Create the table
    } catch (err) {
      console.log("Error creating user_experience table", err.message); // Log errors
    }
  })();

  (async () => {
    try {
      await creaeUserFeedbackTable();
    } catch (error) {
      console.log("Error creating user_Feedback table ", err.message);
    }
  })();
};

module.exports = createAllTable;
