import { useState } from 'react';

const NumberAnalyzer = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [analysisResults, setAnalysisResults] = useState({});
  const [error, setError] = useState('');

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const factorial = (num) => {
    if (num < 0) return 'undefined';
    return num === 0 ? 1 : num * factorial(num - 1);
  };

  const handleAnalyzeNumber = () => {
    setError('');
    const num = parseInt(inputNumber);

    if (isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }
    const results = {
      isPrime: isPrime(num),
      isEven: num % 2 === 0,
      factorial: factorial(num),
      isPositive: num >= 0,
    };

    setAnalysisResults(results);
  };

  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Number Analyzer</h1>
        
        <div className="columns is-centered">
          <div className="column is-half">
            {error && (
              <div className="notification is-danger mb-4">
                {error}
              </div>
            )}
            
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter a number"
                  value={inputNumber}
                  onChange={(e) => setInputNumber(e.target.value)}
                />
              </div>
            </div>
            
            <div className="field">
              <button
                className="button is-primary"
                onClick={handleAnalyzeNumber}
              >
                ANALYZE
              </button>
            </div>

            {Object.keys(analysisResults).length > 0 && (    <section className="section">
  <div className="container">
    <div className="columns is-multiline is-centered is-mobile">
      {/* Is Prime Result */}
      <div className="column is-4-tablet is-6-mobile">
        <div
          className="box has-background-white-ter is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          style={{minHeight: '150px'}}
        >
          <h3 className="title is-5 mb-2">Prime Number</h3>
          <p className="subtitle is-3 has-text-weight-bold">
            {analysisResults.isPrime ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      {/* Is Even Result */}
      <div className="column is-4-tablet is-6-mobile">
        <div
          className="box has-background-white-ter is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          style={{minHeight: '150px'}}
        >
          <h3 className="title is-5 mb-2">Even Number</h3>
          <p className="subtitle is-3 has-text-weight-bold">
            {analysisResults.isEven ? 'Yes' : 'No'}
          </p>
        </div>
      </div>

      {/* Factorial Result */}
      <div className="column is-4-tablet is-6-mobile">
        <div
          className="box has-background-white-ter is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          style={{minHeight: '150px'}}
        >
          <h3 className="title is-5 mb-2">Factorial</h3>
          <p className="subtitle is-3 has-text-weight-bold">
            {analysisResults.factorial}
          </p>
        </div>
      </div>

      {/* Positive Number Result */}
      <div className="column is-4-tablet is-6-mobile">
        <div
          className="box has-background-white-ter is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          style={{minHeight: '150px'}}
        >
          <h3 className="title is-5 mb-2">Positive Number</h3>
          <p className="subtitle is-3 has-text-weight-bold">
            {analysisResults.isPositive ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberAnalyzer;