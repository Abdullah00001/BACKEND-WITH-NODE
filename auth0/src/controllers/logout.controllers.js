import { User } from '../models/user.models.js';

export const logoutController = async (req, res) => {
  try {
    const { userID } = req.body;
    const user = await User.findByIdAndUpdate(userID, {
      $set: {
        refreshToken: null,
      },
    });
    const option = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .clearCookie('accesstoken', option)
      .clearCookie('refreshtoken', option)
      .json({ message: 'User Logged Out Successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
