import React, { useState, useEffect } from 'react';
import './App.css';
import ImageBackgroundPage from './ImageBackgroundPage';
import CurrentDate from './CurrentDate';


function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <ImageBackgroundPage>
    <CurrentDate/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light rounded">
            <div className="card-body text-center">
              <h1 className="card-text">{quote.text}</h1>
              <p className="card-text">- {quote.author}</p>
              <button className="btn btn-primary" onClick={fetchRandomQuote}>Get Random Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ImageBackgroundPage>
  );
}

export default App;
