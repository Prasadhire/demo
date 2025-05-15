const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { protect, roleAuth } = require("../middleware/authMiddleware");

// Public route - Login
router.post("/login", loginUser);

// Protected route - Register user (only admin can add users)
router.post("/register", protect, roleAuth(["admin"]), registerUser);

module.exports = router;
