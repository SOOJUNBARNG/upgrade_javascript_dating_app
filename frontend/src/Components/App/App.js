// src/components/App/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';  // Import Login component from its directory
import Home from '../Home/Home';    // Import Home component from its directory
import logo_img from '../../Asset/logo/logo_img.svg'; // Import your logo image
import logo_txt from '../../Asset/logo/logo_text.svg'; // Import your logo image
import './App.css';  // Component-specific styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo_img} alt="Logo_img" className="logo_img" />
            <img src={logo_txt} alt="Logo_txt" className="logo_txt" />
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
