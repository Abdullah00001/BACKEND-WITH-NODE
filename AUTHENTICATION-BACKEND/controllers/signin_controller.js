const User = require("../models/user");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
  try {
    const { email, userPassword } = req.body;
    if (!email) {
      return res.status(400).send({ message: "email is required" });
    } else if (!userPassword) {
      return res.status(400).send({ message: "password is required" });
    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const isValid = await bcrypt.compare(
          userPassword,
          existingUser.password
        );
        if (isValid) {
          return res.status(200).send({ message: "login successful" });
        } else {
          return res.status(401).send({ message: "incorrect password!" });
        }
      } else {
        return res
          .status(404)
          .send({ message: "user with this email not found" });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "server error" });
  }
};

module.exports = signin;
