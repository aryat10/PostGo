const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    // Simulate successful registration
    console.log("New user registered:", { username, password });
    res.status(200).send("Registration successful");
});

// Start the server
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
