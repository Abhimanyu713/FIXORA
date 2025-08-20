// // const {
// //   getAllUsersDetailsService,
// //   createUserDetailsService,
// //   updateUserService,
// //   deleteUserService,
// // } = require("../models/UserDetailsModel");
// // const handleResponse = require("../Utilis/handleResponse");

// // // Get all users
// // const handleGetAllUsers = async (req, res, next) => {
// //   try {
// //     const users = await getAllUsersDetailsService();
// //     handleResponse(res, 200, "All Users fetched successfully !!", users);
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// // // Create a new user
// // const handleCreateUserDeatils = async (req, res, next) => {
// //   const {
// //     first_name,
// //     last_name,
// //     email,
// //     phone_number,
// //     password,
// //     date_of_birth,
// //     profile_picture_url,
// //     country,
// //     address,
// //   } = req.body;

// //   try {
// //     const newUser = await createUserDetailsService(
// //       first_name,
// //       last_name,
// //       email,
// //       phone_number,
// //       password,
// //       date_of_birth,
// //       profile_picture_url,
// //       country,
// //       address
// //     );
// //     handleResponse(res, 200, "User created successfully !!!", newUser);
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// // // Update user details
// // const handleUpdateUserDetails = async (req, res, next) => {
// //   const { user_id, ...updatedFields } = req.body; // Extract user_id and other fields to update

// //   try {
// //     const updatedUser = await updateUserService(user_id, updatedFields);
// //     handleResponse(res, 200, "User updated successfully !!!", updatedUser);
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// // // Delete a user
// // const handleDeleteUserDetails = async (req, res, next) => {
// //   const { user_id } = req.body; // Expecting user_id from the request body

// //   try {
// //     const deletedUser = await deleteUserService(user_id);
// //     handleResponse(res, 200, "User deleted successfully !!!", deletedUser);
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// // module.exports = {
// //   handleGetAllUsers,
// //   handleCreateUserDeatils,
// //   handleUpdateUserDetails,
// //   handleDeleteUserDetails,
// // };

// const {
//   getAllUsersDetailsService,
//   createUserDetailsService,
//   updateUserService,
//   deleteUserService,
//   loginUserService, // Import login service
// } = require("../models/UserDetailsModel");
// const handleResponse = require("../Utilis/handleResponse");

// // Get all users
// const handleGetAllUsers = async (req, res, next) => {
//   try {
//     const users = await getAllUsersDetailsService();
//     handleResponse(res, 200, "All Users fetched successfully !!", users);
//   } catch (error) {
//     next(error);
//   }
// };

// // Create a new user
// const handleCreateUserDeatils = async (req, res, next) => {
//   const {
//     first_name,
//     last_name,
//     email,
//     phone_number,
//     password,
//     date_of_birth,
//     profile_picture_url,
//     country,
//     address,
//   } = req.body;

//   try {
//     const newUser = await createUserDetailsService(
//       first_name,
//       last_name,
//       email,
//       phone_number,
//       password,
//       date_of_birth,
//       profile_picture_url,
//       country,
//       address
//     );
//     handleResponse(res, 200, "User created successfully !!!", newUser);
//   } catch (error) {
//     next(error);
//   }
// };

// // Update user details
// const handleUpdateUserDetails = async (req, res, next) => {
//   const { user_id, ...updatedFields } = req.body; // Extract user_id and other fields to update

//   try {
//     const updatedUser = await updateUserService(user_id, updatedFields);
//     handleResponse(res, 200, "User updated successfully !!!", updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete a user
// const handleDeleteUserDetails = async (req, res, next) => {
//   const { user_id } = req.body; // Expecting user_id from the request body

//   try {
//     const deletedUser = await deleteUserService(user_id);
//     handleResponse(res, 200, "User deleted successfully !!!", deletedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// // Login a user
// const handleLoginUser = async (req, res, next) => {
//   const { email, password } = req.body; // Expecting email and password from request body

//   try {
//     const loginResult = await loginUserService(email, password);
//     if (loginResult.status == 200) {
//       handleResponse(res, 200, "Login successful", loginResult);
//     } else {
//       handleResponse(res, 401, "Login failed", loginResult);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   handleGetAllUsers,
//   handleCreateUserDeatils,
//   handleUpdateUserDetails,
//   handleDeleteUserDetails,
//   handleLoginUser, // Export the login handler
// };

const {
  getAllUsersDetailsService,
  getAUsersDetailsService,
  createUserDetailsService,
  updateUserService,
  deleteUserService,
  filterUsersService,
  loginUserService,
} = require("../models/UserDetailsModel");
const handleResponse = require("../Utilis/handleResponse");

// Get all users
const handleGetAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersDetailsService();
    handleResponse(res, 200, "All users fetched successfully!", users);
  } catch (error) {
    next(error);
  }
};

const handleGetAUser = async (req, res, next) => {
  try {
    const { userId } = req.query; // Assuming userId is passed as a URL parameter

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await getAUsersDetailsService(userId);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    handleResponse(res, 200, "User detail fetched successfully", user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    next(error);
  }
};

// Create a new user
const handleCreateUserDetails = async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    date_of_birth,
    profile_picture_url,
    country,
    address,
  } = req.body;

  try {
    const newUser = await createUserDetailsService(
      first_name,
      last_name,
      email,
      phone_number,
      password,
      date_of_birth,
      profile_picture_url,
      country,
      address
    );
    handleResponse(res, 201, "User created successfully!", newUser);
  } catch (error) {
    next(error);
  }
};

// Update user details
const handleUpdateUserDetails = async (req, res, next) => {
  const { user_id, ...updatedFields } = req.body; // Extract user_id and other fields to update

  try {
    const updatedUser = await updateUserService(user_id, updatedFields);
    handleResponse(res, 200, "User updated successfully!", updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete a user
const handleDeleteUserDetails = async (req, res, next) => {
  const { user_id } = req.body; // Expecting user_id from the request body

  try {
    const deletedUser = await deleteUserService(user_id);
    handleResponse(res, 200, "User deleted successfully!", deletedUser);
  } catch (error) {
    next(error);
  }
};

// Login a user
const handleLoginUser = async (req, res, next) => {
  const { email, password } = req.body; // Expecting email and password from request body

  try {
    const loginResult = await loginUserService(email, password);

    if (loginResult.status === 200) {
      return handleResponse(res, 200, "Login successful!", loginResult);
    } else {
      return handleResponse(res, 401, "Invalid email or password!", {});
    }
  } catch (error) {
    next(error);
  }
};

// Filter users
const handleFilterUsers = async (req, res, next) => {
  const { category, sub_category } = req.body;
  try {
    const filteredUsers = await filterUsersService(category, sub_category);
    handleResponse(
      res,
      200,
      "Filtered users fetched successfully!",
      filteredUsers
    );
  } catch (error) {
    next(error);
  }
};

const handleUploadProfileImage = async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  if (!req.file) {
    return res.status(400).json({ error: "Please upload a valid image file." });
  }

  try {
    const profile_picture_url = req.file.path;
    const updateFields = {
      "profile_picture_url": profile_picture_url,
    };
    const updatedUser = await updateUserService(userId, updateFields);

    return handleResponse(res, 200, "Profile image updated successfully!", {
      image: profile_picture_url, 
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

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
module.exports = {
  handleGetAllUsers,
  handleGetAUser,
  handleCreateUserDetails, // Fixed Typo
  handleUpdateUserDetails,
  handleDeleteUserDetails,
  handleLoginUser,
  handleFilterUsers,
  handleUploadProfileImage,
};
