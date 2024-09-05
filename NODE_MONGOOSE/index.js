const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const env = process.env;
const port = env.PORT || 8000;

/* ==========================================
-------------------MODELS---------------------
==============================================*/

const UserModel = require("./models/UserModel");

/* ============================================
---------------------MIDDLEWARE----------------
===============================================*/

app.use(cors());
app.use(express.json());

/* ============================================
-------------DATABASE CONNECTION----------------
===============================================*/
const clusterName = env.CLUSTER_USERNAME;
const clusterPassword = env.CLUSTER_PASSWORD;
const dbName = env.DB_NAME;

const databaseConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${clusterName}:${clusterPassword}@backend.bmcqp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log(`Database Connected Successful ${connection.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};
databaseConnection();

/* =========================================
--------------------ROUTES------------------
============================================*/

app.get("/", (req, res) => {
  res.send("Its Root Path");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new UserModel({ username, email, password });
    await newUser.save();
    res.send({ message: newUser });
  } catch (error) {
    console.error(error);
    res.send({ message: error.message });
  }
});

/* ===========================================
--------------------SERVER--------------------
==============================================*/

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
