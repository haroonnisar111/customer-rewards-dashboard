export const calculateRewards = amount => {
  if (amount <= 50) return 0;
  if (amount <= 100) return Math.floor(amount - 50);
  return Math.floor(amount - 100) * 2 + 50;
};
