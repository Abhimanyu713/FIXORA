// // const {
// //   getAllLanguageRecordService,
// //   createLanguageRecordService,
// //   updateLanguageRecordService,
// //   deleteLanguageRecordService,
// // } = require("../models/userLangaugesRecordModel");

// // const handleResponse = require("../Utilis/handleResponse");

// // // Controller function to handle fetching all roles
// // const handleGetAllLanguageRecord = async (req, res, next) => {
// //   try {
// //     const roles = await getAllLanguageRecordService(); // Fetch roles using the service function
// //     handleResponse(
// //       res,
// //       200,
// //       "All Language records fetched Successfully",
// //       roles
// //     ); // Send success response
// //   } catch (error) {
// //     next(error); // Pass error to error-handling middleware
// //   }
// // };

// // // Controller function to handle creating a new role
// // const handleCreateLanguageRecord = async (req, res, next) => {
// //   const { user_id, language, proficiency_level } = req.body; // Destructure input from request body
// //   try {
// //     const role = await createLanguageRecordService(
// //       user_id,
// //       language,
// //       proficiency_level
// //     ); // Create role using the service function
// //     handleResponse(res, 201, "Role created", role); // Send success response with created role data
// //   } catch (error) {
// //     next(error); // Pass error to error-handling middleware
// //   }
// // };

// // // Controller function to handle updating a role's experience
// // const handleUpdateLanguageRecord = async (req, res, next) => {
// //   const { language_id, new_experience_months } = req.body; // Destructure input from request body
// //   try {
// //     const role = await updateLanguageRecordService(
// //       language_id,
// //       new_experience_months
// //     ); // Update experience using the service function
// //     handleResponse(res, 200, "Role experience updated", role); // Send success response with updated role data
// //   } catch (error) {
// //     next(error); // Pass error to error-handling middleware
// //   }
// // };

// // // Controller function to handle deleting a role
// // const handleDeleteLanguageRecord = async (req, res, next) => {
// //   const { language_id } = req.body; // Destructure input from request body
// //   try {
// //     const role = await deleteLanguageRecordService(language_id); // Delete role using the service function
// //     handleResponse(res, 200, "Role deleted", role); // Send success response with deleted role data
// //   } catch (error) {
// //     next(error); // Pass error to error-handling middleware
// //   }
// // };

// // // Export all controller functions for use in routes
// // module.exports = {
// //   handleGetAllLanguageRecord,
// //   handleCreateLanguageRecord,
// //   handleUpdateLanguageRecord,
// //   handleDeleteLanguageRecord,
// // };

// // // const {
// // //   getAllLanguageRecordService,
// // //   createMultipleLanguageRecordsService,
// // //   updateLanguageRecordService,
// // //   deleteLanguageRecordService,
// // // } = require("../models/userLangaugesRecordModel");

// // // const handleResponse = require("../Utilis/handleResponse");

// // // // Controller function to handle fetching all language records
// // // const handleGetAllLanguageRecord = async (req, res, next) => {
// // //   try {
// // //     const languages = await getAllLanguageRecordService(); // Fetch languages using the service function
// // //     handleResponse(
// // //       res,
// // //       200,
// // //       "All Language records fetched Successfully",
// // //       languages
// // //     ); // Send success response
// // //   } catch (error) {
// // //     next(error); // Pass error to error-handling middleware
// // //   }
// // // };

// // // // Controller function to handle creating multiple language records
// // // const handleCreateMultipleLanguageRecords = async (req, res, next) => {
// // //   const { user_id, languages } = req.body; // Destructure input from request body

// // //   if (!languages || !Array.isArray(languages) || languages.length === 0) {
// // //     return res.status(400).json({ message: "Invalid languages array provided." });
// // //   }

// // //   try {
// // //     const createdLanguages = await createMultipleLanguageRecordsService(user_id, languages);
// // //     handleResponse(res, 201, "Languages added successfully", createdLanguages);
// // //   } catch (error) {
// // //     next(error); // Pass error to error-handling middleware
// // //   }
// // // };

// // // // Controller function to handle updating a language's experience
// // // const handleUpdateLanguageRecord = async (req, res, next) => {
// // //   const { language_id, new_experience_months } = req.body; // Destructure input from request body
// // //   try {
// // //     const updatedLanguage = await updateLanguageRecordService(
// // //       language_id,
// // //       new_experience_months
// // //     ); // Update experience using the service function
// // //     handleResponse(res, 200, "Language experience updated", updatedLanguage);
// // //   } catch (error) {
// // //     next(error); // Pass error to error-handling middleware
// // //   }
// // // };

// // // // Controller function to handle deleting a language record
// // // const handleDeleteLanguageRecord = async (req, res, next) => {
// // //   const { language_id } = req.body; // Destructure input from request body
// // //   try {
// // //     const deletedLanguage = await deleteLanguageRecordService(language_id); // Delete language using the service function
// // //     handleResponse(res, 200, "Language deleted", deletedLanguage);
// // //   } catch (error) {
// // //     next(error); // Pass error to error-handling middleware
// // //   }
// // // };

// // // // Export all controller functions for use in routes
// // // module.exports = {
// // //   handleGetAllLanguageRecord,
// // //   handleCreateMultipleLanguageRecords,
// // //   handleUpdateLanguageRecord,
// // //   handleDeleteLanguageRecord,
// // // };

// const {
//   getAllLanguageRecordService,
//   createLanguageRecordService,
//   updateLanguageRecordService,
//   deleteLanguageRecordService,
// } = require("../models/userLangaugesRecordModel");

// const handleResponse = require("../Utilis/handleResponse");

// // Controller function to handle fetching all language records
// const handleGetAllLanguageRecord = async (req, res, next) => {
//   try {
//     const roles = await getAllLanguageRecordService(); // Fetch all language records
//     handleResponse(
//       res,
//       200,
//       "All Language records fetched successfully",
//       roles
//     ); // Send success response
//   } catch (error) {
//     next(error); // Pass error to error-handling middleware
//   }
// };

// // Controller function to handle creating a new language record
// const handleCreateLanguageRecord = async (req, res, next) => {
//   const { user_id, languages } = req.body; // Destructure input from request body
//   const new_language = JSON.parse(languages);
//   console.log(Array.isArray(new_language));
//   if (!languages || !Array.isArray(languages)) {
//     return res.status(400).json({ message: "Languages should be an array." });
//   }
//   try {
//     const role = await createLanguageRecordService(user_id, languages); // Create new language record
//     handleResponse(res, 201, "Language record created successfully", role); // Send success response
//   } catch (error) {
//     next(error); // Pass error to error-handling middleware
//   }
// };

// // Controller function to handle updating a language record
// const handleUpdateLanguageRecord = async (req, res, next) => {
//   const { language_id, languages } = req.body; // Destructure input from request body
//   if (!languages || !Array.isArray(languages)) {
//     return res.status(400).json({ message: "Languages should be an array." });
//   }
//   try {
//     const updatedLanguage = await updateLanguageRecordService(
//       language_id,
//       languages
//     ); // Update language record
//     handleResponse(
//       res,
//       200,
//       "Language record updated successfully",
//       updatedLanguage
//     ); // Send success response
//   } catch (error) {
//     next(error); // Pass error to error-handling middleware
//   }
// };

// // Controller function to handle deleting a language record
// const handleDeleteLanguageRecord = async (req, res, next) => {
//   const { language_id } = req.body; // Destructure input from request body
//   try {
//     const deletedLanguage = await deleteLanguageRecordService(language_id); // Delete language record
//     handleResponse(
//       res,
//       200,
//       "Language record deleted successfully",
//       deletedLanguage
//     ); // Send success response
//   } catch (error) {
//     next(error); // Pass error to error-handling middleware
//   }
// };

// // Export all controller functions for use in routes
// module.exports = {
//   handleGetAllLanguageRecord,
//   handleCreateLanguageRecord,
//   handleUpdateLanguageRecord,
//   handleDeleteLanguageRecord,
// };

const {
  getAllLanguageRecordService,
  createLanguageRecordService,
  updateLanguageRecordService,
  deleteLanguageRecordService,
} = require("../models/userLangaugesRecordModel");

const handleResponse = require("../Utilis/handleResponse");

/**
 * Helper function to ensure languages are stored as an array.
 * If it's a string, it converts it into an array.
 * If it's not an array, it returns an empty array.
 */
const normalizeLanguages = (languages) => {
  // console.log(languages);
  if (!languages) return []; // Return empty array if undefined/null
  if (typeof languages === "string") return [languages]; // Convert string to array
  if (Array.isArray(languages)) return languages; // Return if already an array
  return []; // Default to an empty array for invalid input
};

// Controller function to handle fetching all language records
const handleGetAllLanguageRecord = async (req, res, next) => {
  try {
    const roles = await getAllLanguageRecordService();
    handleResponse(
      res,
      200,
      "All Language records fetched successfully",
      roles
    );
  } catch (error) {
    next(error);
  }
};

// Controller function to handle creating a new language record
const handleCreateLanguageRecord = async (req, res, next) => {
  const { user_id, languages } = req.body;

  const formattedLanguages = normalizeLanguages(languages); // Ensure array format
  console.log(formattedLanguages);
  if (formattedLanguages.length === 0) {
    return res
      .status(400)
      .json({ message: "Languages should be a non-empty array." });
  }

  try {
    const role = await createLanguageRecordService(user_id, formattedLanguages);
    handleResponse(res, 201, "Language record created successfully", role);
  } catch (error) {
    next(error);
  }
};

// Controller function to handle updating a language record
const handleUpdateLanguageRecord = async (req, res, next) => {
  const { language_id, languages } = req.body;
  // console.log(languages);
  const formattedLanguages = normalizeLanguages(languages);

  if (formattedLanguages.length === 0) {
    return res
      .status(400)
      .json({ message: "Languages should be a non-empty array." });
  }

  try {
    const updatedLanguage = await updateLanguageRecordService(
      language_id,
      formattedLanguages
    );
    handleResponse(
      res,
      200,
      "Language record updated successfully",
      updatedLanguage
    );
  } catch (error) {
    next(error);
  }
};

// Controller function to handle deleting a language record
const handleDeleteLanguageRecord = async (req, res, next) => {
  const { language_id } = req.body;
  try {
    const deletedLanguage = await deleteLanguageRecordService(language_id);
    handleResponse(
      res,
      200,
      "Language record deleted successfully",
      deletedLanguage
    );
  } catch (error) {
    next(error);
  }
};

// Export all controller functions for use in routes
module.exports = {
  handleGetAllLanguageRecord,
  handleCreateLanguageRecord,
  handleUpdateLanguageRecord,
  handleDeleteLanguageRecord,
};
