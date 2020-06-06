import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/personService';
import Message from './components/Message';
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newPerson, setNewPerson ] = useState({
    name: '',
    number: ''
  });
  const [ filter, setFilter ] = useState('');
  const [ message, setMessage ] = useState({
    text: '',
    type: ''
  });

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      }
    );
  }

  const handlePersonChange = (evt) => {
    const tempPerson = {...newPerson};
    tempPerson[evt.target.id] = evt.target.value;
    setNewPerson(tempPerson);
  }

  const addNewPerson = (evt) => {
    evt.preventDefault();
    const personToUpdate = persons.find(
      ({name}) => {
        return name.toLowerCase() === newPerson.name.toLowerCase()
      });
    if (personToUpdate) {
      const result = window.confirm(`${personToUpdate.name} with number ${personToUpdate.number} is already in your phonebook. Do you want to update phone number?`);
      if (result) {
        personService
          .updatePerson(personToUpdate.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(
              person => person.id !== returnedPerson.id ? person : returnedPerson 
            ));
          })
          .catch(error => {
            setMessage({
              text:`${personToUpdate.name} was already removed from server`,
              type: 'error'
            });
            setTimeout(() => {
              setMessage({text: '', type: ''})
            }, 5000);
          });
      }
      return;
    }


    personService
      .addPerson(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson));
        setNewPerson({name: '', number: ''});
        setMessage({text: `${addedPerson.name} was added`, type: 'success'});
        setTimeout(() => {
          setMessage({text: '', type: ''})
        }, 5000)
      });
  };

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };

  const deletePerson = id => {
    const personToDelete = persons.find(person => person.id === id);
    const result = window.confirm(`Are you sure want to delete ${personToDelete.name} from phonebook?`);
    if (result) { 
      personService
        .deletePerson(id)
        .then((response) => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          setMessage({
            text:`${personToDelete.name} was already removed from server`,
            type: 'error'
          });
          setTimeout(() => {
            setMessage({text: '', type: ''})
          }, 5000);
        });
    }
  }

  const filteredPersons = persons.filter(
    ({name}) => name.toLowerCase().includes(filter.toLowerCase())
  );  

  useEffect(hook, []);
  
  return (
    <div>
      <h3>Phonebook</h3>
      <Message message={message.text} type={message.type}/>
      <Filter value={filter} handleFilterChange={handleFilterChange} />
      <PersonForm 
        newPerson={newPerson} 
        handleFormSubmit={addNewPerson} 
        handlePersonChange={handlePersonChange}
      />
      <Persons persons={filteredPersons} handlePersonDel={deletePerson} />
    </div>
  );
};

export default App;