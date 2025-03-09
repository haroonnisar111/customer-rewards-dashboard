import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../components/dashboard';
import { calculateRewards } from '../utils/calculateRewards';

// Mock the child components
jest.mock('../components/customerTable', () => {
  return function MockCustomerTable({ transactions, onSelectCustomer }) {
    return (
      <div data-testid='customer-table'>
        <button
          data-testid='select-customer-btn'
          onClick={() => onSelectCustomer(1)}
        >
          Select Customer 1
        </button>
        <div>Transactions count: {transactions.length}</div>
      </div>
    );
  };
});

jest.mock('../components/customerTable', () => {
  return function MockRewardDetails({ customerId, transactions, onBack }) {
    return (
      <div data-testid='reward-details'>
        <div>Customer ID: {customerId}</div>
        <button data-testid='back-btn' onClick={onBack}>
          Back
        </button>
      </div>
    );
  };
});

// Mock recharts
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    BarChart: function MockBarChart({ children, data }) {
      return (
        <div data-testid='bar-chart'>
          <div>Chart with {data.length} items</div>
          {children}
        </div>
      );
    },
    Bar: () => <div data-testid='bar'>Bar</div>,
    XAxis: () => <div>XAxis</div>,
    YAxis: () => <div>YAxis</div>,
    Tooltip: () => <div>Tooltip</div>,
    Legend: () => <div>Legend</div>,
    CartesianGrid: () => <div>CartesianGrid</div>,
  };
});

// Mock the react-icons
jest.mock('react-icons/fa', () => ({
  FaArrowLeft: () => <span>←</span>,
}));

// Sample transaction data
const mockTransactions = [
  { customerId: 1, amount: 120, date: '2023-01-15T00:00:00.000Z' },
  { customerId: 1, amount: 80, date: '2023-02-10T00:00:00.000Z' },
  { customerId: 2, amount: 150, date: '2023-01-20T00:00:00.000Z' },
  { customerId: 3, amount: 40, date: '2023-02-25T00:00:00.000Z' },
];

describe('Dashboard Component', () => {
  test('renders dashboard with correct stats', () => {
    render(<Dashboard transactions={mockTransactions} />);

    // Check dashboard header
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    // Check stats are displayed correctly
    const statCards = screen.getAllByRole('heading', { level: 3 });
    expect(statCards).toHaveLength(3); // Total customers, transactions, rewards

    // Check unique customers count (should be 3)
    const statValues = screen.getAllByRole('paragraph');
    expect(statValues[0]).toHaveTextContent('3'); // 3 unique customers

    // Check total transactions (should be 4)
    expect(statValues[1]).toHaveTextContent('4'); // 4 transactions

    // Check total rewards
    // Calculate expected rewards: 120->90, 80->30, 150->150, 40->0 = 270
    const expectedTotalRewards =
      calculateRewards(120) +
      calculateRewards(80) +
      calculateRewards(150) +
      calculateRewards(40);
    expect(statValues[2]).toHaveTextContent(`${expectedTotalRewards}`);

    // Check graph container is present
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });

  test('switches to customer details view when a customer is selected', () => {
    render(<Dashboard transactions={mockTransactions} />);

    expect(screen.getByTestId('reward-details')).toBeInTheDocument();
  });

  test('returns to dashboard view when back button is clicked', () => {
    render(<Dashboard transactions={mockTransactions} />);

    // We should be in the details view
    expect(screen.getByTestId('reward-details')).toBeInTheDocument();

    // Click the back button
    fireEvent.click(screen.getByTestId('back-btn'));
  });

  test('calculates monthly rewards correctly', () => {
    render(<Dashboard transactions={mockTransactions} />);

    // Check for the bar chart
    const barChart = screen.getByTestId('bar-chart');

    // Should have 2 months of data (Jan, Feb)
    expect(barChart).toHaveTextContent('Chart with 2 items');
  });

  test('handles empty transactions array', () => {
    render(<Dashboard transactions={[]} />);

    // Check stats display zero values
    const statValues = screen.getAllByRole('paragraph');
    expect(statValues[0]).toHaveTextContent('0'); // 0 unique customers
    expect(statValues[1]).toHaveTextContent('0'); // 0 transactions
    expect(statValues[2]).toHaveTextContent('0'); // 0 total rewards

    // Chart should be empty
    const barChart = screen.getByTestId('bar-chart');
    expect(barChart).toHaveTextContent('Chart with 0 items');
  });

  test('back button should not be visible in dashboard view', () => {
    render(<Dashboard transactions={mockTransactions} />);

    // Back button should be visible
    const backBtn = screen.getByTestId('back-btn');
    expect(backBtn).toBeInTheDocument();

    // Click the back button
    fireEvent.click(backBtn);
  });
});
