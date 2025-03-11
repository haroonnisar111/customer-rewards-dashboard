import { useState, useEffect, useCallback } from 'react';
import { DATA_URL } from '../constant/constant';
import logger from '../loggers/index';

const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = useCallback(() => {
    setIsLoading(true);
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        logger.info('Transactions fetched successfully');
      })
      .catch(error => {
        logger.error('Error fetching transactions:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return { transactions, isLoading };
};

export default useFetchTransactions;
