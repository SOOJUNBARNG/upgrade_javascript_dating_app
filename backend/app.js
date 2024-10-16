const express = require('express');
const cors = require('cors'); // Import cors
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // adjust the path if needed
const protectedRoutes = require('./routes/protected'); // Import protected routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming requests with JSON payloads
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // this ensures req.body is populated with parsed data

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes); // Protected routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
