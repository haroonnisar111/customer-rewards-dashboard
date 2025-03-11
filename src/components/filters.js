import React from 'react';
import PropTypes from 'prop-types';
import {
  FiltersContainer,
  FilterLabel,
  FilterSelect,
} from '../styles/dashboardStyles';

const Filters = ({ onFilterChange, filterOptions, label, defaultValue }) => {
  

  const handleChange = e => {
    const value = e.target.value;
    onFilterChange(value);
  };

  return (
    <FiltersContainer>
      <FilterLabel>{label}</FilterLabel>
      <FilterSelect value={ defaultValue || filterOptions[0]?.value} onChange={handleChange}>
        {filterOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>
    </FiltersContainer>
  );
};

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

export default Filters;
