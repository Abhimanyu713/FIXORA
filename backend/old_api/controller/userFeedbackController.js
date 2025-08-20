const {
  getAllFeedbackService,
  createFeedbackService,
} = require("../models/userFeedbackModel");
const handleResponse = require("../Utilis/handleResponse");

const handleGetAllFeedback = async (req, res, next) => {
  try {
    const feedbacks = await getAllFeedbackService();
    handleResponse(res, 200, "Feedback fetched successfully !!!", feedbacks);
  } catch (error) {
    next(error);
  }
};

const handleCreateFeedback = async (req, res, next) => {
  const { user_id, solution_id, rating, comment } = req.body;

  try {
    const feedback = await createFeedbackService(
      user_id,
      solution_id,
      rating,
      comment
    );
    handleResponse(res, 201, "Feedback created successfully", feedback);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateFeedback,
  handleGetAllFeedback,
};
