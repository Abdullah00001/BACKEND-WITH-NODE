const mongoose = require("mongoose");

const database = async () => {
  try {
    const dbconnection = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERPASSWORD}@backend.bmcqp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = database;
