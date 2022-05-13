const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JWT Server Running");
});

app.post("/login", (req, res) => {
  const user = req.body;
  console.log(user);
  // DANGER: Don't check password here for serious project
  // USE proper process for hashing and checking
  // After completing all authentication and verification, issue JWT token
  if (user.password === "123456") {
  }
  res.send({ success: true });
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
