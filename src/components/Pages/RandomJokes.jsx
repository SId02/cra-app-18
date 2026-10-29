import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RandomJokes = () => {
  const [joke, setJoke] = useState('Loading a hilarious joke...');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Sync theme with document element
    const checkTheme = () => {
      setDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const generateJoke = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError('Failed to fetch joke. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  const cardBg = darkMode ? "#22252a" : "#ffffff";
  const textColor = darkMode ? "#f1f1f1" : "#363636";
  const subTextColor = darkMode ? "#b5b5b5" : "#4a4a4a";

  return (
    <div style={{ backgroundColor: darkMode ? "#141618" : "#f8f9fa", minHeight: "100vh", paddingTop: "5rem", paddingBottom: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <section className="section">
          <div className="container pb-4 has-text-centered">
            <h1 className="title is-2 has-text-weight-bold" style={{ color: textColor }}>
              😄 Random Dad Jokes
            </h1>
            <p className="subtitle is-6 mt-2" style={{ color: subTextColor }}>
              Fetched via native JavaScript fetch API with Bulma styling
            </p>
          </div>
          
          <div className="container pt-4 has-text-centered" style={{ maxWidth: "700px" }}>
            <div 
              className="box p-6 mb-5"
              style={{
                backgroundColor: cardBg,
                color: textColor,
                borderRadius: "16px",
                boxShadow: darkMode ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.06)",
                border: darkMode ? "1px solid #2a2e35" : "1px solid #eaeaea",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease"
              }}
            >
              <p className="is-size-4 has-text-weight-medium" style={{ lineHeight: "1.6" }}>
                {error ? <span className="has-text-danger">{error}</span> : joke}
              </p>
            </div>

            <button 
              className={`button is-medium is-rounded has-text-weight-bold px-6 ${
                isLoading ? 'is-loading' : ''
              }`}
              onClick={generateJoke}
              disabled={isLoading}
              style={{
                background: "linear-gradient(135deg, #6554fc 0%, #745cfc 50%, #3ff1fd 100%)",
                border: "none",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(116, 92, 252, 0.3)",
                transition: "transform 0.2s ease"
              }}
            >
              Get Next Joke &rarr;
            </button>
          </div>
        </section>
      </div>

      <footer className="footer" style={{ backgroundColor: "transparent", borderTop: darkMode ? "1px solid #2a2e35" : "1px solid #e2e8f0", marginTop: "auto" }}>
        <div className="content has-text-centered">
          <Link to="/" className="has-text-weight-semibold" style={{ color: darkMode ? "#3ff1fd" : "#3273dc" }}>
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default RandomJokes;