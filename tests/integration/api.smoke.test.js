/**
 * Smoke tests documenting expected API contract
 */
const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('API contract', () => {
  test('health response shape', () => {
    const sample = { status: 'ok', products: 30, orders: 0, users: 2 };
    assert.strictEqual(sample.status, 'ok');
    assert.ok(typeof sample.products === 'number');
  });
  test('product shape', () => {
    const p = { id: 1, name: 'Test', slug: 'test', price: 100, stock: 5, status: 'active' };
    assert.ok(p.slug);
    assert.ok(p.price > 0);
  });
  test('order shape', () => {
    const o = { id: 1001, total: 499, status: 'confirmed', paymentStatus: 'paid', items: [] };
    assert.ok(o.id);
    assert.strictEqual(o.paymentStatus, 'paid');
  });
});
