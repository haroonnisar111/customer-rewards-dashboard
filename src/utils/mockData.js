export const transactions = [
  { customerId: 1, transactionId: 101, amount: 120.5, date: '2025-01-15' },
  { customerId: 1, transactionId: 102, amount: 80.0, date: '2025-01-20' },
  { customerId: 2, transactionId: 103, amount: 150.75, date: '2025-02-05' },
  { customerId: 2, transactionId: 104, amount: 60.0, date: '2025-02-10' },
  { customerId: 3, transactionId: 105, amount: 200.0, date: '2025-03-01' },
  { customerId: 3, transactionId: 106, amount: 90.0, date: '2025-03-10' },
  { customerId: 4, transactionId: 107, amount: 110.0, date: '2025-04-25' },
  { customerId: 4, transactionId: 108, amount: 70.0, date: '2025-05-15' },
  { customerId: 5, transactionId: 109, amount: 130.0, date: '2025-06-20' },
  { customerId: 5, transactionId: 110, amount: 50.0, date: '2025-07-25' },
  { customerId: 6, transactionId: 111, amount: 140.0, date: '2025-08-05' },
  { customerId: 6, transactionId: 112, amount: 85.0, date: '2025-09-20' },
  { customerId: 7, transactionId: 113, amount: 95.0, date: '2025-10-15' },
  { customerId: 7, transactionId: 114, amount: 65.0, date: '2025-11-30' },
  { customerId: 8, transactionId: 115, amount: 180.0, date: '2025-12-25' },
  { customerId: 8, transactionId: 116, amount: 75.0, date: '2025-01-30' },
  { customerId: 9, transactionId: 117, amount: 160.0, date: '2025-02-10' },
  { customerId: 9, transactionId: 118, amount: 55.0, date: '2025-03-05' },
  { customerId: 10, transactionId: 119, amount: 170.0, date: '2025-04-10' },
  { customerId: 10, transactionId: 120, amount: 45.0, date: '2025-05-20' },

  ...Array.from({ length: 280 }, (_, i) => ({
    customerId: Math.floor(Math.random() * 10) + 1,
    transactionId: 121 + i,
    amount: parseFloat((Math.random() * 200).toFixed(2)),
    date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      '0'
    )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  })),
];
