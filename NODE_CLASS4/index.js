const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const UserModel = require("./model/userModel");

mongoose
  .connect(
    `mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=BACKEND`
  )
  .then(() => {
    console.log(`Database Connected`);
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const body = `Its Root Path \n All routes start from / (slash)`;
  res.send(body);
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
    await newUser.save();
    res.send(newUser);
  }
);

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
