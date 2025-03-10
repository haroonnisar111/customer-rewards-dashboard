import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import CustomerTable from './customerTable';
import RewardDetails from './rewardDetails';
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
import { DASHBOARDLABELS, MESSAGES } from '../constant/constant';
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

  const { totalRewards, monthlyRewards, uniqueCustomersCount } = useMemo(() => {
    const result = transactions.reduce(
      (acc, transaction) => {
        const rewards = calculateRewards(transaction.amount);

        acc.totalRewards += rewards;

        const month = new Date(transaction.date).toLocaleString('default', {
          month: 'short',
        });
        acc.monthlyRewards[month] = (acc.monthlyRewards[month] || 0) + rewards;

        acc.uniqueCustomers.add(transaction.customerId);

        return acc;
      },
      {
        totalRewards: 0,
        monthlyRewards: {},
        uniqueCustomers: new Set(),
      }
    );

    return {
      totalRewards: result.totalRewards,
      monthlyRewards: result.monthlyRewards,
      uniqueCustomersCount: result.uniqueCustomers.size,
    };
  }, [transactions]);

  const graphData = useMemo(() => {
    return Object.entries(monthlyRewards).map(([month, rewards]) => ({
      month,
      rewards,
    }));
  }, [monthlyRewards]);

  const backButtonClick = useCallback(() => {
    setSelectedCustomer(null);
  }, []);

  const handleCustomerSelect = useCallback(customerId => {
    setSelectedCustomer(customerId);
  }, []);

  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderTitle>
          {selectedCustomer ? (
            <BackButton onClick={backButtonClick}>
              <FaArrowLeft />
            </BackButton>
          ) : null}
          <h1>{DASHBOARDLABELS.CUSTOMERS_REWARDS_DASHBOARD}</h1>
        </HeaderTitle>
      </DashboardHeader>
      <DashboardContent>
        {!selectedCustomer ? (
          <>
            <StatsContainer>
              <StatCard>
                <h3>{DASHBOARDLABELS.TOTAL_CUSTOMERS}</h3>
                <p>{uniqueCustomersCount}</p>
              </StatCard>
              <StatCard>
                <h3>{DASHBOARDLABELS.TOTAL_TRANSCTIONS}</h3>
                <p>{transactions.length}</p>
              </StatCard>
              <StatCard>
                <h3>{DASHBOARDLABELS.TOTAL_REWARDS}</h3>
                <p>
                  {totalRewards} {MESSAGES.POINTS}
                </p>
              </StatCard>
            </StatsContainer>
            <GraphContainer>
              <h2>{DASHBOARDLABELS.CUSTOMERS_MONTHLY_REWARDS}</h2>
              <BarChart width={1000} height={300} data={graphData}>
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
              onSelectCustomer={handleCustomerSelect}
            />
          </>
        ) : (
          <RewardDetails
            customerId={selectedCustomer}
            transactions={transactions}
            onBack={backButtonClick}
          />
        )}
      </DashboardContent>
    </DashboardContainer>
  );
};

Dashboard.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dashboard;
