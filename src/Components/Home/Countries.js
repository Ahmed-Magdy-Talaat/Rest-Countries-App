import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Countries = ({
  searchValue,
  selectedRegion,
  handleSearchVal,
  handleRegionVal,
  countries,
}) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const filteredCountries = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedRegion === "All" || country.region === selectedRegion)
    );
    setFilteredCountries(filteredCountries);
  }, [countries, searchValue, selectedRegion, setFilteredCountries]);

  const navigate = useNavigate();

  return (
    <section>
      <Filter handleSearch={handleSearchVal} handleRegion={handleRegionVal} />
      <div className="grid">
        {filteredCountries.map((country, index) => {
          // Swap country and index
          const { name, population, region, capital, flags } = country;

          return (
            <div
              key={index}
              className="card"
              onClick={() => {
                navigate(`/Country/${name.common}`);
              }}
            >
              <div className="img-div">
                <img src={flags.png} alt={name.common} />
              </div>
              <div className="details">
                <h3 className="country-name">{name.common}</h3>
                <hr />
                <div>
                  Population: <span>{population}</span>
                </div>
                <hr />
                <div>
                  Region: <span>{region}</span>
                </div>
                <hr />
                <div className="div-with-line"></div>
                <div>
                  Capital: <span>{capital}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Countries;
