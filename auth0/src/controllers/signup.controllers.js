export const signupController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  /* 
  =>check the email is the email of user already exist or not if not than proceed else throw error
  =>hash the password using bcrypt
  =>create access token &refresh token 
  =>than create a new user in db and save the all information
  =>set the access & refresh token in cookies
  =>send the response to user
  */
};
