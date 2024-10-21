// src/components/App/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';  // Import Login component from its directory
import Home from '../Home/Home';    // Import Home component from its directory
import Personal_fortune_telling from '../Personal_fortune_telling/Personal_fortune_telling'; 
import Couple_fortune_telling from '../Couple_fortune_telling/Couple_fortune_telling'; 
import Matching_service from '../Matching_service/Matching_service';    // Import Home component from its directory
import Inquiry from '../Home/Home';    // Import Home component from its directory
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
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/personal_fortune_telling">個人占い</Link>
            <Link to="/couple_fortune_telling">カップル占い</Link>
            <Link to="/matching_service">マッチング</Link>
            <Link to="/inquiry">Inquiry</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personal_fortune_telling" element={<Personal_fortune_telling />} />
          <Route path="/couple_fortune_telling" element={<Couple_fortune_telling />} />
          <Route path="/matching_service" element={<Matching_service />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
