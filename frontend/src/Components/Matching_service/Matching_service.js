import React, { useState } from 'react';
import './Matching_service.css';  // Home component-specific styles

const Home = () => {
  // State for the selected distance
  const [distance, setDistance] = useState(30); // default distance (50 km for example)

  // Sample data (you can replace this with your actual data)
  const sampleData = [
    { id: 1, name: 'Service A', distance: 20 },
    { id: 2, name: 'Service B', distance: 40 },
    { id: 3, name: 'Service C', distance: 60 },
    { id: 4, name: 'Service D', distance: 80 },
  ];

  // Filter data based on the selected distance
  const filteredData = sampleData.filter(service => service.distance <= distance);

  return (
    <div className="home-container">
      <h1>マッチング４８のホームページ</h1>

      {/* Distance Filter Section */}
      <div className="filter-section">
        <label htmlFor="distance-filter">Filter by Distance (km):</label>
        <input
          type="range"
          id="distance-filter"
          min="0"
          max="100" // Adjust max distance as needed
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <span>{distance} km</span>
      </div>

      {/* Display filtered data */}
      <div className="service-list">
        <h2>Filtered Services</h2>
        <ul>
          {filteredData.map(service => (
            <li key={service.id}>
              {service.name} - {service.distance} km away
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
