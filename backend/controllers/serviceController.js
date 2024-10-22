const Service = require('../models/Service');

// Get services filtered by distance
exports.getServices = async (req, res) => {
  try {
    const maxDistance = parseInt(req.query.distance) || 100; // Get 'distance' from query params
    const filteredServices = await Service.find({ distance: { $lte: maxDistance } });
    res.json(filteredServices);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
