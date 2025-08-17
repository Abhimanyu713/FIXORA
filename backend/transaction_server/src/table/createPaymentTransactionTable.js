const pool = require("../config/db");

const createPaymentTransactionTable = async () => {
  const queryText = `
 CREATE TABLE IF NOT EXISTS payment_transaction (
    transaction_id VARCHAR(255) PRIMARY KEY, -- Unique identifier for the transaction
    user_id VARCHAR(255) NOT NULL,          -- Foreign key linking to the Users table
    subscription_plan VARCHAR(100),         -- Name or ID of the subscription plan
    amount NUMERIC(10, 2) NOT NULL,         -- Amount paid in the transaction
    payment_method VARCHAR(50),             -- Method of payment (e.g., RazorPay, Credit Card)
    status VARCHAR(50),                     -- Status of the transaction (e.g., Pending, Completed)
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time of the transaction
    payment_gateway_id VARCHAR(255),        -- ID provided by the payment gateway
    currency VARCHAR(10) DEFAULT 'USD',     -- Currency of the transaction
    description TEXT,                       -- Optional details about the transaction
    receipt_url VARCHAR(500),               -- URL for the receipt/invoice
    refunded BOOLEAN DEFAULT FALSE,         -- Whether the transaction was refunded
    refund_id VARCHAR(255)                  -- ID of the refund transaction, if any
 );  
  `;

  try {
    await pool.query(queryText); // Added `await` to ensure query execution
    console.log("payment_transaction table created if not exists");
  } catch (error) {
    console.log("Error creating payment_transaction table: ", error);
  }
};

module.exports = createPaymentTransactionTable;
