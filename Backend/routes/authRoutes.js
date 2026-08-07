const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

router.get("/users", protect, isAdmin, getAllUsers);
module.exports = router;