import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageRange, setAgeRange] = useState([20, 40]);
  const [location, setLocation] = useState('');
  
  const handleSearch = () => {
    onSearch({ searchTerm, ageRange, location });
  };

  return (
    <div className="search-filters">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div>
        <label>Age Range:</label>
        <input
          type="range"
          min="18"
          max="60"
          value={ageRange[0]}
          onChange={(e) => setAgeRange([e.target.value, ageRange[1]])}
        />
        <input
          type="range"
          min="18"
          max="60"
          value={ageRange[1]}
          onChange={(e) => setAgeRange([ageRange[0], e.target.value])}
        />
      </div>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
