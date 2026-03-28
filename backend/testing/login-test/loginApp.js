import express from "express";
import bcrypt from "bcrypt";
import User from "./mongooseDb.js";

const app = express();
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful", email: user.email });
  } catch (err) {
    console.log("Login failed", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default app;