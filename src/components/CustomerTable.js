import React from 'react';
import PropTypes from 'prop-types';
import { calculateRewards } from '../utils/calculateRewards';
import {
  CustomerGrid,
  CustomerCard,
  CustomerName,
  CustomerRewards,
} from '../styles/dashboardStyles';

const CustomerTable = ({ transactions, onSelectCustomer }) => {
  const customerRewards = transactions.reduce((acc, transaction) => {
    const { customerId, amount } = transaction;
    const rewards = calculateRewards(amount);

    if (!acc[customerId]) {
      acc[customerId] = { total: 0 };
    }
    acc[customerId].total += rewards;
    return acc;
  }, {});

  return (
    <CustomerGrid>
      {Object.entries(customerRewards).map(([customerId, rewards]) => (
        <CustomerCard
          key={customerId}
          onClick={() => onSelectCustomer(Number(customerId))}
        >
          <CustomerName>Customer {customerId}</CustomerName>
          <CustomerRewards>{rewards.total} Points</CustomerRewards>
        </CustomerCard>
      ))}
    </CustomerGrid>
  );
};

CustomerTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  onSelectCustomer: PropTypes.func.isRequired,
};

export default CustomerTable;
