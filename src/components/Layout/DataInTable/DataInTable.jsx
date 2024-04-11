
// Populate data in table



import React, { useState } from "react";

const CapitalCities = () => {
  const [table, setTable] = useState("");

  const cityListJSON = {
    cities: [
      {
        name: "Hyderabad",
        state: "Telangana",
      },
      {
        name: "Delhi",
        state: "Delhi",
      },
      {
        name: "Bangalore",
        state: "Karnataka",
      },
      {
        name: "Mumbai",
        state: "Maharashtra",
      },
      {
        name: "Chennai",
        state: "Tamil Nadu",
      },
      {
        name: "Thiruvananthapuram",
        state: "Kerala",
      },
    ],
  };

  const buildCitiesList = () => {
    const cities = cityListJSON.cities;
    let mytable = (
      <table className="table is-fullwidth">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr key={city.name}>
              <td>{index + 1}</td>
              <td>{city.name}</td>
              <td>{city.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    setTable(mytable);
  };

  return (
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Populate data in table</h1>
      </div>
      <div className="container pt-5 has-text-centered">
        <div className="container-fluid">
          <main>
            <button className="btn btn-primary" onClick={buildCitiesList}>
              Display Capital Cities
            </button>
            <div id="table" className="p-5">
              {table}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default CapitalCities;