import  { useState, useRef } from 'react';
import './Ticker.css';

const Ticker = () => {
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', price: 170.50 },
    { symbol: 'GOOGL', price: 2700.25 },
    { symbol: 'MSFT', price: 285.75 },
    { symbol: 'AMZN', price: 3200.10 },
    { symbol: 'TSLA', price: 850.30 },
    { symbol: 'FB', price: 210.80 },
    { symbol: 'NVDA', price: 250.60 },
    { symbol: 'BABA', price: 120.40 },
    { symbol: 'JPM', price: 155.90 },
    { symbol: 'V', price: 230.15 },
  ]);

  const tickerContainerRef = useRef(null);


  return (
    <>
    <div className="container">
    <div className="stock-ticker-container is-clipped" ref={tickerContainerRef}>
      <div className="stock-ticker-wrapper">
        {stocks.map((stock, index) => (
          <div key={index} className="stock-item">
            <span className="symbol">{stock.symbol}</span>
            <span className="price">${stock.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
        </div>
        
        </div>
    </>
  );
};

export default Ticker;


