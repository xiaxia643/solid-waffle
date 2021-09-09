import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-profile">
        <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="fcc logo" />
        <div className="app-myname">
          <a
            href="https://xiaxia643.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            @XiaXia
          </a>
        </div>
      </div>
      <span className="app-title">My FreeCodeCamp's Projects</span>
      <a
          className="app-link"
          href="/solid-waffle/pages/randomQuoteMachine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + '/quotes.png'} alt="fcc logo" width="20px" />
          <span>Random Quote Machine</span>
        </a>

    </div>
  );
}

export default App;
