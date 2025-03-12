const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Voice Room route is working!");
});

module.exports = router;
