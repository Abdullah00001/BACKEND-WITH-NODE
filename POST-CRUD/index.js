const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@backend.bmcqp.mongodb.net/?retryWrites=true&w=majority&appName=BACKEND`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("POST-DB");
    const postCollection = database.collection("post");
    const userCollection = database.collection("users");

    app.get("/", (req, res) => {
      res.send("This Is Root");
    });

    app.post("/post", async (req, res) => {
      const data = req.body;
      const saveData = await postCollection.insertOne(data);
      res.send(saveData);
    });

    app.get("/post", async (req, res) => {
      const data = await postCollection.find({}).toArray();
      res.send(data);
    });

    app.get("/post/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const data = await postCollection.findOne(query);
      res.send(data);
    });

    app.put("/post/edit/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const post = req.body;
      const option = { upsert: true };
      const updateDoc = {
        $set: {
          title: post.title,
          blog_content: post.blog_content,
        },
      };
      const reqUpdate = await postCollection.updateOne(
        query,
        updateDoc,
        option
      );
      res.send(reqUpdate);
    });

    app.delete("/post/remove/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const data = await postCollection.deleteOne(query);
      res.send(data);
    });

    app.post("/login", async (req, res) => {
      const userData = req.body;
      const user = await userCollection.findOne({
        email: userData.email,
        password: userData.password,
      });
      console.log(user);
      if (user) {
        res.send({
          code: 302,
          message: "user login successfully",
          userData: { email: user.email },
        });
      } else {
        res.send({ code: 301, message: "user not exist" });
      }
    });
    app.post("/register", async (req, res) => {
      const userData = req.body;
      const newUser = await userCollection.insertOne(userData);
      console.log(newUser);
      if (newUser.acknowledged == true) {
        res.send({ code: 303, message: "user created successfully" });
      } else {
        res.send({ code: 301, message: "user already exist" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    /* await client.close(); */
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server Running On ${port}`);
});
