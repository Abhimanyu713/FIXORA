const express = require("express");
const app = express();
const port = 9090;
const cors = require("cors");
const pool = require("./config/db");
const callingSesionRouter = require("./routes/callingSession_Route");
const paymentTransaction = require("./routes/payment_route");
const offer = require("./routes/offer_route");
const createCallingSessionTable = require("./table/createCallingSessionTable");
const createPaymentTransactionTable = require("./table/createPaymentTransactionTable");
const createOfferTable = require("./table/createOfferAndADTable");
const errorHandling = require("./middleware/errorhandling");

app.use(express.json());
app.use(cors());

// Ensure tables are created before starting the server
(async () => {
  try {
    await createCallingSessionTable();
    console.log("callingSession table ensured.");
  } catch (err) {
    console.error("Error creating callingSession table:", err.message);
  }
})();

(async () => {
  try {
    await createPaymentTransactionTable();
    console.log("PaymentTransaction table ensured.");
  } catch (err) {
    console.error("Error creating PaymentTransaction table:", err.message);
  }
})();

(async () => {
  try {
    await createOfferTable();
    console.log("Offer and Ads Table is ensured.");
  } catch (error) {
    console.error("Error creating Offer and Ads Table:", err.message);
  }
})();
// Root route
app.get("/", async (req, res, next) => {
  res.status(200).send("This is the server");
});

// Define routes
app.use("/uploads", express.static("uploads"));
app.use("/callingSession", callingSesionRouter);
app.use("/paymentTransaction", paymentTransaction);
app.use("/offer", offer);

// If there's an "offer" route, define it properly or remove it
// app.use("/offer", offerRouter); // Uncomment and define offerRouter if it exists

// Error handling middleware (Ensure it's at the end)
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
