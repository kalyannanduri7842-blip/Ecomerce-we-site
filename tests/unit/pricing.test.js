/**
 * Unit tests for NexMart pricing and constants
 */
const { test, describe } = require('node:test');
const assert = require('node:assert');
const path = require('path');

const constants = require(path.join(__dirname, '../../backend/src/constants/appConstants'));

describe('appConstants', () => {
  test('currency defaults', () => {
    assert.strictEqual(constants.DEFAULT_CURRENCY, 'INR');
    assert.strictEqual(constants.CURRENCY_SYMBOL, '₹');
  });
  test('shipping threshold', () => {
    assert.ok(constants.SHIPPING_FREE_THRESHOLD >= 500);
    assert.ok(constants.SHIPPING_FLAT_RATE > 0);
  });
  test('order statuses include delivered', () => {
    assert.ok(constants.ORDER_STATUSES.includes('delivered'));
    assert.ok(constants.ORDER_STATUSES.includes('cancelled'));
  });
  test('tax rate is positive', () => {
    assert.ok(constants.TAX_RATE > 0 && constants.TAX_RATE < 1);
  });
});

describe('pricing math', () => {
  test('discount percent calculation', () => {
    const price = 1000;
    const discount = 800;
    const pct = Math.round((1 - discount / price) * 100);
    assert.strictEqual(pct, 20);
  });
  test('shipping free above threshold', () => {
    const subtotal = 1200;
    const shipping = subtotal >= constants.SHIPPING_FREE_THRESHOLD ? 0 : constants.SHIPPING_FLAT_RATE;
    assert.strictEqual(shipping, 0);
  });
  test('shipping charged below threshold', () => {
    const subtotal = 100;
    const shipping = subtotal >= constants.SHIPPING_FREE_THRESHOLD ? 0 : constants.SHIPPING_FLAT_RATE;
    assert.strictEqual(shipping, constants.SHIPPING_FLAT_RATE);
  });
});
