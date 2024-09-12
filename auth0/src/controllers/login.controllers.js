import { User } from '../models/user.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExistUser = await User.findOne({ email });
    if (!isExistUser) {
      return res
        .status(404)
        .json({ message: 'User With This Email Not Found' });
    }
    const checkPass = await bcrypt.compare(password, isExistUser.password);
    if (!checkPass) {
      return res.status(401).json({ message: 'Password Is Incorrect' });
    }
    const accessToken = jwt.sign(
      { id: isExistUser._id },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: '15min' }
    );
    const refreshToken = jwt.sign(
      { id: isExistUser._id },
      process.env.REFRESH_TOKEN_SECRET_KEY,
      { expiresIn: '7d' }
    );
    isExistUser.refreshToken = refreshToken;
    await isExistUser.save()
    const option = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie('accesstoken', accessToken, option)
      .cookie('refreshtoken', refreshToken, option)
      .json({ message: 'user login successful',userID: isExistUser._id});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
