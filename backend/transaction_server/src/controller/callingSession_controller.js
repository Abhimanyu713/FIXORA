const {
  getAllCallingSessionService,
  createCallingSessionService,
} = require("../models/callingSesion_Model");

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

const getAllCallingSession = async (req, res, next) => {
  try {
    const users = await getAllCallingSessionService();
    handleResponse(res, 200, "Users fetched Successfully", users);
  } catch (error) {
    next(error);
  }
};

const createCallingSession = async (req, res, next) => {
  const { caller_id, callee_id, started_at, ended_at, coin_used } = req.body;
  try {
    const callingSession = await createCallingSessionService(
      caller_id,
      callee_id,
      started_at,
      ended_at,
      coin_used
    );
    handleResponse(res, 201, "calling session created", callingSession);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll: getAllCallingSession, createCallingSession };
