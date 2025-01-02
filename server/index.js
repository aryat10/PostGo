const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User"); // Import User model
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://PostForge:PostForge4321@cluster0.s3zcr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB🍀"))
  .catch((err) => console.error("Failed to connect to MongoDB:❌", err));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    const userDoc = await User.create({ username, password });
    res.status(201).json(userDoc);
  } catch (err) {
    console.error("Error registering user:", err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Username already exists" });
    }
    return res.status(500).json({ error: "Failed to register user" });
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000🎉");
});
