import React, { useEffect, useState } from "react";
import Country from "../InnerCountry/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>WelCome To Rest Countries..</h1>
      <p>Number of Countries: {countries.length}</p>
      <hr />
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
