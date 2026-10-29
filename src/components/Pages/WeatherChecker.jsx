import { useState, useEffect } from "react";

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Drizzle: Light",
  61: "Rain: Slight",
  63: "Rain: Moderate",
  65: "Rain: Heavy",
  80: "Rain showers: Slight",
  95: "Thunderstorm",
  99: "Thunderstorm: Heavy hail",
};

const topWorldCities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Dubai",
  "Singapore",
  "Hong Kong",
  "Sydney",
  "Los Angeles",
];

const topIndiaCities = [
  "Agartala",
  "Aizawl",
  "Amaravati",
  "Ahmedabad",
  "Bengaluru",
  "Bhopal",
  "Bhubaneswar",
  "Chandigarh",
  "Chennai",
  "Dehradun",
  "Delhi",
  "Gangtok",
  "Ghaziabad",
  "Guwahati",
  "Hyderabad",
  "Imphal",
  "Indore",
  "Itanagar",
  "Jaipur",
  "Jammu",
  "Kanpur",
  "Kohima",
  "Kolkata",
  "Lucknow",
  "Mumbai",
  "Nagpur",
  "Panaji",
  "Patna",
  "Port Blair",
  "Pune",
  "Raipur",
  "Ranchi",
  "Shillong",
  "Shimla",
  "Srinagar",
  "Surat",
  "Thane",
  "Thiruvananthapuram",
  "Vadodara",
  "Visakhapatnam",
];

const fetchWeatherForCity = async (cityName) => {
  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
    );
    const geoData = await geoRes.json();

    if (geoData.results && geoData.results.length > 0) {
      const { latitude, longitude, name, country } = geoData.results[0];
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      const weatherData = await weatherRes.json();

      return {
        city: name,
        country,
        ...weatherData.current_weather,
      };
    }
  } catch (err) {
    return null;
  }
};

const WeatherChecker = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [worldCitiesWeather, setWorldCitiesWeather] = useState([]);
  const [indiaCitiesWeather, setIndiaCitiesWeather] = useState([]);
  const [loadingTopCities, setLoadingTopCities] = useState(true);

  const [showWorldCities, setShowWorldCities] = useState(true);

  useEffect(() => {
    const fetchAllCitiesWeather = async () => {
      setLoadingTopCities(true);
      const worldPromises = topWorldCities.map(fetchWeatherForCity);
      const indiaPromises = topIndiaCities.map(fetchWeatherForCity);

      const worldResults = await Promise.all(worldPromises);
      const indiaResults = await Promise.all(indiaPromises);

      setWorldCitiesWeather(worldResults.filter(Boolean));
      setIndiaCitiesWeather(indiaResults.filter(Boolean));
      setLoadingTopCities(false);
    };

    fetchAllCitiesWeather();
  }, []);

  const getCoordinates = async (cityName) => {
    setErrorMessage("");
    setWeatherData(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { latitude, longitude, name, country } = data.results[0];
        getWeather(latitude, longitude, name, country);
      } else {
        throw new Error("Location not found");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message || "Location not found");
    }
  };

  const getWeather = async (latitude, longitude, city, country) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      const data = await response.json();
      setWeatherData({ ...data.current_weather, city, country });
    } catch (error) {
      setErrorMessage("Weather data not available");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      getCoordinates(city);
    } else {
      setErrorMessage("Please enter a city name");
    }
  };

  const handleCitySuggestion = (cityName) => {
    setCity(cityName);
    getCoordinates(cityName);
  };

  return (
    <section
      className="section is-medium"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-11-tablet is-10-desktop is-9-widescreen">
            {/* Main Container Card */}
            <div
              className="box p-5 p-6-tablet"
              style={{
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* Header */}
              <div className="has-text-centered mb-5">
                <span className="icon is-large has-text-info mb-2">
                  <i className="fas fa-cloud-sun fa-2x"></i>
                </span>
                <h1
                  className="title is-2 has-text-weight-bold"
                  style={{ color: "#2c3e50" }}
                >
                  Weather Dashboard
                </h1>
                <p className="subtitle is-6 has-text-grey">
                  Real-time global & regional weather insights
                </p>
              </div>

              {/* Search Bar Section */}
              <div className="columns is-centered mb-5">
                <div className="column is-8-tablet is-7-desktop">
                  <div className="field has-addons">
                    <div className="control has-icons-left is-expanded">
                      <input
                        className="input is-medium is-rounded"
                        type="text"
                        placeholder="Search any city (e.g., Tokyo, London)..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      />
                      <span className="icon is-left is-medium">
                        <i className="fas fa-search has-text-grey-light"></i>
                      </span>
                    </div>
                    <div className="control">
                      <button
                        className={`button is-info is-medium is-rounded has-text-weight-semibold px-5 ${loading ? "is-loading" : ""}`}
                        onClick={handleSearch}
                        disabled={loading}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div
                  className="notification is-danger is-light has-text-centered py-3 mb-5"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fas fa-exclamation-circle mr-2"></i>{" "}
                  {errorMessage}
                </div>
              )}

              {/* Searched Weather Result with Highlight Effect */}
              {weatherData && !loading && (
                <div
                  className="box mb-6 p-5"
                  style={{
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #209cee 0%, #00d1b2 100%)",
                    color: "white",
                    boxShadow: "0 12px 28px rgba(32, 156, 238, 0.25)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    maxWidth: "450px",
                    margin: "0 auto 2rem auto",
                  }}
                >
                  <div className="has-text-centered mb-3">
                    <h3 className="title is-4 has-text-white mb-1">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {weatherData.city}, {weatherData.country}
                    </h3>
                    <div className="is-flex is-align-items-center is-justify-content-center my-3">
                      <span
                        className="icon is-large has-text-warning mr-3"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        <i className="fas fa-temperature-high fa-3x"></i>
                      </span>
                      <span
                        className="has-text-weight-bold has-text-white"
                        style={{
                          fontSize: "3rem",
                          textShadow: "0 2px 4px rgba(0,0,0,0.15)",
                        }}
                      >
                        {weatherData.temperature}°C
                      </span>
                    </div>
                    <span className="tag is-white is-medium is-rounded has-text-weight-semibold has-text-info">
                      <i className="fas fa-cloud mr-1"></i>{" "}
                      {weatherDescriptions[weatherData.weathercode] ||
                        "Unknown Condition"}
                    </span>
                  </div>
                  <div
                    className="level is-mobile mt-4 pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading has-text-white-ter">Wind Speed</p>
                        <p className="title is-6 has-text-weight-semibold has-text-white">
                          <i className="fas fa-wind mr-1"></i>{" "}
                          {weatherData.windspeed} km/h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Toggle Buttons for Cities */}
              <div className="has-text-centered mb-4">
                <div className="buttons is-centered">
                  <button
                    className={`button is-rounded is-medium ${showWorldCities ? "is-info has-text-weight-bold" : "is-light"}`}
                    onClick={() => setShowWorldCities(true)}
                  >
                    <span className="icon">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span>Top World Cities</span>
                  </button>
                  <button
                    className={`button is-rounded is-medium ${!showWorldCities ? "is-primary has-text-weight-bold" : "is-light"}`}
                    onClick={() => setShowWorldCities(false)}
                  >
                    <span className="icon">
                      <i className="fas fa-landmark"></i>
                    </span>
                    <span>Top Indian Cities</span>
                  </button>
                </div>
              </div>

              {/* City Weather Cards Grid */}
              <div className="mb-4">
                <h2 className="title is-5 has-text-grey-dark mb-4 has-text-centered">
                  {showWorldCities
                    ? "🌎 Popular Cities Worldwide"
                    : "🇮🇳 Popular Cities in India"}
                </h2>

                {loadingTopCities ? (
                  <div className="has-text-centered py-6">
                    <button
                      className="button is-white is-loading is-large"
                      style={{ border: "none" }}
                    ></button>
                  </div>
                ) : (
                  <div className="columns is-multiline">
                    {(showWorldCities
                      ? worldCitiesWeather
                      : indiaCitiesWeather
                    ).map((data) => (
                      <div
                        className="column is-one-third-tablet is-one-quarter-desktop"
                        key={data.city}
                      >
                        <div
                          className="box p-4 h-100 is-clickable"
                          onClick={() => handleCitySuggestion(data.city)}
                          style={{
                            borderRadius: "12px",
                            background: "#ffffff",
                            transition: "all 0.2s ease-in-out",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-4px)";
                            e.currentTarget.style.boxShadow =
                              "0 10px 20px rgba(0,0,0,0.08)";
                            e.currentTarget.style.borderColor = "#209cee";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 12px rgba(0, 0, 0, 0.04)";
                            e.currentTarget.style.borderColor = "#e2e8f0";
                          }}
                        >
                          <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
                            <strong className="is-size-6 has-text-dark">
                              {data.city}
                            </strong>
                            <span className="tag is-light is-small">
                              {data.country}
                            </span>
                          </div>
                          <div className="is-flex is-align-items-center my-2">
                            <span className="icon has-text-warning mr-1">
                              <i className="fas fa-thermometer-half"></i>
                            </span>
                            <span className="is-size-5 has-text-weight-bold">
                              {data.temperature}°C
                            </span>
                          </div>
                          <div className="is-size-7 has-text-grey mb-1">
                            <i className="fas fa-cloud has-text-info mr-1"></i>{" "}
                            {weatherDescriptions[data.weathercode] || "Unknown"}
                          </div>
                          <div className="is-size-7 has-text-grey">
                            <i className="fas fa-wind mr-1"></i>{" "}
                            {data.windspeed} km/h
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Attribution */}
              <div
                className="has-text-centered mt-6 pt-4"
                style={{ borderTop: "1px solid #f1f1f1" }}
              >
                <p className="is-size-7 has-text-grey">
                  Powered by{" "}
                  <a
                    href="https://open-meteo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="has-text-info has-text-weight-semibold"
                  >
                    Open-Meteo API
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherChecker;