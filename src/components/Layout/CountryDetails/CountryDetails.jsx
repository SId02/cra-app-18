import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(
        (country) => country.name.common === selectedCountry
      );
      setCountryData(country);
    } else {
      setCountryData({});
    }
  }, [selectedCountry, countries]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (

    <>
      
      <section className="py-6 section">
				<div className="container pb-5 has-text-centered">
					<h1 className="title"> Country Details</h1>
				</div>
      <div className="container is-half">
			<div className="columns is-centered is-multiline is-desktop">
				<div className="column is-6  is-half is-offset-one-quarter m-5">
					<div className="select is-link">
						<select className={selectedCountry} onChange={handleCountryChange}>
							<option className="">Select a country...</option>
                            {countries.map((country) => (
                                <option key={country.name.common} value={country.name.common}>
                                  {country.name.common}
                                </option>
                              ))}
						</select>
					</div>
                    {Object.keys(countryData).length > 0 && (
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
    
                                 <h2>{ countryData.name.common }</h2>
                                    <br/> <br/> <hr/>
                                  <p>Capital: {countryData.capital}</p>
                                  <p>Region: {countryData.region}</p>
                                  <p>Population: {countryData.population}</p>
                                  {Array.isArray(countryData.languages) && (
                                    <p>
                                      Languages:
                                      {countryData.languages.map((lang) => lang.name).join(', ')}
                                    </p>
                                  )}
                                </div>
                            </div>
                        </div>
                        )}
				</div>
			</div>

		</div>

    </section>
    </>
   
  );
};

export default CountryDetails;



