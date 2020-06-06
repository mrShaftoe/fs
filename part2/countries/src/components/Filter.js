import React from 'react';

const Filter = ({filter, handleFilterChange, text}) => (
  <>
    {text} <input type="text" value={filter} onChange={handleFilterChange} />
  </>
)

export default Filter;