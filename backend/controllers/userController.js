import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';

// in order to handle exceptions insted of try catch, using expressasynchandler

//@desc     Auth User and get token
//@route  POST/api/users/login
//@access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // getting Json data from postman body
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    //matchPassword is a methode from userModel, to cpmare the password with encrypted password
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or password');
  }
});

export { authUser };