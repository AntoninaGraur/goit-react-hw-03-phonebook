import React from 'react';
import PropTypes from 'prop-types';

import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <h3>Find contacts by name</h3>
    <FilterInput
      type="text"
      value={value}
      onChange={event => onChangeFilter(event.target.value)}
      placeholder="Search contacts"
    />
  </div>
);

export default Filter;

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};