import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Th, Td, TableRow } from '../styles/tableStyles';
import {
  PaginationContainer,
  PaginationButton,
} from '../styles/dashboardStyles';
import { calculateRewards } from '../utils/calculateRewards';

const TransactionTable = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            <Th>Transaction ID</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Rewards</Th>
          </TableRow>
        </thead>
        <tbody>
          {currentTransactions.map(transaction => (
            <TableRow key={transaction.transactionId}>
              <Td>{transaction.transactionId}</Td>
              <Td>${transaction.amount.toFixed(2)}</Td>
              <Td>{transaction.date}</Td>
              <Td>{calculateRewards(transaction.amount)}</Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <PaginationButton
            key={page}
            onClick={() => handlePageChange(page)}
            active={page === currentPage}
          >
            {page}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionTable;
