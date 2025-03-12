const mongoose = require("mongoose");

const VoiceRoomSchema = new mongoose.Schema({
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    topic: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("VoiceRoom", VoiceRoomSchema);
