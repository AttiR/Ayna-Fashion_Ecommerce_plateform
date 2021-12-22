import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'attirehman388@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Ayna R',
    email: 'ayna@example.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'Kinza A',
    email: 'kim@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
