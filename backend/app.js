// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const socketIo = require('socket.io');
const http = require('http');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Create HTTP server for Socket.io integration
const server = http.createServer(app);
const io = socketIo(server);

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests (for development)
app.use(bodyParser.json()); // Parse JSON requests

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Dating App API');
});

// Import Routes
const userRoutes = require('./routes/user'); // Example for user routes
const authRoutes = require('./routes/auth'); // Example for authentication routes

// Use Routes
app.use('/api/users', userRoutes); // For user-related requests
app.use('/api/auth', authRoutes); // For authentication-related requests

// Socket.io Setup (Real-time messaging example)
io.on('connection', (socket) => {
  console.log('New user connected: ', socket.id);

  // Handle messaging event
  socket.on('sendMessage', (data) => {
    io.emit('receiveMessage', data); // Emit message to all connected users
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Handle 404 (Not Found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'API route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Set port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
