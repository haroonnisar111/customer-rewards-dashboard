import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import TransactionTable from './transactionTable';
import Filters from './filters';
import { DetailsContainer, FilterContainer } from '../styles/dashboardStyles';
import { MONTHS, YEARS, DASHBOARD_LABELS, MESSAGES } from '../constant/constant';

const RewardDetails = ({ customerId, transactions }) => {
  const [activeFilters, setActiveFilters] = useState({
    month: 'last-3-months',
    year: '2025',
  });

  const applyFilters = useCallback(
    filters => {
      const currentDate = new Date();

      return transactions.filter(({ date }) => {
        const transactionDate = new Date(date);
        const transactionYear = transactionDate.getFullYear();
        const transactionMonth = transactionDate.getMonth();

        if (filters.year && transactionYear !== parseInt(filters.year)) {
          return false;
        }

        if (filters.month === 'last-3-months') {
          const threeMonthsAgo = new Date(currentDate);
          threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
          return (
            transactionDate >= threeMonthsAgo && transactionDate <= currentDate
          );
        } else if (filters.month) {
          const selectedMonth = DASHBOARD_LABELS[filters.month.toLowerCase()];
          if (
            selectedMonth !== undefined &&
            transactionMonth !== selectedMonth
          ) {
            return false;
          }
        }

        return true;
      });
    },
    [transactions]
  );

  const handleFilterChange = useCallback((type, value) => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [type]: value,
    }));
  }, []);

  const filteredTransactions = useMemo(
    () => applyFilters(activeFilters),
    [activeFilters, applyFilters]
  );

  return (
    <DetailsContainer>
      <h2>
        {MESSAGES.TRANSACTION_DETAILS_FOR_CUSTOMER} {customerId}
      </h2>
      <FilterContainer>
        <Filters
          onFilterChange={value => handleFilterChange('month', value)}
          filterOptions={MONTHS}
          label='Filter by Month'
          defaultValue={activeFilters.month}
        />
        <Filters
          onFilterChange={value => handleFilterChange('year', value)}
          filterOptions={YEARS}
          label='Filter by Year'
          defaultValue={activeFilters.year}
        />
      </FilterContainer>

      <TransactionTable transactions={filteredTransactions} />
    </DetailsContainer>
  );
};

RewardDetails.propTypes = {
  customerId: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func,
};

export default RewardDetails;
