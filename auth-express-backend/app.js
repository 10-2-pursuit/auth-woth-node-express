const express = require("express");
const cors = require("cors");
const app = express();
const usersController = require("./controllers/usersController");
const postsController = require("./controllers/postsController")
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/posts", postsController)

app.get("/", (req, res) => {
  res.send("welcome to Authentication with Node and Express");
}
);

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
