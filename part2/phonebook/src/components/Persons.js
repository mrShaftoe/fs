import React from 'react';
import Person from './Person'

const Persons = ({persons, handlePersonDel}) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {persons.map(
          person => <Person person={person} key={person.id} handlePersonDel={handlePersonDel}/>
        )}
      </ul>
    </>
  );
};

export default Persons;