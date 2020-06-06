import React from 'react';
import ButtonShow from './ButtonShow';

const Country = ({country, handleButtonShow}) => {
  return (
    <li>{country.name} <ButtonShow handleButtonShow={handleButtonShow}/></li>
  );
};

export default Country;