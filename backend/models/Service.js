const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  distance: { type: Number, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
