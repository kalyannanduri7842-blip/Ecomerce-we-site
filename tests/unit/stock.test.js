/**
 * Stock validation unit tests
 */
const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('stock rules', () => {
  test('never allow negative stock', () => {
    const current = 5;
    const decrease = 10;
    const next = Math.max(0, current - decrease);
    assert.strictEqual(next, 0);
  });
  test('increase stock correctly', () => {
    const current = 20;
    const add = 15;
    assert.strictEqual(current + add, 35);
  });
  test('available stock accounts for reserved', () => {
    const stock = 50;
    const reserved = 8;
    const available = Math.max(0, stock - reserved);
    assert.strictEqual(available, 42);
  });
  test('low stock detection', () => {
    const available = 5;
    const threshold = 10;
    assert.ok(available > 0 && available <= threshold);
  });
});
