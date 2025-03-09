import { calculateRewards } from '../utils/calculateRewards';

describe('calculateRewards', () => {
  // Original test cases
  test('calculates rewards correctly for standard amounts', () => {
    expect(calculateRewards(120)).toBe(90); // 2x20 + 1x50 = 90
    expect(calculateRewards(80)).toBe(30); // 1x30 = 30
    expect(calculateRewards(40)).toBe(0); // No rewards for <= 50
  });

  // Test boundary values
  test('calculates rewards correctly at boundary values', () => {
    expect(calculateRewards(50)).toBe(0); // Exactly 50, no rewards
    expect(calculateRewards(51)).toBe(1); // Just above 50, 1 point
    expect(calculateRewards(100)).toBe(50); // Exactly 100, 50 points
    expect(calculateRewards(101)).toBe(52); // Just above 100, 2x1 + 50 = 52
  });

  // Test negative values
  test('handles negative amounts correctly', () => {
    expect(calculateRewards(-10)).toBe(0); // Negative amount, no rewards
    expect(calculateRewards(-100)).toBe(0); // Larger negative amount, no rewards
  });

  // Test floating point values
  test('handles floating point values correctly', () => {
    expect(calculateRewards(50.5)).toBe(0); // Rounded down to 50
    expect(calculateRewards(50.9)).toBe(0); // Rounded down to 50
    expect(calculateRewards(75.7)).toBe(25); // 75-50 = 25
    expect(calculateRewards(100.4)).toBe(50); // Rounded down to 100
    expect(calculateRewards(120.8)).toBe(90); // 2x20 + 50 = 90 (floored to 120)
  });

  // Test extreme values
  test('handles extreme values correctly', () => {
    expect(calculateRewards(0)).toBe(0); // Zero amount
    expect(calculateRewards(1000)).toBe(1850); // 2x900 + 50 = 1850
    expect(calculateRewards(10000)).toBe(19850); // 2x9900 + 50 = 19850
  });

  // Test for potential rounding errors
  test('handles potential rounding issues correctly', () => {
    expect(calculateRewards(100.01)).toBe(50); // Should be floored to 100
    expect(calculateRewards(100.999)).toBe(50); // Should be floored to 100
    expect(calculateRewards(150.5)).toBe(150); // 2x50 + 50 = 150
  });
});
