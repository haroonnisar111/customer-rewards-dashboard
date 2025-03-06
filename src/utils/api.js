import { transactions } from './mockData';

export const fetchTransactions = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
};
