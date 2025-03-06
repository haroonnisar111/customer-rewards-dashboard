Customer Rewards Dashboard
Project Overview
The Customer Rewards Dashboard is a React-based web application that allows users to view and analyze customer rewards data. It calculates reward points based on transaction amounts and displays the data in a visually appealing dashboard with graphs, cards, and tables.

Features
Dashboard:

Displays total customers, total transactions, and total rewards.

Shows a bar chart of monthly rewards.

Lists all customers with their total rewards in a card layout.

Customer Details:

Displays detailed transaction history for a selected customer.

Allows filtering transactions by date range (last 3 months, 6 months, 12 months, or all time).

Pagination:

Handles large datasets efficiently with pagination.

Modern UI:

Clean and responsive design with hover effects and animations.

Uses a professional color scheme (shades of blue, gray, and white).
Installation Instructions
Follow these steps to set up the project locally:

Clone the Repository:git clone https://github.com/your-username/customer-rewards-dashboard.git
cd customer-rewards-dashboard
Install Dependencies:npm install
Run the Application:npm start
Open in Browser:Visit http://localhost:3000 to view the application.

Usage
Dashboard:

View total customers, transactions, and rewards.

Explore the monthly rewards bar chart.

Click on a customer card to view their transaction details.

Customer Details:

View detailed transaction history for the selected customer.

Use the filter dropdown to view transactions for a specific date range.

Pagination:

Navigate through large datasets using pagination buttons.

Folder Structure
Copy
customer-rewards-dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── CustomerTable.js
│ │ ├── RewardDetails.js
│ │ ├── TransactionTable.js
│ ├── utils/
│ │ ├── calculateRewards.js
│ │ ├── api.js
│ │ ├── mockData.js
│ ├── styles/
│ │ ├── dashboardStyles.js
│ │ ├── globalStyles.js
│ ├── App.js
│ ├── index.js
├── tests/
│ ├── calculateRewards.test.js
│ ├── App.test.js
├── README.md
├── package.json
Technologies Used
React: Frontend library for building the user interface.

Styled Components: For styling React components.

Recharts: For displaying graphs and charts.

React Icons: For adding icons to the UI.

PropTypes: For type-checking React props.

Jest: For unit testing.

Screenshots

1. Dashboard View

Displays total customers, transactions, and rewards.

Shows a bar chart of monthly rewards.

Lists all customers with their total rewards in a card layout.

2. Customer Details View

Displays detailed transaction history for the selected customer.

Includes a filter dropdown for date range.

3. Pagination

Handles large datasets efficiently with pagination.
