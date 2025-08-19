// const pool = require("../config/postgreSQLdb");
// const { v4: uuidv4 } = require("uuid");
// const jwt = require("jsonwebtoken");

// // Get all roles
// const getAllUsersDetailsService = async () => {
//   try {
//     const result = await pool.query("SELECT * FROM user_details");
//     return result.rows; // Return all rows
//   } catch (error) {
//     // console.error("Error fetching user: ", error);
//     throw new Error("Failed to fetch Users.");
//   }
// };

// // Create a new role entry
// const createUserDetailsService = async (
//   first_name,
//   last_name,
//   email,
//   phone_number,
//   password,
//   date_of_birth,
//   profile_picture_url,
//   country,
//   address
// ) => {
//   const user_id = uuidv4(); // Generate a unique ID

//   const queryText = `
//     INSERT INTO user_details(
//     user_id,
//     first_name,
//   last_name,
//   email,
//   phone_number,
//   password,
//   date_of_birth,
//   profile_picture_url,
//   country,
//   address)
//     VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10)
//     RETURNING *;
//   `;

//   const values = [
//     user_id,
//     first_name,
//     last_name,
//     email,
//     phone_number,
//     password,
//     date_of_birth,
//     profile_picture_url,
//     country,
//     address,
//   ];

//   try {
//     const result = await pool.query(queryText, values);
//     return result.rows[0]; // Return the newly created record
//   } catch (error) {
//     console.log("Error creating user: ", error);
//     throw new Error("Failed to create user.", error);
//   }
// };
// // Update user details
// const updateUserService = async (user_id, updatedFields) => {
//   const validFields = [
//     "first_name",
//     "last_name",
//     "email",
//     "phone_number",
//     "password",
//     "date_of_birth",
//     "profile_picture_url",
//     "country",
//     "address",
//   ];

//   // Dynamically construct query based on provided fields
//   const fieldsToUpdate = [];
//   const values = [];
//   let queryText = "UPDATE user_details SET ";

//   Object.keys(updatedFields).forEach((field, index) => {
//     if (validFields.includes(field)) {
//       fieldsToUpdate.push(`${field} = $${index + 1}`);
//       values.push(updatedFields[field]);
//     }
//   });

//   if (fieldsToUpdate.length === 0) {
//     throw new Error("No valid fields provided for update.");
//   }

//   queryText += fieldsToUpdate.join(", ");
//   queryText += `, updated_at = NOW() WHERE user_id = $${
//     fieldsToUpdate.length + 1
//   } RETURNING *;`;

//   values.push(user_id); // Add user_id as the last parameter

//   try {
//     const result = await pool.query(queryText, values);
//     if (result.rowCount === 0) {
//       throw new Error("User not found.");
//     }
//     return result.rows[0]; // Return the updated record
//   } catch (error) {
//     console.error("Error updating user: ", error);
//     throw new Error("Failed to update user.");
//   }
// };

// // Delete user by user_id
// const deleteUserService = async (user_id) => {
//   const queryText = `
//     DELETE FROM user_details
//     WHERE user_id = $1
//     RETURNING *;
//   `;

//   try {
//     const result = await pool.query(queryText, [user_id]);
//     if (result.rowCount === 0) {
//       throw new Error("User not found.");
//     }
//     return result.rows[0]; // Return the deleted record
//   } catch (error) {
//     console.error("Error deleting user: ", error);
//     throw new Error("Failed to delete user.");
//   }
// };

// // Login user
// const loginUserService = async (email, password) => {
//   const queryText = `
//     SELECT * FROM user_details WHERE email = $1;
//   `;
//   try {
//     const result = await pool.query(queryText, [email]);

//     if (result.rowCount === 0) {
//       throw new Error("User not found.");
//     }

//     const user = result.rows[0];

//     const token = jwt.sign(
//       { user_id: user.user_id, email: user.email }, // Payload
//       "jkdhfkdj", // Secret key for signing the token
//       { expiresIn: "1h" } // Token expiration time (optional)
//     );
//     if (user.password != password) {
//       return {
//         status: 401,
//         message: "Login failed",
//       };
//     }
//     return {
//       status: 200,
//       message: "Login successful!",
//       token,
//       user: {
//         user_id: user.user_id,
//         email: user.email,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         profile_picture_url: user.profile_picture_url,
//       },
//     };
//   } catch (error) {
//     throw new Error("Failed to log in.");
//   }
// };

// module.exports = {
//   getAllUsersDetailsService,
//   createUserDetailsService,
//   updateUserService,
//   deleteUserService,
//   loginUserService,
// };

const pool = require("../config/postgreSQLdb");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

// Get all users
const getAllUsersDetailsService = async () => {
  try {
    const result = await pool.query("SELECT * FROM user_details");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users.");
  }
};

// Get all single User details
const getAUsersDetailsService = async (userId) => {
  try {
    const result = await pool.query(
      `SELECT * FROM user_details WHERE user_id = $1`,
      [userId]
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw new Error("Failed to fetch user details.");
  }
};

// Create a new user
const createUserDetailsService = async (
  first_name,
  last_name,
  email,
  phone_number,
  password,
  date_of_birth,
  profile_picture_url,
  country,
  address
) => {
  const user_id = uuidv4(); // Generate unique ID

  const queryText = `
    INSERT INTO user_details(
      user_id, first_name, last_name, email, phone_number,
      password, date_of_birth, profile_picture_url, country, address
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;

  const values = [
    user_id,
    first_name.toLowerCase(),
    last_name.toLowerCase(),
    email.toLowerCase(),
    phone_number,
    password, // **Plaintext password (Less Secure)**
    date_of_birth,
    profile_picture_url.toLowerCase(),
    country.toLowerCase(),
    address.toLowerCase(),
  ];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

// Update user details
const updateUserService = async (user_id, updatedFields) => {
  const validFields = [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "password",
    "date_of_birth",
    "profile_picture_url",
    "country",
    "address",
  ];

  const fieldsToUpdate = [];
  const values = [];
  let queryText = "UPDATE user_details SET ";

  Object.keys(updatedFields).forEach((field, index) => {
    if (validFields.includes(field)) {
      fieldsToUpdate.push(`${field} = $${index + 1}`);
      values.push(updatedFields[field]);
    }
  });

  if (fieldsToUpdate.length === 0) {
    throw new Error("No valid fields provided for update.");
  }

  queryText +=
    fieldsToUpdate.join(", ") +
    `, updated_at = NOW() WHERE user_id = $${values.length + 1} RETURNING *;`;
  values.push(user_id);

  try {
    const result = await pool.query(queryText, values);
    if (result.rowCount === 0) throw new Error("User not found.");
    return result.rows[0];
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user.");
  }
};

// Delete user by user_id
const deleteUserService = async (user_id) => {
  const queryText = `DELETE FROM user_details WHERE user_id = $1 RETURNING *;`;

  try {
    const result = await pool.query(queryText, [user_id]);
    if (result.rowCount === 0) throw new Error("User not found.");
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user.");
  }
};

// Login user
const loginUserService = async (email, password) => {
  const queryText = `SELECT * FROM user_details WHERE email = $1;`;

  try {
    const result = await pool.query(queryText, [email]);

    if (result.rowCount === 0) {
      return { status: 404, message: "User not found" };
    }

    const user = result.rows[0];

    // **Direct password comparison (Not secure, but as per your request)**
    if (user.password !== password) {
      return { status: 401, message: "Invalid email or password" };
    }

    // Generate JWT token
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email },
      process.env.JWT_SECRET || "default_secret_key",
      { expiresIn: "1h" }
    );

    return {
      status: 200,
      message: "Login successful",
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        profile_picture_url: user.profile_picture_url,
      },
    };
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Failed to log in.");
  }
};

const filterUsersService = async (category, sub_category) => {
  try {
    let queryText = "SELECT user_id FROM user_experience WHERE 1=1";
    const values = [];

    if (category) {
      values.push(category);
      queryText += ` AND category = $${values.length} `;
    }

    if (sub_category) {
      values.push(sub_category);
      queryText += ` AND sub_category = $${values.length}`;
    }
    // Fetch a random user
    queryText += " ORDER BY RANDOM() LIMIT 20";
    const result = await pool.query(queryText, values);
    return result.rows;
  } catch (error) {
    console.error("Error filtering users:", error);
    throw new Error("Failed to filter users.");
  }
};

const uploadprofileService = async(userId,profileImage_Path)=>{
const validFields = []
}

module.exports = {
  getAllUsersDetailsService,
  getAUsersDetailsService,
  createUserDetailsService,
  updateUserService,
  deleteUserService,
  loginUserService,
  filterUsersService,
};
