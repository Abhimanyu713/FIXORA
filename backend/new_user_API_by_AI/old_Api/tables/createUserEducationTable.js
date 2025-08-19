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

const createUserEducationTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS user_education(
       education_id INT PRIMARY KEY NOT NULL,
    user_id VARCHAR(100),
    degree VARCHAR(100),
    institution VARCHAR(100),
    field_of_study VARCHAR(100),
    start_date DATE,
    end_date DATE,
 
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;
    // FOREIGN KEY (user_id) REFERENCES user_details(user_id),
  try {
    await pool.query(queryText);
    console.log("user_education table created successfully !!!");
  } catch (err) {
    console.log("Error creating user_experience table", err);
  }
};

module.exports = createUserEducationTable;
