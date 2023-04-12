import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setFilterToState, filterValue }) => {
  const setFilterValue = (event) => {
    const value = event.currentTarget.value.toUpperCase();
    setFilterToState(value);
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={filterValue}
        onChange={setFilterValue}
      />
    </div>
  );
};

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;