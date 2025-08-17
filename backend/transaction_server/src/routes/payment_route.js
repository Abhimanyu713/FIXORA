const express = require("express");

const router = express.Router();
const {
  getAllPaymentTransactions,
  createPaymentTransaction,
} = require("../controller/payment_controller");

router.get("/", getAllPaymentTransactions);
router.post("/createPayment", createPaymentTransaction);

module.exports = router;
