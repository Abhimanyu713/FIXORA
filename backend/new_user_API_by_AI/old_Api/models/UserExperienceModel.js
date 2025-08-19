const pool = require("../config/postgreSQLdb");
const { v4: uuidv4 } = require("uuid");

// Get all roles
const getAllExperienceService = async () => {
  try {
    const result = await pool.query("SELECT * FROM user_experience");
    return result.rows; // Return all rows
  } catch (error) {
    throw new Error("Failed to fetch experiences.", error);
  }
};

// Create a new role entry
const createExperienceService = async (
  user_id,
  category,
  sub_category,
  description,
  exp_in_year,
  exp_in_month
) => {
  const entry_id = uuidv4(); // Generate a unique ID

  const queryText = `
    INSERT INTO user_experience(entry_id, user_id, category, sub_category, description, exp_in_year, exp_in_month, updated_at, created_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
    RETURNING *; 
  `;

  const values = [
    entry_id,
    user_id,
    category,
    sub_category,
    description,
    exp_in_year,
    exp_in_month,
  ];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0]; // Return the newly created record
  } catch (error) {
    throw new Error("Failed to create experience.", error);
  }
};

// Update experience for a role
const updateUserExperienceService = async (
  entry_id,
  exp_in_year,
  exp_in_month
) => {
  const queryText = `
    UPDATE user_experience
    SET exp_in_year = $1, exp_in_month = $2, updated_at = NOW()
    WHERE entry_id = $3
    RETURNING *;
  `;

  const values = [exp_in_year, exp_in_month, entry_id];

  try {
    const result = await pool.query(queryText, values);
    if (result.rowCount === 0) {
      throw new Error("Role not found.");
    }
    return result.rows[0]; // Return the updated record
  } catch (error) {
    throw new Error("Failed to update user experience.", error);
  }
};

// Delete a role
const deleteRoleService = async (entry_id) => {
  const queryText = `
    DELETE FROM user_experience
    WHERE entry_id = $1
    RETURNING *;
  `;

  try {
    const result = await pool.query(queryText, [entry_id]);
    if (result.rowCount === 0) {
      throw new Error("Role not found.");
    }
    return result.rows[0]; // Return the deleted record
  } catch (error) {
    throw new Error("Failed to delete role.", error);
  }
};

const getUserExperience = async (user_id) => {
  const queryText = `SELECT * FROM user_experience where user_id=$1`;
  try {
    const result = await pool.query(queryText, [user_id]);

    return result.rows; // Return the deleted record
  } catch (error) {
    throw new Error("Failed to fetch experience.", error);
  }
};

module.exports = {
  getAllRolesService: getAllExperienceService,
  createRoleService: createExperienceService,
  updateRoleExperienceService: updateUserExperienceService,
  deleteRoleService,
  getUserExperience,
};
