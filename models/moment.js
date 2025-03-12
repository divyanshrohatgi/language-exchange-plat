const mongoose = require("mongoose");

const MomentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    image: { type: String, default: "" }, // Post Image (if any)
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Moment", MomentSchema);
