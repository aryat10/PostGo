const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Import bcrypt
const User = require("./models/User");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userDoc = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Username already exists" });
    }
    return res.status(500).json({ error: "Failed to register user" });
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    // Find the user by username
    const userDoc = await User.findOne({ username });

    // If user not found
    if (!userDoc) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, userDoc.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Successful login
    res.status(200).json({ message: "Login successful", user: userDoc });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Failed to login" });
  }
});


// Start the server
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000🎉");
});
