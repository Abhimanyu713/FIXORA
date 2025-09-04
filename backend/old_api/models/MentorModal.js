const mongoose = require("mongoose");
const { createTokenForUser } = require("../services/authentication");
const { randomBytes, createHmac } = require("crypto");

const timeSlotSchema = new mongoose.Schema({
    start: {
      type: String,
      required: true,
      match: /^([01]\d|2[0-3]):([0-5]\d)$/ // Validates 24-hour HH:mm format
    },
    end: {
      type: String,
      required: true,
      match: /^([01]\d|2[0-3]):([0-5]\d)$/
    }
  });
  

const mentorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
    },
    name: String,
    age: Number,
    dob:Date,
    gender:String,
    salt:  String,
    phone: String,
    country:{type:String},
    address:String,
    education: String,
    college: String,
    stream: String,
    yearsOfExperience: Number,
    areasOfProficiency: [String],
    certification:[String],
    bio: String,
    profilePhoto: { type: String, default: "../default.png" },
    availability: { type: Boolean, default: true },
    available_days: {
        type: [String],
        enum: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        required: true
      },
    languages: [String],
    rating: { type: Number, default: 0 },
    coins: { type: Number, default: 0 },
    role: { type: String, default: "mentor" },
    timeslots: {
        type: [timeSlotSchema]
      } 
}, { timestamps: true });

// Hash password and ensure lowercase email before saving
mentorSchema.pre("save", function (next) {
    const mentor = this;

    // Hash password only if it's modified
    if (mentor.isModified("password")) {
        const salt = randomBytes(16).toString("hex");
        const hashPassword = createHmac("sha256", salt)
            .update(mentor.password)
            .digest("hex");
        mentor.password = hashPassword;
        mentor.salt = salt;
    }

    // Ensure email is always stored in lowercase
    if (mentor.isModified("email")) {
        mentor.email = mentor.email.toLowerCase();
    }

    next();
});


// Middleware for `findOneAndUpdate` and `update`
mentorSchema.pre(["findOneAndUpdate", "update"], async function (next) {
    const update = this.getUpdate();

    // Hash the password if it is being updated
    if (update.password) {
        const salt = randomBytes(16).toString("hex");
        const hashPassword = createHmac("sha256", salt)
            .update(update.password)
            .digest("hex");
        update.password = hashPassword;
        update.salt = salt;
    }

    // Ensure email remains in lowercase if being updated
    if (update.email) {
        update.email = update.email.toLowerCase();
    }

    next();
});


// Static method to match password and generate token
mentorSchema.static(
    "matchPasswordAndGenerateToken",
    async function (email, password) {
        console.log(email);
        const mentor = await Mentor.findOne({ email });
        if (!mentor) throw new Error("User not found");

        const userProvidedHash = createHmac("sha256", mentor.salt)
            .update(password)
            .digest("hex");

        if (mentor.password !== userProvidedHash)
            throw new Error("Incorrect Password");

        const token = createTokenForUser(mentor);
        return token;
    }
);

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor

