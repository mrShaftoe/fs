import React from 'react';

const Filter = ({filter, handleFilterChange}) => (
  <>
    filter shown with <input type="text" value={filter} onChange={handleFilterChange} />
  </>
)

export default Filter;