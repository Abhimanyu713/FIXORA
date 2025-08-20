const User = require("../models/userModel");

// get all the user
async function handleGetAllUser(req, res) {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// register the user
async function handleRegisterUser(req, res, next) {
  try {
    const { email, password, name, phoneNumber } = req.body;

    if (await User.findOne({ email })) {
      return res.status(409).json({
        message: "Email already exist",
      });
    }

    const newUser = await User.create({
      email,
      name,
      password,
      phoneNumber,
    });

    return res.status(201).json({
      message: "User registered successfully",
      id: newUser._id,
    });
    next();
  } catch (err) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
}

// Login the user
async function handleLoginUser(req, res, next) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.status(200).json({
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// update the user
async function handleUpdateUser(req, res, next) {
  const { id } = req.query; // Ensure you're passing `id` in the query string
  const { email, name, password, phoneNumber, role, rating, profileImageURL } =
    req.body;

  try {
    // Validate `id` presence
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find the user
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields only if provided
    if (email) user.email = email.toLowerCase();
    if (name) user.name = name;
    if (password) {
      const salt = randomBytes(16).toString();
      const hashPassword = createHmac("sha256", salt)
        .update(password)
        .digest("hex");
      user.password = hashPassword;
      user.salt = salt;
    }
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (role) user.role = role;
    if (rating !== undefined) user.rating = rating; // Allow rating to be `0`
    if (profileImageURL) user.profileImageURL = profileImageURL;

    // Save the updated user
    const updatedUser = await user.save();

    // Respond with updated user data
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// delete the user
async function handleDeleteUser(req, res, next) {
  const { id } = req.query;

  try {
    const user = await User.findByIdAndDelete(id);
    console.log(`id : ${id}`);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  handleGetAllUser,
  handleAddUser: handleRegisterUser,
  handleLoginUser,
  handleDeleteUser,
  hnadleUpdateUser: handleUpdateUser,
};
