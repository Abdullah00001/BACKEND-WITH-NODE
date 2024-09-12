import { User } from '../models/user.models.js';
import bcrypt from 'bcrypt';
export const signupController = async (req, res) => {
  /* 
  =>check the email is the email of user already exist or not if not than proceed else throw error
  =>hash the password using bcrypt
  =>create access token &refresh token 
  =>than create a new user in db and save the all information
  =>set the access & refresh token in cookies
  =>send the response to user
  */
  try {
    const { firstName, lastName, email, password } = req.body;
    const isUser =await User.findOne({email});
    if (isUser) {
      return res.status(400).json({ message: 'User With This Email Already Exist' });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({ message: 'User Created Successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
