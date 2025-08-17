const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

// Getting all calling sessions
const getAllCallingSessionService = async () => {
  try {
    const result = await pool.query("SELECT * FROM calling_session");
    return result.rows; // Return all rows
  } catch (error) {
    console.error("Error fetching calling sessions: ", error);
    throw new Error("Failed to fetch calling sessions.");
  }
};

// Creating a calling session
const createCallingSessionService = async (
  caller_id,
  callee_id,
  started_at,
  ended_at,
  coin_used
) => {
  const calling_id = uuidv4(); // Generate a unique ID
  const queryText = `
    INSERT INTO calling_session (calling_id, caller_id, callee_id, started_at, ended_at, coin_used)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *; 
  `;
  // Convert the strings to Date objects
  const startTime = new Date(started_at);
  const endTime = new Date(ended_at);

  // Calculate the difference in time in milliseconds
  const timeDifference = endTime - startTime;

  // Convert the difference to minutes
  const differenceInMinutes = timeDifference / (1000 * 60);

  // Since 1 coin equals 1 minute
  const coinsUsed = differenceInMinutes;

  const values = [
    calling_id,
    caller_id,
    callee_id,
    started_at,
    ended_at,
    (coin_used = coinsUsed),
  ];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0]; // Return the newly created record
  } catch (error) {
    console.error("Error creating calling session: ", error);
    throw new Error("Failed to create calling session.");
  }
};

module.exports = {
  getAllCallingSessionService,
  createCallingSessionService,
};
