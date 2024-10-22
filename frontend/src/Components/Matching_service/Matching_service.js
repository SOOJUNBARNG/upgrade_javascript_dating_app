import React, { useState, useEffect } from 'react';
import './Matching_service.css';  // Home component-specific styles

const Home = () => {
  // State for the selected distance
  const [distance, setDistance] = useState(30); // default distance (50 km for example)

  // State for services fetched from the backend
  const [services, setServices] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    // Replace with your backend API endpoint
    fetch('https://your-backend-api.com/services')
      .then(response => response.json())
      .then(data => {
        setServices(data);  // Update services state with fetched data
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  // Filter data based on the selected distance
  const filteredData = services.filter(service => service.distance <= distance);

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
