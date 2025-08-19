// Import service functions from the UserExperienceModel file
const {
  getAllRolesService,
  createRoleService,
  updateRoleExperienceService,
  deleteRoleService,
  getUserExperience,
} = require("../models/UserExperienceModel");

const handleResponse = require("../Utilis/handleResponse");

// Controller function to handle fetching all roles
const handleGetAllRoles = async (req, res, next) => {
  try {
    const roles = await getAllRolesService(); // Fetch roles using the service function
    handleResponse(res, 200, "Roles fetched successfully", roles); // Send success response
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};

const handleGetUserExperience = async (req, res, next) => {
  const { userId } = req.query;

  try {
    if (!userId) {
      return handleResponse(res, 400, "User Id is required");
    }

    const userExperience = await getUserExperience(userId);
    if (userExperience.length === 0) {
      return handleResponse(res, 404, "User not found");
    }

    handleResponse(
      res,
      200,
      "User experience fetched successfully",
      userExperience
    );
  } catch (error) {}
};

// Controller function to handle creating a new role
const handleCreateRole = async (req, res, next) => {
  const {
    user_id,
    category,
    sub_category,
    description,
    exp_in_year,
    exp_in_month,
  } = req.body; // Destructure input from request body

  // Validate required fields
  if (
    !user_id ||
    !category ||
    !sub_category ||
    !description ||
    exp_in_year === undefined ||
    exp_in_month === undefined
  ) {
    return res.status(400).json({ message: "Missing required fields." }); // Handle validation error
  }

  try {
    const role = await createRoleService(
      user_id,
      category,
      sub_category,
      description,
      exp_in_year,
      exp_in_month
    ); // Create role using the service function
    handleResponse(res, 201, "Role created successfully", role); // Send success response with created role data
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};

// Controller function to handle updating a role's experience
const handleUpdateRoleExperience = async (req, res, next) => {
  const { entry_id, exp_in_year, exp_in_month } = req.body; // Destructure input from request body

  // Validate required fields
  if (!entry_id || exp_in_year === undefined || exp_in_month === undefined) {
    return res.status(400).json({ message: "Missing required fields." }); // Handle validation error
  }

  try {
    const role = await updateRoleExperienceService(
      entry_id,
      exp_in_year,
      exp_in_month
    ); // Update experience using the service function
    handleResponse(res, 200, "Role experience updated successfully", role); // Send success response with updated role data
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};

// Controller function to handle deleting a role
const handleDeleteRole = async (req, res, next) => {
  const { entry_id } = req.body; // Destructure input from request body

  // Validate required fields
  if (!entry_id) {
    return res.status(400).json({ message: "Entry ID is required." }); // Handle validation error
  }

  try {
    const role = await deleteRoleService(entry_id); // Delete role using the service function
    handleResponse(res, 200, "Role deleted successfully", role); // Send success response with deleted role data
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};

// Export all controller functions for use in routes
module.exports = {
  handleGetAllRoles,
  handleCreateRole,
  handleUpdateRoleExperience,
  handleDeleteRole,
  handleGetUserExperience,
};
