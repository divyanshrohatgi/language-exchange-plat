const Chat = require("../models/chat");
const Message = require("../models/message");

// Start a new chat
const createChat = async (req, res) => {
    const { participantId } = req.body;

    try {
        let chat = await Chat.findOne({ participants: { $all: [req.user.id, participantId] } });

        if (!chat) {
            chat = new Chat({ participants: [req.user.id, participantId] });
            await chat.save();
        }

        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Send Message
const sendMessage = async (req, res) => {
    const { chatId, text } = req.body;

    try {
        const message = new Message({ chatId, sender: req.user.id, text });
        await message.save();

        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { createChat, sendMessage };
