const express = require("express");
const users = require("./user.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world its Abdullah");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user_id = parseInt(req.params.id);
  console.log(user_id);
  const requested_user = users.find((user) => user.id === user_id) || {};
  console.log(requested_user);
  res.send(requested_user);
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
