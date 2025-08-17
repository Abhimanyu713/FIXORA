const pool = require("../config/db");

const createCallingSessionTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS calling_session (
      calling_id  VARCHAR(100) NOT NULL PRIMARY KEY,
      caller_id VARCHAR(100) NOT NULL,
      callee_id VARCHAR(100) NOT NULL,
      started_at TIMESTAMP,
      ended_at TIMESTAMP,
      coin_used DOUBLE,
     
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    );
  `;

  try {
    await pool.query(queryText); // Added `await` to ensure query execution
    console.log("calling_session table created if not exists");
  } catch (error) {
    console.log("Error creating calling_session table: ", error);
  }
};

module.exports = createCallingSessionTable;

// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Kolkata'
