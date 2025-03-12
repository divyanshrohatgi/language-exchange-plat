const VoiceRoom = require("../models/voiceroom");

// Create a voice room
const createVoiceRoom = async (req, res) => {
    try {
        const room = new VoiceRoom({ host: req.user.id, topic: req.body.topic });
        await room.save();
        res.json(room);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Get all active voice rooms
const getAllVoiceRooms = async (req, res) => {
    try {
        const rooms = await VoiceRoom.find({ isActive: true });
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { createVoiceRoom, getAllVoiceRooms };
