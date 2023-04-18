import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setFilterValue, filterValue }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
