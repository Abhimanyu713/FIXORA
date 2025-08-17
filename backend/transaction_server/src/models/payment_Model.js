const pool = require("../config/db");

// Get all payment transactions
const getAllPaymentTransactionsService = async () => {
  try {
    const result = await pool.query("SELECT * FROM payment_transaction");
    return result.rows; // Return all rows
  } catch (error) {
    console.error("Error fetching payment transactions: ", error);
    throw new Error("Failed to fetch payment transactions.");
  }
};

// Create a new payment transaction
const createPaymentTransactionService = async (
  transaction_id, // Now this will come from req.body
  user_id,
  subscription_plan,
  amount,
  payment_method,
  status,
  payment_gateway_id,
  currency = "INR",
  description = null,
  receipt_url = null,
  refunded = false,
  refund_id = null
) => {
  const queryText = `
    INSERT INTO payment_transaction (
      transaction_id,
      user_id,
      subscription_plan,
      amount,
      payment_method,
      status,
      transaction_date,
      payment_gateway_id,
      currency,
      description,
      receipt_url,
      refunded,
      refund_id
    ) 
    VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, $7, $8, $9, $10, $11, $12)
    RETURNING *;
  `;

  const values = [
    transaction_id,
    user_id,
    subscription_plan,
    amount,
    payment_method,
    status,
    payment_gateway_id,
    currency,
    description,
    receipt_url,
    refunded,
    refund_id,
  ];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0]; // Return the newly created transaction
  } catch (error) {
    console.error("Error creating payment transaction: ", error);
    throw new Error("Failed to create payment transaction.");
  }
};

module.exports = {
  getAllPaymentTransactionsService,
  createPaymentTransactionService,
};
