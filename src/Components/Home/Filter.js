import React from "react";

const Filter = ({ handleSearch, handleRegion }) => {
  return (
    <div className="filter">
      <form className="nosubmit">
        <input
          className="nosubmit"
          type="search"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
      </form>
      <select
        name="region"
        id="region"
        className="dropDown"
        onChange={(e) => handleRegion(e.target.value)}
      >
        <option value="Filter by region" disabled>
          Filter by region
        </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
