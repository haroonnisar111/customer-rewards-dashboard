import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TransactionTable from './TransactionTable';
import Filters from './Filters';
import { DetailsContainer, BackButton } from '../styles/dashboardStyles';

const RewardDetails = ({ customerId, transactions, onBack }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const handleFilterChange = range => {
    debugger;
    const currentDate = new Date();
    const filtered = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);

      const monthsDifference =
        (currentDate.getFullYear() - transactionDate.getFullYear()) * 12 +
        (currentDate.getMonth() - transactionDate.getMonth());

      if (range === 'all') return true;

      return monthsDifference <= parseInt(range) && monthsDifference >= 0;
    });

    setFilteredTransactions(filtered);
  };

  return (
    <DetailsContainer>
      <h2>Transaction Details for Customer {customerId}</h2>
      <BackButton onClick={onBack}>Back to Dashboard</BackButton>
      <Filters onFilterChange={handleFilterChange} />
      <TransactionTable transactions={filteredTransactions} />
    </DetailsContainer>
  );
};

RewardDetails.propTypes = {
  customerId: PropTypes.number.isRequired,
  transactions: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default RewardDetails;
