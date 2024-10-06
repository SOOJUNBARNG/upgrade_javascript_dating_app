const express = require('express');
const { searchUsers } = require('../controllers/searchController');

const router = express.Router();

router.post('/search', searchUsers);

module.exports = router;
