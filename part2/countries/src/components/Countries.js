import React from "react";
import Country from "./Country";
import CountryCard from "./CountryCard";

const Countries = ({countries, handleButtonShow}) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    );
  };

  if (countries.length === 1) {
    return (
      <CountryCard country={countries[0]} />
    );
  }
  return (
    <ul>
      {countries.map(country => <Country country={country} handleButtonShow={handleButtonShow} key={country.numericCode} />)}
    </ul>
  );
};

export default Countries;