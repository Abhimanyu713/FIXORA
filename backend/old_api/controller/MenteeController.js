const Mentee = require("../models/MenteeModal.js");

// get all mentees
async function handleGetAllMentees(req, res) {
  try {
    const mentees = await Mentee.find();
    res.status(200).json(mentees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// register mentee
async function handleRegisterMentee(req, res) {
  try {
    const { email, password, name, age, education, college, stream, goals, interests } = req.body;

    if (await Mentee.findOne({ email })) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newMentee = await Mentee.create({
      email,
      password,
      name,
      age,
      education,
      college,
      stream,
      goals,
      interests,
    });

    return res.status(201).json({
      message: "Mentee registered successfully",
      id: newMentee._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// login mentee
async function handleLoginMentee(req, res) {
  const { email, password } = req.body;
  try {
    const token = await Mentee.matchPasswordAndGenerateToken(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// update mentee
async function handleUpdateMentee(req, res) {
  const { id } = req.query;
  const updates = req.body;

  try {
    if (!id) return res.status(400).json({ message: "Mentee ID is required" });

    const mentee = await Mentee.findByIdAndUpdate(id, updates, { new: true });
    if (!mentee) return res.status(404).json({ message: "Mentee not found" });

    res.status(200).json({ message: "Mentee updated successfully", mentee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// delete mentee
async function handleDeleteMentee(req, res) {
  const { id } = req.query;
  try {
    const mentee = await Mentee.findByIdAndDelete(id);
    if (!mentee) return res.status(404).json({ message: "Mentee not found" });

    res.status(200).json({ message: "Mentee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  handleGetAllMentees,
  handleRegisterMentee,
  handleLoginMentee,
  handleUpdateMentee,
  handleDeleteMentee,
};
