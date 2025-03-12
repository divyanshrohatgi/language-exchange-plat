const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6,},
    profilePic: { type: String, default: "" },
    bio: { type: String, default: "" },
    interests: { type: [String], default: [] },
    occupation: { type: String, default: "" },
    placesToVisit: { type: [String], default: [] },
    languages: [
        {
            name: String, // e.g., "Spanish"
            level: { type: Number, min: 0, max: 5 } // 0 (Beginner) → 5 (Fluent)
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

