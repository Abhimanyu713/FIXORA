const Mentor = require("../models/MentorModal");
const jwt = require("jsonwebtoken");
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
    const {
      email,
      password,
      name,
      age,
      education,
      college,
      stream,
      yearsOfExperience,
      areasOfProficiency,
    } = req.body;

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
  const { token } = req.query;
  const updates = req.body;

  try {
    if (!token) {
      return res.status(401).json({ error: "Access token required" });
    }
    // if (!id) return res.status(400).json({ message: "Mentor ID is required" });
    // const decode = jwt.verify(token, "kkjdfoigjer324i32-0");
    // const id = decode._id;

    const mentor = await Mentor.findByIdAndUpdate(id, updates, { new: true });
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    res.status(200).json({ message: "Mentor updated successfully", mentor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// delete mentor
async function handleDeleteMentor(req, res) {
  const { token } = req.query;
  try {
    if (!token) {
      return res.status(401).json({ error: "Access token required" });
    }
    // if (!id) return res.status(400).json({ message: "Mentor ID is required" });
    const decode = jwt.verify(token, "kkjdfoigjer324i32-0");
    const id = decode._id;
    const mentor = await Mentor.findByIdAndDelete(id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    res.status(200).json({ message: "Mentor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET /mentors?skill=Python
// async function handleGetMentorBySkill(req, res) {
//   const { skill } = req.query;

//   if (!skill) {
//     return res.status(400).json({
//       message: "Skill is required in query params",
//     });
//   }

//   try {
//     const mentors = await Mentor.find({
//       areasOfProficiency: { $regex: new RegExp(skill, "i") }, // case-insensitive search
//     });

//     res.status(200).json({
//       message: "Mentors fetched successfully!",
//       count: mentors.length,
//       data: mentors,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch mentors",
//       error: error.message,
//     });
//   }
// }

// GET /mentors?skill=Python&sortBy=experience&order=desc
async function handleGetMentorBySkill(req, res) {
  const { skill, sortBy = "name", order = "asc" } = req.query;

  if (!skill) {
    return res.status(400).json({
      message: "Skill is required in query params",
    });
  }

  try {
    const mentors = await Mentor.find({
      areasOfProficiency: { $regex: new RegExp(skill, "i") },
    }).sort({
      [sortBy]: order === "desc" ? -1 : 1, // dynamic sorting
    });

    res.status(200).json({
      message: "Mentors fetched successfully!",
      count: mentors.length,
      data: mentors,
    });
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).json({
      message: "Failed to fetch mentors",
      error: error.message,
    });
  }
}

module.exports = {
  handleGetAllMentors,
  handleRegisterMentor,
  handleLoginMentor,
  handleUpdateMentor,
  handleDeleteMentor,
  handleGetUserBySkill: handleGetMentorBySkill,
};
