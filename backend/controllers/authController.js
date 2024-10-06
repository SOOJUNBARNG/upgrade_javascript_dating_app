// controllers/authController.js

const User = require('../models/User'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.register = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log request body
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword); // Log hashed password

    // Create a new user
    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    console.log('User registered successfully'); // Log success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in Register:', error); // Log error
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    console.log('Login Request Body:', req.body); // Log request body
    const { username, password } = req.body;
 
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      console.log('Invalid credentials: User not found');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials: Password mismatch');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    console.log('Login successful, Token:', token); // Log token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in Login:', error); // Log error
    res.status(500).json({ message: 'Server error' });
  }
};

