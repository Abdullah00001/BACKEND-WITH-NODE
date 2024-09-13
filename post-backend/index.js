const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const posts = require("./db.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send({ root: "/" });
});

app.get("/Posts", (req, res) => {
  res.send(posts);
});

app.get("/Posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const requestedPost = posts.find((post) => post.id === postId) || {};
  res.send(requestedPost);
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
