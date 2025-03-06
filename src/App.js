import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './utils/api';
import Dashboard from './components/Dashboard';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <GlobalStyle />
      <Dashboard transactions={transactions} />
    </>
  );
};

export default App;
