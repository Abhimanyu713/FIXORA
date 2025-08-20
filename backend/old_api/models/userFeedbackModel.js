const pool = require("../config/postgreSQLdb");
const { v4: uuidv4 } = require("uuid");

const getAllFeedbackService = async () => {
  try {
    const result = await pool.query("SELECT * FROM user_feedback");
    return result.rows;
  } catch (error) {
    console.error("Error fetching roles: ", error);
    throw new Error("Failed to fetch roles.");
  }
};

const createFeedbackService = async (user_id, solution_id, rating, comment) => {
  const queryText = `
    INSERT  INTO user_feedback(user_id,solution_id,rating,comment) VALUES($1, $2, $3, $4)
    RETURNING *;
    `;

  const values = [user_id, solution_id, rating, comment];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0]; // Return the newly created record
  } catch (error) {
    console.error("Error creating role: ", error);
    throw new Error("Failed to create role.");
  }
};


module.exports = {
    getAllFeedbackService,
    createFeedbackService
}