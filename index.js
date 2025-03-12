const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes - only import existing routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const momentRoutes = require("./routes/momentRoutes");
const voiceRoomRoutes = require("./routes/voiceRoomRoutes");
const translateRoutes = require("./routes/translateRoutes");

// Initialize App
dotenv.config(); // to use .env variables 
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/moments", momentRoutes);
app.use("/api/voiceRooms", voiceRoomRoutes);
app.use("/api/translate", translateRoutes);

// Root Endpoint
app.get("/", (req, res) => {
    res.status(200).json({ message: "Language Exchange API is running!" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});