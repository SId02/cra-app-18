import { useState, useEffect } from 'react';

const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: Light',
    61: 'Rain: Slight',
    63: 'Rain: Moderate',
    65: 'Rain: Heavy',
    80: 'Rain showers: Slight',
    95: 'Thunderstorm',
    99: 'Thunderstorm: Heavy hail',
  };
  
  const topWorldCities = [
    'New York', 'London', 'Tokyo', 'Paris', 'Dubai',
    'Singapore', 'Hong Kong', 'Sydney', 'Los Angeles'
  ];
  
  const topIndiaCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];
  
  const fetchWeatherForCity = async (cityName) => {
    try {
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      if (geoRes.data.results && geoRes.data.results.length > 0) {
        const { latitude, longitude, name, country } = geoRes.data.results[0];
        const weatherRes = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        return {
          city: name,
          country,
          ...weatherRes.data.current_weather
        };
      }
    } catch (err) {
      return null;
    }
  };
const WeatherChecker = () => {
   
    const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
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
    setErrorMessage('');
    setWeatherData(null);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      if (response.data.results && response.data.results.length > 0) {
        const { latitude, longitude, name, country } = response.data.results[0];
        getWeather(latitude, longitude, name, country);
      } else {
        throw new Error('Location not found');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const getWeather = async (latitude, longitude, city, country) => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      setWeatherData({ ...response.data.current_weather, city, country });
    } catch (error) {
      setErrorMessage('Weather data not available');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      getCoordinates(city);
    } else {
      setErrorMessage('Please enter a city name');
    }
  };

  const handleCitySuggestion = (cityName) => {
    setCity(cityName);
    getCoordinates(cityName);
  };
   
    return (
      
      <> <section className="section has-background-link-light min-vh-100">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10-tablet is-8-desktop">
            <div className="box has-shadow">
              <h1 className="title is-2 has-text-link-dark mb-5 has-text-centered">
                Weather App</h1>
              <div className="has-text-centered mb-4">
                <div className="buttons is-centered">
                  <button
                    className={`button is-medium ${showWorldCities ? 'is-info is-selected' : 'is-light'}`}
                    onClick={() => setShowWorldCities(true)}
                  >
                    Top World Cities
                  </button>
                  <button
                    className={`button is-medium ${!showWorldCities ? 'is-primary is-selected' : 'is-light'}`}
                    onClick={() => setShowWorldCities(false)}
                  >
                    Top Indian Cities
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="subtitle is-5 mb-2">
                  {showWorldCities ? 'Top 10 Cities in the World' : 'Top 10 Cities in India'}
                </h2>
                {loadingTopCities ? (
                  <div className="has-text-centered"><button className="button is-white is-loading"></button></div>
                ) : (
                  <div className="columns is-multiline">
                    {(showWorldCities ? worldCitiesWeather : indiaCitiesWeather).map((data) => (
                      <div className="column is-one-quarter" key={data.city}>
                        <div
                          className={`box ${showWorldCities ? 'has-background-info-light' : 'has-background-primary-light'} is-clickable`}
                          onClick={() => handleCitySuggestion(data.city)}
                          style={{ cursor: 'pointer' }}
                        >
                          <strong>{data.city}, {data.country}</strong>
                          <div>
                            <span className="icon has-text-warning"><i className="fas fa-thermometer-half"></i></span>
                            <strong> {data.temperature}°C</strong>
                          </div>
                          <div>
                            <span className="icon has-text-info"><i className="fas fa-cloud"></i></span>
                            {weatherDescriptions[data.weathercode] || 'Unknown'}
                          </div>
                          <div>
                            <span className="icon has-text-grey"><i className="fas fa-wind"></i></span>
                            {data.windspeed} km/h
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="field has-addons is-flex is-justify-content-center mb-4">
                <div className="control has-icons-left is-expanded">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                  <span className="icon is-left is-small">
                    <i className="fas fa-city"></i>
                  </span>
                </div>
                <div className="control">
                  <button
                    className={`button is-info is-medium ${loading ? 'is-loading' : ''}`}
                    onClick={handleSearch}
                    disabled={loading}>  Search
                  </button>
                </div>
              </div>

              {loading && (
                <div className="has-text-centered my-5">
                  <button className="button is-white is-loading is-large" style={{border: 'none'}}></button>
                </div>
              ) }
              
              {weatherData && !loading && (
  <div className="weather-info box has-background-white-ter mt-5" style={{ maxWidth: 400, margin: "0 auto" }}>
    <div className="has-text-centered mb-3">
      <h2 className="title is-3 has-text-link mb-1">{weatherData.city}, {weatherData.country}</h2>
      <p className="is-size-4 has-text-grey-dark mb-2">
        <span className="icon is-large has-text-warning">
          <i className="fas fa-thermometer-half fa-2x"></i>
        </span>
        <span className="ml-2" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          {weatherData.temperature}°C
        </span>
      </p>
      <p className="is-size-5 has-text-info mb-3">
        <span className="icon"><i className="fas fa-cloud"></i></span>
        {weatherDescriptions[weatherData.weathercode] || 'Unknown Condition'}
      </p>
    </div>
    <div className="columns is-mobile is-centered">
      <div className="column is-half has-text-centered">
        <p className="mb-1">
          <span className="icon has-text-grey"><i className="fas fa-wind"></i></span>
          <span className="ml-2">Wind Speed: <strong>{weatherData.windspeed} km/h</strong></span>
        </p>
      </div>
    </div>
  </div>
)}
              {errorMessage && (
                <div className="notification is-danger is-light has-text-centered mt-4">
                  {errorMessage}
                </div>
              )}

              <div className="has-text-centered mt-6">
                <p>
                  Powered by
                  <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
                    Open-Meteo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
  )
}

export default WeatherChecker