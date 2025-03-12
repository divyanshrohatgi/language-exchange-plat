const User = require("../models/user");

// Get User Profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = req.body.name || user.name;
        user.bio = req.body.bio || user.bio;
        user.occupation = req.body.occupation || user.occupation;
        user.interests = req.body.interests || user.interests;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getUserProfile, updateUserProfile };
