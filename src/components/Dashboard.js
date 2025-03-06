import React, { useState } from 'react';
import CustomerTable from './CustomerTable';
import RewardDetails from './RewardDetails';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardContent,
  HeaderTitle,
  BackButton,
  StatsContainer,
  StatCard,
  GraphContainer,
} from '../styles/dashboardStyles';
import { FaArrowLeft } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { calculateRewards } from '../utils/calculateRewards';

const Dashboard = ({ transactions }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const totalRewards = transactions.reduce((acc, transaction) => {
    const rewards = calculateRewards(transaction.amount);
    return acc + rewards;
  }, 0);

  const monthlyRewards = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', {
      month: 'short',
    });
    const rewards = calculateRewards(transaction.amount);
    acc[month] = (acc[month] || 0) + rewards;
    return acc;
  }, {});

  const graphData = Object.entries(monthlyRewards).map(([month, rewards]) => ({
    month,
    rewards,
  }));

  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderTitle>
          {selectedCustomer ? (
            <BackButton onClick={() => setSelectedCustomer(null)}>
              <FaArrowLeft />
            </BackButton>
          ) : null}
          <h1>Customer Rewards Dashboard</h1>
        </HeaderTitle>
      </DashboardHeader>
      <DashboardContent>
        {!selectedCustomer ? (
          <>
            <StatsContainer>
              <StatCard>
                <h3>Total Customers</h3>
                <p>{new Set(transactions.map(t => t.customerId)).size}</p>
              </StatCard>
              <StatCard>
                <h3>Total Transactions</h3>
                <p>{transactions.length}</p>
              </StatCard>
              <StatCard>
                <h3>Total Rewards</h3>
                <p>{totalRewards} Points</p>
              </StatCard>
            </StatsContainer>
            <GraphContainer>
              <h2>Monthly Rewards</h2>
              <BarChart width={600} height={300} data={graphData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='rewards' fill='#3498db' />
              </BarChart>
            </GraphContainer>
            <CustomerTable
              transactions={transactions}
              onSelectCustomer={setSelectedCustomer}
            />
          </>
        ) : (
          <RewardDetails
            customerId={selectedCustomer}
            transactions={transactions}
            onBack={() => setSelectedCustomer(null)}
          />
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
