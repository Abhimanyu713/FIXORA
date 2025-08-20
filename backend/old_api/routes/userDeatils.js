const express = require("express");
const upload = require("../middleware/multerService"); // ✅ Correct path to multer setup

const {
  handleGetAllUsers,
  handleCreateUserDetails, // Fixed Typo
  handleUpdateUserDetails,
  handleGetAUser,
  handleDeleteUserDetails,

  handleLoginUser,
  handleFilterUsers,
  handleUploadProfileImage,
} = require("../controller/userDetailsController");

const router = express.Router();

// Get all users
router.get("/", handleGetAllUsers);

// Register a new user
router.post("/register", handleCreateUserDetails);

// Login user
router.post("/login", handleLoginUser);

router.get("/user", handleGetAUser);

// Update user details (Using URL parameter instead of body)
router.put("/update", handleUpdateUserDetails);

router.post("/filter", handleFilterUsers);

// Delete a user (Using URL parameter instead of body)
router.delete("/delete/:id", handleDeleteUserDetails);

// upload profile image
router.post(
  "/p",
  upload.single("profile_picture"),
  handleUploadProfileImage
);

// router.post("/profile", upload.single("profile_picture"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "Please upload a valid image file." });
//   }

//   const fileUrl = `http://your-server-ip:3000/uploads/${req.file.filename}`;

//   res.json({
//     message: "Profile image uploaded successfully!",
//     fileUrl: fileUrl,
//   });
// });

module.exports = router;
