import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Countries from "./Components/Home/Countries";
import Navbar from "./Components/Home/Navbar";
import CountryPage from "./Components/Home/CountryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const modeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light");
  const [region, setRegion] = useState("All");
  const [search, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);
  const handleSearchValue = (value) => {
    setSearchValue(value); // Update the search state with the new value
  };

  async function getCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);
  const handleRegionValue = (value) => {
    setRegion(value); // Update the region state with the new value
  };

  const toggleMode = () => {
    setMode((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <modeContext.Provider value={{ mode, toggleMode }}>
        <div className="App" id={mode === "dark" ? "dark" : "light"}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Countries
                  searchValue={search}
                  selectedRegion={region}
                  handleSearchVal={handleSearchValue}
                  handleRegionVal={handleRegionValue}
                  countries={countries}
                />
              }
            ></Route>
            <Route
              path="/country/:countryName"
              element={<CountryPage countries={countries} />}
            />
          </Routes>
        </div>
      </modeContext.Provider>
    </Router>
  );
}

export default App;
