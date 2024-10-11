import logo_img from './logo_img.svg';
import logo_text from './logo_text.svg';
import './App.css';
import React, { useRef } from 'react';
import Login from './Login';
import ReactToPrint from 'react-to-print';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_img} className="logo-img" alt="logo-img" />
        <img src={logo_text} className="logo-text" alt="logo-text" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Login />
    </div>
  );
};

export default App;
