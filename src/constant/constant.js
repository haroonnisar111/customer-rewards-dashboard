export const MESSAGES = {
  LOADING: 'Loading rewards data...',
  NO_DATA: 'No rewards data available.',
  FETCH_ERROR: 'Failed to fetch rewards data.',
  TITLE: 'Customer Rewards Summary',
  POINTS: 'Points',
  NO_TRANSACTIONS: 'No transactions found',
  CUSTOMER: 'Customer',
  SHOWING: 'Showing',
  CUSTOMERS: 'customers',
  TRANSACTION_DETAILS_FOR_CUSTOMER: 'Transaction Details for Customer',
  NO_TRANSCTIONS_FOUND: 'No transactions found',
};
export const TABLE_TITLE = {
  TRANSACTION_DETAILS: 'Transaction Details for',
  MONTHLY_BREAKDOWN: 'Monthly Breakdown',
  CUSTOMER_SUMMARY: 'Customer Summary',
};

export const HEADERS = {
  CUSTOMER_ID: 'Customer ID',
  TRANSACTION: 'Transactions',
  TRANSACTION_AMOUNT: 'Total Transaction Amount',
  TOTAL_REWARDS: 'Total Rewards',
  TRANSACTION_ID: 'Transaction ID',
  AMOUNT: 'Amount',
  DATE: 'Date',
  REWARDS: 'Rewards',
};

export const DASHBOARDLABELS = {
  CUSTOMERS_REWARDS_DASHBOARD: 'Customer Rewards Dashboard',
  TOTAL_CUSTOMERS: 'Total Customers',
  TOTAL_REWARDS: 'Total Rewards',
  TOTAL_TRANSCTIONS: 'Total Transactions',
  CUSTOMERS_MONTHLY_REWARDS: 'Customers Monthly Rewards',
};
export const CUSTOMERS_PER_PAGE = '5';

export const BUTTONS = {
  Back: 'Previous',
  Next: 'Next',
  Page: 'Page',
};

export const dataUrl = '/data/transactions.json';
export const months = [
  { value: 'last-3-months', label: 'Last 3 Months' },
  { value: 'january', label: 'January' },
  { value: 'february', label: 'February' },
  { value: 'march', label: 'March' },
  { value: 'april', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'june', label: 'June' },
  { value: 'july', label: 'July' },
  { value: 'august', label: 'August' },
  { value: 'september', label: 'September' },
  { value: 'october', label: 'October' },
  { value: 'november', label: 'November' },
  { value: 'december', label: 'December' },
];

export const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];

export const monthMap = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};
