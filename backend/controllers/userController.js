import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utilis/generateToken.js';

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
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or password');
  }
})


// User Registration
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {authUser, registerUser, getUserProfile}