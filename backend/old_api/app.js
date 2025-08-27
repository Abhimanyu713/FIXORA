const PORT = process.env.PORT || 9000; // Set server port

const http = require("http");
const express = require("express");
const cors = require("cors");   

const app = express();

app.use(cors({
  origin: "*",   // Allow all origins (for development). Replace with specific domain in production
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); // Middleware to parse JSON

const { connectionDb } = require("./config/mongodb.js");
const createAllTable = require("./controller/tableController.js");

const userRouter = require("./routes/user.js");
const userExperience = require("./routes/userExperience.js");
const userLanguagesRecord = require("./routes/userLanguageRecord");
const userDeatils = require("./routes/userDeatils.js");
const list = require("./routes/lists");
const feedback = require("./routes/userFeedback.js");
const post = require("./routes/POst")
const mentor = require("./routes/Mentor");
const mentee = require("./routes/Mentee");
// connectionDb("mongodb+srv://yamah85959:stJgSTKiXw1G6W75@cluster0.aozcb23.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0"); 
 connectionDb("mongodb://127.0.0.1:27017/new_database")
// createAllTable(); // created all the tables

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
app.use("/mentor", mentor);
app.use("/mentee", mentee);
app.use("/post",post)


app.listen(PORT, "0.0.0.0", () => {  
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
