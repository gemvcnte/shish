const { Admin } = require("../models/adminSchema");
const { createSecretToken } = require("../util/secretToken");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const adminLogin = expressAsyncHandler(async (req, res, next) => {
  try {
    const { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      return res.json({ message: "All fields are required." });
    }

    const existingAdmin = await Admin.findOne({ emailAddress });
    if (!existingAdmin) {
      return res.json({ message: "Incorrect email or password" });
    }

    const comparePassword = await bcrypt.compare(
      password,
      existingAdmin.password,
    );

    if (!comparePassword) {
      return res.json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(existingAdmin._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "Admin signed in successfully",
      sucess: true,
      existingAdmin,
    });
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error Please try again later." });
  }
});

module.exports = {
  adminLogin,
};
