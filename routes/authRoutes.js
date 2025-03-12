const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
    registerUser,
    loginUser,
    logoutUser,
    getAccountDetails,
    updateProfile,
    deleteAccount,
} = require("../controllers/authController");

const router = express.Router();

// Authentication Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Protected Routes (Require Authentication)
router.get("/me", protect, getAccountDetails);
router.put("/update", protect, updateProfile);
router.delete("/delete", protect, deleteAccount);

module.exports = router;
