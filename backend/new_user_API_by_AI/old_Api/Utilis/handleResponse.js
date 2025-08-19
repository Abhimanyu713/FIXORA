// A utility function to standardize API responses
// Takes the response object, status code, message, and optional data to send a JSON response
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status, // HTTP status code
    message, // Success or error message
    data, // Data payload (optional)
  });
};

module.exports = handleResponse;
