const express = require("express");
const bcrypt = require("bcryptjs");
const users = express.Router();

const {
  getOneUser,
  getOneUserByEmail,
  createUser,
} = require("../queries/users.js");

const postsController = require("../controllers/postsController.js")

users.use("/:userId/posts", postsController)

const { checkName } = require("../validations/checkUser.js")
const PRIVATE_KEY = process.env.PRIVATE_KEY;


// LOGIN ROUTE
users.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getOneUserByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json(user);
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// SIGN UP ROUTE
users.post("/", checkName, async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await createUser({
      ...userData,
      password: hashedPassword,
    });
    res.json(createdUser);
  } catch (error) {
    res.status(500).json({ error: "Error Creating User" });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await getOneUser(id);
  if (oneUser) {
    res.json(oneUser);
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
});

module.exports = users;
