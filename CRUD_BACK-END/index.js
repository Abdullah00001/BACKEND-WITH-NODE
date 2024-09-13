const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@stellarstorage.9uori.mongodb.net/?retryWrites=true&w=majority&appName=StellarStorage`;
// mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@stellarstorage.9uori.mongodb.net/?retryWrites=true&w=majority&appName=StellarStorage

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

    const userCollection = client.db("CRUD_DB").collection("user");
    app.get("/", (req, res) => {
      res.send("This Is Root");
    });

    app.post("/user", async (req, res) => {
      const user = req.body;
      const newUser = await userCollection.insertOne(user);
      res.send(newUser);
    });

    app.get("/user",async (req, res) => {
      const users =await userCollection.find({}).toArray();
      res.send(users);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
