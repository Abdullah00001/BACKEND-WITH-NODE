const User = require("../models/user");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, userPassword } = req.body;
    const existingUser = await User.findOne({ email: email });
    const existingUserName = await User.findOne({ userName: userName });
    if (existingUser) {
      return res.status(400).send({ message: "this user already exist" });
    } else if (existingUserName) {
      return res.status(400).send({ message: "this user name already exist" });
    }
    const password = await bcrypt.hash(userPassword, 10);
    const newUser = new User({
      userName,
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();
    return res.status(201).send({ message: "account created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "server error" });
  }
};

module.exports = signupUser;
