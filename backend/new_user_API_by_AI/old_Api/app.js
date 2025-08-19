// // Set the port number, using environment variable or default to 9000
// const PORT = process.env.PORT || 9000;

// // Import required modules
// const http = require("http");
// const express = require("express");
// const app = express();

// // Middleware to parse incoming JSON requests
// app.use(express.json());

// // Import custom modules for database connections and table creation
// const { connectionDb } = require("./config/mongodb.js"); // MongoDB connection
// const createAllTable = require("./controller/tableController.js");

// // Import route modules for user-related and user experience-related endpoints
// const userRouter = require("./routes/user.js"); // User routes
// const userExperience = require("./routes/userExperience.js"); // User Experience routes
// const userLanguagesRecord = require("./routes/userLanguageRecord");
// const userDeatils = require("./routes/userDeatils.js");

// // Connect to MongoDB database
// connectionDb("mongodb://localhost:27017/production_User_Server"); // Replace with actual MongoDB URI

// createAllTable();

// // Basic route to verify server is working
// app.get("/", (req, res) => {
//   res.send("This is the production server");
// });

// // Register routes for user and user experience
// app.use("/user", userRouter); // Routes for user operations (e.g., registration, login)
// app.use("/userExperience", userExperience); // Routes for user experience operations (e.g., role updates)
// app.use("/userLanguage", userLanguagesRecord);
// app.use("/userDetails", userDeatils);

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`); // Log confirmation that server is running
// });

const PORT = process.env.PORT || 9000; // Set server port

const http = require("http");
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

const { connectionDb } = require("./config/mongodb.js");
const createAllTable = require("./controller/tableController.js");

const userRouter = require("./routes/user.js");
const userExperience = require("./routes/userExperience.js");
const userLanguagesRecord = require("./routes/userLanguageRecord");
const userDeatils = require("./routes/userDeatils.js");
const list = require("./routes/lists");
const feedback = require("./routes/userFeedback.js");

connectionDb("mongodb://localhost:27017/production_User_Server"); // Connect to MongoDB\createAllTable(); // Initialize database tables

createAllTable(); // created all the tables

app.get("/", (req, res) => {
  res.send("This is the production server");
});

app.use("/uploads", express.static("uploads"));
app.use("/user", userRouter);
app.use("/userExperience", userExperience);
app.use("/userLanguage", userLanguagesRecord);
app.use("/userDetails", userDeatils);
app.use("/list", list);
app.use("/feedback", feedback);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Start server
});
