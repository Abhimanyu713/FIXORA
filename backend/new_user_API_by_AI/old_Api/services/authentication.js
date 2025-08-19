const JWT = require("jsonwebtoken");
const secretKey = "kkjdfoigjer324i32-0";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
  };
  const token = JWT.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}

module.exports = {
  createTokenForUser,
};
