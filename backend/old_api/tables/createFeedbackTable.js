const pool = require("../config/postgreSQLdb");

const createFeedbackTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS user_feedback(
    feedback_id SERIAL PRIMARY KEY,   -- Unique ID for feedback
    user_id VARCHAR(255) NOT NULL,                         -- ID of the user giving feedback
    solution_id INT NOT NULL,                     -- ID of the solution being reviewed
    rating INT CHECK (rating BETWEEN 1 AND 5),-- Rating from 1 to 5
    comment TEXT,                                 -- Optional user comments
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of feedback
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Last modified time
    );
    `;

  try {
    await pool.query(queryText);
    console.log("user_feedback table created successfully !!!");
  } catch (err) {
    console.log("error creating user_feedback table", err);
  }
};
  
module.exports = createFeedbackTable;
