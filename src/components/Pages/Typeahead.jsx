import { useState, useEffect } from "react";
import axios from "axios";


const Typeahead = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      const fetchCountries = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      };
      fetchCountries();
    }
  }, [selectedCountry]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <>
      <div className="container has-text-centered p-5">
				<h3 className="is-size-4"> Typeahead </h3>
			</div>
      <div className="container has-text-centered">
			<div className="typeahead">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type Country Name"
        className="input"
      />

      {selectedCountry && (
        <div className="country-info">
          <h2 className="title is-2">{selectedCountry.name.common}</h2>
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
            className="flag-image"
          />
          <ul>
            <li>
              <strong>Population:</strong> {selectedCountry.population.toLocaleString()}
            </li>
            <li>
              <strong>Region:</strong> {selectedCountry.region}
            </li>
            <li>
              <strong>Capital:</strong> {selectedCountry.capital}
            </li>
          </ul>
        </div>
      )}

      {countries.length > 0 && (
        <ul className="country-list">
          {countries
           .filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
           .map((country) => (
              <li
                key={country.cca3}
                onClick={() => handleSelect(country)}
                className={`country-item ${selectedCountry && selectedCountry.cca3 === country.cca3? "is-active" : ""}`}
              >
                {country.name.common}
              </li>
            ))}
        </ul>
      )}
    </div>
			</div>


      
    </>
  )
}

export default Typeahead;