const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./models/User");
const Post = require("./models/Post");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

// Serve static files (for uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve frontend build files
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

mongoose
  .connect(
    "mongodb+srv://PostForge:PostForge4321@cluster0.s3zcr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB🍀"))
  .catch((err) => console.error("Failed to connect to MongoDB:❌", err));

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
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
    const userDoc = await User.findOne({ username });

    if (!userDoc) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, userDoc.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: userDoc._id, username: userDoc.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ error: "Failed to login" });
  }
});

app.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "Profile fetched successfully", user });
  } catch (err) {
    console.error("Error fetching profile:", err);
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.post("/create", verifyToken, (req, res) => {
  res
    .status(200)
    .json({ message: "Post created successfully", user: req.user });
});

app.post("/create-post", verifyToken, upload.single("image"), async (req, res) => {
  const { heading, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  if (!heading || !content) {
    return res.status(400).json({ error: "Heading and content are required" });
  }

  try {
    const newPost = new Post({
      title: heading,
      content,
      image,
      userId: req.user.id,
    });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "username")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.get("/posts/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId })
      .populate("userId", "username")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching user posts:", err);
    res.status(500).json({ error: "Failed to fetch user posts" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000🎉");
});
