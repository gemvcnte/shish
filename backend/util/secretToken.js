const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
