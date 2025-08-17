const pool = require("../config/db");

const createOfferTable = async () => {
  const queryText = `
    CREATE TABLE  IF NOT EXISTS offers_and_ads_table (
    offer_id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL, -- Name of the offer
    discount_type VARCHAR(50) NOT NULL, -- 'percentage' or 'flat'
    discount_value NUMERIC(10, 2) NOT NULL, -- Discount value
    image_url VARCHAR(100) NULL,
    start_date TIMESTAMP NOT NULL, -- When the offer starts
    end_date TIMESTAMP NOT NULL, -- When the offer ends
    is_active BOOLEAN DEFAULT TRUE, -- Whether the offer is active
    description TEXT -- Optional description for the offer
);`;
  try {
    await pool.query(queryText); // Added `await` to ensure query execution
    console.log("offer table created if not exists");
  } catch (error) {
    console.log("Error creating offer table: ", error); 
  }
};

module.exports = createOfferTable;
