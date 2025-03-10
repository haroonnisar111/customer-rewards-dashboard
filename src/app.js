import React from 'react';
import Dashboard from './components/Dashboard';
import { GlobalStyle } from './styles/globalStyles';
import useFetchTransactions from './hooks/useFetchTransctions';

const App = () => {
  const { transactions, isLoading } = useFetchTransactions();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Dashboard transactions={transactions} />
    </>
  );
};

export default App;
