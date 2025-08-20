const { randomBytes, createHmac } = require("crypto");
const mongoose = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new mongoose.Schema(
  {
    // Username
    name: {
      type: String,
      required: true,
    },
    // Roles where the user is an expert
    role: {
      type: [String], // Specifies the role is an array of strings
      required: false,
    },
    // User Email
    email: {
      type: String,
      required: true,
      unique: true, // Email should be unique
    },
    // User Password (hashed)
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    // Rating
    rating: {
      type: Number, // Store rating as a number
      required: false,
    },
    // Phone Number
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    profileImageURL: {
      type: String,
      default: "../default.png",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password and ensure lowercase email before saving
userSchema.pre("save", function (next) {
  const user = this;

  // Hash password only if it's modified
  if (user.isModified("password")) {
    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt)
      .update(user.password)
      .digest("hex");
    user.password = hashPassword;
    user.salt = salt;
  }

  // Ensure email is always stored in lowercase
  if (user.isModified("email")) {
    user.email = user.email.toLowerCase();
  }

  next();
});

// Middleware for `findOneAndUpdate` and `update`
userSchema.pre(["findOneAndUpdate", "update"], async function (next) {
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
userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const userProvidedHash = createHmac("sha256", user.salt)
      .update(password)
      .digest("hex");

    if (user.password !== userProvidedHash)
      throw new Error("Incorrect Password");

    const token = createTokenForUser(user);
    return token;
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
