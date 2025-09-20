const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { generateToken };
