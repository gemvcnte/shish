const { Admin } = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await Admin.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    req.user = user; // Attach user object to request for future use
    next(); // Call the next middleware
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
