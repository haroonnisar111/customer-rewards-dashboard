import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { calculateRewards } from '../utils/calculateRewards';
import {
  MESSAGES,
  HEADERS,
  BUTTONS,
  CUSTOMERS_PER_PAGE,
} from '../constant/constant';
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
  RewardsCell,
  PaginationContainer,
  PageInfo,
  PaginationButtons,
  PageButton,
} from '../styles/dashboardStyles';
import { getPaginationData } from '../utils/pagination';
function calculateCustomerReward(transactions){
  const rewards = transactions.reduce((acc, { customerId, amount }) => {
    const rewardPoints = calculateRewards(amount);

    if (!acc[customerId]) {
      acc[customerId] = { total: 0, transactionCount: 0 };
    }

    acc[customerId].total += rewardPoints;
    acc[customerId].transactionCount += 1;

    return acc;
  }, {});

  const customers = Object.entries(rewards)?.map(([customerId, data]) => ({
    id: Number(customerId),
    totalRewards: data.total,
    transactionCount: data.transactionCount,
  }));

  return { allCustomers: customers };
}
const CustomerTable = ({ transactions, onSelectCustomer }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { allCustomers } = useMemo(() => 
    calculateCustomerReward(transactions)
, [transactions]);

  const {
    currentItems: currentCustomers,
    indexOfFirstItem: indexOfFirstCustomer,
    indexOfLastItem: indexOfLastCustomer,
    totalPages,
  } = getPaginationData(allCustomers, currentPage, CUSTOMERS_PER_PAGE);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  const goToNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  const goToPage = useCallback(pageNumber => {
    setCurrentPage(pageNumber);
  }, []);

  const handleCustomerClick = useCallback(
    customerId => {
      onSelectCustomer(customerId);
    },
    [onSelectCustomer]
  );

  return (
    <>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>{HEADERS.CUSTOMER_ID}</TableHeaderCell>
            <TableHeaderCell>{HEADERS.TRANSACTION}</TableHeaderCell>
            <TableHeaderCell>{HEADERS.TOTAL_REWARDS}</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {currentCustomers.map(customer => (
            <TableRow
              key={customer.id}
              onClick={() => handleCustomerClick(customer.id)}
            >
              <TableCell>Customer {customer.id}</TableCell>
              <TableCell>{customer.transactionCount}</TableCell>
              <RewardsCell>
                {customer.totalRewards} {MESSAGES.POINTS}
              </RewardsCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <PaginationContainer>
          <PageInfo>
            Showing {indexOfFirstCustomer + 1}-
            {Math.min(indexOfLastCustomer, allCustomers.length)} of{' '}
            {allCustomers.length} customers
          </PageInfo>
          <PaginationButtons>
            <PageButton onClick={goToPrevPage} disabled={currentPage === 1}>
              {BUTTONS.BACK}
            </PageButton>

            {pageNumbers.map(number => (
              <PageButton
                key={number}
                active={currentPage === number}
                onClick={() => goToPage(number)}
              >
                {number}
              </PageButton>
            ))}

            <PageButton
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              {BUTTONS.NEXT}
            </PageButton>
          </PaginationButtons>
        </PaginationContainer>
      )}
    </>
  );
};

CustomerTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSelectCustomer: PropTypes.func.isRequired,
};

export default React.memo(CustomerTable);
