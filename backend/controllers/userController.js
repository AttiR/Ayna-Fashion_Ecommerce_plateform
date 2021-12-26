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
//@desc   Register New user
//@route  POST/api/users
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; // getting Json data from postman body
  const userExists = await User.findOne({ email });

  if(userExists){
    res.send(404)
    throw new Error('User Already Exists')
  }
  // password will be hashed through middleware defined in userModel and its automatically saved
  const user = await User.create({

    name,
    email,
    password

  })

  if(user){
    res.status(201).json({

      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)

    })

  }else{
    res.send(400)
    throw new Error('Invalid User Data')
  }

  
})

//@desc    Get User Profile
//@route  POST/api/users/profile
//@access Private

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

export { authUser,  registerUser , getUserProfile};

// Note: user Authentication is carried out via postman and we will do user Authorization using Json Web Token
