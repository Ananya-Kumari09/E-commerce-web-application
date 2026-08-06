const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

   const user = await User.create({
  name,
  email,
  password,
  role: email === "admin@gmail.com" ? "admin" : "user",
});

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Login User

exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found"
      });

    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({

      success: true,
      message: "Login Successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
// Get All Users

exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};