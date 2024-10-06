const User = require('../models/User');

const searchUsers = async (req, res) => {
    try {
        const { query, ageRange, interests } = req.body;
        
        // Set up a basic filter object
        let filter = {};

        // Search by query (e.g., name)
        if (query) {
            filter.name = { $regex: query, $options: 'i' }; // case-insensitive search
        }

        // Filter by age range
        if (ageRange) {
            const [minAge, maxAge] = ageRange.split('-').map(Number);
            filter.age = { $gte: minAge, $lte: maxAge };
        }

        // Filter by interests
        if (interests) {
            const interestsArray = interests.split(',').map(i => i.trim());
            filter.interests = { $in: interestsArray }; // Match any interest
        }

        const users = await User.find(filter); // Query the database

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { searchUsers };
