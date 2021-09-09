import React from 'react';
import ReactDOM from 'react-dom';
import './randomQuoteMachine.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return <div className="appquote">
    <div id="quote-box" className="appquote-box">
      OK
    </div>
    <div id="test">Test</div>
    iconmonstr.com
  </div>;
}