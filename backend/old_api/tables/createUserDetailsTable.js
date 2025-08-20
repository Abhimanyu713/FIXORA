const pool = require("../config/postgreSQLdb");

const createUserPersonalDetail = async () => {
  const queryText = `
CREATE TABLE IF NOT EXISTS user_details(
user_id VARCHAR(100) NULL PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone_number BIGINT NOT NULL,
password VARCHAR(255) NOT NULL,
date_of_birth DATE NOT NULL,  
profile_picture_url VARCHAR(255),
country VARCHAR(100),
address TEXT,
total_coin INT DEFAULT 0 NOT NULL,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 
`;

  try {
    await pool.query(queryText);
    console.log("user_details table created successfully");
  } catch (error) {
    console.log("Error creating user_details table", error);
  }
};

module.exports = createUserPersonalDetail;
