// const pool = require("../config/postgreSQLdb");
// const { v4: uuidv4 } = require("uuid");

// // Get all roles
// const getAllLanguageRecordService = async () => {
//   try {
//     const result = await pool.query("SELECT * FROM user_languages");
//     return result.rows; // Return all rows
//   } catch (error) {
//     // console.error("Error fetching roles: ", error);
//     throw new Error("Failed to fetch user_languages.");
//   }
// };

// // Create a new role entry
// const createLanguageRecordService = async (
//   user_id,
//   language,
//   proficiency_level
// ) => {
//   const language_id = uuidv4(); // Generate a unique ID

//   const queryText = `
//     INSERT INTO user_languages(language_id, user_id, language, proficiency_level)
//     VALUES ($1, $2, $3, $4)
//     RETURNING *;
//   `;

//   const values = [language_id, user_id, language, proficiency_level];

//   try {
//     const result = await pool.query(queryText, values);
//     return result.rows[0]; // Return the newly created record
//   } catch (error) {
//     console.log("Error creating role: ", error);
//     throw new Error("Failed to create User Langauge record.", error);
//   }
// };

// // Update experience for a role
// const updateLanguageRecordService = async (
//   language_id,
//   new_experience_months
// ) => {
//   const queryText = `
//     UPDATE user_languages
//     SET experience = $1, updated_at = NOW()
//     WHERE language_id = $2
//     RETURNING *;
//   `;

//   const values = [new_experience_months, language_id];

//   try {
//     const result = await pool.query(queryText, values);
//     if (result.rowCount === 0) {
//       throw new Error("Language not found.");
//     }
//     return result.rows[0]; // Return the updated record
//   } catch (error) {
//     // console.log("Error updating role experience: ", error);
//     throw new Error("Failed to update language record.");
//   }
// };

// // Delete a role
// const deleteLanguageRecordService = async (language_id) => {
//   const queryText = `
//     DELETE FROM user_languages
//     WHERE user_languages = $1
//     RETURNING *;
//   `;

//   try {
//     const result = await pool.query(queryText, [language_id]);
//     if (result.rowCount === 0) {
//       throw new Error("Language record not found.");
//     }
//     return result.rows[0]; // Return the deleted record
//   } catch (error) {
//     console.error("Error deleting  language record: ", error);
//     throw new Error("Failed to delete language record.");
//   }
// };

// module.exports = {
//   getAllLanguageRecordService,
//   createLanguageRecordService,
//   updateLanguageRecordService,
//   deleteLanguageRecordService,
// };

// // const pool = require("../config/postgreSQLdb");
// // const { v4: uuidv4 } = require("uuid");

// // // Get all language records
// // const getAllLanguageRecordService = async () => {
// //   try {
// //     const result = await pool.query("SELECT * FROM user_languages");
// //     return result.rows;
// //   } catch (error) {
// //     throw new Error("Failed to fetch user_languages.");
// //   }
// // };

// // // Create multiple language records
// // const createMultipleLanguageRecordsService = async (user_id, languages) => {
// //   if (!languages || languages.length === 0) {
// //     throw new Error("No language records provided.");
// //   }

// //   const values = [];
// //   const placeholders = languages
// //     .map(
// //       (_, index) =>
// //         `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${
// //           index * 4 + 4
// //         })`
// //     )
// //     .join(", ");

// //   languages.forEach((language) => {
// //     values.push(uuidv4(), user_id, language.name, language.proficiency_level);
// //   });

// //   const queryText = `
// //     INSERT INTO user_languages (language_id, user_id, language, proficiency_level)
// //     VALUES ${placeholders}
// //     RETURNING *;
// //   `;

// //   try {
// //     const result = await pool.query(queryText, values);
// //     return result.rows;
// //   } catch (error) {
// //     console.error("Error creating multiple language records: ", error);
// //     throw new Error("Failed to create multiple User Language records.");
// //   }
// // };

// // // Update language experience
// // const updateLanguageRecordService = async (
// //   language_id,
// //   new_experience_months
// // ) => {
// //   const queryText = `
// //     UPDATE user_languages
// //     SET experience = $1, updated_at = NOW()
// //     WHERE language_id = $2
// //     RETURNING *;
// //   `;

// //   try {
// //     const result = await pool.query(queryText, [
// //       new_experience_months,
// //       language_id,
// //     ]);
// //     if (result.rowCount === 0) {
// //       throw new Error("Language not found.");
// //     }
// //     return result.rows[0];
// //   } catch (error) {
// //     throw new Error("Failed to update language record.");
// //   }
// // };

// // // Delete a language record
// // const deleteLanguageRecordService = async (language_id) => {
// //   const queryText = `
// //     DELETE FROM user_languages
// //     WHERE language_id = $1
// //     RETURNING *;
// //   `;

// //   try {
// //     const result = await pool.query(queryText, [language_id]);
// //     if (result.rowCount === 0) {
// //       throw new Error("Language record not found.");
// //     }
// //     return result.rows[0];
// //   } catch (error) {
// //     console.error("Error deleting language record: ", error);
// //     throw new Error("Failed to delete language record.");
// //   }
// // };

// // module.exports = {
// //   getAllLanguageRecordService,
// //   createMultipleLanguageRecordsService,
// //   updateLanguageRecordService,
// //   deleteLanguageRecordService,
// // };
 

const pool = require("../config/postgreSQLdb");
const { v4: uuidv4 } = require("uuid");

// Get all language records
const getAllLanguageRecordService = async () => {
  try {
    const result = await pool.query("SELECT * FROM user_languages");
    return result.rows; // Return all rows
  } catch (error) {
    throw new Error("Failed to fetch user_languages.");
  }
};

// Create a new language record with languages stored as JSON
const createLanguageRecordService = async (
  user_id,
  languages // an array of language objects with language and proficiency_level
) => {
  const language_id = uuidv4(); // Generate a unique ID

  const queryText = `
    INSERT INTO user_languages(language_id, user_id, languages)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [language_id, user_id, JSON.stringify(languages)]; // Store languages as JSON

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0]; // Return the newly created record
  } catch (error) {
    console.log("Error creating language record: ", error);
    throw new Error("Failed to create User Language record.");
  }
};

// Update experience for a role in the JSON array
const updateLanguageRecordService = async (
  language_id,
  languages // updated languages array
) => {
  const queryText = `
    UPDATE user_languages
    SET languages = $1, updated_at = NOW()
    WHERE language_id = $2
    RETURNING *;
  `;

  const values = [JSON.stringify(languages), language_id]; // Convert updated languages to JSON

  try {
    const result = await pool.query(queryText, values);
    if (result.rowCount === 0) {
      throw new Error("Language record not found.");
    }
    return result.rows[0]; // Return the updated record
  } catch (error) {
    throw new Error("Failed to update language record.");
  }
};

// Delete a language record
const deleteLanguageRecordService = async (language_id) => {
  const queryText = `
    DELETE FROM user_languages
    WHERE language_id = $1
    RETURNING *;
  `;

  try {
    const result = await pool.query(queryText, [language_id]);
    if (result.rowCount === 0) {
      throw new Error("Language record not found.");
    }
    return result.rows[0]; // Return the deleted record
  } catch (error) {
    console.error("Error deleting language record: ", error);
    throw new Error("Failed to delete language record.");
  }
};



module.exports = {
  getAllLanguageRecordService,
  createLanguageRecordService,
  updateLanguageRecordService,
  deleteLanguageRecordService,
};
