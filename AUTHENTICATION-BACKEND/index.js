const express = require("express");
const cors = require("cors");
require("dotenv").config();
const database = require("./utility/database_connect");

const app = express();
const env = process.env;
const port = env.PORT || 8000;

/* =====================
-------MIDDLEWARE-------
========================*/
app.use(express.json());
app.use(cors());

/* =====================
-------CONTROLLERS------
========================*/
const signup = require("./controllers/signup_controller");
const signin = require("./controllers/signin_controller");

/* ====================
--DATABASE CONNECTION--
======================*/
database();

/* =========================================
--------------------ROUTES------------------
============================================*/
app.post("/signup", signup);
app.post("/signin", signin);

/* ===========================================
--------------------SERVER--------------------
==============================================*/

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
