import React from 'react';
import Weather from './Weather';

const CountryCard = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(
          ({name}) => <li key={name}>{name}</li>
        )}
      </ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} width='100' height='80' />
      <Weather city={country.capital} />
    </div>
  )
}

export default CountryCard;