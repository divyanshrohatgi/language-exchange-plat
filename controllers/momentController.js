const Moment = require("../models/moment");

// Create a new post
const createMoment = async (req, res) => {
    try {
        const moment = new Moment({ user: req.user.id, text: req.body.text });
        await moment.save();
        res.json(moment);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Like a post
const likeMoment = async (req, res) => {
    try {
        const moment = await Moment.findById(req.params.id);
        if (!moment) return res.status(404).json({ message: "Post not found" });

        if (!moment.likes.includes(req.user.id)) {
            moment.likes.push(req.user.id);
            await moment.save();
        }

        res.json(moment);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { createMoment, likeMoment };
