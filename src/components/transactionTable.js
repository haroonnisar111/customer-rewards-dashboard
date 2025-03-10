import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Table, Th, Td, TableRow } from '../styles/tableStyles';
import { HEADERS, MESSAGES } from '../constant/constant';
import {
  PaginationButton,
  RewardsPaginationContainer,
} from '../styles/dashboardStyles';
import { calculateRewards } from '../utils/calculateRewards';
import { getPaginationData } from '../utils/pagination';

const TransactionTable = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB - dateA;
    });
  }, [transactions]);
  const { currentItems: currentTransactions, totalPages } = getPaginationData(
    sortedTransactions,
    currentPage,
    10
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [transactions]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            <Th>{HEADERS.TRANSACTION_ID}</Th>
            <Th>{HEADERS.AMOUNT}</Th>
            <Th>{HEADERS.DATE}</Th>
            <Th>{HEADERS.REWARDS}</Th>
          </TableRow>
        </thead>
        <tbody>
          {currentTransactions.map(transaction => (
            <TableRow key={transaction.transactionId}>
              <Td>{transaction?.transactionId}</Td>
              <Td>${transaction?.amount.toFixed(2)}</Td>
              <Td>{formatDate(transaction?.date)}</Td>
              <Td>{calculateRewards(transaction?.amount)}</Td>
            </TableRow>
          ))}
          {currentTransactions.length === 0 && (
            <TableRow>
              <Td colSpan={4} style={{ textAlign: 'center' }}>
                {MESSAGES.NO_TRANSCTIONS_FOUND}
              </Td>
            </TableRow>
          )}
        </tbody>
      </Table>
      {totalPages > 0 && (
        <RewardsPaginationContainer>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              active={page === currentPage}
            >
              {page}
            </PaginationButton>
          ))}
        </RewardsPaginationContainer>
      )}
    </>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionTable;
