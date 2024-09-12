const express = require("express");
const dbConnect = require("./utils/databaseConnection");
require("dotenv").config();
const cors = require("cors");
const blogCreateController = require("./controllers/blogCreateController");
const blogCreateMiddleware = require("./middlewares/blogCreateMiddleware");
const blogUpdateController = require("./controllers/blogUpdateController");
const blogsGetController = require("./controllers/blogsGetController");
const blogsDetailsController = require("./controllers/blogsDetailsController");
const blogDeleteController = require("./controllers/blogDeleteController");
const blogEditController = require("./controllers/blogEditController");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

dbConnect();

/* ROUTES */
app.post("/create-blog", blogCreateMiddleware, blogCreateController);
app.put("/edit-blog", blogUpdateController);
app.get("/blogs", blogsGetController);
app.get("/blog-details/:id", blogsDetailsController);
app.delete("/blog-remove/:id", blogDeleteController);
app.put("/blog-edit/:id", blogCreateMiddleware, blogEditController);

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
