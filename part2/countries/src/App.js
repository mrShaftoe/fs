import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(countries.concat(response.data));
      });
  };
  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  }

  const handleButtonShow = (evt) => {
    setFilter(evt.target.parentNode.innerText.split(' ')[0]);
  }

  useEffect(hook, []);
  const filteredCountries = countries.filter(
    country => country.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <>
      <Filter text='find countries' filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={filteredCountries} handleButtonShow={handleButtonShow}/>
    </>
  );
}

export default App;
