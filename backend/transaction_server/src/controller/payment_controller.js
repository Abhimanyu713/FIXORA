const {
  getAllPaymentTransactionsService,
  createPaymentTransactionService,
} = require("../models/payment_model");

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

const getAllPaymentTransactions = async (req, res, next) => {
  try {
    const payments = await getAllPaymentTransactionsService();
    handleResponse(res, 200, "All payments fetched successfully!!!", payments);
  } catch (error) {
    next(error);
  }
};

const createPaymentTransaction = async (req, res, next) => {
  const {
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
  } = req.body;

  try {
    const paymentTransaction = await createPaymentTransactionService(
      transaction_id, // Must be provided in the request body
      user_id,
      subscription_plan,
      amount,
      payment_method,
      status,
      payment_gateway_id,
      currency || "INR", // Default to "INR" if not provided
      description || null, // Default to null if not provided
      receipt_url || null, // Default to null if not provided
      refunded || false, // Default to false if not provided
      refund_id || null // Default to null if not provided
    );
    handleResponse(
      res,
      201,
      "Payment transaction created successfully!!!",
      paymentTransaction
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPaymentTransactions, createPaymentTransaction };
