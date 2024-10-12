// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App'; // Ensure this path is correct
import './index.css'; // Optional, if you have global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);