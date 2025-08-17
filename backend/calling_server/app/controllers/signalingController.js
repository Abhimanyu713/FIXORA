const getStatus = (req, res) => {
    res.status(200).json({ message: "This is a signaling server working properly." });
  };
  
  module.exports = { getStatus };
  