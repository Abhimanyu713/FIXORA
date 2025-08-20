const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
},
salt: {
    type: String,
},
  phone: String,
  age: Number,
  education: String,
  college: String,
  stream: String,
  thingsToLearn: [String],
  bio: String,
  profilePhoto: { type: String, default: "https://i.pravatar.cc/150" },
  languages: [String],
  goals: String,
  availability: { type: Boolean, default: true },
  coins: { type: Number, default: 0 },
  role: { type: String, default: "mentee" },
}, { timestamps: true });



// Hash password and ensure lowercase email before saving
menteeSchema.pre("save", function (next) {
    const mentee = this;

    // Hash password only if it's modified
    if (mentee.isModified("password")) {
        const salt = randomBytes(16).toString("hex");
        const hashPassword = createHmac("sha256", salt)
            .update(mentee.password)
            .digest("hex");
        mentee.password = hashPassword;
        mentee.salt = salt;
    }

    // Ensure email is always stored in lowercase
    if (mentee.isModified("email")) {
        mentee.email = mentee.email.toLowerCase();
    }

    next();
});


// Middleware for `findOneAndUpdate` and `update`
menteeSchema.pre(["findOneAndUpdate", "update"], async function (next) {
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
menteeSchema.static(
    "matchPasswordAndGenerateToken",
    async function (email, password) {
        const mentee = await Mentee.findOne({ email });
        if (!mentee) throw new Error("User not found");

        const userProvidedHash = createHmac("sha256", mentee.salt)
            .update(password)
            .digest("hex");

        if (mentee.password !== userProvidedHash)
            throw new Error("Incorrect Password");

        const token = createTokenForUser(mentee);
        return token;
    }
);



const Mentee = mongoose.model("Mentee", menteeSchema);

module.exports =  Mentee ;