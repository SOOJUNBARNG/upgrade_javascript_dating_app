const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Adjust path as necessary

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Export the router
module.exports = router; 
