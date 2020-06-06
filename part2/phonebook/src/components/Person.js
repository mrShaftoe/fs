import React from 'react';
import Button from './Button';

const Person = ({person, handlePersonDel }) => {
  return (
    <li>
      {person.name} {person.number}&nbsp;
      <Button 
        text={'delete'} 
        handleButtonClick={() => handlePersonDel(person.id)} />
    </li>
  );
}

export default Person;