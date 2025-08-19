// This code defines an asynchronous function, `createUserExperienceTable`,
// which creates a database table named `user_experience` if it doesn't already exist.
// The table structure is as follows:
// - `entry_id`: A unique identifier for each entry, automatically generated (primary key).
// - `user_id`: An integer field representing the user's ID (required).
// - `category`: A string field (up to 255 characters) specifying the main category (required).
// - `sub_category`: A string field (up to 255 characters) specifying the subcategory (required).
// - `description`: A text field providing additional details about the subcategory (required).
// - `experience`: An integer field to store the experience level or duration (required).
// - `created_at`: A timestamp field with a default value of the current date and time.
//
// The function executes the SQL query (`queryText`) to create the table using the `pool.query` method.
// If the table creation is successful, a confirmation message is logged to the console.
// If an error occurs, it logs an error message with details of the issue.
//
// The function is exported for use in other parts of the application.

const pool = require("../config/postgreSQLdb");

const createUserExperienceTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS user_experience(
       entry_id VARCHAR(100) NOT NULL PRIMARY KEY,
       user_id VARCHAR(255) NOT NULL, 
       category VARCHAR(255) NOT NULL,
       sub_category VARCHAR(255) NOT NULL,
       description TEXT NOT NULL,
       exp_in_year VARCHAR(10) NOT NULL,
       exp_in_month VARCHAR(10) NOT NULL,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;
 
  try {
    await pool.query(queryText);
    console.log("user_experience table created successfully !!!");
  } catch (err) {
    console.log("Error creating user_experience table", err);
  }
};

module.exports = createUserExperienceTable;
