import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './randomQuoteMachine.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchQuotes = async () => {
      const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
      const resp = await fetch(url);
      const data = await resp.json();
      setQuotes(data.quotes);
    }
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length !== 0) {
      let i = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[i]);
    }
  }, [quotes]);

  return <div className="appquote">
    <div id="quote-box">
      <div id="text"><img src="iconmonstr-quote-1.svg" alt="left quote" /> {quote.quote}<img src="iconmonstr-quote-3.svg" alt="left quote" /></div>
      <div id="author">-- {quote.author} --</div>
      <div className="appquote-bottom">
        <div className="appquote-bottom-left">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet"><img src="twitter.png" alt="twitter"></img></a>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet"><img src="tumblr.png" alt="twitter"></img></a>
        </div>
        <button id="new-quote">New quote</button>
      </div>
    </div>


    <p>
      iconmonstr.com
    </p>
  </div>;
}