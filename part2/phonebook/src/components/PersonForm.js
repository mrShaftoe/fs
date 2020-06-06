import React from 'react';

const PersonForm = ({newPerson, handleFormSubmit, handlePersonChange}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add new</h3>
      <div>
        name: <input value={newPerson.name} onChange={handlePersonChange} id="name"/>
      </div>
      <div>
        phone: <input value={newPerson.number} onChange={handlePersonChange} id="number"/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;