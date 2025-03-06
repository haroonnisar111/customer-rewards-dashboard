import { calculateRewards } from '../utils/calculateRewards';

test('calculates rewards correctly', () => {
  expect(calculateRewards(120)).toBe(90); // 2x20 + 1x50 = 90
  expect(calculateRewards(80)).toBe(30); // 1x30 = 30
  expect(calculateRewards(40)).toBe(0); // No rewards
});
