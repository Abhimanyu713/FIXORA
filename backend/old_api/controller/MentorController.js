const Mentor = require("../models/MentorModal");

// get all mentors
async function handleGetAllMentors(req, res) {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// register mentor
async function handleRegisterMentor(req, res) {
  try {
    const { email, password, name, age, education, college, stream, yearsOfExperience, areasOfProficiency } = req.body;

    if (await Mentor.findOne({ email })) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newMentor = await Mentor.create({
      email,
      password,
      name,
      age,
      education,
      college,
      stream,
      yearsOfExperience,
      areasOfProficiency,
    });

    return res.status(201).json({
      message: "Mentor registered successfully",
      id: newMentor._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// login mentor
async function handleLoginMentor(req, res) {
  const { email, password } = req.body;
  try {
    const token = await Mentor.matchPasswordAndGenerateToken(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// update mentor
async function handleUpdateMentor(req, res) {
  const { id } = req.query;
  const updates = req.body;

  try {
    if (!id) return res.status(400).json({ message: "Mentor ID is required" });

    const mentor = await Mentor.findByIdAndUpdate(id, updates, { new: true });
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    res.status(200).json({ message: "Mentor updated successfully", mentor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// delete mentor
async function handleDeleteMentor(req, res) {
  const { id } = req.query;
  try {
    const mentor = await Mentor.findByIdAndDelete(id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    res.status(200).json({ message: "Mentor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  handleGetAllMentors,
  handleRegisterMentor,
  handleLoginMentor,
  handleUpdateMentor,
  handleDeleteMentor,
};
