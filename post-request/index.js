const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database.json");

/* ===========================
        MIDDLEWARES
==============================*/

const cors = require("cors");

app.use(cors());
app.use(express.json());

/* =============================
            API'S
================================*/

app.get("/", (req, res) => {
  res.send(`Its Root Path\n
        All Routes Are Here \n
        \n 1)
        `);
});

app.get("/users", (req, res) => {
  res.send(db);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const requestedUser = db.find((user) => user.id === userId) || {};
  res.send(requestedUser);
});

app.post("/users",(req,res)=>{
    const user=req.body
    user.id=db.length+1
    db.push(user)
    res.send(user)
})

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});