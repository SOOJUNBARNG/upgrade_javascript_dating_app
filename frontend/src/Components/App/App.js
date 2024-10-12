// src/components/App/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';  // Import Login component from its directory
import Home from '../Home/Home';    // Import Home component from its directory
import './App.css';  // Component-specific styles

// Check
// const App = () => {
//   return (
//     <div>
//       <h1>App is working!</h1>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
