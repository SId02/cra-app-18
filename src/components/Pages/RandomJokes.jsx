import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RandomJokes = () => {
  const [joke, setJoke] = useState('Loading a hilarious joke...');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateJoke = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://icanhazdadjoke.com', {
        headers: {
          'Accept': 'application/json'
        }
      });

      setJoke(response.data.joke);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch joke. Please try again.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <>
   
    <section className="section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Random Jokes</h1>
      </div>
      
      <div className="container pt-6 has-text-centered">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-12">
            <article 
              className={`tile is-child box ${
                isLoading ? 'has-background-grey-light' : 
                error ? 'has-background-danger-light' : 
                'has-background-grey-lighter'
              }`}
            >
              <p className="joke">
                {error ? error : joke}
              </p>
            </article>
          </div>
        </div>

        <button 
          className={`button is-rounded mt-4 ${
            isLoading ? 'is-loading' : ''
          }`}
          onClick={generateJoke}
          disabled={isLoading}
        >
          Get Next Joke &gt;
        </button>
      </div>
      </section>
      <footer className="footer">
              <div className="content has-text-centered">
                <Link to="/" className="has-text-link">
                  Back to Home
                </Link>
              </div>
            </footer>
      </>
  );
};

export default RandomJokes;