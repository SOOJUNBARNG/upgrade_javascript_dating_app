const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET /services
router.get('/', serviceController.getServices);

module.exports = router;
