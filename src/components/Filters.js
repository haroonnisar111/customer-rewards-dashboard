import React, { useState } from 'react';
import {
  FiltersContainer,
  FilterLabel,
  FilterSelect,
} from '../styles/dashboardStyles';

const Filters = ({ onFilterChange }) => {
  const [selectedRange, setSelectedRange] = useState('all');

  const handleRangeChange = e => {
    const range = e.target.value;
    setSelectedRange(range);
    onFilterChange(range);
  };

  return (
    <FiltersContainer>
      <FilterLabel>Filter by:</FilterLabel>
      <FilterSelect value={selectedRange} onChange={handleRangeChange}>
        <option value='all'>All Time</option>
        <option value='3'>Last 3 Months</option>
        <option value='6'>Last 6 Months</option>
        <option value='12'>Last 12 Months</option>
      </FilterSelect>
    </FiltersContainer>
  );
};

export default Filters;
