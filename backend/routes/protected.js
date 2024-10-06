const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

// A protected route
router.get('/profile', (req, res) => {
    // Get the token from headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming 'Bearer <token>'
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // You can use req.user for user info

        // Protected logic here
        res.status(200).json({ message: 'Welcome to your profile', userId: req.user.id });
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
});

module.exports = router;
