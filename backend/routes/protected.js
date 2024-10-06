// routes/protected.js
const express = require('express');
const verifyToken = require('../middleware/authMiddleware'); // Ensure correct path
const router = express.Router();

router.get('/profile', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Welcome to your profile', userId: req.user.id });
});

module.exports = router;
