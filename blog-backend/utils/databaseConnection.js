const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnect;
