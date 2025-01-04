const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, min: 4 },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Optional: You can also include an email for your users
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }] // Reference to the posts created by this user
}, { timestamps: true });

const UserModel = model("User", userSchema);

module.exports = UserModel;
