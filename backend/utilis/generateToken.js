import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // providing user id as payload data

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  }); // seconed argument is secret key, third argument is expirey days
};

export default generateToken;

// we will export this into userController
